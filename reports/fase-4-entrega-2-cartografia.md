# Fase 4, entrega 2 — Atlas cartográfico de sistemas ambientales territoriales

Fecha de revisión: 2026-11-10. Rama: `feature/fase-4-cartografia`.

## Resultado

Se sustituyó la matriz territorial estática de la página Atlas por un explorador progresivo de los 19 sistemas del capítulo V. Permite abrir una ficha desde un punto del mapa o desde un índice accesible, filtrar por proceso, comparar dos sistemas y volver al PDF autorizado en la página física correspondiente.

Cada ficha diferencia descripción editorial, estructura biofísica, poblamiento, proceso histórico, economía y tensiones. No incluye superficies, poblaciones, rangos cuantitativos ni polígonos derivados: el libro no ofrece geometrías digitales reproducibles para esos sistemas.

## Verificación del libro

- PDF local usado únicamente para investigación: `Colombia-compleja.pdf`.
- El capítulo V inicia en la página impresa 127 (página física 128 del PDF).
- La secuencia de los 19 apartados se cotejó entre las páginas impresas 128–201; en el PDF corresponden a las páginas físicas 129–202.
- Se comprobó por extracción página a página que, por ejemplo, San Andrés comienza en la página física 136, La Sierra Nevada en 144, La Guajira en 148, Medio Magdalena en 150, sistema central en 154, Boyacá en 158, macizos del nororiente en 162 y Alto Magdalena en 182. Esta relación confirma el desplazamiento de +1 entre página impresa y física en ese tramo.
- Las síntesis son paráfrasis editoriales. No se presentan como citas ni como delimitaciones del autor.

## Modelo cartográfico y límites

Los 19 sistemas son categorías interpretativas de Carrizosa: enlazan medio físico, historia, poblamiento, economía, poder y conflicto. No equivalen a departamentos, regiones naturales, ecosistemas IDEAM, unidades geológicas SGC ni áreas protegidas RUNAP.

El explorador utiliza:

1. Un contorno generalizado de Colombia de Natural Earth Admin 0, versión 5.1.2, escala 1:110m, dominio público.
2. Diecinueve ciudades de referencia tomadas de Natural Earth Populated Places 1:10m. La selección de la ciudad que abre cada ficha es editorial y se declara como tal.
3. Una proyección lineal simple de longitud/latitud al SVG. Es adecuada para orientación y selección, no para medición.

Los círculos no son centroides. No expresan extensión, fronteras, intensidad, población ni representatividad estadística. San Andrés aparece por su coordenada insular; los demás puntos sirven de acceso a un sistema que suele ser mucho más amplio que la ciudad elegida.

## Capas oficiales investigadas

| Institución | Recurso | Escala / cobertura | Fecha | Licencia o condición | Uso en el atlas |
|---|---|---|---|---|---|
| IGAC | Cartografía básica nacional | 1:100.000 y 1:500.000 | actualización mensual; consulta 2026-11-10 | CC BY-SA 4.0 indicada por IGAC | Catalogada y enlazada; no redistribuida ni usada para inventar límites. |
| IDEAM | MEC 2024 | 1:100.000; ecosistemas continentales, costeros y marinos | datos 2024, publicado 2025 | consulta/descarga institucional; la ficha del servicio no declara copyright | Catalogada para contraste ecológico; no incorporada al paquete. |
| SGC | Mapa Geológico de Colombia 2023 | 1:1.500.000; generalización del atlas 1:500.000 | 2023 | consulta y descarga institucional; derechos deben revisarse por producto | Catalogada para contexto geológico; no redistribuida. |
| PNN | RUNAP | multiescala, MAGNA-SIRGAS / origen oficial nacional | actualización continua | descarga oficial; revisar metadatos del corte | Catalogada para contraste con áreas protegidas; no define sistemas. |
| Natural Earth | Admin 0 / Populated Places v5.1.2 | 1:110m / 1:10m | consulta 2026-11-10 | dominio público | Única geometría redistribuida en esta entrega. |

Fuentes institucionales enlazadas en `src/data/territorialSystems.ts`. La ausencia de una licencia explícita en la página de un servicio se documenta como limitación y no se interpreta como permiso de redistribución.

## Arquitectura

- `src/data/territorialSystems.ts`: 19 fichas tipadas y catálogo de cinco fuentes cartográficas.
- `src/components/TerritorialExplorer.astro`: SVG, índice, detalle, filtro y comparador sin dependencia cliente adicional.
- `public/data/colombia-outline.geojson`: una sola geometría de contorno, 5,5 kB aproximadamente.
- `scripts/validate-data.ts`: valida cantidad, identificadores, rangos impresos, campos, referencias, anclas, medios y fuentes.

Se descartó Leaflet porque no se necesitan teselas, paneo ni superposición métrica. El SVG ofrece menor peso, funciona estáticamente y permite controles de teclado. Una futura incorporación de capas oficiales sí justificaría un visor SIG, siempre que licencias, escala y rendimiento queden resueltos.

## Recursos visuales

Las fichas reutilizan fotografías ya auditadas en la biblioteca visual: Tayrona, Chingaza, Llanos, Amazonia y río Magdalena. Cada fotografía conserva autor, URL, licencia, transformación, texto alternativo y relación argumental. No se asignó una fotografía a cada sistema cuando no había una imagen suficientemente específica y licenciada; el sitio lo comunica en vez de usar decoración genérica.

## Pruebas

- `npm run build`: correcto; 22 rutas estáticas, sin errores, advertencias ni indicaciones de tipos.
- `npm run validate:data`: correcto; valida 19 sistemas y sus metadatos además del corpus previo.
- `npm run check:links`: enlaces internos y recursos del build válidos.
- `git diff --check`: sin errores de espacios.
- QA visual en Chromium headless: 1440 × 1100, 1440 × 3000 y 390 × 844. El mapa, el índice con desplazamiento, la primera ficha y el menú móvil no presentan desbordamientos horizontales visibles.
- Navegación: los marcadores SVG reciben `tabindex`, rol y nombre accesible; Enter y Espacio abren la ficha. El índice usa botones con `aria-pressed`, el filtro anuncia el conteo mediante `aria-live` y la comparación usa controles nativos `select`.

## Pendientes y limitaciones

- No existe un polígono oficial de los 19 sistemas y no debe fabricarse uno.
- Las ciudades son puntos de acceso, no representaciones exhaustivas.
- Las capas IDEAM, SGC y RUNAP cambian con el tiempo; sus fechas deben revisarse en futuras entregas.
- La atribución/licencia exacta de cada descarga institucional debe verificarse en sus metadatos antes de incluir geometrías locales.
- Las descripciones territoriales requieren ampliaciones documentales específicas antes de sostener comparaciones cuantitativas.
