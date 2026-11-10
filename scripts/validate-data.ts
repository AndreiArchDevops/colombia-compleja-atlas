import { chapters, claims, concepts, passages, quizzes, sources } from '../src/data/book.ts';
import { linkAudit } from '../src/data/linkAudit.ts';
import { media } from '../src/data/media.ts';
import { deepChapters } from '../src/data/deepResearch.ts';
import { appendices } from '../src/data/learning.ts';
import { claimAuditDecisions, editorialAudit } from '../src/data/editorialAudit.ts';
import { existsSync } from 'node:fs';

const errors: string[] = [];
const unique = <T>(items: T[], label: string) => {
  const seen = new Set<T>();
  for (const item of items) seen.has(item) ? errors.push(`${label} duplicado: ${item}`) : seen.add(item);
};
unique(chapters.map(x=>x.id), 'capítulo'); unique(sources.map(x=>x.id), 'fuente');
unique(claims.map(x=>x.id), 'afirmación'); unique(passages.map(x=>x.id), 'pasaje');
unique(editorialAudit.map(x=>x.recordId), 'registro de auditoría');
const chapterIds = new Set(chapters.map(x=>x.id)); const appendixIds = new Set(appendices.map(x=>x.id));
const deepReadingIds = new Set([...chapterIds, ...appendixIds]); const sourceIds = new Set(sources.map(x=>x.id));
for (const x of claims) if (!deepReadingIds.has(x.chapterId)) errors.push(`Referencia a capítulo o apéndice inexistente: ${x.chapterId}`);
for (const x of passages) if (!deepReadingIds.has(x.chapterId)) errors.push(`Pasaje con sección inexistente: ${x.chapterId}`);
for (const x of quizzes) if (!chapterIds.has(x.chapterId)) errors.push(`Referencia a capítulo inexistente: ${x.chapterId}`);
const claimKinds = new Set(['dato-historico','dato-cientifico','interpretacion','hipotesis-causal','valoracion-normativa','actualizacion-posterior']);
for (const x of claims) {
  for (const field of ['statement','context','dataDate','evidence','assessment','limitations','reviewed'] as const) if (!x[field]?.trim()) errors.push(`${x.id}: campo vacío ${field}`);
  if (!claimKinds.has(x.kind)) errors.push(`${x.id}: tipo inválido ${x.kind}`);
  if (x.page < 1 || x.page > 300) errors.push(`${x.id}: página fuera de rango`);
  if (x.sourceIds.length === 0) errors.push(`${x.id}: sin fuentes`);
  for (const id of x.sourceIds) if (!sourceIds.has(id)) errors.push(`${x.id}: fuente inexistente ${id}`);
}
for (const x of passages) if (!sourceIds.has(x.sourceId)) errors.push(`${x.id}: fuente inexistente ${x.sourceId}`);
for (const x of concepts) for (const id of x.chapterIds) if (!chapterIds.has(id)) errors.push(`${x.id}: capítulo inexistente ${id}`);
for (const x of quizzes) if (x.answer < 0 || x.answer >= x.options.length) errors.push(`${x.id}: respuesta fuera de rango`);
for (const x of linkAudit) if (x.pdfPage < x.printedPage) errors.push(`${x.id}: página PDF inválida`);
for (const x of media) if (x.localPath && (!x.author || !x.license || !x.alt)) errors.push(`${x.id}: metadatos de imagen incompletos`);
for (const x of media) if (x.modified && x.localPath && !x.transformation) errors.push(`${x.id}: transformación no documentada`);
for (const x of media) if (x.localPath && !existsSync(`public${x.localPath}`)) errors.push(`${x.id}: archivo de imagen inexistente ${x.localPath}`);
const expectedAuditIds = new Set([...claims.map(x=>x.id), ...passages.map(x=>x.id)]);
for (const id of expectedAuditIds) if (!editorialAudit.some(x=>x.recordId===id)) errors.push(`${id}: sin registro de auditoría editorial`);
for (const row of editorialAudit) if (!expectedAuditIds.has(row.recordId)) errors.push(`${row.recordId}: auditoría sin registro editorial`);
const auditedClaimIds = new Set(claims.map(x=>x.id));
for (const id of auditedClaimIds) if (!claimAuditDecisions[id]) errors.push(`${id}: sin decisión explícita de auditoría editorial`);
for (const id of Object.keys(claimAuditDecisions)) if (!auditedClaimIds.has(id)) errors.push(`${id}: decisión editorial sin ficha`);
for (const row of editorialAudit.filter(x=>x.scope==='ficha')) {
  if ((row.result as string) === 'confirmado' || (row.result as string) === 'confirmado con salvedad') errors.push(`${row.recordId}: resultado editorial heredado del contraste`);
  if (row.result === 'cotejo documentado' && row.evidence.startsWith('La ficha contiene')) errors.push(`${row.recordId}: cotejo sin evidencia editorial específica`);
}
for (const [id, deep] of Object.entries(deepChapters)) {
  if (!deepReadingIds.has(id)) errors.push(`Investigación profunda: capítulo o apéndice inexistente ${id}`);
  if (!deep || deep.sections.length < 3 || deep.vocabulary.length < 3 || deep.retrieval.length < 3) errors.push(`${id}: investigación profunda incompleta`);
  for (const mediaId of deep?.mediaIds ?? []) if (!media.some(x=>x.id===mediaId)) errors.push(`${id}: medio inexistente ${mediaId}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Datos válidos: ${chapters.length} capítulos, ${Object.keys(deepChapters).length} lecturas profundas, ${claims.length} verificaciones, ${sources.length} fuentes, ${passages.length} pasajes, ${media.length} medios, ${editorialAudit.length} auditorías editoriales y ${linkAudit.length} enlaces auditados.`);
