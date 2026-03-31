import { getCollection, getEntry } from 'astro:content';
import type { Convocatoria, FechaImportante } from '@/types';

export async function getConvocatorias(): Promise<Convocatoria[]> {
  const collection = await getCollection('convocatorias');

  return collection.map((entry) => ({
    ...entry.data,
    id: entry.data.id ?? entry.id,
  })) as Convocatoria[];
}

export async function getFechasImportantesAdmision(): Promise<FechaImportante[]> {
  const collection = await getCollection('fechas_importantes_admision');

  return collection.map((entry) => ({
    ...entry.data,
    id: entry.data.id ?? entry.id,
  })) as FechaImportante[];
}

export async function getConvocatoriaById(id: string): Promise<Convocatoria | undefined> {
  const entry = await getEntry('convocatorias', id);
  if (!entry) return undefined;
  return {
    ...entry.data,
    id: entry.data.id ?? entry.id,
  } as Convocatoria;
}

export async function getConvocatoriaBySlug(slug: string): Promise<Convocatoria | undefined> {
  const convocatorias = await getConvocatorias();
  return convocatorias.find((c) => c.slug === slug);
}

export async function getConvocatoriasAbiertas(): Promise<Convocatoria[]> {
  const convocatorias = await getConvocatorias();
  return convocatorias.filter((c) => c.estado === 'abierta');
}

export async function getConvocatoriasProximas(): Promise<Convocatoria[]> {
  const convocatorias = await getConvocatorias();
  return convocatorias.filter((c) => c.estado === 'proximamente');
}

export async function getFechasProximas(cantidad: number = 5): Promise<FechaImportante[]> {
  const hoy = new Date();
  const fechasImportantes = await getFechasImportantesAdmision();

  return fechasImportantes
    .filter((f) => new Date(f.fecha) >= hoy)
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
    .slice(0, cantidad);
}
