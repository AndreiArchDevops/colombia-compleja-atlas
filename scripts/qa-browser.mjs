import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

const port = 48731;
const debugPort = 48732;
const origin = `http://127.0.0.1:${port}`;
const base = '/colombia-compleja-atlas';
const routes = ['/', '/libro/', ...Array.from({length:8},(_,i)=>`/capitulos/c${i+1}/`), '/apendices/a1/', '/apendices/a2/', '/atlas/', '/biblioteca/', '/contraste/', '/auditoria/', '/rutas/', '/autor/', '/conceptos/', '/cronologia/', '/laboratorio/', '/metodologia/'];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.json':'application/json'};
const server = createServer((request,response)=>{let relative=decodeURIComponent((request.url||'/').split('?')[0]);if(relative.startsWith(base))relative=relative.slice(base.length);relative=relative.replace(/^\//,'');let file=join('dist',relative);if(!extname(file))file=join(file,'index.html');if(!existsSync(file)||!statSync(file).isFile()){response.writeHead(404);response.end('Not found');return}response.setHeader('content-type',mime[extname(file)]||'application/octet-stream');response.end(readFileSync(file));}).listen(port,'127.0.0.1');
const chrome = spawn('/usr/bin/chromium',['--headless=new','--disable-gpu','--no-sandbox',`--remote-debugging-port=${debugPort}`,'--remote-allow-origins=*','--window-size=1440,1000','about:blank'],{stdio:'ignore'});
const report = {generated:new Date().toISOString(), routes:[], interactions:{}, accessibility:[], performance:{}, limitations:['La prueba automatizada no sustituye una evaluación con lector de pantalla humano.','Los tiempos proceden de una ejecución local y no representan Core Web Vitals de usuarios reales.']};

async function waitFor(url, attempts=40){for(let i=0;i<attempts;i++){try{const response=await fetch(url);if(response.ok)return response;}catch{}await delay(250)}throw new Error(`No respondió ${url}`)}
await waitFor(`${origin}${base}/`);
const targets = await (await waitFor(`http://127.0.0.1:${debugPort}/json/list`)).json();
const target = targets.find(item=>item.type==='page');
if(!target) throw new Error('Chromium no expuso una pestaña de prueba');
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})});
let seq=0; const pending=new Map();
ws.addEventListener('message',event=>{const message=JSON.parse(event.data);if(message.id&&pending.has(message.id)){const {resolve,reject}=pending.get(message.id);pending.delete(message.id);message.error?reject(new Error(message.error.message)):resolve(message.result)}});
const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))});
const evaluate=async expression=>{const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(result.exceptionDetails)throw new Error(result.exceptionDetails.text);return result.result.value};
const navigate=async path=>{const expected=`${origin}${base}${path}`;await send('Page.navigate',{url:expected});for(let i=0;i<30;i++){await delay(100);if((await evaluate('location.href')).startsWith(expected))return}throw new Error(`No se pudo navegar a ${expected}`)};
const screenshot=async name=>{const dimensions=await evaluate(`(()=>({width:Math.max(document.documentElement.scrollWidth,innerWidth),height:Math.max(document.documentElement.scrollHeight,innerHeight)}))()`);const capture=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width:dimensions.width,height:dimensions.height,scale:1}});const path=`/tmp/colombia-compleja-${name}.png`;writeFileSync(path,Buffer.from(capture.data,'base64'));return path};
await send('Page.enable'); await send('Runtime.enable');

