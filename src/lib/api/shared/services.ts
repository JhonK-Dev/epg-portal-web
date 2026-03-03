// Identificadores de microservicios para acceso type-safe
export const ApiServices = {
  PROGRAMS: 'programs',
} as const;

export type ApiServiceType = (typeof ApiServices)[keyof typeof ApiServices];
