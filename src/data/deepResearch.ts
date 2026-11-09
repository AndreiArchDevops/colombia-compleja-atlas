export interface DeepSection {
  title: string;
  pages: string;
  argument: string;
  examples: string[];
}

export interface VocabularyItem { term: string; definition: string; }
export interface StudyPrompt { question: string; answer: string; }

export interface DeepChapter {
  chapterId: 'c1' | 'c2' | 'c3';
  scope: string;
  explanation: string[];
  sections: DeepSection[];
  vocabulary: VocabularyItem[];
  assumptions: string[];
  conclusions: string[];
  openQuestions: string[];
  retrieval: StudyPrompt[];
  mediaIds: string[];
}

export const deepChapters: Partial<Record<string, DeepChapter>> = {
  c1: {
    chapterId: 'c1',
    scope: 'Lectura directa de las páginas impresas 19–36 (páginas 20–37 del PDF). Los títulos y rangos siguientes reproducen la estructura observable del capítulo; los textos son paráfrasis editoriales.',
    explanation: [
      'Carrizosa no usa “imaginario” como simple fantasía. Lo presenta como una fuerza histórica: relatos infantiles, ideas políticas, religión, modelos económicos y experiencias del paisaje orientan decisiones que terminan modificando el país material. Su fórmula de lo complejo —lo real más lo imaginario— anuncia que el territorio no puede estudiarse separado de las imágenes con las que se gobierna.',
      'El recorrido no es una historia exhaustiva de las ideas. Es una secuencia interpretativa que va de memorias prehispánicas y ambiciones imperiales a la Ilustración, el utilitarismo, el desarrollo, el narcotráfico, la seguridad y la paz. El hilo conductor es quién logra convertir una imagen deseada de Colombia en instituciones, violencia, economía o derecho.',
      'El cierre sostiene que la pluralidad biológica y cultural produce también una pluralidad de imaginarios. El problema no es imaginar, sino imponer imágenes parciales como si comprendieran toda la complejidad territorial y social.'
    ],
    sections: [
      { title:'Planteamiento: lo real y lo imaginado', pages:'19–21', argument:'Las ideas europeas ocupan una posición dominante, pero memorias indígenas, afrodescendientes y experiencias locales también forman el país imaginado.', examples:['Relatos religiosos y políticos traídos por conquistadores y funcionarios.','Persistencia de imágenes vinculadas al paisaje donde las personas nacen y se crían.'] },
      { title:'El imaginario prehistórico', pages:'22–23', argument:'Vestigios artísticos, hidráulicos y territoriales permiten formular hipótesis sobre modos indígenas de comprender energía, agua, suelo y continuidad de la vida.', examples:['Arte rupestre del Chiribiquete.','Orfebrería muisca, estatuaria de San Agustín y manejo prehispánico del agua.'] },
      { title:'Las ilusiones de los invasores', pages:'24–25', argument:'Poder, oro, honra, monarquía y evangelización ayudaron a convertir el territorio en espacio conquistable.', examples:['La cultura del caballero andante.','La expedición de conquista como vía de ascenso político y económico.'] },
      { title:'El sueño imperial en el trópico ecuatorial', pages:'25–26', argument:'La implantación imperial chocó con distancias, climas, poblaciones y geografías que no correspondían al orden imaginado desde España.', examples:['Ocupación de altiplanos, llanura Caribe y zonas mineras.','Contraste entre esplendor imperial y precariedad colonial.'] },
      { title:'La imagen ilustrada', pages:'27–28', argument:'La observación científica y el control borbónico del territorio introdujeron otra imagen: inventariar y ordenar la naturaleza para conocer y gobernar.', examples:['José Celestino Mutis y la Expedición Botánica.','Francisco José de Caldas y la lectura científica del relieve.'] },
      { title:'Autonomía, derechos y utilitarismo', pages:'28–29', argument:'Tradiciones de autonomía campesina, resistencia indígena y afrodescendiente, derechos ilustrados y utilitarismo confluyeron sin formar un proyecto único.', examples:['Palenques y rochelas.','Bentham y Smith en la educación republicana; federalismo del siglo XIX.'] },
      { title:'Paraíso y sueño del centenario', pages:'29–31', argument:'La búsqueda de orden, concordia y prosperidad proyectó un país futuro que ocultaba tensiones sociales y regionales.', examples:['Regeneración y catolicismo político.','Generación del Centenario y la promesa de una patria “venturosa”.'] },
      { title:'Violencia, desarrollo y riqueza fácil', pages:'31–34', argument:'La Violencia, las promesas del desarrollo y luego el narcotráfico cambiaron la imagen externa e interna de Colombia y abrieron rutas de movilidad violentas.', examples:['Violencia partidista desde 1946.','Planes de desarrollo inspirados en teorías de modernización.','Marihuana y cocaína como fantasía de enriquecimiento acelerado.'] },
      { title:'Derecho, seguridad, paz y cierre', pages:'34–36', argument:'Constitución, seguridad y negociación de paz aparecen como intentos sucesivos de hacer real una imagen nacional; ninguno agota la diversidad de imaginarios.', examples:['Constitución de 1991.','Seguridad Democrática.','Negociación de paz en curso cuando se publicó el libro.'] }
    ],
    vocabulary: [
      {term:'Imaginario colectivo',definition:'Conjunto compartido de relatos, símbolos y expectativas que orienta la percepción y la acción de un grupo.'},
      {term:'Hegemonía',definition:'Capacidad de una visión para volverse dominante y presentarse como sentido común, apoyada por posiciones políticas e instituciones.'},
      {term:'Utilitarismo',definition:'Tradición que evalúa normas y decisiones por sus consecuencias para el bienestar; en el capítulo se vincula con educación y liberalismo republicano.'},
      {term:'Modernización',definition:'Modelo de cambio que ordena sociedades en etapas de desarrollo; Carrizosa examina su influencia en planes y aspiraciones nacionales.'}
    ],
    assumptions:['La selección de episodios supone que ciertas ideas dominantes permiten explicar largos periodos; no sustituye una historia intelectual detallada.','Las continuidades entre imágenes prehispánicas y prácticas actuales se presentan como interpretación plausible, no como genealogía demostrada en cada caso.','“Los colombianos” puede ocultar diferencias regionales, de género, clase, etnia y poder para imponer una imagen nacional.'],
    conclusions:['Las representaciones del país producen efectos materiales.','Cada proyecto nacional simplifica una realidad que contiene memorias e intereses múltiples.','Comprender Colombia exige estudiar simultáneamente paisaje, experiencia histórica e ideas dominantes.'],
    openQuestions:['¿Qué imaginarios de mujeres, comunidades locales y regiones periféricas quedan fuera de esta secuencia?','¿Cómo distinguir una imagen compartida de una impuesta por élites o medios?','¿Qué cambió en los imaginarios de paz después de 2014?'],
    retrieval:[{question:'¿Qué significa “lo real más lo imaginario” en el argumento?',answer:'Que la complejidad nacional incluye condiciones materiales y representaciones capaces de orientar acciones e instituciones.'},{question:'Nombra tres imaginarios que el capítulo conecta con efectos históricos.',answer:'Por ejemplo: conquista imperial, modernización/desarrollo y seguridad; también Ilustración, riqueza fácil o paz.'},{question:'¿Cuál es el principal límite metodológico de esta panorámica?',answer:'Condensa siglos y grupos muy distintos en una secuencia interpretativa que necesita contraste regional e historiográfico.'}],
    mediaIds:['map-regions','tayrona']
  },
  c2: {
    chapterId: 'c2',
    scope: 'Lectura directa de las páginas impresas 37–68 (páginas 38–69 del PDF). El capítulo alterna historia demográfica, grupos ocupacionales y una interpretación de capacidades y desigualdades.',
    explanation: [
      'La tesis no es que exista un carácter colombiano inmutable. Carrizosa describe una población formada por migraciones, catástrofe epidemiológica, mezcla, conflicto, aprendizaje y adaptación en ambientes muy diferentes. Genes, educación, instituciones y territorio interactúan; ninguno explica por sí solo a “la gente”.',
      'Tras la síntesis histórica, el autor cambia de escala y observa grupos por su función en la reproducción material: quienes alimentan, comercian, transportan, construyen y producen. La elección muestra logros colectivos que suelen desaparecer bajo relatos centrados solo en presidentes, guerras o élites.',
      'El cierre confronta creatividad y capacidad de trabajo con pobreza, corrupción, violencia, concentración y desconfianza. Esta tensión prepara la tesis general del libro: una sociedad diversa enfrenta la alta complejidad territorial mediante estructuras decisorias demasiado concentradas y lecturas binarias.'
    ],
    sections: [
      {title:'Experiencia prehistórica y catástrofe biológica',pages:'39–40',argument:'La experiencia indígena dejó conocimientos y memorias; invasión, enfermedad, trabajo forzado y ruptura social redujeron drásticamente las poblaciones originarias.',examples:['Viruela, sarampión y tifo.','Cargueros, bogas y separación de madres e hijos.']},
      {title:'Mestizos y mulatos',pages:'40–41',argument:'La mezcla fue biológica, cultural y política, atravesada por relaciones desiguales; los censos coloniales permiten ver cambios sin convertir categorías raciales históricas en esencias.',examples:['Estimaciones de 1650.','Censo colonial de 1778 y crecimiento de población libre o mestiza.']},
      {title:'La patria abstracta',pages:'42–43',argument:'Las primeras repúblicas fueron imaginadas mediante ideas ilustradas universales, mientras el territorio y sus poblaciones concretas desbordaban el diseño institucional.',examples:['Constituciones provinciales de 1809–1812.','Ejecución de líderes ilustrados durante la reconquista.']},
      {title:'Militares, caballeros, ideólogos y un nuevo país',pages:'43–45',argument:'La independencia reunió actores con experiencias y proyectos incompatibles; el nuevo Estado heredó distancias, regionalismos y jerarquías.',examples:['Carta de Bolívar a Santander de 1821.','Guerras civiles y construcción republicana.']},
      {title:'Gente y clase',pages:'45–46',argument:'El crecimiento poblacional y la movilidad no eliminaron jerarquías; clase, ocupación, educación y región ordenaron oportunidades.',examples:['Primer censo del siglo XX en 1905.','Urbanización y ampliación de actividades especializadas.']},
      {title:'Alimentadores, comerciantes, transportadores, constructores y productores',pages:'47–54',argument:'La nación también es resultado de millones de tareas materiales que conectan regiones y sostienen ciudades; reconocerlas corrige una historia reducida a dirigentes.',examples:['Producción y circulación de alimentos.','Caminos, navegación y transporte terrestre.','Construcción de vivienda e infraestructura.']},
      {title:'Pacíficos y guerreros',pages:'54–56',argument:'La continuidad de la vida cotidiana convive con la capacidad organizada de ejercer violencia; evitar una esencia “violenta” exige explicar instituciones, conflictos e incentivos.',examples:['Guerras civiles y violencia partidista.','Persistencia de comunidades que trabajan y cuidan en medio del conflicto.']},
      {title:'Ricos, corruptos y pobres',pages:'56–62',argument:'Concentración económica, pobreza y corrupción limitan la pluralidad efectiva y producen desigual acceso a decisiones y bienes.',examples:['Diferencias de ingreso y propiedad.','Relación ambigua entre legalidad formal y prácticas de apropiación.']},
      {title:'Saber, placer, creación y gestión',pages:'62–68',argument:'Educación, ciencia, artes y capacidad organizativa muestran una sociedad más compleja que sus estereotipos; el desafío es convertir capacidades dispersas en resultados colectivos equitativos.',examples:['Expansión universitaria y profesional.','Música, literatura, investigación y deporte.','Desconfianza institucional y búsqueda de culpables simples.']}
    ],
    vocabulary:[{term:'Mestizaje',definition:'Proceso histórico de mezcla biológica y cultural ocurrido bajo relaciones de poder; no equivale a homogeneidad ni borra identidades.'},{term:'Categoría censal',definition:'Clasificación usada para contar población en un momento; depende de normas y no debe leerse como identidad natural estable.'},{term:'Movilidad social',definition:'Cambio de posición socioeconómica entre personas o generaciones, condicionado por educación, propiedad, región y redes.'},{term:'Paradigma de simplicidad',definition:'Tendencia a valorar realidades complejas mediante oposiciones binarias y causas únicas.'}],
    assumptions:['Las cifras coloniales y republicanas tienen coberturas y categorías variables; deben compararse con crítica de fuentes.','Agrupar por ocupaciones ilumina contribuciones materiales, pero puede ocultar género, informalidad y trabajo de cuidado.','Las hipótesis sobre memorias transgeneracionales no se prueban en el capítulo mediante evidencia psicológica específica.'],
    conclusions:['La diversidad actual procede de procesos históricos violentos y creativos, no de una mezcla armónica predeterminada.','Las capacidades colectivas contrastan con desigualdad y concentración de decisiones.','Explicar violencia o corrupción exige evitar diagnósticos morales sobre una supuesta esencia nacional.'],
    openQuestions:['¿Cómo cambian las cifras al armonizar categorías censales desde 1778?','¿Dónde aparecen las mujeres y el trabajo de cuidado en la historia ocupacional?','¿Qué transformaciones demográficas posteriores al Censo 2018 modifican el panorama?'],
    retrieval:[{question:'¿Por qué el capítulo rechaza implícitamente una esencia fija de “la gente colombiana”?',answer:'Porque explica la población como resultado cambiante de migración, mezcla, ambiente, educación, instituciones y conflicto.'},{question:'¿Para qué sirve la secuencia de grupos ocupacionales?',answer:'Para mostrar que la construcción nacional depende de trabajos materiales y redes cotidianas, no solo de élites y guerras.'},{question:'¿Qué precaución exige comparar censos?',answer:'Revisar cobertura, categorías, territorio y método de cada conteo antes de interpretar cambios.'}],
    mediaIds:['amazonia','llanos']
  },
  c3: {
    chapterId: 'c3',
    scope: 'Lectura directa de las páginas impresas 69–92 (páginas 70–93 del PDF). La síntesis combina geología, clima, agua, suelos, biodiversidad y construcción social; sus cifras conservan la fecha de las fuentes citadas por el autor.',
    explanation: [
      'El capítulo reconstruye el territorio como proceso, no como escenario inmóvil. La posición entre placas, el levantamiento de cordilleras, antiguos mares, volcanismo, fallas, glaciaciones, circulación atmosférica y agua producen una heterogeneidad que continúa cambiando.',
      'Carrizosa conecta esa historia profunda con la diversificación biológica: gradientes altitudinales, aislamiento, refugios y microclimas multiplican nichos y endemismos. “Megabiodiversidad” es así un resultado de relaciones geológicas y climáticas, no un inventario decorativo de especies.',
      'El tramo final introduce una cautela decisiva: biomas y ecosistemas son agrupaciones construidas por investigadores a determinadas escalas. El territorio biofísico condiciona posibilidades humanas, pero la ocupación, el conocimiento y el poder terminan construyéndolo socialmente.'
    ],
    sections:[
      {title:'Posición planetaria, placas y clima',pages:'69–74',argument:'La esquina noroccidental de Suramérica reúne contactos tectónicos y circulaciones oceánicas y atmosféricas que explican parte de su dinamismo y variedad.',examples:['Placas Suramericana, Caribe, Nazca y Cocos.','Zona de Convergencia Intertropical.','Variación de temperatura con la altitud y contrastes de radiación.']},
      {title:'Rocas antiguas; placas, aguas y cordilleras',pages:'74–79',argument:'Macizos, sedimentos marinos, fallas y levantamientos sucesivos produjeron un relieve fragmentado cuya lectura depende de mapas y escalas.',examples:['Escudos precámbricos del oriente.','Sedimentos marinos bajo altiplanos.','Fallas geológicas y sismicidad.']},
      {title:'Cordilleras, orogenia y glaciaciones',pages:'79–82',argument:'El levantamiento andino y los ciclos glaciales aislaron poblaciones y crearon refugios, gradientes y nichos que favorecieron diferenciación biológica.',examples:['Cordilleras ígneas y metamórficas.','Páramos y bosques altoandinos.','Endemismos asociados al aislamiento.']},
      {title:'Territorio marino y agua dulce',pages:'82–84',argument:'Dos costas, relieves submarinos, manglares y un ciclo hídrico intenso amplían la diversidad, pero abundancia nacional no garantiza abastecimiento local.',examples:['Caribe y Pacífico con historias y condiciones distintas.','Más de 400 municipios señalados por la fuente de 2010 como vulnerables al desabastecimiento.','Bosques, infiltración, acuíferos y microcuencas.']},
      {title:'Coincidencia de energías y masas',pages:'84–86',argument:'Radiación, gravedad, tectónica, agua, viento y materia viva interactúan; la singularidad emerge de su coincidencia, no de una causa única.',examples:['Lluvia sobre rocas y relieves diversos.','Intercambios entre atmósfera, océanos, suelos y organismos.']},
      {title:'Megabiodiversidad y especies únicas',pages:'86–89',argument:'Las cifras disponibles muestran riqueza y endemismo extraordinarios, aunque son inventarios fechados, incompletos y sensibles a cambios taxonómicos.',examples:['Diversidad de peces de agua dulce y páramos.','Centros de endemismo.','Vacíos de conocimiento sobre insectos, hongos, bacterias y virus.']},
      {title:'Suelos, agrupaciones y ecosistemas',pages:'89–91',argument:'Suelos y ecosistemas no forman unidades simples: se clasifican según preguntas, escalas y metodologías institucionales.',examples:['Mapa de Ecosistemas de Colombia de 2007.','Tres grandes biomas, 32 tipos de bioma y 311 tipos de ecosistemas en esa metodología.']},
      {title:'Construcción social del territorio',pages:'91–92',argument:'Los grupos humanos interpretaron y transformaron esta diversidad desde su llegada; el ambiente abre y restringe opciones sin determinar una única organización social.',examples:['Rutas de poblamiento y aprovechamiento de pesca, fauna y plantas.','Diferenciación lingüística y organizativa de grupos.']}
    ],
    vocabulary:[{term:'Orogenia',definition:'Conjunto de procesos tectónicos que levantan y deforman montañas a lo largo de tiempos geológicos.'},{term:'Endemismo',definition:'Distribución de una especie restringida a un área; depende de la escala y del conocimiento disponible.'},{term:'Bioma',definition:'Gran agrupación ecológica definida por clima, suelo y vegetación; es una herramienta de clasificación, no una frontera absoluta.'},{term:'Microcuenca',definition:'Unidad pequeña de drenaje en la que el agua converge hacia un cauce común.'},{term:'Determinismo ambiental',definition:'Idea de que el ambiente fija de manera directa la sociedad; el capítulo permite hablar de condicionamientos, no de destinos inevitables.'}],
    assumptions:['Las cifras de biodiversidad proceden de inventarios previos a 2014 y no deben presentarse como conteos vigentes.','Los mapas generalizan: una unidad cartográfica no reproduce toda la variación local.','Relacionar geología, biodiversidad y sociedad requiere distinguir mecanismo documentado de analogía interpretativa.'],
    conclusions:['La estructura física colombiana es una historia de interacciones y cambios.','La diversidad biológica emerge de gradientes, aislamiento y conectividad en múltiples escalas.','Abundancia de agua o biodiversidad no implica acceso equitativo ni buen gobierno.'],
    openQuestions:['¿Cómo han cambiado desde 2014 los inventarios de especies y ecosistemas?','¿Qué efectos observados del cambio climático modifican los patrones descritos?','¿Cómo incorporar conocimiento indígena y local sin reducirlo a datos biofísicos?'],
    retrieval:[{question:'¿Por qué el relieve colombiano no puede explicarse con una sola cordillera o placa?',answer:'Porque resulta de contactos tectónicos, sedimentos, volcanismo, fallas, levantamientos y erosión en tiempos distintos.'},{question:'¿Cómo conecta el capítulo orogenia y biodiversidad?',answer:'El levantamiento crea gradientes, aislamiento, refugios y nichos que favorecen diferenciación y endemismo.'},{question:'¿Qué diferencia hay entre abundancia hídrica y seguridad hídrica?',answer:'La primera describe disponibilidad agregada; la segunda depende de ubicación, calidad, infraestructura, ecosistemas y acceso social.'}],
    mediaIds:['chingaza','llanos','amazonia','tayrona']
  }
};
