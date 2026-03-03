/**
 * Microservicio de Programas
 * @module lib/api/programs
 */

export {
  getFeaturedPrograms,
  getProgramBySlug,
  getProgramByUuid,
  getPrograms,
  getProgramsList,
} from './client';

export type { ApiProgram, Area, ProgramFilters, ProgramType } from './types';
