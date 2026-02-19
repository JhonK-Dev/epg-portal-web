/**
 * Configuración visual de la aplicación
 * 
 * Esta carpeta contiene configuraciones visuales, labels, colores
 * y mapeos que se usan en la UI.
 * 
 * Separado de:
 * - src/types/: Tipos de datos del dominio
 * - src/lib/api/: Tipos y clientes de APIs externas
 * 
 * @module lib/config
 */

// Programas
export {
  getProgramTypeConfig,
  tipoProgramaLabels,
  tipoProgramaColors,
  tipoProgramaButtonColors,
  tipoProgramaBadgeColors,
} from './program-types';

export type { ProgramTypeConfig } from './program-types';

// Publicaciones
export {
  getPublicationTypeConfig,
  tipoPublicacionLabels,
  tipoPublicacionColors,
  tipoPublicacionBadgeColors,
  tipoPublicacionBadgeWhiteColors,
} from './publication-types';

export type { PublicationTypeConfig } from './publication-types';

// Modalidades
export { modalidadLabels, modalidadColors } from './modalities';

// Grados académicos
export { gradoLabels, getGradoInfo } from './academic-degrees';
export type { GradoInfo } from './academic-degrees';

// Documentos
export { tipoDocumentoColors, tipoDocumentoLabels } from './document-types';

// Fechas de admisión
export { tipoFechaAdmisionColors, tipoFechaAdmisionLabels } from './admission-dates';

// Redes sociales
export { socialNetworkColors, getSocialNetworkClasses } from './social-networks';
export type { SocialNetworkStyle } from './social-networks';
