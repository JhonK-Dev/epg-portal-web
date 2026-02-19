/**
 * Tipos del dominio: Docentes y Académicos
 * @module types/docentes
 */

export type GradoAcademico = 'bachiller' | 'magister' | 'doctor' | 'phd';

export interface PublicacionAcademica {
  titulo: string;
  revista: string;
  anio: number;
  url?: string;
  doi?: string;
}

export interface FormacionAcademica {
  grado: string;
  institucion: string;
  pais: string;
  anio: number;
}

export interface ExperienciaProfesional {
  cargo: string;
  institucion: string;
  periodo: string;
  descripcion?: string;
}

export interface Docente {
  id: string;
  nombres: string;
  apellidos: string;
  grado: GradoAcademico;
  especialidad: string;
  email?: string;
  foto?: string;
  resumenPerfil?: string;
  programas?: string[]; // IDs de programas donde enseña
  orcid?: string;
  googleScholar?: string;
  // Campos extendidos para página de detalle
  biografia?: string;
  areasInvestigacion?: string[];
  formacionAcademica?: FormacionAcademica[];
  experienciaProfesional?: ExperienciaProfesional[];
  publicacionesAcademicas?: PublicacionAcademica[];
  reconocimientos?: string[];
  proyectosInvestigacion?: string[];
  telefono?: string;
  linkedin?: string;
  researchgate?: string;
}
