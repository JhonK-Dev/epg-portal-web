import type { BusquedaPopular } from '@/types';

/**
 * Búsquedas populares para el home
 * 
 * Se muestran como enlaces rápidos debajo del buscador principal
 * para ayudar a los usuarios a encontrar programas de interés común.
 * 
 * @example
 * - Label: Texto visible para el usuario
 * - Query: Parámetro de búsqueda (se codifica automáticamente en la URL)
 * - Tipo: (Opcional) Filtrar resultados por tipo de programa
 */
export const busquedasPopulares: BusquedaPopular[] = [
  {
    id: 'gestion-publica',
    label: 'Gestión Pública',
    query: 'gestion publica',
  },
  {
    id: 'derecho',
    label: 'Derecho',
    query: 'derecho',
  },
  {
    id: 'educacion',
    label: 'Educación',
    query: 'educacion',
  },
  {
    id: 'ambiental',
    label: 'Ambiental',
    query: 'ambiental',
  },
  {
    id: 'salud',
    label: 'Salud',
    query: 'salud',
  },
];

/**
 * Construye la URL de búsqueda con los parámetros apropiados
 * 
 * @param busqueda - Objeto BusquedaPopular
 * @returns URL completa para la búsqueda
 */
export function getBusquedaUrl(busqueda: BusquedaPopular): string {
  const params = new URLSearchParams();
  params.set('q', busqueda.query);
  
  if (busqueda.tipo) {
    params.set('tipo', busqueda.tipo);
  }
  
  return `/programas?${params.toString()}`;
}