try {
  const axe = readFileSync('node_modules/axe-core/axe.min.js','utf8');
  for (const route of routes) {
    await navigate(route);
    const page = await evaluate(`(()=>({url:location.href,title:document.title,h1:document.querySelectorAll('h1').length,main:!!document.querySelector('main'),overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.currentSrc),pdfLinks:[...document.querySelectorAll('a[href*=".pdf"]')].map(a=>a.href)}))()`);
    report.routes.push({route,...page,pass:Boolean(page.title&&page.h1===1&&page.main&&page.overflow<=1)});
    await evaluate(axe);
    const axeResult = await evaluate(`axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}).then(r=>r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length,targets:v.nodes.map(n=>n.target),help:v.help})))`);
    report.accessibility.push({route,violations:axeResult});
    if(route==='/') report.performance = await evaluate(`(()=>{const n=performance.getEntriesByType('navigation')[0];const resources=performance.getEntriesByType('resource');return {domContentLoaded:Math.round(n.domContentLoadedEventEnd),load:Math.round(n.loadEventEnd),transferBytes:resources.reduce((s,r)=>s+(r.transferSize||0),0),resourceCount:resources.length,jsBytes:resources.filter(r=>r.initiatorType==='script').reduce((s,r)=>s+(r.transferSize||0),0),cssBytes:resources.filter(r=>r.initiatorType==='link').reduce((s,r)=>s+(r.transferSize||0),0)}})()`);
  }

  await navigate('/capitulos/c1/');
  report.interactions.reader = await evaluate(`(async()=>{localStorage.clear();const note=document.querySelector('[data-note]');note.value='Nota de QA';note.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('[data-bookmark]').click();const complete=document.querySelector('[data-complete]');complete.click();let download='';const click=HTMLAnchorElement.prototype.click;HTMLAnchorElement.prototype.click=function(){download=this.download};document.querySelector('[data-export]').click();HTMLAnchorElement.prototype.click=click;document.querySelector('.quiz-option').click();return {note:localStorage.getItem('cc-note-c1'),bookmark:localStorage.getItem('cc-bookmark-c1'),complete:localStorage.getItem('cc-complete-c1'),progress:document.querySelector('[role=progressbar]').getAttribute('aria-valuenow'),globalProgress:document.querySelector('[data-global-progress]').style.width,download,feedback:document.querySelector('.quiz-feedback').textContent.trim()}})()`);
  await navigate('/capitulos/c1/');
  report.interactions.persistence = await evaluate(`(()=>({note:document.querySelector('[data-note]').value,bookmark:document.querySelector('[data-bookmark]').getAttribute('aria-pressed'),complete:document.querySelector('[data-complete]').checked}))()`);
  await navigate('/biblioteca/');
  report.interactions.library = await evaluate(`(()=>{const input=document.querySelector('[data-doc-search]');input.value='zzzinexistente';input.dispatchEvent(new Event('input',{bubbles:true}));const empty=!document.querySelector('[data-doc-empty]').hidden;document.querySelector('[data-doc-reset]').click();return {empty,visible:[...document.querySelectorAll('[data-doc-card]')].filter(x=>!x.hidden).length,count:document.querySelector('[data-doc-count]').textContent}})()`);
  await evaluate(`(()=>{document.querySelectorAll('[data-remote-iiif]').forEach(image=>image.loading='eager');document.querySelector('[data-remote-iiif]')?.scrollIntoView()})()`);
  await delay(7000);
  report.interactions.iiif = await evaluate(`(()=>[...document.querySelectorAll('[data-remote-iiif]')].map(img=>({url:img.currentSrc,loaded:img.complete&&img.naturalWidth>0,fallback:!img.nextElementSibling.hidden})))()`);
  report.interactions.libraryScreenshot = await screenshot('biblioteca-desktop');
  await navigate('/atlas/');
  report.interactions.atlas = await evaluate(`(()=>{document.querySelector('[data-index-system="2"]').click();const b=document.querySelector('[data-compare-select="b"]');b.value='19';b.dispatchEvent(new Event('change',{bubbles:true}));return {selected:document.querySelector('[data-index-system="2"]').getAttribute('aria-pressed'),detail:!document.querySelector('[data-system-detail="2"]').hidden,comparison:!document.querySelector('[data-compare-card="b"][data-system-id="19"]').hidden,markers:[...document.querySelectorAll('[data-map-system]')].every(x=>x.getAttribute('role')==='button'&&x.getAttribute('tabindex')==='0')}})()`);
  report.interactions.atlasScreenshot = await screenshot('atlas-desktop');
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await navigate('/');
  report.interactions.mobileMenu = await evaluate(`(()=>{const button=document.querySelector('.menu-toggle');button.click();const opened=button.getAttribute('aria-expanded');document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));return {opened,closed:button.getAttribute('aria-expanded'),overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth}})()`);
  report.interactions.mobileScreenshot = await screenshot('inicio-mobile');
} finally {
  mkdirSync('reports',{recursive:true});
  writeFileSync('reports/qa-browser.json',JSON.stringify(report,null,2));
  ws.close(); server.close(); chrome.kill('SIGTERM');
}

const failures = report.routes.filter(route=>!route.pass);
const serious = report.accessibility.flatMap(item=>item.violations.filter(v=>['critical','serious'].includes(v.impact)).map(v=>`${item.route}: ${v.id}`));
console.log(`QA navegador: ${report.routes.length} rutas; ${failures.length} fallos estructurales; ${serious.length} hallazgos axe graves.`);
if(failures.length||serious.length){console.error([...failures.map(f=>`${f.route}: estructura/overflow`),...serious].join('\n'));process.exitCode=1}
