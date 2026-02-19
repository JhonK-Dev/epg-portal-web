/**
 * Tipos específicos del microservicio de Programas
 * @module lib/api/programs/types
 */

export interface ApiProgram {
  id: number;
  uuid: string;
  unit_uuid: string;
  name: string;
  code: string;
  description: string;
  objetive: string;
  aplicant_profile: string;
  graduate_profile: string;
  background: string;
  is_active: boolean;
  program_type: number;
  area: number[];
}

export interface ProgramFilters {
  uuid?: string;
  program_type?: number;
  unit_uuid?: string;
  is_active?: boolean;
  area__name?: string;
  area__name__icontains?: string;
  area__id?: number;
  program_type__abbreviation?: string;
  program_type__abbreviation__icontains?: string;
}

export interface ProgramType {
  id: number;
  name: string;
  abbreviation: string;
}

export interface Area {
  id: number;
  name: string;
}
