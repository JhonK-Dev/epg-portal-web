/**
 * Cliente API - EPG Portal Web
 * 
 * Estructura organizada por microservicios:
 * - shared/: Utilidades compartidas entre todas las APIs
 * - programs/: Microservicio de programas académicos
 * 
 * Para agregar un nuevo microservicio:
 * 1. Crear carpeta src/lib/api/[servicio]/
 * 2. Crear types.ts, client.ts, index.ts
 * 3. Exportar desde este archivo
 * 
 * @module lib/api
 */

// Shared utilities
export {
  fetchApi,
  buildQueryString,
  API_BASE_URL,
  ApiError,
} from './shared';

export {
  ApiEndpoints,
  ApiServices,
  getEndpoints,
} from './shared';

export type {
  ApiServiceType,
  ApiResponse,
  PaginatedApiResponse,
} from './shared';

// Programs microservice
export type {
  ApiProgram,
  ProgramFilters,
  ProgramType,
  Area,
} from './programs';

export {
  getPrograms,
  getActivePrograms,
  getProgramsByType,
  getProgramByUuid,
  getFeaturedPrograms,
} from './programs';

// Re-export programs namespace for convenience
export * as ProgramsAPI from './programs';
