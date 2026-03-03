/**
 * Utilidades compartidas entre APIs
 * @module lib/api/shared
 */

export {
  API_BASE_URL,
  ApiError,
  buildQueryString,
  endpoints,
  fetchApi,
} from './client';
export { ApiServices } from './services';
export type { ApiServiceType } from './services';
export type { ApiResponse, PaginatedApiResponse } from './types';
