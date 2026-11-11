# Fase 4, entrega 4 — auditoría integral de calidad

Fecha de ejecución: 2026-11-11. Rama: `feature/fase-4-calidad`.

## Resultado ejecutivo

Las 22 rutas estáticas construyen, resuelven sus recursos internos y pasan la prueba automatizada de estructura, desbordamiento horizontal y reglas WCAG 2.2 AA detectables por axe-core sin hallazgos graves. Se probaron en navegador real notas, marcadores, progreso, persistencia tras recarga, exportación Markdown, cuestionarios, búsqueda documental, estado vacío, selección y comparación territorial, marcadores SVG y menú móvil.

El sitio está técnicamente listo para uso público como atlas educativo, con dos límites explícitos: la conformidad completa con WCAG requiere evaluación humana con lector de pantalla, y las imágenes IIIF remotas dependen de disponibilidad externa. Cuando IIIF no carga en seis segundos, la interfaz muestra un enlace de consulta institucional sin redistribuir la imagen.

## Matriz de QA

| ID | Severidad | Página / función | Reproducción | Corrección | Resultado |
|---|---|---|---|---|---|
| QA-01 | Alta | Capítulos / progreso | Marcar un capítulo y observar la barra global sin recargar. | Evento local actualiza progreso global y `aria-valuenow`. | Corregido y probado: 0→100 local; 12,5 % global. |
| QA-02 | Media | Herramientas de lectura | Inspeccionar la barra con tecnología asistiva. | `role="progressbar"`, nombre y valores accesibles. | Corregido; axe sin hallazgo. |
| QA-03 | Media | Menú móvil | Abrir menú y pulsar Escape. | Cierre con Escape, retorno del foco y cierre al seguir un enlace. | Corregido y probado a 390 px. |
| QA-04 | Alta | Atlas / SVG | Ejecutar axe sobre el mapa con `role="img"` y controles hijos. | El SVG pasa a grupo interactivo etiquetado; los 19 marcadores conservan rol, teclado y nombre. | Corregido; desaparece `nested-interactive`. |
| QA-05 | Media | Foco | Navegar con Tab por selectores, `summary`, mapa y panel activado. | Estilo de foco transversal de 3 px y foco programático visible. | Corregido; requiere validación humana continua. |
| QA-06 | Media | Color editorial | Texto ocre pequeño sobre fondo claro. | Ocre oscurecido a `#a6531f`. | Corregido; axe no reporta contraste. |
| QA-07 | Alta | Biblioteca / IIIF | Bloquear o esperar una imagen de `babel.banrepcultural.org`. | Estado alternativo tras error o seis segundos y enlace a ficha institucional. | Corregido; no se redistribuyen copias. |
| QA-08 | Media | Exportación | Escribir nota y pulsar Exportar. | Se difiere la revocación del Blob para evitar descargas truncadas. | Probado: `colombia-compleja-c1.md`. |
| QA-09 | Baja | Responsive | Abrir 22 rutas y medir `scrollWidth-clientWidth`. | Revisión de reglas existentes; no fue necesario alterar composición. | 0 rutas con desbordamiento en la prueba. |
| QA-10 | Informativa | Seguridad de dependencias | Ejecutar `npm audit --omit=dev`. | Sin cambios requeridos. | 0 vulnerabilidades en dependencias de producción. |

## Cobertura reproducible

- `npm run build`: validación tipada, Astro Check y 22 páginas estáticas.
- `npm run check:links`: rutas y assets internos del build.
- `npm run qa:browser`: Chromium headless, las 22 rutas, axe-core y flujos críticos. El detalle queda en `reports/qa-browser.json`.
- Capturas completas generadas fuera del repositorio: `/tmp/colombia-compleja-biblioteca-desktop.png`, `/tmp/colombia-compleja-atlas-desktop.png` y `/tmp/colombia-compleja-inicio-mobile.png`.

La medición local final registrada para la portada fue 23 ms hasta `DOMContentLoaded`, 25 ms hasta `load`, 10.777 bytes transferidos y 2 recursos. Es un diagnóstico de laboratorio local, no una puntuación Lighthouse ni un Core Web Vital de campo; no debe compararse con producción.

## Revisión visual

Las capturas completas confirmaron jerarquía editorial, legibilidad, continuidad de tarjetas, mapa, comparador, biblioteca extensa, créditos y pie de página en 1440 px y portada en 390 px. Las dos imágenes IIIF cargaron en la ejecución final; el nuevo estado alternativo evita que un fallo remoto futuro se interprete como contenido ausente del atlas.

## Limitaciones y trabajo posterior

- No hubo lector de pantalla humano disponible; se revisaron semántica, nombres accesibles, foco y teclado con navegador y axe-core.
- Las cifras locales de rendimiento no representan red móvil, caché CDN ni usuarios reales. Conviene ejecutar Lighthouse en CI o DevTools contra la URL de vista previa antes de publicar.
- La disponibilidad IIIF debe vigilarse; un timeout no demuestra que el recurso institucional esté roto.
- La auditoría externa existente conserva 403, 429 y timeout como bloqueos/no comprobables. Esta entrega no reclasifica esos estados sin evidencia nueva.
- La investigación y la verificación editorial conservan sus estados propios; superar QA técnico no convierte una afirmación histórica en confirmada.
