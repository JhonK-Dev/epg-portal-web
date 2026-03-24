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

export interface AccesoRapido {
  id: string;
  nombre: string;
  descripcion: string;
  icono: 'clipboard' | 'monitor' | 'book-open' | 'mail' | 'calendar' | 'file-text' | 'users' | 'award';
  href: string;
  color: string; // Tailwind color class
}

export interface TramiteEstudiantil {
  id: string;
  nombre: string;
  descripcion: string;
  icono: 'clipboard-check' | 'award' | 'users' | 'pause-circle' | 'shuffle' | 'file-text' | 'graduation-cap' | 'credit-card';
  color: string; // bg color class
  iconColor: string; // icon color class
  href: string;
  requisitos: string[];
  pasos: string[];
  documentos: string[];
  costo?: string;
  duracion?: string;
}

export interface DocumentoDescargable {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'pdf' | 'docx' | 'xlsx';
  categoria: 'reglamento' | 'formato' | 'guia' | 'manual';
  url: string;
  fechaActualizacion: string;
}

export interface FechaCalendario {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin?: string;
  tipo: 'matricula' | 'examen' | 'sustentacion' | 'vacaciones' | 'evento' | 'pago';
  importante: boolean;
}

export interface RecursoAcademico {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  href: string;
  externo: boolean;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: 'matricula' | 'tramites' | 'tesis' | 'pagos' | 'general';
}
