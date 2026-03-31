import { getCollection } from 'astro:content';
import type { Estadistica } from '@/types';

/**
 * Estadísticas institucionales de la EPG UNAP
 * Estos datos se muestran en la sección de estadísticas del Home
 */
export async function getEstadisticasInstitucionales(): Promise<Estadistica[]> {
  const collection = await getCollection('estadisticas');
  return collection.map((entry) => ({ ...entry.data, id: entry.data.id ?? entry.id })) as Estadistica[];
}
