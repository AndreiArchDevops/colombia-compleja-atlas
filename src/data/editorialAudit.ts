import { passages } from './book.ts';
import { claims } from './claims.ts';

export type AuditResult = 'corregido' | 'confirmado' | 'confirmado con salvedad';
export interface AuditRecord {
  recordId: string; scope: 'ficha' | 'pasaje'; printedPage: number; pdfPage: number;
  result: AuditResult; evidence: string; sourceRelation: string; correction: string;
}

const claimOverrides: Record<string, Partial<AuditRecord>> = {
  'cl-c2-census1778': { result:'confirmado con salvedad', evidence:'El PDF, p. impresa 40, atribuye 826.550 a Herrera (2009); DANE ofrece 828.775 en una reconstrucción independiente.', sourceRelation:'Herrera (2009) es la referencia exacta del autor; DANE es fuente externa de contraste, no sustituto.', correction:'Se mantiene “parcial” y se hace explícita la diferencia de cobertura, categorías y compilación.' },
  'cl-pop': { result:'confirmado con salvedad', evidence:'El PDF, p. 45, dice “más de cuatro millones”; DANE compila 4.143.632 y advierte que el censo de 1905 no recibió sanción oficial.', sourceRelation:'La serie histórica DANE es contraste posterior; no se usa el Censo 2018 para juzgar 1905.', correction:'Se retiró la comparación metodológicamente improcedente con 2018 en la entrega anterior; se conserva la advertencia censal.' },
  'cl-c3-water': { result:'confirmado con salvedad', evidence:'El PDF, p. 83, cita IDEAM 2010. La página oficial enlaza capítulos y el anexo municipal del ENA 2010.', sourceRelation:'La ficha enlaza la colección documental exacta; aún falta reconstruir la tabla que suma municipios y población.', correction:'Se mantiene como parcialmente confirmada y confianza media; no se presenta la portada temática como prueba de ambos totales.' },
  'cl-c3-ecosystems2007': { result:'corregido', evidence:'El PDF, p. 91, cita IDEAM et al. (2007): 3 grandes biomas, 32 tipos y 311 ecosistemas a 1:500.000.', sourceRelation:'El catálogo Humboldt identifica la obra exacta; la página temática IDEAM solo contextualiza; la Segunda Comunicación reproduce las cifras.', correction:'Se añadió el registro bibliográfico exacto y se reclasificó la página temática como fuente relacionada.' },
  'cl-c3-ecosystems-update': { result:'corregido', evidence:'IDEAM publicó el 20-05-2025 el mapa denominado MEC 2024, a 1:100.000; la comunicación de 2026 usa “ecosistemas generales”.', sourceRelation:'Son actualizaciones institucionales posteriores, no documentos citados por Carrizosa.', correction:'Se separaron año de referencia, fecha de publicación, escala y categoría; no se comparan totales como equivalentes.' },
  'cl-c4-extraction': { result:'confirmado con salvedad', evidence:'La p. 104 ofrece una valoración histórica sobre extracción e industrialización; las fuentes SGC solo prueban geología y actividad.', sourceRelation:'SGC es evidencia geológica relacionada, no prueba causal de bienestar o sostenibilidad.', correction:'Permanece como interpretación/hipótesis; se explicitan variables y diseño comparativo faltantes.' },
  'cl-c4-coffee-causality': { result:'confirmado con salvedad', evidence:'La p. 114 enlaza apertura, desmonte institucional y narcotráfico; Cenicafé solo confirma creación y función institucional.', sourceRelation:'La reseña Cenicafé corrobora un componente, no la secuencia causal completa.', correction:'Permanece “no verificable” con límites sobre series, controles y contrafactuales.' },
  'cl-c5-paramillo': { result:'confirmado con salvedad', evidence:'El PDF, p. 132, describe el sistema Caribe rural; la ficha PNN documenta el área protegida y sus cabeceras.', sourceRelation:'El parque es una unidad institucional dentro del sistema territorial, no un equivalente espacial del sistema de Carrizosa.', correction:'Se conserva la limitación de escala y delimitación.' },
  'cl-c4-cenicafe': { result:'confirmado con salvedad', evidence:'El PDF, p. 113, cita Carrizosa (1987) para la creación en 1938; la reseña Cenicafé de 1949 corrobora la fecha.', sourceRelation:'Carrizosa (1987) es la referencia exacta del libro; Cenicafé (1949) es corroboración externa.', correction:'La ficha no atribuye a Cenicafé por sí solo el desempeño cafetero.' }
};

export const claimAudit: AuditRecord[] = claims.map(claim => ({
  recordId: claim.id, scope:'ficha', printedPage:claim.page, pdfPage:claim.page + 1,
  result:'confirmado', evidence:`Localización cotejada en la p. impresa ${claim.page}; evidencia y límites registrados en la ficha.`,
  sourceRelation:'Las fuentes enlazadas se presentan como contraste salvo indicación expresa de documento citado.',
  correction:'Sin cambio sustantivo después de la revisión editorial.',
  ...claimOverrides[claim.id]
}));

export const passageAudit: AuditRecord[] = passages.map(passage => ({
  recordId: passage.id, scope:'pasaje', printedPage:passage.page, pdfPage:passage.page + 1,
  result: passage.id === 'p-intro' ? 'corregido' : 'confirmado',
  evidence:`Cita breve localizada por cotejo textual en la p. impresa ${passage.page}.`,
  sourceRelation:'Texto literal del PDF local de la edición 2014.',
  correction: passage.id === 'p-intro' ? 'Página impresa corregida de 17 a 18.' : passage.id === 'p-a2' ? 'Asignación corregida del capítulo VIII al apéndice 2.' : 'Sin cambio.'
}));

export const editorialAudit = [...claimAudit, ...passageAudit];
