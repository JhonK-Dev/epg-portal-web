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
  tipoProgramaBadgeColors,
  tipoProgramaColors,
  tipoProgramaLabels,
  tipoProgramaTextBadgeColors,
  tipoProgramaTextLabels,
} from './program-types';

export type { ProgramTypeConfig } from './program-types';

// Publicaciones
export {
  getPublicationTypeConfig,
  tipoPublicacionBadgeColors,
  tipoPublicacionBadgeWhiteColors,
  tipoPublicacionColors,
  tipoPublicacionLabels,
} from './publication-types';

export type { PublicationTypeConfig } from './publication-types';

// Modalidades
export { modalidadColors, modalidadLabels } from './modalities';

// Grados académicos
export { getGradoInfo, gradoLabels } from './academic-degrees';
export type { GradoInfo } from './academic-degrees';

// Documentos
export { tipoDocumentoColors, tipoDocumentoLabels } from './document-types';

// Fechas de admisión
export {
  tipoFechaAdmisionColors,
  tipoFechaAdmisionLabels,
} from './admission-dates';

// Redes sociales
export {
  getSocialNetworkClasses,
  socialNetworkColors,
} from './social-networks';
export type { SocialNetworkStyle } from './social-networks';
