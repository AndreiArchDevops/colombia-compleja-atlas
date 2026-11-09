# Auditoría de enlaces del libro

Fecha de consulta: 2026-11-09. Edición: *Colombia compleja* (2014). Archivo analizado localmente; no se redistribuye.

## Método

- Se revisaron el texto extraído por página y las anotaciones PDF. `pdfinfo -url` no encontró anotaciones activas: las direcciones están impresas como texto.
- La página PDF es la posición física del archivo; la página impresa es la numeración visible. En la bibliografía, `página PDF = página impresa + 1`.
- Las URL partidas por diagramación fueron reconstruidas conservando la dirección impresa.
- La prueba siguió redirecciones y registró código final. Un 403, 503, timeout o fallo de conexión se clasifica como “bloqueado/no comprobable”, no como rotura.
- Una alternativa solo se registra cuando corresponde a una ficha institucional, DOI o repositorio reconocido. No se inventaron reemplazos.

## Resultado de esta entrega

Se documentan 23 referencias prioritarias: 3 funcionales, 2 redirigidas, 5 sustituidas por ubicación institucional, 4 bloqueadas/no comprobables, 1 rota, 6 sin URL y 2 pendientes. En esta entrega se añadieron cinco referencias impresas relevantes para el contraste ambiental e histórico. Dos cuentan con acceso institucional alternativo; en las otras se evita inventar una descarga o enlazar copias sin licencia.

La tabla completa y legible por máquina está en [`reports/link-audit.csv`](link-audit.csv). La Biblioteca web consume el mismo registro tipado usado para presentar filtros y estados.

## Problemas editoriales detectados

- Muchas URL de 2014 usan HTTP, FTP o dominios que migraron.
- Algunos enlaces terminan en agregadores comerciales o plataformas que bloquean automatización.
- La referencia a la Constitución de 1886 usa un archivo llamado `constitucion_politica_1986.html`; debe tratarse como inconsistencia de la fuente.
- Varias obras sin URL sí tienen hoy fichas institucionales o DOI, pero cada equivalencia requiere verificación bibliográfica.

## Pendientes

1. Completar la comprobación de todas las direcciones impresas en páginas 283–290.
2. Resolver referencias URL fuera de la bibliografía, incluidos mapas y notas de capítulos.
3. Localizar DOI para artículos científicos y cotejar título, autores, volumen y páginas.
4. Repetir la prueba periódicamente: el estado de una URL es temporal.
