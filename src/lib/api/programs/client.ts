/**
 * Cliente para el microservicio de Programas
 * @module lib/api/programs/client
 */

import { buildQueryString, endpoints, fetchApi } from '../shared';
import type { ApiProgram, ProgramFilters } from './types';

export async function getPrograms(
  filters?: ProgramFilters
): Promise<ApiProgram[]> {
  const queryString = filters
    ? buildQueryString(filters as Record<string, unknown>)
    : '';
  return fetchApi<ApiProgram[]>(`${endpoints.programs.list}${queryString}`);
}

export async function getProgramsList(params: ProgramFilters) {
  return getPrograms(params);
}

export async function getProgramByUuid(
  uuid: string
): Promise<ApiProgram | undefined> {
  const programs = await getPrograms({ uuid, is_active: true });
  return programs[0];
}

export async function getFeaturedPrograms(
  limit: number = 6
): Promise<ApiProgram[]> {
  const programs = await getPrograms({ is_active: true });
  return programs.slice(0, limit);
}
