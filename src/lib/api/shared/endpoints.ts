/**
 * Catálogo centralizado de rutas API por microservicio.
 *
 * Cada getter agrupa las rutas de un microservicio.
 * La construcción de URLs completas y query strings se maneja en client.ts.
 *
 * @module lib/api/shared/endpoints
 */

export class ApiEndpoints {
  constructor(private baseUrl: string) {}

  // Program endpoints
  get programs() {
    return {
      base: '/program/program/',
      list: '/program/program/',
      detail: (uuid: string) => `/program/program/${uuid}/`,
    };
  }
}
