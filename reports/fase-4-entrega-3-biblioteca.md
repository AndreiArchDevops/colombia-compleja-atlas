# Fase 4, entrega 3 — biblioteca documental, histórica y cartográfica

Fecha de revisión: 2026-11-10. Rama: `feature/fase-4-biblioteca`.

## Alcance y resultado

La Biblioteca deja de ser una lista única de enlaces y se convierte en un corpus documental tipado e interconectado. La entrega contiene 29 fichas seleccionadas por utilidad académica:

- 21 referencias cotejadas directamente en la bibliografía impresa del libro;
- cuatro mapas históricos;
- cuatro catálogos o productos cartográficos contemporáneos;
- 13 recursos con acceso público institucional;
- cuatro referencias conservadas deliberadamente sin URL;
- dos reproducciones históricas en dominio público, servidas mediante IIIF desde el Banco de la República.

El objetivo no fue transcribir mecánicamente toda la bibliografía, sino establecer un modelo verificable y un primer corpus de alta relevancia para los capítulos, apéndices, contrastes y sistemas territoriales.

## Cotejo del PDF

Fuente local de trabajo: `Colombia-compleja.pdf`, no redistribuida. Se extrajeron y leyeron las páginas físicas 284–291, correspondientes a las páginas impresas 283–290. Cada obra citada incluida en `src/data/documentLibrary.ts` conserva:

- autor o entidad responsable;
- año;
- título;
- editorial, revista o colección;
- transcripción normalizada de la referencia;
- página impresa y página física del PDF.

Se conserva el desfase comprobado `página PDF = página impresa + 1`. La validación automática rechaza una ficha citada sin ubicación bibliográfica o con un desfase distinto.

## Criterios documentales

La interfaz distingue cuatro relaciones:

1. **Obra citada:** aparece en la bibliografía de Carrizosa, aunque no exista copia digital.
2. **Documento original localizado:** coincide de manera comprobable con la obra o artículo; un DOI puede identificar el original aunque el texto requiera suscripción.
3. **Catálogo bibliográfico:** confirma identidad o existencia, pero no sustituye el contenido.
4. **Material relacionado:** contextualiza o actualiza; nunca se presenta como documento usado por el autor.

La disponibilidad web se separa de los derechos. `abierto` describe acceso, no una licencia de redistribución. Las fichas explican cuándo una obra es protegida, requiere biblioteca, posee una licencia concreta o necesita verificar los términos del archivo.

## Cartografía histórica

Se incorporaron cuatro fichas de la colección de Cartografía histórica de la Biblioteca Virtual del Banco de la República:

- Sidney Hall, *Colombia* (1828), representación de la Gran Colombia;
- Codazzi, Paz y Pérez, *Carta de la Nueva Granada, dividida en provincias, 1832 a 1856* (atlas publicado en 1889);
- Jesús María Giraldo Duque, *Mapa de la República de Colombia* (1897), escala 1:2.640.000;
- Walter Barth, *Mapa de la República de Colombia* (1925), escala 1:2.000.000.

Las fichas institucionales declaran dominio público. Solo los dos primeros se muestran como reproducciones en el sitio; se usa el servicio IIIF con redimensionamiento a 900 px, sin recorte ni alteración. El servidor del Banco presentó un problema de cadena TLS ante `curl` en este entorno, aunque las fichas fueron accesibles mediante consulta web. Se registra como limitación técnica, no como enlace roto.

Cada mapa incluye escala cuando la ficha la informa, proyección o referencia meridiana cuando está disponible y una advertencia temporal. Ningún mapa histórico se usa como frontera actual.

## Cartografía contemporánea

Se enlazan y distinguen:

- cartografía histórica y básica de Colombia en Mapas, IGAC;
- MEC 2024, IDEAM, escala 1:100.000;
- Mapa Geológico de Colombia 2023, SGC, escala 1:1.500.000;
- límites multiescala de áreas protegidas del RUNAP.

Las cuatro consultas devolvieron HTTP 200 el 10 de noviembre de 2026. El cliente también informó una anomalía de cabecera HTTP/2 del portal IGAC antes de completar la respuesta 200; no afecta su clasificación funcional. Las licencias deben comprobarse por producto y descarga: no se presupone que una página pública autorice redistribución de todas sus capas.

## Enlaces bibliográficos prioritarios

Comprobaciones automatizadas:

- FES, *La mejor Orinoquia que podemos construir*: HTTP 200.
- Banco de la República, Meisel y Pérez (2006): HTTP 200.
- PNUD, *Razones para la esperanza*: HTTP 200.
- Repositorio CNMH: timeout; se conserva como no comprobable mediante cliente automatizado, no como roto.

La auditoría técnica previa de 23 enlaces se mantiene disponible en la misma página y conserva sus estados, fechas, redirecciones y alternativas.

## Experiencia de consulta

La biblioteca permite buscar por autor, título, editorial, tema o territorio y combinar filtros de naturaleza, relación documental, tema, región y sección. El contador se actualiza mediante `aria-live`; existe un estado vacío y un control para limpiar filtros. Las fichas enlazan capítulos, apéndices, contraste y los sistemas ambientales territoriales pertinentes.

## Validación de datos

`scripts/validate-data.ts` comprueba:

- identificadores únicos;
- vocabularios de naturaleza, relación y acceso;
- metadatos obligatorios y coherencia entre acceso y URL;
- ubicación de toda obra citada;
- relación de páginas impresa/PDF;
- capítulos, apéndices y sistemas existentes;
- derechos, atribución y transformación para reproducciones visuales.

## Limitaciones y pendientes

- El corpus no pretende agotar las más de cien referencias de las páginas 283–290.
- Deben localizarse fichas institucionales estables para Carrizosa (2001), la obra de UNU (1985), Herrera (2009) y cada volumen citado de *Colombia Diversidad Biótica*.
- La referencia IDEAM/IAvH 2011 necesita una ficha institucional del informe interinstitucional exacto; el ENA 2010 se presenta solo como material relacionado.
- La ruta del Mapa Geológico 2007 está caída; la edición SGC 2023 es actualización, no sustitución bibliográfica.
- No se reproducen portadas, páginas de libros ni fotografías internas protegidas.
- Una fase futura puede normalizar el corpus completo en CSL-JSON o BibTeX después del cotejo individual de cada entrada.

## QA

- `npm run build`: 22 rutas estáticas; comprobación Astro con 0 errores, 0 advertencias y 0 indicaciones.
- `npm run validate:data`: 29 recursos documentales válidos, además de todo el corpus previo.
- `npm run check:links`: rutas internas y recursos del build válidos.
- `git diff --check`: sin errores de espacios.
- Prueba funcional en Chromium mediante DevTools: la búsqueda “Orinoquia” produjo dos resultados; al combinarla con naturaleza “informe” quedó uno; “Limpiar filtros” restauró los 29 registros y el contador accesible.
- QA visual en Chromium: escritorio 1440 × 2200 y móvil 390 × 844, sin desbordamiento horizontal visible; menú, jerarquía, controles y tarjetas se adaptan a una columna en móvil.
- QA visual Chromium: escritorio 1440 × 2200 y móvil 390 × 844; sin desbordamiento horizontal visible y con menú móvil funcional.
- Accesibilidad estructural: etiquetas asociadas a los seis controles, controles nativos `input`/`select`, contador `aria-live`, estado vacío, orden de lectura lineal y tabla técnica dentro de una región desplazable etiquetada.
- La interacción se implementa con JavaScript progresivo sin dependencia cliente: búsqueda normalizada sin diacríticos, combinación AND de filtros y restablecimiento con retorno de foco.
