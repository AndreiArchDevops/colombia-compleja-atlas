# Colombia compleja — atlas interactivo de lectura crítica

MVP estático y accesible para estudiar *Colombia compleja* (Julio Carrizosa Umaña, 2014) en tres niveles, con trazabilidad editorial y contraste de fuentes.

## Fase 2

La segunda fase incorpora tres rutas de estudio, resúmenes en varias profundidades, módulos pedagógicos para los ocho capítulos, breadcrumbs, navegación anterior/siguiente, tabla lateral, progreso local, marcadores, notas exportables, biblioteca auditada y un atlas visual inicial. El sitio no aloja ni redistribuye el PDF.

## Fase 3 — primera entrega

La rama `feature/fase-3-investigacion-profunda` añade una lectura directa y documentada de los capítulos 1–3: estructura real por páginas, explicaciones extensas, ejemplos, vocabulario, supuestos, límites, conclusiones y recuperación activa. También incorpora una biblioteca visual inicial de cuatro fotografías con licencia abierta, derivados WebP, créditos completos y textos alternativos. El alcance y los pendientes están documentados en [`reports/fase-3-entrega-1.md`](reports/fase-3-entrega-1.md).

## Fase 3 — entrega 5

La auditoría editorial integral coteja las 28 fichas y 11 pasajes con el PDF, distingue documentos citados de fuentes relacionadas y publica una matriz trazable en `/auditoria/`. El atlas añade una comparación reproducible de los 19 sistemas ambientales territoriales, dos recursos visuales licenciados y enlaces de retorno a la página física del PDF. Los JPG redundantes se retiraron del despliegue porque los WebP son las copias utilizadas; las fichas de Commons preservan el original y su licencia. Véase [`reports/fase-3-entrega-5.md`](reports/fase-3-entrega-5.md).

## Fase 4 — investigación académica

La primera entrega revisa individualmente las 28 fichas y convierte la matriz editorial en expedientes que separan cotejo del texto, evidencia externa, método, fecha, incertidumbre y corrección. Las 19 revisiones pendientes recibieron una decisión explícita; cuatro hipótesis permanecen como evidencia insuficiente porque las fuentes reunidas no permiten inferencia causal. El detalle reproducible está en [`reports/fase-4-entrega-1.md`](reports/fase-4-entrega-1.md).

## Fase 4 — atlas cartográfico

La segunda entrega convierte los 19 sistemas ambientales territoriales del capítulo V en un explorador SVG estático, accesible y sin dependencias cartográficas cliente. Los puntos son anclas urbanas verificables de orientación, no límites ni centroides. Cada ficha enlaza las páginas autorizadas del libro, conserva las cautelas interpretativas y permite comparación cualitativa. El catálogo distingue las capas oficiales de IGAC, IDEAM, SGC y RUNAP de la clasificación del autor. Metodología, procedencia y QA: [`reports/fase-4-entrega-2-cartografia.md`](reports/fase-4-entrega-2-cartografia.md).

## Fase 4 — biblioteca documental

La tercera entrega incorpora 29 fichas documentales interconectadas: 21 referencias cotejadas en el PDF, mapas históricos, cartografía contemporánea y reproducciones en dominio público. La Biblioteca permite buscar y combinar filtros por naturaleza, relación documental, tema, región y sección, y distingue obras citadas, originales localizados, catálogos y materiales relacionados. Véase [`reports/fase-4-entrega-3-biblioteca.md`](reports/fase-4-entrega-3-biblioteca.md).

## Fase 4 — calidad integral

La cuarta entrega añade QA reproducible en Chromium para las 22 rutas, flujos de lectura y atlas, junto con axe-core para reglas WCAG automatizables. Corrige progreso accesible y en vivo, menú móvil con Escape, semántica del SVG territorial, foco visible, contraste editorial, exportación de notas y degradación segura de IIIF. Resultados, matriz y límites: [`reports/fase-4-entrega-4-calidad.md`](reports/fase-4-entrega-4-calidad.md).

## Desarrollo

```bash
npm install
npm run dev
```

Validación y compilación:

```bash
npm run build
npm run check:links
npm run qa:browser
```

La compilación ejecuta el validador de referencias, `astro check` y el build estático. `qa:browser` requiere Chromium en `/usr/bin/chromium`, recorre todas las rutas y escribe `reports/qa-browser.json`. Para reproducir exactamente el basepath de GitHub Pages:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=AndreiArchDevops/colombia-compleja-atlas npm run build
```

## GitHub Pages

El workflow detecta el nombre del repositorio y configura automáticamente el `base` de Astro. Los pull requests compilan y comprueban enlaces, pero solo un push autorizado a `main` puede ejecutar el job de despliegue. En GitHub, configura **Settings → Pages → Source: GitHub Actions**.

## Investigación y trazabilidad

Los tipos están en `src/data/types.ts`; el corpus editorial en `src/data/book.ts` y `src/data/learning.ts`; la auditoría web en `src/data/linkAudit.ts`; la matriz editorial en `src/data/editorialAudit.ts`; las fichas cartográficas en `src/data/territorialSystems.ts`; y el corpus bibliográfico en `src/data/documentLibrary.ts`. Los informes legibles están en `reports/`. Cada afirmación enlaza capítulo, página, estado, evaluación, confianza, fuentes y fecha de revisión.

Las URL del libro fueron extraídas del PDF local. Un 403, 429, 503 o timeout se registra como bloqueado/no comprobable, nunca automáticamente como roto. Las imágenes se registran en `src/data/media.ts` con autor, fuente y licencia.

## Privacidad

Progreso, marcadores y notas usan `localStorage`; no se transmiten a un servidor. La exportación genera un archivo Markdown en el navegador. No se incorporan claves ni asistentes de IA en el sitio estático.

## Fuente primaria

Carrizosa-Umaña, J. (2014). *Colombia compleja*. Jardín Botánico de Bogotá José Celestino Mutis; Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. ISBN catalogado: 978-958-8576-15-2.

El PDF local analizado tiene SHA-256 `5b27eee4e747cbb670b888a22f94cd2e38008f220ec0a6395ff9bb581dfb56f0`.

## Licencia y atribución

El código original del atlas puede licenciarse por separado por el responsable del repositorio. El libro, sus imágenes y las fuentes enlazadas conservan sus respectivos derechos. Este proyecto es independiente y no oficial.
