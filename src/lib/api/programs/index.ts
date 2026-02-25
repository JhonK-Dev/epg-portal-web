/**
 * Microservicio de Programas
 * @module lib/api/programs
 */

export {
  getFeaturedPrograms,
  getProgramByUuid,
  getPrograms,
  getProgramsList,
} from './client';

export type { ApiProgram, Area, ProgramFilters, ProgramType } from './types';
