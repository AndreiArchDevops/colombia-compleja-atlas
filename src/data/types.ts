export type Depth = 'inicial' | 'intermedio' | 'avanzado';
export type ClaimStatus = 'confirmada' | 'parcial' | 'controvertida' | 'refutada' | 'no-verificable' | 'interpretacion';

export interface Source {
  id: string; title: string; author: string; url: string; publisher: string;
  published?: string; accessed: string; kind: 'libro' | 'catalogo' | 'institucional' | 'academica' | 'datos';
  license?: string; notes?: string;
}
export interface Chapter {
  id: string; number: number; title: string; printedStart: number; printedEnd: number;
  question: string; thesis: string; initial: string; intermediate: string; advanced: string;
  concepts: string[]; connections: string[]; questions: string[]; review: 'preliminar' | 'completa';
}
export interface Passage {
  id: string; chapterId: string; page: number; quote: string; context: string; significance: string;
  emotion: string[]; sourceId: string; paraphrase?: string; connections?: string[];
}
export interface Claim {
  id: string; chapterId: string; page: number; statement: string; status: ClaimStatus;
  assessment: string; confidence: 'alta' | 'media' | 'baja'; sourceIds: string[]; reviewed: string;
}
export interface Event { id: string; year: string; title: string; description: string; sourceIds: string[]; category: string; }
export interface Concept { id: string; name: string; definition: string; chapterIds: string[]; related: string[]; }
export interface Quiz { id: string; question: string; options: string[]; answer: number; explanation: string; chapterId: string; }
