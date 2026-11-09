export interface MediaItem {
  id: string;
  title: string;
  author: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  localPath: string;
  alt: string;
  description: string;
  relation: string;
  chapterIds: string[];
  modified: boolean;
}

export const media: MediaItem[] = [
  {id:'map-regions',title:'Mapa de Colombia (regiones naturales)',author:'Milenioscuro',sourceUrl:'https://commons.wikimedia.org/wiki/File:Mapa_de_Colombia_(regiones_naturales).svg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',localPath:'/media/regiones-naturales-colombia.svg',alt:'Mapa de Colombia coloreado por regiones naturales.',description:'Mapa sintético de las seis regiones naturales, basado en información del IGAC.',relation:'Permite discutir cómo toda regionalización selecciona límites y variables; sirve de puente hacia los capítulos 3 y 5.',chapterIds:['c3','c5'],modified:false},
  {id:'tayrona',title:'Parque Nacional Natural Tayrona',author:'Ministerio de Ambiente de Colombia',sourceUrl:'https://commons.wikimedia.org/wiki/File:Tayrona.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',localPath:'/media/fase-3/tayrona.webp',alt:'Costa rocosa y boscosa del Parque Nacional Natural Tayrona frente al mar Caribe.',description:'Vista del encuentro entre bosque, macizo costero y mar Caribe.',relation:'Hace visible la interacción de relieve, agua, ecosistemas e historia territorial discutida en los capítulos 1 y 3.',chapterIds:['c1','c3','c5'],modified:true},
  {id:'chingaza',title:'Paisaje de páramo en Chingaza',author:'Biodiego88',sourceUrl:'https://commons.wikimedia.org/wiki/File:P%C3%A1ramo_PNN_Chingaza.jpg',license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',localPath:'/media/fase-3/chingaza.webp',alt:'Montañas de páramo cubiertas por pajonales y vegetación baja bajo un cielo nublado en Chingaza.',description:'Paisaje de alta montaña del Parque Nacional Natural Chingaza.',relation:'Ilustra gradientes altitudinales, orogenia, agua y diversidad de los páramos tratados en el capítulo 3.',chapterIds:['c3','c5'],modified:true},
  {id:'llanos',title:'Amanecer en los Llanos Orientales',author:'Neil Palmer (CIAT)',sourceUrl:'https://commons.wikimedia.org/wiki/File:Dawn_in_Llanos,_Colombia.jpg',license:'CC BY-SA 2.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/2.0/',localPath:'/media/fase-3/llanos.webp',alt:'Sol naciente sobre una sabana inundable de los Llanos Orientales de Colombia.',description:'Sabana de la Orinoquía al amanecer, fotografiada por el CIAT.',relation:'Contrasta las planicies orientales con el relieve andino y apoya la comparación de sistemas territoriales.',chapterIds:['c2','c3','c5'],modified:true},
  {id:'amazonia',title:'Paisaje del Amazonas colombiano en Leticia',author:'Jonathan Vélez Giraldo',sourceUrl:'https://commons.wikimedia.org/wiki/File:Leticia_en_el_amazonas_colombiano.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',localPath:'/media/fase-3/amazonia.webp',alt:'Río ancho bordeado por vegetación amazónica cerca de Leticia, Colombia.',description:'Vista fluvial y forestal del entorno amazónico colombiano.',relation:'Apoya la lectura de agua, selva, poblamiento y diferencias regionales en los capítulos 2, 3 y 5.',chapterIds:['c2','c3','c5'],modified:true},
  {id:'author-portrait',title:'Retrato autorizado de Julio Carrizosa Umaña',author:'Pendiente',sourceUrl:'',license:'Pendiente de autorización o licencia abierta',licenseUrl:'',localPath:'',alt:'',description:'No se publica hasta verificar una licencia compatible.',relation:'Pendiente documental de Fase 3.',chapterIds:[],modified:false},
  {id:'book-cover',title:'Portada de Colombia compleja',author:'Santiago Reyes Paris; diseño Susana Rudas Lleras',sourceUrl:'',license:'No reutilizada: los créditos no establecen licencia web',licenseUrl:'',localPath:'',alt:'',description:'Se registra la autoría, pero no se reproduce la portada.',relation:'Pendiente de permiso expreso.',chapterIds:[],modified:false}
];
