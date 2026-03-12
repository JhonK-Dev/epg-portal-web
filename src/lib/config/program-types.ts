/**
 * Configuración visual de Tipos de Programa
 * @module lib/config/program-types
 */

import { Award, BookOpen, GraduationCap, type LucideIcon } from 'lucide-react';

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
export function getProgramTypeConfig(tipo: number): ProgramTypeConfig {
  const configs: Record<number, ProgramTypeConfig> = {
    1: {
      label: 'Maestría',
      bgColor: 'bg-maestria-light',
      textColor: 'text-maestria',
      icon: GraduationCap,
    },
    2: {
      label: 'Doctorado',
      bgColor: 'bg-doctorado-light',
      textColor: 'text-doctorado',
      icon: Award,
    },
    3: {
      label: 'Diplomado',
      bgColor: 'bg-diplomado-light',
      textColor: 'text-diplomado',
      icon: BookOpen,
    },
  };

  return (
    configs[tipo] || {
      label: 'Programa',
      bgColor: 'bg-muted',
      textColor: 'text-muted-foreground',
      icon: GraduationCap,
    }
  );
}

// Etiquetas para tipos de programa
export const tipoProgramaLabels: Record<number, string> = {
  1: 'Maestría',
  2: 'Doctorado',
  3: 'Diplomado',
  4: 'Curso',
};

export const tipoProgramaTextLabels: Record<string, string> = {
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

// Colores para badges
export const tipoProgramaBadgeColors: Record<number, string> = {
  1: 'bg-maestria-light text-maestria',
  2: 'bg-doctorado-light text-doctorado',
  3: 'bg-diplomado-light text-diplomado',
  4: 'bg-curso-light text-curso',
};

export const tipoProgramaTextBadgeColors: Record<string, string> = {
  maestria: 'bg-maestria-light text-maestria',
  doctorado: 'bg-doctorado-light text-doctorado',
  diplomado: 'bg-diplomado-light text-diplomado',
  curso: 'bg-curso-light text-curso',
};
