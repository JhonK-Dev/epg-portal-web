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
export { API_BASE_URL, ApiError, buildQueryString, fetchApi } from './shared';

export { ApiServices, endpoints } from './shared';

export type {
  ApiResponse,
  ApiServiceType,
  PaginatedApiResponse,
} from './shared';

// Programs microservice
export type { ApiProgram, Area, ProgramFilters, ProgramType } from './programs';

export {
  getFeaturedPrograms,
  getProgramByUuid,
  getPrograms,
  getProgramsList,
} from './programs';

// Re-export programs namespace for convenience
export * as ProgramsAPI from './programs';
