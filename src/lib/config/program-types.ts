/**
 * Configuración visual de Tipos de Programa
 * @module lib/config/program-types
 */

import { GraduationCap, Award, BookOpen, type LucideIcon } from 'lucide-react';

export interface ProgramTypeConfig {
  label: string;
  bgColor: string;
  textColor: string;
  icon?: LucideIcon;
}

/**
 * Obtiene la configuración visual para un tipo de programa
 * Usado principalmente en FeaturedPrograms
 */
export function getProgramTypeConfig(tipo: string): ProgramTypeConfig {
  const configs: Record<string, ProgramTypeConfig> = {
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

// Etiquetas para tipos de programa
export const tipoProgramaLabels: Record<string, string> = {
  todos: 'Todos los programas',
  maestria: 'Maestría',
  doctorado: 'Doctorado',
  diplomado: 'Diplomado',
  curso: 'Curso',
};

// Colores de fondo para tipos de programa
export const tipoProgramaColors: Record<string, string> = {
  maestria: 'bg-maestria',
  doctorado: 'bg-doctorado',
  diplomado: 'bg-diplomado',
  curso: 'bg-curso',
};

// Colores con hover para botones
export const tipoProgramaButtonColors: Record<string, string> = {
  maestria: 'bg-maestria hover:bg-maestria/90',
  doctorado: 'bg-doctorado hover:bg-doctorado/90',
  diplomado: 'bg-diplomado hover:bg-diplomado/90',
  curso: 'bg-curso hover:bg-curso/90',
};

// Colores para badges
export const tipoProgramaBadgeColors: Record<string, string> = {
  maestria: 'bg-maestria-light text-maestria',
  doctorado: 'bg-doctorado-light text-doctorado',
  diplomado: 'bg-diplomado-light text-diplomado',
  curso: 'bg-curso-light text-curso',
};
