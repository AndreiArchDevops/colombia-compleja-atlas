# Fase 3 · entrega 2 — capítulos IV y V

Fecha de revisión: 2026-11-09  
Rama: `feature/fase-3-entrega-2`

## Alcance editorial

- Capítulo IV, **Las interacciones principales**: páginas impresas 93–127; páginas 94–128 del PDF.
- Capítulo V, **Los sistemas ambientales territoriales**: páginas impresas 128–202; páginas 129–203 del PDF.
- Lectura directa del PDF local `Colombia-compleja.pdf`. No se publica ni redistribuye el archivo.
- Se añadieron estructura interna, explicación desarrollada, vocabulario, conclusiones, supuestos, preguntas abiertas y recuperación activa.
- Las citas incorporadas son fragmentos breves cotejados en páginas impresas 104 y 150.

## Hallazgo sobre la edición digital

Entre las fichas de San Andrés y la metrópoli costeña, las páginas PDF 137–138 contienen texto de plantilla ajeno al capítulo (incluye “Capítulo X” y texto de relleno). Se registra como defecto del PDF y no se usa para reconstruir argumentos ni citas. La numeración impresa y la secuencia posterior permiten continuar el cotejo.

## Capítulo V: índice territorial verificado

Se identificaron 19 sistemas numerados: Caribe rural; archipiélago de San Andrés y Providencia; metrópoli costeña; Sierra Nevada de Santa Marta y vertientes; La Guajira; Medio Magdalena; sistema central; montañas y altiplanicies boyacenses; macizos del nororiente; Piedemonte llanero y Orinoquia inundable; altillanura orinoquense; piedemonte sur; selva amazónica y orinoquense; alto Magdalena; macizos del sur; valle del Cauca; occidente cafetero; montaña antioqueña; litoral del Pacífico. La p. 202 añade sistemas en formación y el macrosistema ambiental colombiano.

El atlas web conserva el mapa de regiones naturales con licencia CC BY-SA 4.0, pero advierte que no equivale a la regionalización de Carrizosa. La nueva matriz comparativa hace visibles las diferencias entre ambos recortes. Las fotografías ya incorporadas —Tayrona, Chingaza, Llanos y Amazonia— mantienen ficha de autor, fuente, licencia, modificación y texto alternativo en `src/data/media.ts`.

## Contrastes añadidos

- Distribución aurífera y distrito Frontino-Morrogacho: Servicio Geológico Colombiano.
- Minería y bienestar territorial: clasificada como interpretación; la geología no basta para probar resultados distributivos.
- Old Providence McBean Lagoon y Reserva de Biosfera Seaflower: Parques Nacionales Naturales.
- Gradiente y pueblos de la Sierra Nevada: Parques Nacionales Naturales, con la salvedad de que parque y territorio ancestral no son equivalentes.

## Límites

- Los sistemas son una regionalización ensayística de 2014, no polígonos oficiales.
- Las cifras del libro no se actualizan por inferencia. Solo se agregan verificaciones cuando existe una afirmación precisa y fuente pertinente.
- Una fotografía ilustra un paisaje; no demuestra causalidad histórica ni representa por sí sola a toda una región.
- Las síntesis nacionales requieren diálogo posterior con historias y cartografías indígenas, afrocolombianas, campesinas y urbanas.

## Verificación técnica

- `npm run build`: correcto; validación de datos, `astro check` y compilación estática sin errores ni advertencias.
- Datos: 8 capítulos, 5 lecturas profundas, 9 verificaciones, 14 fuentes, 8 pasajes, 7 medios y 18 enlaces auditados.
- `npm run check:links`: enlaces internos y activos del build válidos.
- Las cuatro fuentes institucionales nuevas respondieron HTTP 200; el DOI del estudio Frontino-Morrogacho redirigió correctamente a la revista del SGC.
- `git diff --check`: sin errores de espacios ni marcadores.
- QA visual local con Chromium: capítulo V a 1440 × 1000 y 390 × 844; atlas a 1440 × 1000. Se comprobó jerarquía, ausencia de desbordamiento en portada, menú móvil y lectura del contenido inicial. La matriz territorial usa un contenedor desplazable y enfocable para pantallas estrechas.
- No se desplegó el sitio ni se modificó `main`.
