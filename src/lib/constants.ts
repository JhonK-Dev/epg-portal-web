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
    color: 'text-grado-doctor', 
    bgColor: 'bg-grado-doctor-light' 
  },
  phd: { 
    label: 'Ph.D.', 
    labelFull: 'PhD', 
    color: 'text-grado-phd', 
    bgColor: 'bg-grado-phd-light' 
  },
  magister: { 
    label: 'Mg.', 
    labelFull: 'Magíster', 
    color: 'text-grado-magister', 
    bgColor: 'bg-grado-magister-light' 
  },
  bachiller: { 
    label: 'Bach.', 
    labelFull: 'Bachiller', 
    color: 'text-grado-bachiller', 
    bgColor: 'bg-grado-bachiller-light' 
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
  maestria: 'bg-maestria',
  doctorado: 'bg-doctorado',
  diplomado: 'bg-diplomado',
  curso: 'bg-curso',
};

/**
 * Colores con hover para tipos de programa (para botones)
 */
export const tipoProgramaButtonColors: Record<string, string> = {
  maestria: 'bg-maestria hover:bg-maestria/90',
  doctorado: 'bg-doctorado hover:bg-doctorado/90',
  diplomado: 'bg-diplomado hover:bg-diplomado/90',
  curso: 'bg-curso hover:bg-curso/90',
};

/**
 * Colores para badges de tipos de programa
 */
export const tipoProgramaBadgeColors: Record<string, string> = {
  maestria: 'bg-maestria-light text-maestria',
  doctorado: 'bg-doctorado-light text-doctorado',
  diplomado: 'bg-diplomado-light text-diplomado',
  curso: 'bg-curso-light text-curso',
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
  presencial: 'bg-modalidad-presencial-light text-modalidad-presencial',
  semipresencial: 'bg-modalidad-semipresencial-light text-modalidad-semipresencial',
  virtual: 'bg-modalidad-virtual-light text-modalidad-virtual',
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
  noticia: 'bg-publicacion-noticia',
  evento: 'bg-publicacion-evento',
  aviso: 'bg-publicacion-aviso',
  comunicado: 'bg-publicacion-comunicado',
};

/**
 * Colores para badges de tipos de publicación
 */
export const tipoPublicacionBadgeColors: Record<string, string> = {
  noticia: 'bg-publicacion-noticia-light text-publicacion-noticia',
  evento: 'bg-publicacion-evento-light text-publicacion-evento',
  aviso: 'bg-publicacion-aviso-light text-publicacion-aviso',
  comunicado: 'bg-publicacion-comunicado-light text-publicacion-comunicado',
};

/**
 * Colores para badges de tipos de publicación (versión con texto blanco)
 */
export const tipoPublicacionBadgeWhiteColors: Record<string, string> = {
  noticia: 'bg-publicacion-noticia text-white',
  evento: 'bg-publicacion-evento text-white',
  aviso: 'bg-publicacion-aviso text-white',
  comunicado: 'bg-publicacion-comunicado text-white',
};

// ========================================
// TIPOS DE DOCUMENTO INSTITUCIONAL
// ========================================

/**
 * Colores para tipos de documento institucional
 */
export const tipoDocumentoColors: Record<string, string> = {
  reglamento: 'bg-documento-reglamento-light text-documento-reglamento',
  formato: 'bg-documento-formato-light text-documento-formato',
  guia: 'bg-documento-guia-light text-documento-guia',
  manual: 'bg-documento-manual-light text-documento-manual',
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
  inscripcion: 'bg-info',
  examen: 'bg-doctorado',
  resultados: 'bg-diplomado',
  matricula: 'bg-curso',
  inicio_clases: 'bg-success',
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
      bgColor: 'bg-maestria-light', 
      textColor: 'text-maestria', 
      icon: GraduationCap 
    },
    doctorado: { 
      label: 'Doctorado', 
      bgColor: 'bg-doctorado-light', 
      textColor: 'text-doctorado', 
      icon: Award 
    },
    diplomado: { 
      label: 'Diplomado', 
      bgColor: 'bg-diplomado-light', 
      textColor: 'text-diplomado', 
      icon: BookOpen 
    },
  };
  
  return configs[tipo] || { 
    label: 'Programa', 
    bgColor: 'bg-muted', 
    textColor: 'text-muted-foreground', 
    icon: GraduationCap 
  };
}

/**
 * Obtiene la configuración visual para un tipo de publicación
 * Usado principalmente en NewsAndEvents
 */
export function getPublicationTypeConfig(tipo: string): { label: string; bgColor: string; textColor: string } {
  const configs: Record<string, { label: string; bgColor: string; textColor: string }> = {
    noticia: { label: 'Noticia', bgColor: 'bg-publicacion-noticia', textColor: 'text-white' },
    evento: { label: 'Evento', bgColor: 'bg-publicacion-evento', textColor: 'text-white' },
    aviso: { label: 'Aviso', bgColor: 'bg-publicacion-aviso', textColor: 'text-white' },
  };
  
  return configs[tipo] || { label: 'Publicación', bgColor: 'bg-muted', textColor: 'text-muted-foreground' };
}

// ========================================
// REDES SOCIALES ACADÉMICAS
// ========================================

/**
 * Configuración de colores para redes sociales y plataformas académicas.
 * Los colores son los oficiales de cada marca/plataforma.
 */
export interface SocialNetworkStyle {
  bg: string;
  text: string;
  hover: string;
}

export const socialNetworkColors: Record<string, SocialNetworkStyle> = {
  orcid: {
    bg: 'bg-[#A6CE39]/20',
    text: 'text-[#A6CE39]',
    hover: 'hover:bg-[#A6CE39]/30',
  },
  googleScholar: {
    bg: 'bg-[#4285F4]/20',
    text: 'text-[#4285F4]',
    hover: 'hover:bg-[#4285F4]/30',
  },
  linkedin: {
    bg: 'bg-[#0A66C2]/20',
    text: 'text-[#0A66C2]',
    hover: 'hover:bg-[#0A66C2]/30',
  },
  researchGate: {
    bg: 'bg-[#00CCBB]/20',
    text: 'text-[#00CCBB]',
    hover: 'hover:bg-[#00CCBB]/30',
  },
};

/**
 * Genera las clases de Tailwind para un enlace de red social
 */
export function getSocialNetworkClasses(network: keyof typeof socialNetworkColors): string {
  const style = socialNetworkColors[network];
  return `${style.bg} ${style.text} ${style.hover}`;
}
