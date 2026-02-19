/**
 * Utilidades compartidas entre APIs
 * @module lib/api/shared
 */

export { fetchApi, buildQueryString, API_BASE_URL, ApiError } from './client';
export { ApiEndpoints, ApiServices, getEndpoints } from './endpoints';
export type { ApiServiceType } from './endpoints';
export type { ApiResponse, PaginatedApiResponse } from './types';
