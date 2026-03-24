import { getCollection, getEntry } from 'astro:content';
import type { 
  AccesoRapido, 
  TramiteEstudiantil, 
  DocumentoDescargable, 
  FechaCalendario, 
  RecursoAcademico, 
  PreguntaFrecuente 
} from '@/types'; // Need to define or keep these in types/

export async function getAccesosRapidos(): Promise<AccesoRapido[]> {
  const collection = await getCollection('estudiantes_accesos');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as AccesoRapido[];
}

export async function getTramitesEstudiantiles(): Promise<TramiteEstudiantil[]> {
  const collection = await getCollection('estudiantes_tramites');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as TramiteEstudiantil[];
}

export async function getDocumentosDescargables(): Promise<DocumentoDescargable[]> {
  const collection = await getCollection('estudiantes_documentos');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as DocumentoDescargable[];
}

export async function getCalendarioAcademico(): Promise<FechaCalendario[]> {
  const collection = await getCollection('estudiantes_calendario');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as FechaCalendario[];
}

export async function getRecursosAcademicos(): Promise<RecursoAcademico[]> {
  const collection = await getCollection('estudiantes_recursos');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as RecursoAcademico[];
}

export async function getPreguntasFrecuentes(): Promise<PreguntaFrecuente[]> {
  const collection = await getCollection('estudiantes_faq');
  return collection.map(entry => ({ ...entry.data, id: entry.id })) as PreguntaFrecuente[];
}

export async function getTramiteById(id: string): Promise<TramiteEstudiantil | undefined> {
  const all = await getTramitesEstudiantiles();
  return all.find(t => t.id === id);
}

export async function getDocumentosByCategoria(categoria: DocumentoDescargable['categoria']): Promise<DocumentoDescargable[]> {
  const all = await getDocumentosDescargables();
  return all.filter(d => d.categoria === categoria);
}

export async function getFechasImportantes(): Promise<FechaCalendario[]> {
  const all = await getCalendarioAcademico();
  return all.filter(f => f.importante);
}

export async function getPreguntasByCategoria(categoria: PreguntaFrecuente['categoria']): Promise<PreguntaFrecuente[]> {
  const all = await getPreguntasFrecuentes();
  return all.filter(p => p.categoria === categoria);
}

export async function getProximasFechas(cantidad: number = 5): Promise<FechaCalendario[]> {
  const hoy = new Date();
  const all = await getCalendarioAcademico();
  return all
    .filter(f => new Date(f.fechaInicio) >= hoy)
    .sort((a, b) => new Date(a.fechaInicio).getTime() - new Date(b.fechaInicio).getTime())
    .slice(0, cantidad);
}

export type {
  AccesoRapido,
  TramiteEstudiantil,
  DocumentoDescargable,
  FechaCalendario,
  RecursoAcademico,
  PreguntaFrecuente
}
