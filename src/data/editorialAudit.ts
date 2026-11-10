import { passages } from './book.ts';
import { claims } from './claims.ts';

export type AuditResult =
  | 'cotejo documentado'
  | 'confirmación con salvedades'
  | 'corrección documentada'
  | 'revisión pendiente'
  | 'evidencia insuficiente';

export interface AuditRecord {
  recordId: string;
  scope: 'ficha' | 'pasaje';
  printedPage: number;
  pdfPage: number;
  result: AuditResult;
  bookCheck: string;
  externalCheck: string;
  method: string;
  evidenceDate: string;
  sourceIds: string[];
  uncertainty: string;
  correction: string;
}

type ClaimAuditDecision = Omit<AuditRecord, 'recordId' | 'scope' | 'printedPage' | 'pdfPage'>;
const textMethod = 'Cotejo textual en el PDF local por página impresa y página física; contraste separado con la fuente indicada.';
const conceptualMethod = 'Cotejo textual y clasificación del tipo de enunciado; no se aplica confirmación factual a una tesis interpretativa o normativa.';

/** Decisiones individuales: nunca se derivan de `Claim.status`. */
export const claimAuditDecisions: Record<string, ClaimAuditDecision> = {
  'cl-isbn': {
    result:'confirmación con salvedades', bookCheck:'La página impresa 4 deja vacío el campo ISBN, aunque identifica autor, año, editoriales y 295 páginas.', externalCheck:'Los catálogos Humboldt y UNAL atribuyen 978-958-8576-15-2 a esta edición.', method:textMethod, evidenceDate:'2014; catálogos consultados 2026-11-10', sourceIds:['book-2014','humboldt-catalog','unal-book'], uncertainty:'El número no puede leerse en el ejemplar PDF; depende de metadatos bibliotecarios externos coincidentes.', correction:'Se conserva el ISBN con una nota visible sobre su procedencia externa.'
  },
  'cl-c1-expedicion': {
    result:'confirmación con salvedades', bookCheck:'La página 27 presenta a Mutis y la Expedición como núcleo de una nueva imagen científica del territorio.', externalCheck:'Banco de la República documenta el inicio en 1783, el inventario botánico y 5.393 láminas de 2.696 especies.', method:textMethod, evidenceDate:'1783–1816; fuente consultada 2026-11-10', sourceIds:['book-2014','banrep-expedicion'], uncertainty:'“Decisivo” es valoración historiográfica; la fuente corrobora cronología y actividad, no mide por sí sola su influencia nacional.', correction:'Se mantiene la ficha y se explicita la diferencia entre hechos de la Expedición y valoración historiográfica.'
  },
  'cl-c1-constitution': {
    result:'corrección documentada', bookCheck:'La página 34 habla del cambio constitucional, el Estado de derecho y las esperanzas que suscitó; no menciona allí pluralismo ni diversidad.', externalCheck:'Los artículos 1 y 7 de la Constitución sí establecen pluralismo y protección de la diversidad étnica y cultural.', method:textMethod, evidenceDate:'1991; texto normativo consultado 2026-11-10', sourceIds:['book-2014','senado-constitucion'], uncertainty:'La afirmación sobre “casi toda la población” es una generalización del autor sin encuesta citada.', correction:'Se separó la interpretación de Carrizosa del contenido normativo externo.'
  },
  'cl-c2-census1778': {
    result:'confirmación con salvedades', bookCheck:'La página 40 atribuye a Herrera (2009) un total de 826.550 habitantes y categorías coloniales específicas.', externalCheck:'DANE compila 828.775 habitantes para 1777–1778 y advierte dificultades históricas de cobertura y levantamiento.', method:textMethod, evidenceDate:'1777–1778; compilación DANE 2007', sourceIds:['book-2014','dane-etnias-censos'], uncertainty:'Las dos compilaciones difieren en 2.225 personas y no documentan aquí una reconciliación de padrones y coberturas.', correction:'La ficha permanece parcial; DANE se presenta como contraste, no como sustituto de Herrera (2009).'
  },
  'cl-pop': {
    result:'confirmación con salvedades', bookCheck:'La página 45 afirma que el censo de 1905 contó más de cuatro millones de habitantes.', externalCheck:'DANE registra 4.143.632 y señala que las cifras no tuvieron sanción oficial.', method:textMethod, evidenceDate:'1905; compilación DANE 1963', sourceIds:['book-2014','dane-censos-historicos'], uncertainty:'La cifra es histórica y no incorpora ajustes demográficos contemporáneos.', correction:'Se conserva la cifra y la advertencia institucional; no se compara con el Censo 2018.'
  },
  'cl-geology': {
    result:'corrección documentada', bookCheck:'La argumentación comienza en la página 69 y continúa hasta la 77; la página 75 es principalmente cartográfica.', externalCheck:'El Mapa Geológico SGC 2023 documenta unidades cronoestratigráficas, fallas, pliegues, volcanes y elementos tectónicos a escalas declaradas.', method:textMethod, evidenceDate:'Fuentes del libro 2002–2009; actualización SGC 2023', sourceIds:['book-2014','sgc-2023'], uncertainty:'“Complejidad territorial” es una síntesis; no constituye una variable geológica medida por el mapa.', correction:'Página de inicio corregida de 75 a 69 y rango textual aclarado.'
  },
  'cl-c3-water': {
    result:'corrección documentada', bookCheck:'La página 83 atribuye al IDEAM 2010 más de 400 municipios y cerca de 12 millones de habitantes vulnerables.', externalCheck:'El capítulo 8 del ENA informa 483 municipios; la figura 8.9 suma 12.215.933 habitantes en IVH medio, alto y muy alto para año medio.', method:'Reproducción aritmética de 401 + 79 + 3 municipios y 7.726.139 + 4.315.438 + 174.356 habitantes de la figura 8.9.', evidenceDate:'ENA 2010; comprobación 2026-11-10', sourceIds:['book-2014','ideam-ena2010','ideam-ena2010-cap8'], uncertainty:'El indicador cubre fuentes de abastecimiento de cabeceras y un escenario hidrológico; no equivale a toda la población ni a la situación actual.', correction:'La ficha pasa de parcial/media a confirmada/alta para el diagnóstico de 2010, con unidad y escenario explícitos.'
  },
  'cl-c3-biodiversity': {
    result:'confirmación con salvedades', bookCheck:'La página 89 ofrece inventarios de Mast et al. (1997), Lasso et al. (2004), Cleef (2005), Rangel (2005) y una web Humboldt.', externalCheck:'Humboldt 2015 y la Evaluación Nacional 2021 sostienen la megadiversidad, pero actualizan conteos y no reproducen una tabla idéntica.', method:'Cotejo de la cadena de citas del libro y comparación temporal sin equiparar inventarios de años o taxonomías diferentes.', evidenceDate:'1997–2005; actualizaciones 2015 y 2021', sourceIds:['book-2014','humboldt-bio2015','humboldt-eval'], uncertainty:'Los rangos globales y conteos cambian con muestreo, taxonomía y cobertura; no son constantes atemporales.', correction:'Se conserva como parcial y se identifica cada cifra como inventario histórico, no como dato vigente.'
  },
  'cl-c3-ecosystems2007': {
    result:'corrección documentada', bookCheck:'La página 91 cita IDEAM et al. (2007): tres grandes biomas, 32 tipos y 311 ecosistemas a 1:500.000.', externalCheck:'El catálogo Humboldt identifica la obra exacta; la Segunda Comunicación Nacional reproduce los tres totales.', method:textMethod, evidenceDate:'2007; corroboración institucional 2010', sourceIds:['book-2014','humboldt-ecosistemas2007-catalog','ideam-comunicacion2010','ideam-ecosistemas2007'], uncertainty:'El catálogo prueba identidad bibliográfica; la comunicación posterior aporta los conteos. La página temática no es el original.', correction:'Se distinguieron documento exacto, catálogo y página temática relacionada.'
  },
  'cl-c3-ecosystems-update': {
    result:'corrección documentada', bookCheck:'La cifra de la página 91 pertenece al mapa 2007 y a su clasificación.', externalCheck:'IDEAM publicó en 2025 el MEC 2024 a 1:100.000; la comunicación 2026 usa la categoría “ecosistemas generales”.', method:'Comparación de año de referencia, fecha de publicación, escala y vocabulario; sin comparar totales no homologados.', evidenceDate:'2007; MEC 2024 publicado 2025-05-20; actualización 2026-05-22', sourceIds:['book-2014','humboldt-ecosistemas2007-catalog','ideam-mec2024','ideam-ecosistemas2026'], uncertainty:'Falta un diccionario de correspondencia de clases y análisis espacial entre versiones.', correction:'Las actualizaciones se presentan como cambio metodológico, no como refutación del dato histórico.'
  },
  'cl-c4-gold': {
    result:'confirmación con salvedades', bookCheck:'La página 101 compara depósitos auríferos y territorios mineros; el argumento social continúa en páginas posteriores.', externalCheck:'SGC documenta provincias auríferas y el artículo sobre Frontino-Morrogacho caracteriza un distrito mineralizado específico.', method:textMethod, evidenceDate:'Libro 2014; síntesis SGC 2019; artículo 2021', sourceIds:['book-2014','sgc-gold','sgc-frontino'], uncertainty:'La geología no demuestra distribución de rentas, bienestar ni sostenibilidad.', correction:'Se confirma solo la base geológica; las consecuencias territoriales permanecen separadas.'
  },
  'cl-c4-extraction': {
    result:'evidencia insuficiente', bookCheck:'La página 104 formula una conclusión histórica sobre extracción, industrialización y bienestar.', externalCheck:'Las fuentes SGC reunidas prueban yacimientos y actividad, no el efecto causal agregado sobre desarrollo local.', method:'Evaluación de suficiencia causal: resultado, tratamiento, comparación temporal, controles y mecanismos.', evidenceDate:'Hipótesis publicada 2014; fuentes geológicas 2019–2021', sourceIds:['book-2014','sgc-gold'], uncertainty:'Faltan series territoriales comparables sobre regalías, empleo, salud, conflicto y pasivos ambientales.', correction:'Se clasifica la auditoría como evidencia insuficiente, sin convertir plausibilidad en confirmación.'
  },
  'cl-c4-cenicafe': {
    result:'confirmación con salvedades', bookCheck:'La página 113 atribuye a Carrizosa (1987) la creación de Cenicafé en 1938 dentro del arreglo cafetero.', externalCheck:'La reseña institucional de Cenicafé publicada en 1949 registra su fundación en noviembre de 1938.', method:textMethod, evidenceDate:'1938; reseña 1949; libro 2014', sourceIds:['book-2014','cenicafe-history'], uncertainty:'La fecha queda corroborada; la fuente no mide el efecto total de la institución sobre desempeño cafetero.', correction:'Se limita la confirmación a fecha y función institucional.'
  },
  'cl-c4-coffee-causality': {
    result:'evidencia insuficiente', bookCheck:'La página 114 enlaza apertura, desmonte institucional, narcotráfico y cambios regionales adversos.', externalCheck:'La reseña Cenicafé acredita un componente institucional, no la secuencia causal multivariable.', method:'Evaluación causal y búsqueda de correspondencia entre afirmación, variables y fuente enlazada.', evidenceDate:'Secuencia 1980–2014; revisión 2026-11-10', sourceIds:['book-2014','cenicafe-history'], uncertainty:'Faltan series de precios, ingreso, migración, violencia, política cafetera y contrafactuales regionales.', correction:'Permanece no verificable y con evidencia insuficiente.'
  },
  'cl-c5-paramillo': {
    result:'confirmación con salvedades', bookCheck:'La página 132 caracteriza el sistema Caribe rural y usa Paramillo como pieza biofísica del conjunto.', externalCheck:'PNN documenta gradiente altitudinal, ecosistemas y cabeceras de los ríos Sinú y San Jorge dentro del área protegida.', method:textMethod, evidenceDate:'Libro 2014; ficha PNN consultada 2026-11-10', sourceIds:['book-2014','pnn-paramillo'], uncertainty:'El parque no equivale espacial ni históricamente al sistema territorial del autor.', correction:'Se conserva la limitación de escala y delimitación.'
  },
  'cl-c5-mcbean': {
    result:'confirmación con salvedades', bookCheck:'La página 135 afirma que Old Providence McBean Lagoon y Seaflower protegen parte de los ecosistemas insulares.', externalCheck:'PNN documenta manglar, laguna arrecifal, formaciones coralinas y pertenencia a Seaflower desde 2000.', method:textMethod, evidenceDate:'Libro 2014; ficha PNN actual consultada 2026-11-10', sourceIds:['book-2014','pnn-mcbean'], uncertainty:'La ficha del parque no valida por sí sola la historia cultural, el turismo ni todos los ecosistemas del archipiélago.', correction:'Se reemplazó el enlace institucional antiguo por la ficha oficial vigente.'
  },
  'cl-c5-sierra': {
    result:'confirmación con salvedades', bookCheck:'La página 143 describe pisos ecológicos, vertientes y centralidad indígena en la Sierra Nevada.', externalCheck:'PNN registra el gradiente altitudinal y el traslape con resguardos Kogui-Malayo-Arhuaco, Arhuaco y Kankuamo.', method:textMethod, evidenceDate:'Libro 2014; ficha PNN actual consultada 2026-11-10', sourceIds:['book-2014','pnn-sierra'], uncertainty:'Los límites del parque y los resguardos no agotan el territorio ancestral ni todas las relaciones históricas.', correction:'Se actualizó el enlace oficial y se conservó la limitación espacial.'
  },
  'cl-c5-coal': {
    result:'confirmación con salvedades', bookCheck:'La página 147 relaciona los depósitos de carbón de La Guajira con su historia geológica y discute transformaciones extractivas.', externalCheck:'SGC ubica los carbones de la zona Guajira en la Formación Cerrejón, de edad Paleoceno.', method:textMethod, evidenceDate:'Libro 2014; publicación SGC 2012', sourceIds:['book-2014','sgc-coal'], uncertainty:'La evidencia geológica no comprueba empleo, apoyo comunitario, conflicto hídrico ni justicia ambiental.', correction:'La confirmación queda restringida a existencia y marco geológico del depósito.'
  },
  'cl-c5-macarena': {
    result:'confirmación con salvedades', bookCheck:'La página 165 llama a La Macarena formación precámbrica y paleozoica y punto de encuentro andino, amazónico y orinocense.', externalCheck:'PNN la sitúa en el extremo occidental del Escudo Guayanés y documenta ecosistemas Amazonía-Orinoquía; su historia institucional describe la confluencia regional.', method:textMethod, evidenceDate:'Libro 2014; ficha y plan PNN consultados 2026-11-10', sourceIds:['book-2014','pnn-macarena'], uncertainty:'“Punto de encuentro” es síntesis biogeográfica, no inventario exhaustivo por taxón.', correction:'Se confirma la caracterización general con salvedad de escala.'
  },
  'cl-complex': {
    result:'cotejo documentado', bookCheck:'La tesis aparece de forma explícita en la página 213: territorio extremadamente complejo frente a sociedad simplificada y dirigida por pocas personas.', externalCheck:'Humboldt respalda diversidad biofísica, pero no prueba el enunciado social compuesto.', method:conceptualMethod, evidenceDate:'2014; contraste ambiental 2021', sourceIds:['book-2014','humboldt-eval'], uncertainty:'Requeriría indicadores comparativos para complejidad, concentración, adaptación y resultados.', correction:'Página corregida de 203 a 213; permanece como interpretación del autor.'
  },
  'cl-c6-different': {
    result:'cotejo documentado', bookCheck:'La página 203 enumera países y sostiene diferencias estructurales e históricas.', externalCheck:'SGC y Humboldt documentan rasgos colombianos, pero no ofrecen la matriz internacional común necesaria para demostrar excepcionalidad.', method:conceptualMethod, evidenceDate:'2014; fuentes externas 2020–2023', sourceIds:['book-2014','sgc-2023','humboldt-2020'], uncertainty:'La selección de comparadores y dimensiones no está operacionalizada.', correction:'Se conserva como argumento ensayístico, no como ranking confirmado.'
  },
  'cl-c7-models': {
    result:'cotejo documentado', bookCheck:'La página 217 define los modelos mentales como filtros situados que organizan visiones plurales del presente y futuro.', externalCheck:'El libro remite a Simon y otras tradiciones, pero la ficha no afirma una escala psicológica validada.', method:conceptualMethod, evidenceDate:'2014; referencias teóricas del libro 1966–2009', sourceIds:['book-2014'], uncertainty:'No existe en la obra protocolo para medir o atribuir modelos individuales.', correction:'Se registra como proposición teórica del autor.'
  },
  'cl-c7-simplification': {
    result:'evidencia insuficiente', bookCheck:'El capítulo VII critica dogmas y simplificaciones y en la página 223 atribuye límites explicativos a disciplinas aisladas.', externalCheck:'No se reunió un diseño comparativo que estime el efecto causal de simplificar sobre decisiones territoriales.', method:'Cotejo textual y prueba de suficiencia causal; se distingue advertencia metodológica de regularidad empírica.', evidenceDate:'2014; revisión 2026-11-10', sourceIds:['book-2014'], uncertainty:'Simplificar puede ser útil o dañino según propósito, escala y variables excluidas.', correction:'Permanece interpretación plausible; la causalidad se marca con evidencia insuficiente.'
  },
  'cl-code': {
    result:'confirmación con salvedades', bookCheck:'La ficha contextualiza la trayectoria del autor; el libro no constituye la fuente principal de este dato biográfico.', externalCheck:'UNAL documenta su vinculación institucional y contribución al Código; el Decreto 2811 prueba norma y fecha.', method:'Triangulación de fuente biográfica institucional y texto normativo primario.', evidenceDate:'Decreto 1974; perfil consultado 2026-11-10', sourceIds:['unal-obituary','cnrr-1974'], uncertainty:'“Contribución” no permite atribuirle autoría de cada disposición sin expediente administrativo.', correction:'Se limita el alcance de la autoría personal.'
  },
  'cl-c8-happiness': {
    result:'cotejo documentado', bookCheck:'La página 233 propone iniciar la construcción de espacios para la felicidad y la formula en modo potencial.', externalCheck:'No corresponde a un hecho externo verificable, sino a un horizonte normativo.', method:conceptualMethod, evidenceDate:'2014', sourceIds:['book-2014'], uncertainty:'Evaluarla exige definir bienestar, población, distribución, escala y horizonte temporal.', correction:'Se conserva como valoración normativa, sin promesa causal.'
  },
  'cl-c8-space': {
    result:'corrección documentada', bookCheck:'La formulación integradora se sostiene en la página 237, que pide incorporar emociones e intereses y equilibrar dimensiones políticas, económicas, cognitivas, éticas y estéticas.', externalCheck:'No se requiere corroboración externa para atribuir esta propuesta al autor.', method:conceptualMethod, evidenceDate:'2014', sourceIds:['book-2014'], uncertainty:'La obra no ofrece ponderación ni mecanismo para resolver conflictos entre dimensiones.', correction:'Página corregida de 239 —inicio del apéndice 1— a 237.'
  },
  'cl-a1-society': {
    result:'cotejo documentado', bookCheck:'El apéndice 1 culmina en la página 258 con una propuesta ética de sociedad compleja y consciente de sus ambivalencias.', externalCheck:'Es una conclusión filosófica; no existe un índice externo equivalente en las fuentes reunidas.', method:conceptualMethod, evidenceDate:'Texto presentado en 2011 y publicado en el libro de 2014', sourceIds:['book-2014'], uncertainty:'“Sociedad compleja” no se operacionaliza y la necesidad propuesta no demuestra suficiencia causal.', correction:'Se mantiene como valoración normativa atribuida al autor.'
  },
  'cl-a2-education': {
    result:'evidencia insuficiente', bookCheck:'La página 282 usa expresamente el modal “podría ayudar” al proponer educación ambiental compleja y futuros distintos.', externalCheck:'La obra no presenta evaluación longitudinal, grupo de comparación ni medida de resultados ciudadanos.', method:'Cotejo del lenguaje modal y evaluación de requisitos mínimos para una inferencia causal educativa.', evidenceDate:'2014; revisión 2026-11-10', sourceIds:['book-2014'], uncertainty:'Faltan población, intervención, duración, comparación y métricas de cambio.', correction:'Permanece hipótesis educativa; no se presenta como eficacia demostrada.'
  }
};

