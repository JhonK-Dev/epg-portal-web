import { getEntry } from 'astro:content';
import type { InfoContacto } from '@/types';
export {
  getEmailHref,
  getTelefonoHref,
  getWhatsappHref,
} from '@/lib/contact-helpers';

async function getContactoById(id: string): Promise<InfoContacto> {
  const entry = await getEntry('contacto', id);
  if (!entry) {
    throw new Error(`No se encontró el contacto '${id}' en la colección`);
  }

  return {
    ...entry.data,
  } as InfoContacto;
}

export async function getContactoGeneral(): Promise<InfoContacto> {
  return getContactoById('general');
}

export async function getContactoAdmision(): Promise<InfoContacto> {
  return getContactoById('admision');
}

export async function getContactoSoporte(): Promise<InfoContacto> {
  return getContactoById('soporte');
}
