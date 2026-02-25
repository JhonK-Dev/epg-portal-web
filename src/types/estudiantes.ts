/**
 * Tipos del dominio: Estudiantes y Procesos Estudiantiles
 * @module types/estudiantes
 */

export interface ProcesoEstudiantil {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  slug: string;
  requisitos?: string[];
  pasos?: string[];
}

export interface Sustentacion {
  id: string;
  tesista: string;
  titulo: string;
  programa: string;
  fecha: string;
  hora: string;
  lugar: string;
  jurados: string[];
  asesor: string;
  tipo: 'tesis' | 'proyecto' | 'trabajo_investigacion';
}
