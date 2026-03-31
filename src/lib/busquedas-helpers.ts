import type { BusquedaPopular } from '@/types';

export function getBusquedaUrl(busqueda: BusquedaPopular): string {
  const params = new URLSearchParams();
  params.set('q', busqueda.query);

  if (busqueda.tipo) {
    params.set('tipo', busqueda.tipo);
  }

  return `/programas?${params.toString()}`;
}
