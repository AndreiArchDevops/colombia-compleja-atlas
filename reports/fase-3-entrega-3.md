# Fase 3 · entrega 3 — cierre analítico y apéndices

Fecha de revisión: 2026-11-09  
Rama: `feature/fase-3-entrega-3`

## Alcance cotejado

| Unidad | Páginas impresas | Páginas PDF |
|---|---:|---:|
| Capítulo VI, *Colombia: un país diferente* | 203–214 | 204–215 |
| Capítulo VII, *Modelos mentales y estrategias para enfrentarse a la complejidad* | 215–228 | 216–229 |
| Capítulo VIII, *Construir espacios para la felicidad: los terruños* | 229–238 | 230–239 |
| Apéndice 1, *Complejidad y simplicidad en los ecosistemas y las sociedades* | 239–258 | 240–259 |
| Apéndice 2, *Para una educación ambiental compleja* | 259–282 | 260–283 |

La lectura se hizo sobre `Colombia-compleja.pdf`, sin publicar ni redistribuir el archivo. Las páginas y encabezados internos se verificaron directamente. Las síntesis del atlas son paráfrasis editoriales, salvo tres citas breves identificadas como tales en las pp. 203, 217 y 233.

## Arquitectura interpretativa

1. El capítulo VI formula la diferencia colombiana como relación entre heterogeneidad territorial, autoridad, acumulación, poblamiento y experiencias de trauma o bienestar. El atlas la clasifica como hipótesis comparativa, no como esencia.
2. El capítulo VII presenta doce estrategias. Dogmatismo, simpleza, desdén, trampa y violencia reciben una lectura crítica; cortesía e indisciplina son ambivalentes; entusiasmo, bondad, saber, enamoramiento y felicidad expresan preferencias propositivas del autor.
3. El capítulo VIII convierte el diagnóstico en horizonte político: construir condiciones para dignidad y felicidad sin prometer producir una emoción. Terruño y vividero conectan ambiente material, memoria y afecto.
4. El apéndice 1 distingue complejidad de mera dificultad y muestra que simplificar es necesario, aunque peligroso cuando se olvida el recorte.
5. El apéndice 2 propone seis capacidades: observar amplia y profundamente; analizar y sintetizar; descubrir interrelaciones; pensar cambios pasados y futuros; examinar intereses; reconocer sesgos y respetar miradas.

## Cambios de experiencia

- Lectura profunda para los capítulos VI–VIII con estructura, vocabulario, supuestos, conclusiones, preguntas abiertas y recuperación activa.
- Dos rutas estáticas nuevas: `/apendices/a1/` y `/apendices/a2/`.
- Enlaces directos a los apéndices desde el índice, capítulos relacionados y ruta avanzada.
- Diagrama navegable del cierre filosófico, político y pedagógico en el Atlas.
- Conceptos nuevos en el glosario: modelo mental, terruño y solución suficientemente compleja.
- Tres fichas de contraste clasificadas como interpretación para evitar presentar tesis filosóficas como hechos verificados.

## Defectos de la edición digital

Las aperturas del capítulo VIII (PDF 230) y del apéndice 2 (PDF 260) contienen texto de plantilla superpuesto, como ya ocurría en otras páginas de la edición. El relleno se excluyó del análisis; los títulos y cuerpos legibles se cotejaron con la paginación impresa.

## Límites editoriales

- Las doce estrategias son categorías ensayísticas superpuestas, no una taxonomía psicológica validada.
- “País traumatizado” es una interpretación colectiva y no sustituye evidencia clínica o regional.
- Felicidad, bondad y enamoramiento son conceptos normativos y culturalmente variables.
- Una “solución compleja” todavía requiere selección, prioridades, responsables e indicadores.
- La educación ambiental compleja es una arquitectura pedagógica; el texto no aporta evaluación experimental ni currículo cerrado.

## Verificación técnica

- `npm run build`: correcto; 21 páginas estáticas, sin errores, advertencias ni sugerencias de Astro.
- Validación: 8 capítulos, 10 lecturas profundas, 12 verificaciones, 14 fuentes, 11 pasajes, 7 medios y 18 enlaces auditados.
- `npm run check:links`: enlaces internos y recursos del build válidos.
- Compilación adicional con `GITHUB_ACTIONS=true` y el repositorio de proyecto: `basepath`, canonicales y sitemap incluyen correctamente `/colombia-compleja-atlas/`; las dos rutas de apéndices aparecen en el sitemap.
- `git diff --check`: sin errores de espacios.
- QA visual local con Chromium: capítulo VII a 1440 × 1000; capítulo VIII y apéndice II a 390 × 844; Atlas a 1440 × 1000. Se verificaron jerarquía editorial, menú móvil, ausencia de desbordamiento horizontal en las portadas y carga de medios.
- Las tarjetas del cierre argumental pasan de cinco columnas a dos bajo 900 px y a una bajo 600 px; el movimiento al pasar el puntero se elimina con `prefers-reduced-motion`.
- No se modifica `main`, no se hace merge y no se despliega el sitio.
