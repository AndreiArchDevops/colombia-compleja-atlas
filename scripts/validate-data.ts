import { chapters, claims, concepts, passages, quizzes, sources } from '../src/data/book';

const errors: string[] = [];
const unique = <T>(items: T[], label: string) => {
  const seen = new Set<T>();
  for (const item of items) seen.has(item) ? errors.push(`${label} duplicado: ${item}`) : seen.add(item);
};
unique(chapters.map(x=>x.id), 'capítulo'); unique(sources.map(x=>x.id), 'fuente');
unique(claims.map(x=>x.id), 'afirmación'); unique(passages.map(x=>x.id), 'pasaje');
const chapterIds = new Set(chapters.map(x=>x.id)); const sourceIds = new Set(sources.map(x=>x.id));
for (const x of [...claims, ...passages, ...quizzes]) if (!chapterIds.has(x.chapterId)) errors.push(`Referencia a capítulo inexistente: ${x.chapterId}`);
for (const x of claims) for (const id of x.sourceIds) if (!sourceIds.has(id)) errors.push(`${x.id}: fuente inexistente ${id}`);
for (const x of passages) if (!sourceIds.has(x.sourceId)) errors.push(`${x.id}: fuente inexistente ${x.sourceId}`);
for (const x of concepts) for (const id of x.chapterIds) if (!chapterIds.has(id)) errors.push(`${x.id}: capítulo inexistente ${id}`);
for (const x of quizzes) if (x.answer < 0 || x.answer >= x.options.length) errors.push(`${x.id}: respuesta fuera de rango`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Datos válidos: ${chapters.length} capítulos, ${claims.length} verificaciones, ${sources.length} fuentes, ${passages.length} pasajes.`);
