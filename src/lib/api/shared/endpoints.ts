/**
 * Catálogo centralizado de rutas API por microservicio.
 *
 * Cada propiedad agrupa las rutas de un microservicio.
 * La construcción de URLs completas y query strings se maneja en client.ts.
 *
 * @module lib/api/shared/endpoints
 */

export const endpoints = {
  // Microservicio: Program
  programs: {
    list: '/program/program/',
    detail: (uuid: string) => `/program/program/${uuid}/`,
  },
};
