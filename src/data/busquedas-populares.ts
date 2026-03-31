import { getCollection } from 'astro:content';
import type { BusquedaPopular } from '@/types';
export { getBusquedaUrl } from '@/lib/busquedas-helpers';

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
export async function getBusquedasPopulares(): Promise<BusquedaPopular[]> {
  const collection = await getCollection('busquedas_populares');
  return collection.map((entry) => ({ ...entry.data, id: entry.data.id ?? entry.id })) as BusquedaPopular[];
}

