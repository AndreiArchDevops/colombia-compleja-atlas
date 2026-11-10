# Fase 3, entrega 5 — auditoría editorial, visual y de aprendizaje

Fecha: 2026-11-09. Rama: `feature/fase-3-entrega-5`.

## Alcance auditado

- Ocho capítulos, dos apéndices, 28 fichas de contraste y 11 pasajes.
- Paginación impresa y posición física del PDF local de 298 páginas.
- Fuente local: SHA-256 `5b27eee4e747cbb670b888a22f94cd2e38008f220ec0a6395ff9bb581dfb56f0`.
- 23 registros de auditoría de enlaces y 30 fuentes editoriales.
- Matriz web de 39 registros con resultado, evidencia, relación de fuente y corrección.

## Correcciones aplicadas

1. El pasaje “Este libro aspira…” estaba marcado como p. 17; se corrigió a p. impresa 18, PDF 19.
2. El pasaje final de educación ambiental estaba asociado al capítulo VIII; ahora pertenece al apéndice 2 y aparece en su módulo.
3. La ficha del mapa de ecosistemas 2007 ya no trata una página temática como el documento citado. Se añadió el catálogo de la obra exacta —275 páginas, 37 mapas— y una fuente institucional que reproduce los totales.
4. El MEC 2024 se registra como mapa con año de referencia 2024 publicado el 20 de mayo de 2025. La comunicación de 2026 usa otra categoría; no se equiparan automáticamente 87 ecosistemas generales con 311 tipos de 2007.
5. La ficha ENA 2010 enlaza ahora la colección oficial de capítulos y anexos. Se conserva como parcialmente confirmada porque aún falta reconstruir la tabla que produce conjuntamente los dos totales de p. 83.
6. Las fichas minera y cafetera conservan estatus interpretativo o no verificable: una fuente geológica o institucional relacionada no demuestra la causalidad social propuesta.

## Biblioteca visual

- Añadida lámina de *Tecoma stans* de la Real Expedición Botánica, dominio público.
- Añadida fotografía del río Magdalena en Barranquilla, IAmJesusDavid, CC BY-SA 4.0.
- Toda transformación WebP queda descrita en los datos y visible en Biblioteca.
- Se retiraron cuatro JPG no referenciados (1,7 MB aproximadamente); los WebP usados por el sitio y las fichas originales de Commons se conservan.
- El SVG de regiones naturales se mantiene porque es la única copia vectorial cartográfica. Su peso aproximado de 2,6 MB queda pendiente de optimización con una herramienta SVG que preserve geometría, metadatos de licencia y apariencia.

## Visualización territorial

El atlas conserva el mapa de regiones naturales y añade una matriz de los 19 sistemas de las pp. 128–201. Los cinco colores son agrupaciones de navegación editorial, no regiones del autor. La comparación explica que las regiones naturales generalizan rasgos físico-biogeográficos, mientras los sistemas de Carrizosa combinan procesos biofísicos, históricos, económicos, políticos y culturales.

## Experiencia y accesibilidad

- Enlaces desde pasajes y fichas hacia la página física correspondiente del PDF autorizado.
- Página de auditoría con búsqueda, filtro y resultados anunciados mediante `aria-live`.
- Marcadores con `aria-pressed`, estado inicial de notas y progreso global limitado correctamente a los ocho capítulos.
- Los controles territoriales y tablas usan botones nativos, encabezados y regiones desplazables por teclado.

## Mantenimiento

El workflow de Pages migra a acciones con runtime Node.js 24: `checkout@v7`, `setup-node@v7`, `configure-pages@v6`, `upload-pages-artifact@v5` y `deploy-pages@v5`. Se conserva Node.js 22 para construir la aplicación.

## Límites pendientes

- No se realizó una nueva investigación monográfica de cada causalidad; la matriz declara dónde la evidencia solo corrobora un componente.
- La referencia exacta Herrera (2009) del censo colonial y Carrizosa (1987) para Cenicafé permanecen identificadas bibliográficamente en el libro, pero aún no cuentan con copia digital institucional verificada en el atlas.
- Un fragmento `#page=` depende del visor PDF del navegador; si no lo interpreta, abre igualmente el documento autorizado.
- Las respuestas 403, 429 y timeout siguen sin clasificarse automáticamente como roturas.

## QA

- `npm ci`: 272 paquetes instalados desde el lockfile.
- `npm run build`: 22 rutas estáticas, sitemap, 0 errores, 0 advertencias y 0 indicaciones de tipos.
- Validación: 28 fichas, 11 pasajes, 30 fuentes, 9 medios, 39 registros de auditoría y 23 enlaces.
- `npm run check:links`: enlaces internos y recursos del build válidos.
- `git diff --check`: correcto.
- HTTP local: Inicio, Auditoría, Atlas, Biblioteca y Apéndice 2 devolvieron 200.
- Revisión visual: Atlas a 1440 × 1000, Auditoría a 390 × 844 y Biblioteca a 1280 × 900. Se corrigió el desbordamiento global; las tablas conservan desplazamiento propio.
- Enlaces críticos: colección ENA 2010 y noticia MEC 2024 respondieron 200. El catálogo Humboldt respondió 403 a la prueba automatizada y se considera bloqueado/no comprobable, no roto; su contenido bibliográfico fue cotejado mediante consulta web.

No se ejecutó una auditoría WCAG automatizada completa. Los controles nuevos usan elementos nativos, foco visible heredado y anuncios de resultados; la revisión manual no reemplaza pruebas con múltiples lectores de pantalla.
