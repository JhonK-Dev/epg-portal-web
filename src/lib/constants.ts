/**
 * Constantes compartidas del proyecto EPG Portal Web
 * @module lib/constants
 */

import { GraduationCap, Award, BookOpen } from 'lucide-react';

// ========================================
// GRADOS ACADÉMICOS
// ========================================

export interface GradoInfo {
  label: string;
  labelFull: string;
  color: string;
  bgColor: string;
}

/**
 * Configuración de grados académicos con etiquetas y colores
 */
export const gradoLabels: Record<string, GradoInfo> = {
  doctor: { 
    label: 'Dr.', 
    labelFull: 'Doctor', 
    color: 'text-amber-800', 
    bgColor: 'bg-amber-100' 
  },
  phd: { 
    label: 'Ph.D.', 
    labelFull: 'PhD', 
    color: 'text-purple-800', 
    bgColor: 'bg-purple-100' 
  },
  magister: { 
    label: 'Mg.', 
    labelFull: 'Magíster', 
    color: 'text-blue-800', 
    bgColor: 'bg-blue-100' 
  },
  bachiller: { 
    label: 'Bach.', 
    labelFull: 'Bachiller', 
    color: 'text-gray-800', 
    bgColor: 'bg-gray-100' 
  },
};

/**
 * Obtiene la información de un grado académico
 */
export function getGradoInfo(grado: string): GradoInfo {
  return gradoLabels[grado] || gradoLabels.bachiller;
}

// ========================================
// TIPOS DE PROGRAMA
// ========================================

/**
 * Etiquetas para tipos de programa académico
 */
export const tipoProgramaLabels: Record<string, string> = {
  todos: 'Todos los programas',
  maestria: 'Maestría',
  doctorado: 'Doctorado',
  diplomado: 'Diplomado',
  curso: 'Curso',
};

/**
 * Colores de fondo para tipos de programa (para headers/hero)
 */
export const tipoProgramaColors: Record<string, string> = {
  maestria: 'bg-blue-600',
  doctorado: 'bg-purple-600',
  diplomado: 'bg-emerald-600',
  curso: 'bg-amber-600',
};

/**
 * Colores con hover para tipos de programa (para botones)
 */
export const tipoProgramaButtonColors: Record<string, string> = {
  maestria: 'bg-blue-600 hover:bg-blue-700',
  doctorado: 'bg-purple-600 hover:bg-purple-700',
  diplomado: 'bg-emerald-600 hover:bg-emerald-700',
  curso: 'bg-amber-600 hover:bg-amber-700',
};

/**
 * Colores para badges de tipos de programa
 */
export const tipoProgramaBadgeColors: Record<string, string> = {
  maestria: 'bg-blue-100 text-blue-800',
  doctorado: 'bg-purple-100 text-purple-800',
  diplomado: 'bg-emerald-100 text-emerald-800',
  curso: 'bg-amber-100 text-amber-800',
};

// ========================================
// MODALIDADES
// ========================================

/**
 * Etiquetas para modalidades de programa
 */
export const modalidadLabels: Record<string, string> = {
  todos: 'Todas las modalidades',
  presencial: 'Presencial',
  semipresencial: 'Semipresencial',
  virtual: 'Virtual',
};

/**
 * Colores para badges de modalidades
 */
export const modalidadColors: Record<string, string> = {
  presencial: 'bg-blue-100 text-blue-800',
  semipresencial: 'bg-purple-100 text-purple-800',
  virtual: 'bg-green-100 text-green-800',
};

// ========================================
// TIPOS DE PUBLICACIÓN
// ========================================

/**
 * Etiquetas para tipos de publicación
 */
export const tipoPublicacionLabels: Record<string, string> = {
  noticia: 'Noticia',
  evento: 'Evento',
  aviso: 'Aviso',
  comunicado: 'Comunicado',
};

/**
 * Colores de fondo para tipos de publicación
 */
export const tipoPublicacionColors: Record<string, string> = {
  noticia: 'bg-blue-600',
  evento: 'bg-purple-600',
  aviso: 'bg-amber-600',
  comunicado: 'bg-emerald-600',
};