export const claimAudit: AuditRecord[] = claims.map(claim => {
  const decision = claimAuditDecisions[claim.id];
  if (!decision) throw new Error(`${claim.id}: falta una decisión explícita de auditoría editorial`);
  return { recordId:claim.id, scope:'ficha', printedPage:claim.page, pdfPage:claim.page + 1, ...decision };
});

export const passageAudit: AuditRecord[] = passages.map(passage => ({
  recordId:passage.id,
  scope:'pasaje',
  printedPage:passage.page,
  pdfPage:passage.page + 1,
  result:passage.id === 'p-intro' || passage.id === 'p-a2' ? 'corrección documentada' : 'cotejo documentado',
  bookCheck:`Cita breve localizada por cotejo textual en la página impresa ${passage.page}.`,
  externalCheck:'No aplica: se verifica una transcripción breve del texto primario.',
  method:'Búsqueda textual y lectura del contexto inmediato en el PDF local.',
  evidenceDate:'Edición 2014; cotejo 2026-11-09',
  sourceIds:['book-2014'],
  uncertainty:'El cotejo textual no valida por sí solo la interpretación editorial que acompaña el pasaje.',
  correction:passage.id === 'p-intro' ? 'Página impresa corregida de 17 a 18.' : passage.id === 'p-a2' ? 'Asignación corregida del capítulo VIII al apéndice 2.' : 'Sin cambio.'
}));

export const editorialAudit = [...claimAudit, ...passageAudit];
