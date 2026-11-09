# QA de Fase 2

Fecha: 2026-11-09. Rama: `feature/fase-2-lectura-interactiva`.

## Despliegue previo auditado

- Las rutas escritas manualmente respondían HTTP 200.
- Los enlaces generados omitían la barra después del basepath: `/colombia-compleja-atlaslibro/`, `/colombia-compleja-atlascapitulos/c1/` y equivalentes.
- El favicon apuntaba a `/colombia-compleja-atlasfavicon.svg`.
- El sitemap declaraba `https://example.org/colombia-compleja-atlas/...`.
- No existía canonical explícito.

## Corrección verificada localmente

- `site`: `https://andreiarchdevops.github.io`; `base`: `/colombia-compleja-atlas/` en GitHub Actions. Esta combinación genera la URL pública completa sin duplicar el nombre del repositorio.
- Sitemap generado: `https://andreiarchdevops.github.io/colombia-compleja-atlas/sitemap-0.xml`.
- Canonical de inicio: `https://andreiarchdevops.github.io/colombia-compleja-atlas/`.
- Enlaces, favicon, CSS, mapa y CSV contienen el basepath correcto.
- 19 rutas estáticas generadas; ocho corresponden a módulos de capítulo.

## QA visual y responsive

- Chromium headless, escritorio 1440 × 1000: portada, navegación y primer bloque sin solapamientos.
- Chromium headless, móvil 390 × 844: título legible, botones reordenados y menú accesible mediante botón con `aria-expanded`.
- Se verificó foco visible, enlace para saltar al contenido, etiquetas de navegación, regiones con `aria-pressed` y retroalimentación con `aria-live`.

## Pruebas reproducibles

```bash
npm ci
npm run build
GITHUB_ACTIONS=true GITHUB_REPOSITORY=AndreiArchDevops/colombia-compleja-atlas npm run build
npm run check:links
```

## Límites pendientes

- No se ejecutó una auditoría automatizada WCAG completa con lector de pantalla real.
- Falta prueba manual en Safari/iOS y Firefox/Android.
- La auditoría externa contiene 18 referencias prioritarias; el resto de URL impresas exige una segunda ronda.
- Retrato y portada no se incorporaron por falta de licencia abierta o autorización verificable.
