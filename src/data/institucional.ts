import { getCollection, getEntry } from 'astro:content';
import type { Documento, InfoInstitucional } from '@/types';

export async function getInfoInstitucional(): Promise<InfoInstitucional> {
  const entry = await getEntry('info_institucional', 'principal');

  if (!entry) {
    throw new Error("No se encontró 'info_institucional/principal'");
  }

  return {
    ...entry.data,
    id: entry.data.id ?? entry.id,
  } as InfoInstitucional;
}

export async function getDocumentosInstitucionales(): Promise<Documento[]> {
  const collection = await getCollection('documentos_institucionales');

  return collection.map((entry) => ({
    ...entry.data,
    id: entry.data.id ?? entry.id,
  })) as Documento[];
}

export async function getDocumentosByTipo(
  tipo: Documento['tipo'],
): Promise<Documento[]> {
  const documentos = await getDocumentosInstitucionales();
  return documentos.filter((d) => d.tipo === tipo);
}

export async function getReglamentos(): Promise<Documento[]> {
  return getDocumentosByTipo('reglamento');
}

export async function getFormatos(): Promise<Documento[]> {
  return getDocumentosByTipo('formato');
}

export async function getGuias(): Promise<Documento[]> {
  return getDocumentosByTipo('guia');
}

export async function getManuales(): Promise<Documento[]> {
  return getDocumentosByTipo('manual');
}
