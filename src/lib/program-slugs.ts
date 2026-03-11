export interface ProgramLinkable {
  name: string
}

export function normalizeProgramSlug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getProgramRouteParam(program: ProgramLinkable): string {
  return normalizeProgramSlug(program.name)
}

export function getProgramHref(program: ProgramLinkable): string {
  return `/programas/${getProgramRouteParam(program)}`
}