/**
 * Colores para badges de tipos de publicación
 */
export const tipoPublicacionBadgeColors: Record<string, string> = {
  noticia: 'bg-blue-100 text-blue-800',
  evento: 'bg-purple-100 text-purple-800',
  aviso: 'bg-green-100 text-green-800',
  comunicado: 'bg-amber-100 text-amber-800',
};

/**
 * Colores para badges de tipos de publicación (versión con texto blanco)
 */
export const tipoPublicacionBadgeWhiteColors: Record<string, string> = {
  noticia: 'bg-blue-500 text-white',
  evento: 'bg-purple-500 text-white',
  aviso: 'bg-green-500 text-white',
  comunicado: 'bg-amber-500 text-white',
};

// ========================================
// TIPOS DE DOCUMENTO INSTITUCIONAL
// ========================================

/**
 * Colores para tipos de documento institucional
 */
export const tipoDocumentoColors: Record<string, string> = {
  reglamento: 'bg-red-100 text-red-800',
  formato: 'bg-blue-100 text-blue-800',
  guia: 'bg-green-100 text-green-800',
  manual: 'bg-purple-100 text-purple-800',
};

/**
 * Etiquetas para tipos de documento institucional
 */
export const tipoDocumentoLabels: Record<string, string> = {
  reglamento: 'Reglamento',
  formato: 'Formato',
  guia: 'Guía',
  manual: 'Manual',
};

// ========================================
// FECHAS DE ADMISIÓN
// ========================================

/**
 * Colores para tipos de fecha de admisión
 */
export const tipoFechaAdmisionColors: Record<string, string> = {
  inscripcion: 'bg-blue-500',
  examen: 'bg-purple-500',
  resultados: 'bg-emerald-500',
  matricula: 'bg-amber-500',
  inicio_clases: 'bg-green-600',
};

/**
 * Etiquetas para tipos de fecha de admisión
 */
export const tipoFechaAdmisionLabels: Record<string, string> = {
  inscripcion: 'Inscripción',
  examen: 'Examen',
  resultados: 'Resultados',
  matricula: 'Matrícula',
  inicio_clases: 'Inicio',
};

// ========================================
// CONFIGURACIÓN DE TIPOS (para Home)
// ========================================

export interface TypeConfig {
  label: string;
  bgColor: string;
  textColor: string;
  icon?: typeof GraduationCap;
}

/**
 * Obtiene la configuración visual para un tipo de programa
 * Usado principalmente en FeaturedPrograms
 */
export function getProgramTypeConfig(tipo: string): TypeConfig {
  const configs: Record<string, TypeConfig> = {
    maestria: { 
      label: 'Maestría', 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-700', 
      icon: GraduationCap 
    },
    doctorado: { 
      label: 'Doctorado', 
      bgColor: 'bg-amber-100', 
      textColor: 'text-amber-700', 
      icon: Award 
    },
    diplomado: { 
      label: 'Diplomado', 
      bgColor: 'bg-green-100', 
      textColor: 'text-green-700', 
      icon: BookOpen 
    },
  };
  
  return configs[tipo] || { 
    label: 'Programa', 
    bgColor: 'bg-gray-100', 
    textColor: 'text-gray-700', 
    icon: GraduationCap 
  };
}

/**
 * Obtiene la configuración visual para un tipo de publicación
 * Usado principalmente en NewsAndEvents
 */
export function getPublicationTypeConfig(tipo: string): { label: string; bgColor: string; textColor: string } {
  const configs: Record<string, { label: string; bgColor: string; textColor: string }> = {
    noticia: { label: 'Noticia', bgColor: 'bg-blue-500', textColor: 'text-white' },
    evento: { label: 'Evento', bgColor: 'bg-purple-500', textColor: 'text-white' },
    aviso: { label: 'Aviso', bgColor: 'bg-green-500', textColor: 'text-white' },
  };
  
  return configs[tipo] || { label: 'Publicación', bgColor: 'bg-gray-500', textColor: 'text-white' };
}
