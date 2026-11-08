# Colombia compleja — atlas interactivo de lectura crítica

MVP estático y accesible para estudiar *Colombia compleja* (Julio Carrizosa Umaña, 2014) en tres niveles, con trazabilidad editorial y contraste de fuentes.

## Estado

La ficha bibliográfica, la arquitectura de los ocho capítulos, el perfil inicial del autor, tres pasajes breves, cuatro fichas de contraste, cronología, glosario y laboratorio son funcionales. Los análisis están marcados como preliminares cuando aún requieren revisión exhaustiva. El sitio no aloja ni redistribuye el PDF.

## Desarrollo

```bash
npm install
npm run dev
```

Validación y compilación:

```bash
npm run build
```

La compilación ejecuta el validador de referencias, `astro check` y el build estático. La salida queda en `dist/`.

## GitHub Pages

El workflow detecta el nombre del repositorio y configura automáticamente el `base` de Astro. En GitHub, configura **Settings → Pages → Source: GitHub Actions**. No se necesitan claves.

## Modelo editorial

Los tipos están en `src/data/types.ts` y los registros iniciales en `src/data/book.ts`. Cada afirmación enlaza capítulo, página, estado, evaluación, confianza, fuentes y fecha de revisión. El validador rechaza identificadores rotos y respuestas inválidas.

## Fuente primaria

Carrizosa-Umaña, J. (2014). *Colombia compleja*. Jardín Botánico de Bogotá José Celestino Mutis; Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. ISBN catalogado: 978-958-8576-15-2.

El PDF local analizado tiene SHA-256 `5b27eee4e747cbb670b888a22f94cd2e38008f220ec0a6395ff9bb581dfb56f0`.

## Licencia y atribución

El código original del atlas puede licenciarse por separado por el responsable del repositorio. El libro, sus imágenes y las fuentes enlazadas conservan sus respectivos derechos. Este proyecto es independiente y no oficial.
