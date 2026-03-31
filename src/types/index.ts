/**
 * Tipos del dominio de la aplicación
 * 
 * Esta carpeta contiene los tipos de datos del dominio de negocio,
 * organizados por contexto funcional.
 * 
 * Convención:
 * - Tipos UI/Domain van aquí
 * - Tipos de API externos van en src/lib/api/[service]/types.ts
 * - Configuración visual va en src/lib/config/
 * 
 * @module types
 */

// Programas Académicos
export type {
  TipoPrograma,
  ModalidadPrograma,
  EstadoPrograma,
  Programa,
} from './programas';

// Docentes y Académicos
export type {
  GradoAcademico,
  PublicacionAcademica,
  FormacionAcademica,
  ExperienciaProfesional,
  Docente,
} from './docentes';

// Publicaciones
export type {
  TipoPublicacion,
  Publicacion,
  BusquedaPopular,
} from './publicaciones';

// Admisión
export type {
  EstadoConvocatoria,
  DocumentoRequerido,
  Convocatoria,
  FechaImportante,
  FechaImportanteAdmision,
  ProcesoAdmision,
} from './admision';

// Estudiantes
export type {
  ProcesoEstudiantil,
  Sustentacion,
  AccesoRapido,
  TramiteEstudiantil,
  DocumentoDescargable,
  FechaCalendario,
  RecursoAcademico,
  PreguntaFrecuente,
} from './estudiantes';

// Institucional
export type {
  Autoridad,
  Servicio,
  InfoContacto,
  RedSocial,
  Documento,
  InfoInstitucional,
} from './institucional';

// Navegación
export type {
  NavItem,
  NavGroup,
} from './navegacion';

// Compartidos y utilidades
export type {
  Estadistica,
  EstadisticaSimple,
  PaginatedResponse,
  ApiResponse,
} from './shared';

// Re-exportar tipos comunes para conveniencia
export type { GradoAcademico as AcademicDegree } from './docentes';
export type { TipoPrograma as ProgramType } from './programas';
export type { TipoPublicacion as PublicationType } from './publicaciones';
export type { EstadoConvocatoria as CallStatus } from './admision';
