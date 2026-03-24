import { getCollection, getEntry } from 'astro:content';
import type { Programa } from '@/types/programas';

export async function getProgramas(): Promise<Programa[]> {
  const collection = await getCollection('programas');
  return collection.map(entry => ({
    ...entry.data,
    id: entry.id, // add the id manually as it is filename or content id
  })) as Programa[];
}

export async function getProgramaBySlug(slug: string): Promise<Programa | undefined> {
  // Try to find it. In Astro data collections with JSON, the ID is often the filename without extension.
  // Wait, the id parameter for getEntry is the collection entry id (filename).
  // If the files are named slug.json, then the id IS the slug.
  const entry = await getEntry('programas', slug);
  if (!entry) return undefined;
  return { id: entry.id, ...entry.data } as Programa;
}

export async function getProgramaById(id: string): Promise<Programa | undefined> {
  // If the file is 'mae-001.json' then id is 'mae-001'. But our files are named by slug, so 'id' field is inside data.
  const all = await getProgramas();
  return all.find(p => p.id === id);
}
