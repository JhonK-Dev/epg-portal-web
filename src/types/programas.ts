/**
 * Tipos del dominio: Programas Académicos
 * @module types/programas
 */

export type TipoPrograma = 'maestria' | 'doctorado' | 'diplomado' | 'curso';

export type ModalidadPrograma = 'presencial' | 'semipresencial' | 'virtual';

export type EstadoPrograma = 'activo' | 'inactivo' | 'proximamente';

export interface Programa {
  id: string;
  nombre: string;
  tipo: TipoPrograma;
  descripcion: string;
  descripcionCorta: string;
  duracion: string; // Ej: "2 años", "4 semestres"
  creditos: number;
  modalidad: ModalidadPrograma;
  estado: EstadoPrograma;
  fechaInicio?: string;
  imagen?: string;
  slug: string;
  facultad: string;
  requisitos?: string[];
  planEstudios?: string; // URL al PDF
  coordinador?: string;
  inversion?: string;
  destacado?: boolean; // Mostrar en sección de programas destacados del Home
}

// Alias para compatibilidad hacia atrás
export type { Programa as Program };
export type { TipoPrograma as ProgramType };
export type { ModalidadPrograma as ProgramModality };
export type { EstadoPrograma as ProgramStatus };
