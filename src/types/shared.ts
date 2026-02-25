/**
 * Tipos compartidos entre múltiples dominios
 * @module types/shared
 */

export interface Estadistica {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string; // Nombre del icono de Lucide
}

// Versión alternativa de Estadistica (para compatibilidad)
export interface EstadisticaSimple {
  valor: string;
  label: string;
  icono?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Re-exportar tipos comunes que se usan frecuentemente
export type { GradoAcademico } from './docentes';
export type { TipoPrograma, ModalidadPrograma, EstadoPrograma } from './programas';
export type { TipoPublicacion } from './publicaciones';
export type { EstadoConvocatoria } from './admision';
