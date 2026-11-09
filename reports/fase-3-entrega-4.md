# Fase 3, entrega 4 — verificación histórica, científica y documental

Fecha de revisión: 2026-11-09. Rama: `feature/fase-3-entrega-4`.

## Resultado

- Corpus ampliado de 12 a 28 fichas de contraste, con presencia en los ocho capítulos y los dos apéndices.
- Cada ficha registra página impresa, contexto, tipo, fecha de los datos, evidencia, resultado editorial, confianza, fuentes y limitaciones.
- Se distinguen datos históricos, datos científicos, interpretaciones, hipótesis causales, valoraciones normativas y actualizaciones posteriores.
- La página **Historia contrastada** incorpora búsqueda y filtros por resultado, tipo y capítulo, además de una gráfica reproducible calculada desde los datos.
- Los módulos de capítulo muestran evidencia, resultado y límite sin confundirlos con la voz del autor.
- Auditoría bibliográfica ampliada de 18 a 23 registros.

## Correcciones metodológicas

- La cifra censal de 1905 ya no se compara con el Censo 2018: se contrasta con la compilación histórica del DANE y se registra su advertencia sobre falta de sanción oficial.
- Los 311 tipos de ecosistemas del mapa de 2007 se conservan como dato válido para su escala y método. Las clasificaciones de 2024–2026 son actualizaciones, no refutaciones automáticas.
- Los conteos de biodiversidad se clasifican como dependientes de fecha, inventario y taxonomía.
- Las proposiciones sobre concentración de decisiones, simplificación, felicidad y educación ambiental se presentan como interpretación, hipótesis o valoración, no como hechos confirmados.

## Fuentes incorporadas

DANE (series censales históricas y grupos étnicos), IDEAM (ENA 2010, mapa de ecosistemas 2007, MEC 2024 y actualización 2026), Instituto Humboldt, Servicio Geológico Colombiano, Parques Nacionales, Cenicafé, Banco de la República y jurisprudencia constitucional.

## Pendientes y límites

1. El corpus no pretende agotar todas las afirmaciones del libro; se detiene en 26 porque las siguientes requieren evidencia más específica.
2. Falta reconstruir la tabla exacta del ENA 2010 que produce simultáneamente los totales de municipios y población vulnerable citados en p. 83.
3. Las hipótesis causales sobre minería, café, conflicto y educación exigen diseños comparativos o longitudinales que exceden una verificación documental básica.
4. La auditoría de enlaces aún conserva dos URL pendientes y varias referencias sin URL institucional precisa.
5. “Lectura profunda revisada” y “ficha de contraste” no equivalen a investigación histórica completamente cerrada.

## QA ejecutado

- `npm run build`: correcto; validación de datos, `astro check`, 21 rutas estáticas y sitemap sin errores ni advertencias.
- `npm run check:links`: enlaces internos y recursos del build válidos.
- `git diff --check`: sin errores de espacios o parches.
- Revisión visual de **Historia contrastada** a 1440 × 1000 y 390 × 844: jerarquía, gráfica, aviso metodológico y menú móvil legibles, sin desbordamiento horizontal observado.
- Comprobación HTTP local de la ruta `/contraste/`: 200. El HTML construido contiene los controles, metadatos y 28 expedientes.
- Los controles son elementos nativos (`input`, `select`, `details/summary`) con rótulos; el resultado filtrado usa `aria-live`.

No se ejecutó una suite automatizada WCAG completa. La auditoría externa sigue siendo temporal: respuestas 403, 429 o timeout no se clasifican automáticamente como enlaces rotos.
