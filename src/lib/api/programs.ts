import { fetchApi, buildQueryString, endpoints } from './client';
import type { ApiProgram, ProgramFilters } from './types';

export async function getPrograms(filters?: ProgramFilters): Promise<ApiProgram[]> {
  const baseEndpoint = endpoints.programs.list;
  const queryString = filters ? buildQueryString(filters as Record<string, unknown>) : '';
  return fetchApi<ApiProgram[]>(`${baseEndpoint}${queryString}`);
}

export async function getActivePrograms(): Promise<ApiProgram[]> {
  return getPrograms({ is_active: true });
}

export async function getProgramsByType(programType: number): Promise<ApiProgram[]> {
  return getPrograms({ program_type: programType, is_active: true });
}

export async function getProgramByUuid(uuid: string): Promise<ApiProgram | undefined> {
  const programs = await getPrograms({ uuid, is_active: true });
  return programs[0];
}

export async function getFeaturedPrograms(limit: number = 4): Promise<ApiProgram[]> {
  const programs = await getActivePrograms();
  return programs.slice(0, limit);
}
