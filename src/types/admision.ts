/**
 * Tipos del dominio: Admisión y Convocatorias
 * @module types/admision
 */

export type EstadoConvocatoria = 'abierta' | 'cerrada' | 'proximamente' | 'en_evaluacion';

export interface DocumentoRequerido {
  nombre: string;
  descripcion: string;
  obligatorio: boolean;
}

export interface Convocatoria {
  id: string;
  nombre: string;
  descripcion: string;
  estado: EstadoConvocatoria;
  fechaInicio: string;
  fechaFin: string;
  fechaExamen?: string;
  fechaResultados?: string;
  requisitos: string[];
  documentos: DocumentoRequerido[];
  programas: string[]; // IDs de programas incluidos
  slug: string;
}

export interface FechaImportante {
  fecha: string;
  descripcion: string;
  tipo: 'inscripcion' | 'examen' | 'resultados' | 'matricula' | 'inicio_clases';
}

export interface FechaImportanteAdmision {
  etiqueta: string;
  fechaInicio: string;
  fechaFin?: string;
  descripcion?: string;
}

export interface ProcesoAdmision {
  id: string;
  periodo: string;
  anio: number;
  fechaApertura: string;
  fechaCierre: string;
  fechasImportantes: FechaImportanteAdmision[];
  estadoOverride?: 'abierta' | 'cerrada' | 'proximamente' | 'en_evaluacion';
}
