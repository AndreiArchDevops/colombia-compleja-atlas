# Fase 4, entrega 1 — investigación académica y fortalecimiento de evidencia

Fecha de revisión: 2026-11-10  
Rama: `feature/fase-4-investigacion`  
Edición cotejada: Carrizosa-Umaña, *Colombia compleja* (2014), PDF local SHA-256 `5b27eee4e747cbb670b888a22f94cd2e38008f220ec0a6395ff9bb581dfb56f0`.

## Alcance y método

Se revisaron individualmente las 28 fichas. Para cada una se separaron:

1. localización y contenido del texto de Carrizosa;
2. documento exacto citado por el autor, cuando pudo identificarse;
3. evidencia factual externa y fecha de sus datos;
4. método usado para contrastar;
5. incertidumbres, límites y corrección editorial.

El resultado de auditoría no se deriva del estado factual de `claims.ts`. Las interpretaciones y valoraciones pueden tener un **cotejo documentado** —atribución textual comprobada— sin quedar convertidas en hechos externos confirmados.

## Resultado de las 28 fichas

| Resultado de auditoría | Cantidad | Alcance |
|---|---:|---|
| Confirmación con salvedades | 13 | Evidencia específica, con límites de escala, cobertura, fecha o inferencia |
| Corrección documentada | 6 | Cambio de página, fuente, clasificación o formulación aplicado |
| Cotejo documentado | 5 | Atribución interpretativa o normativa localizada; no corresponde confirmación factual |
| Evidencia insuficiente | 4 | La fuente disponible no permite sostener la relación causal |
| Revisión pendiente | 0 | Las 19 fichas pendientes de la entrega anterior recibieron decisión individual |

## Correcciones principales

- **Constitución de 1991 (`cl-c1-constitution`)**: la página 34 del libro habla de cambio constitucional, Estado de derecho y esperanza política. Pluralismo y diversidad proceden de los artículos 1 y 7 de la Constitución; ambas capas ya no se presentan como una sola afirmación del autor.
- **Geología (`cl-geology`)**: la argumentación comienza en la página impresa 69 y continúa hasta la 77; la página 75 es principalmente cartográfica. La ficha se reubicó en la página 69.
- **ENA 2010 (`cl-c3-water`)**: la figura 8.9 del capítulo 8 permite reproducir 483 municipios y 12.215.933 habitantes en categorías IVH media, alta y muy alta para año medio. La ficha pasa de parcial/media a confirmada/alta exclusivamente para ese diagnóstico, cabeceras y escenario de 2010.
- **Tesis territorio–sociedad (`cl-complex`)**: la formulación explícita está en la página 213, no en la 203.
- **Espacios territoriales (`cl-c8-space`)**: la página 239 inicia el apéndice 1. La integración de emociones, intereses y dimensiones políticas, económicas, cognitivas, éticas y estéticas está en la página 237.
- **Fuentes institucionales**: McBean Lagoon y Sierra Nevada ahora enlazan fichas oficiales vigentes de Parques Nacionales. La Constitución enlaza el texto normativo primario de Función Pública.

## Temas prioritarios

### Censos de 1778 y 1905

- El libro atribuye 826.550 habitantes en 1778 a Herrera (2009); DANE compila 828.775. La diferencia de 2.225 personas no se resuelve sustituyendo una fuente por otra: persisten preguntas de padrones, cobertura y categorías coloniales.
- Para 1905, “más de cuatro millones” coincide con 4.143.632 en DANE. Se conserva la nota de que esas cifras no recibieron sanción oficial y no se usa el Censo 2018 para evaluarlas.

### Agua, biodiversidad y ecosistemas

- El agregado del ENA 2010 fue reconstruido desde el documento original, no desde una portada temática.
- Los conteos de biodiversidad de la página 89 pertenecen a inventarios de 1997–2005. Las publicaciones Humboldt posteriores sostienen la caracterización general, pero no vuelven equivalentes taxonomías y coberturas distintas.
- El mapa de ecosistemas 2007, el MEC 2024 publicado en 2025 y la comunicación institucional de 2026 se mantienen separados por escala, fecha y categorías.

### Minería, café y causalidad

- SGC corrobora geología aurífera, Frontino y los carbones de Cerrejón. Esa evidencia no prueba por sí sola bienestar, distribución de rentas o sostenibilidad.
- La fundación de Cenicafé en 1938 queda corroborada. La secuencia que enlaza apertura, desmonte institucional, narcotráfico y cambios regionales requiere series y contrafactuales que este corpus no contiene.

## Evidencia insuficiente

Permanecen cuatro fichas sin prueba causal suficiente:

- `cl-c4-extraction`: extracción/industrialización y bienestar territorial;
- `cl-c4-coffee-causality`: apertura, arreglo cafetero, narcotráfico y efectos regionales;
- `cl-c7-simplification`: efecto general de simplificar sobre decisiones territoriales;
- `cl-a2-education`: efecto de la educación ambiental compleja sobre capacidades y futuros ciudadanos.

No se clasifican como falsas. Se requiere definir resultados, población, periodo, comparadores, mecanismos y fuentes empíricas adecuadas.

## Integración web

- La matriz muestra cotejo del libro, comprobación externa, método, fecha, fuentes enlazadas, incertidumbre y decisión.
- La página explica la diferencia entre verificar una atribución y verificar un hecho.
- Cada ficha de contraste enlaza directamente a su expediente en la auditoría.
- Los filtros, notas, marcadores y progreso existentes permanecen sin cambios.

## Verificación de enlaces externos

El 2026-11-10 respondieron HTTP 200 el capítulo 8 del ENA 2010, las fichas actuales de McBean y Sierra Nevada y el Mapa Geológico SGC 2023. El acceso con `curl` al dominio Función Pública presentó un problema local de cadena TLS; el PDF oficial sí fue abierto y leído mediante el navegador de investigación. No se clasifica como enlace roto.

## Limitaciones

- La auditoría no digitaliza ni redistribuye obras protegidas citadas en la bibliografía del libro.
- Varias referencias históricas originales solo se registran mediante la bibliografía impresa; una fuente institucional posterior no se presenta como sustituto.
- “Diferencia colombiana”, “sociedad compleja”, “espacios para la felicidad” y “modelos mentales” son tesis interpretativas o normativas; requieren operacionalización antes de una prueba empírica.
- La relación página PDF = página impresa + 1 se verificó en los registros trabajados, pero no debe asumirse para archivos o ediciones distintas.

## Validaciones

- `npm run validate:data`
- `npm run build`
- `npm run check:links`
- `git diff --check`
- comprobación HTTP local de `/auditoria/` y `/contraste/`
- QA visual de escritorio 1440×1000 y móvil 390×844
- revisión básica de etiquetas de filtros, encabezados de tabla, región desplazable por teclado y texto de estado anunciado con `aria-live`

