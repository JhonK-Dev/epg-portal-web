import { getProgramaBySlug } from '@/data/programas'
import { getProgramRouteParam } from '@/lib/program-slugs'
import type { ApiProgram } from '@/lib/api/programs/types'
import type { Programa, TipoPrograma } from '@/types/programas'

const apiProgramTypeMap: Record<number, TipoPrograma> = {
  1: 'maestria',
  2: 'doctorado',
  3: 'diplomado',
  4: 'curso',
}

export function mapApiProgramType(programType: number): TipoPrograma {
  return apiProgramTypeMap[programType] ?? 'curso'
}

export function createShortDescription(
  description: string,
  maxLength: number = 100,
): string {
  if (description.length <= maxLength) {
    return description
  }

  return `${description.slice(0, maxLength).trimEnd()}...`
}

export function findMockProgramForApiProgram(
  apiProgram: Pick<ApiProgram, 'name'>,
): Programa | undefined {
  const slug = getProgramRouteParam({ name: apiProgram.name })
  return getProgramaBySlug(slug)
}

export function mapApiProgramToPrograma(
  apiProgram: ApiProgram,
  fallbackProgram?: Programa,
): Programa {
  const matchedProgram = fallbackProgram ?? findMockProgramForApiProgram(apiProgram)
  const slug = matchedProgram?.slug ?? getProgramRouteParam({ name: apiProgram.name })
  const tipo = matchedProgram?.tipo ?? mapApiProgramType(apiProgram.program_type)

  return {
    id: matchedProgram?.id ?? String(apiProgram.id),
    nombre: apiProgram.name,
    tipo,
    descripcion: apiProgram.description,
    descripcionCorta:
      matchedProgram?.descripcionCorta ?? createShortDescription(apiProgram.description),
    duracion: matchedProgram?.duracion ?? 'Por definir',
    creditos: matchedProgram?.creditos ?? 0,
    modalidad: matchedProgram?.modalidad ?? 'presencial',
    estado: apiProgram.is_active ? 'activo' : 'inactivo',
    fechaInicio: matchedProgram?.fechaInicio,
    imagen: matchedProgram?.imagen ?? apiProgram.background,
    slug,
    facultad: matchedProgram?.facultad ?? 'Por definir',
    requisitos: matchedProgram?.requisitos,
    planEstudios: matchedProgram?.planEstudios,
    coordinador: matchedProgram?.coordinador,
    inversion: matchedProgram?.inversion,
    destacado: matchedProgram?.destacado,
  }
}
