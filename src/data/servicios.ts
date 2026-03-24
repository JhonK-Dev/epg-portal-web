import { getCollection, getEntry } from 'astro:content';
import type { Servicio } from '@/types';

export async function getServicios(): Promise<Servicio[]> {
  const collection = await getCollection('servicios');
  return collection.map(entry => ({
    ...entry.data,
    id: entry.id,
  })) as Servicio[];
}

export async function getServicioById(id: string): Promise<Servicio | undefined> {
  const all = await getServicios();
  return all.find(s => s.id === id);
}

export async function getServicioBySlug(slug: string): Promise<Servicio | undefined> {
  const entry = await getEntry('servicios', slug);
  if (!entry) return undefined;
  return { id: entry.id, ...entry.data } as Servicio;
}

export async function getServiciosExternos(): Promise<Servicio[]> {
  const all = await getServicios();
  return all.filter(s => s.esExterno);
}

export async function getServiciosInternos(): Promise<Servicio[]> {
  const all = await getServicios();
  return all.filter(s => !s.esExterno);
}
