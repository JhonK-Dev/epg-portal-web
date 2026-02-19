/**
 * Microservicio de Programas
 * @module lib/api/programs
 */

export type { ApiProgram, ProgramFilters, ProgramType, Area } from './types';
export {
  getPrograms,
  getActivePrograms,
  getProgramsByType,
  getProgramByUuid,
  getFeaturedPrograms,
} from './client';
