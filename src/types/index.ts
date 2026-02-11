// ============================================
// TIPOS PRINCIPALES - EPG Portal Web
// ============================================

// --- PROGRAMAS ACADÉMICOS ---
export type TipoPrograma = 'maestria' | 'doctorado' | 'diplomado' | 'curso';

export interface Programa {
  id: string;
  nombre: string;
  tipo: TipoPrograma;
  descripcion: string;
  descripcionCorta: string;
  duracion: string; // Ej: "2 años", "4 semestres"
  creditos: number;
  modalidad: 'presencial' | 'semipresencial' | 'virtual';
  estado: 'activo' | 'inactivo' | 'proximamente';
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

// --- BÚSQUEDAS POPULARES ---
export interface BusquedaPopular {
  id: string;
  label: string; // Texto a mostrar al usuario
  query: string; // Query para la URL (/programas?q=xxx)
  tipo?: TipoPrograma; // Opcional: filtrar por tipo de programa
}

// --- PUBLICACIONES ---
export type TipoPublicacion = 'noticia' | 'evento' | 'aviso' | 'comunicado';

export interface Publicacion {
  id: string;
  titulo: string;
  tipo: TipoPublicacion;
  contenido: string;
  resumen: string;
  fecha: string;
  fechaEvento?: string; // Solo para eventos
  imagen?: string;
  slug: string;
  autor?: string;
  destacado: boolean;
  etiquetas?: string[];
}

// --- DOCENTES ---
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

// --- AUTORIDADES ---
export interface Autoridad {
  id: string;
  nombres: string;
  apellidos: string;
  cargo: string;
  grado: GradoAcademico;
  foto?: string;
  email?: string;
  telefono?: string;
  orden: number; // Para ordenar en la vista
}

// --- SERVICIOS ---
export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionCorta: string;
  icono: string; // Nombre del icono de Lucide
  url?: string; // URL externa si aplica
  esExterno: boolean;
  slug: string;
  instrucciones?: string;
}

// --- ADMISIÓN ---
export type EstadoConvocatoria = 'abierta' | 'cerrada' | 'proximamente' | 'en_evaluacion';

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

export interface DocumentoRequerido {
  nombre: string;
  descripcion: string;
  obligatorio: boolean;
}

export interface FechaImportante {
  fecha: string;
  descripcion: string;
  tipo: 'inscripcion' | 'examen' | 'resultados' | 'matricula' | 'inicio_clases';
}

// --- ESTUDIANTES ---
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

// --- NAVEGACIÓN ---
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items?: NavItem[];
}

// --- INFORMACIÓN INSTITUCIONAL ---
export interface InfoContacto {
  direccion: string;
  telefono: string;
  email: string;
  horarioAtencion: string;
  coordenadas?: {
    lat: number;
    lng: number;
  };
}

export interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

export interface Estadistica {
  valor: string;
  label: string;
  icono?: string;
}

// --- REGLAMENTOS Y DOCUMENTOS ---
export interface Documento {
  id: string;
  nombre: string;
  descripcion?: string;
  url: string;
  tipo: 'reglamento' | 'formato' | 'manual' | 'guia';
  fechaActualizacion?: string;
}

// --- HELPERS ---
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
