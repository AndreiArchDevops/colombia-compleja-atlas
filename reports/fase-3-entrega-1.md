# Fase 3 — entrega 1: investigación profunda y biblioteca visual

Fecha de corte: 2026-11-09. Rama: `feature/fase-3-investigacion-profunda`.

## Punto de partida verificado

- `main`, `origin/main` y la rama de Fase 3 partían del mismo commit: `3484334`, integración de Fase 2 mediante PR #1.
- El árbol estaba limpio antes de la implementación.
- PDF local: `Colombia-compleja.pdf`, 298 páginas PDF, 82.408.705 bytes.
- SHA-256: `5b27eee4e747cbb670b888a22f94cd2e38008f220ec0a6395ff9bb581dfb56f0`.
- Se revisaron `reports/fase-2-qa.md`, `reports/link-audit.md` y los CSV de auditoría.

## Alcance entregado

Se priorizaron los capítulos I–III, como solicitaba la Fase 3. La nueva capa `src/data/deepResearch.ts` contiene:

- lectura directa y delimitación PDF/impreso;
- 26 unidades correspondientes a subapartados y transiciones reales;
- argumento y ejemplos localizados por rango de páginas;
- explicación extensa en lenguaje propio;
- 13 términos especializados explicados;
- supuestos y límites diferenciados;
- conclusiones, conexiones y preguntas abiertas;
- nueve ejercicios de recuperación activa con retroalimentación.

Se ampliaron los pasajes breves a seis registros. Cada ficha distingue cita, paráfrasis, contexto, significado, emociones y conexiones. Las citas añadidas son fragmentos breves y fueron cotejadas con el PDF; el atlas no acumula ni redistribuye texto sustitutivo del libro.

## Biblioteca visual

Se añadieron cuatro fotografías reutilizables y una presentación editorial dentro de los capítulos y la Biblioteca:

| Recurso | Autor | Licencia | Uso |
| --- | --- | --- | --- |
| Parque Tayrona | Ministerio de Ambiente de Colombia | CC BY-SA 4.0 | capítulos 1, 3 y 5 |
| Páramo de Chingaza | Biodiego88 | CC BY 4.0 | capítulos 3 y 5 |
| Llanos Orientales | Neil Palmer (CIAT) | CC BY-SA 2.0 | capítulos 2, 3 y 5 |
| Amazonas en Leticia | Jonathan Vélez Giraldo | CC BY-SA 4.0 | capítulos 2, 3 y 5 |

Las fichas conservan URL de Commons, autor, licencia, descripción, relación con el capítulo y texto alternativo. Se descargaron vistas de hasta 1.920 px y se generaron derivados WebP de 51–218 KB. `modified: true` significa conversión de formato y reducción, no alteración de contenido. El mapa de regiones de Fase 2 se conserva.

No se incorporaron retrato ni portada: los créditos del PDF no equivalen a una licencia de reutilización, y todavía no se localizó autorización inequívoca.

## Decisiones editoriales

- La síntesis anterior permanece intacta para los ocho capítulos.
- La lectura profunda aparece como una capa adicional solo donde ya fue cotejada (capítulos 1–3).
- Páginas, citas y datos históricos conservan la fecha de sus fuentes; una cifra anterior a 2014 no se presenta como dato vigente.
- Se explicitan límites de censos históricos, inventarios de biodiversidad, mapas y generalizaciones nacionales.
- Los componentes se integran al diseño existente y conservan navegación, notas, marcadores y progreso local.

## QA de esta entrega

- `npm run build`: 19 páginas, 0 errores, 0 advertencias.
- Build con `GITHUB_ACTIONS=true` y basepath del repositorio: correcto.
- `npm run check:links`: enlaces internos y assets válidos.
- Validador ampliado: 8 capítulos, 3 lecturas profundas, 5 verificaciones, 10 fuentes, 6 pasajes, 7 medios y 18 enlaces auditados.
- Chromium 1440 × 1000: capítulo 1, jerarquía editorial, tabla lateral y primer bloque sin solapamientos.
- Chromium 390 × 844: Biblioteca, cabecera móvil, filtros y tipografía sin desbordamiento horizontal.

## Pendientes exactos

1. Extender el mismo nivel de lectura a capítulos 4–8 y apéndices 1–2.
2. Ampliar el contraste histórico-científico desde 5 hasta 25–30 fichas solo cuando haya fuentes suficientes, separando 2014, hallazgos posteriores e interpretación.
3. Completar la investigación biográfica con archivo institucional, obras, conferencias, recepción y un retrato con licencia comprobada.
4. Auditar sistemáticamente todas las URL y notas de las páginas 19–282 y terminar la bibliografía 283–290; la entrega conserva las 18 verificadas en Fase 2.
5. Crear mapas y gráficos originales con fuentes, unidades y límites metodológicos.
6. Ampliar la biblioteca a Pacífico, Caribe insular, patrimonio, documentos históricos y transformaciones urbano-rurales.
7. Ejecutar pruebas manuales con lector de pantalla, Safari/iOS y Firefox/Android.

Esta entrega no publica, fusiona ni despliega cambios.
