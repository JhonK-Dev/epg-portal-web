import fs from 'fs/promises';
import path from 'path';

import type { InfoContacto } from '../../src/types';

const baseContacto: InfoContacto = {
  direccion: 'Calle los Rosales S/N - Sta cuadra San Juan Bautista',
  telefono: '+51987654320',
  telefonoDisplay: '(065) 987-654-320',
  email: 'postgrado@unap.edu.pe',
  whatsapp: '+51987654320',
  horarioAtencion: 'Lunes a Viernes: 7:00 a.m. - 2:00 p.m.',
  coordenadas: {
    lat: -3.7437,
    lng: -73.2516,
  },
};

const contactos: Array<InfoContacto & { id: string }> = [
  {
    id: 'general',
    ...baseContacto,
  },
  {
    id: 'admision',
    ...baseContacto,
    telefono: '+51987654321',
    telefonoDisplay: '(065) 987-654-321',
    email: 'admision@unap.edu.pe',
    whatsapp: '+51987654321',
  },
  {
    id: 'soporte',
    ...baseContacto,
    telefono: '+51987654322',
    telefonoDisplay: '(065) 987-654-322',
    email: 'soporte@unap.edu.pe',
    whatsapp: '+51987654322',
  },
];

const CONTACTO_DIR = path.join(process.cwd(), 'src/content/contacto');

export async function seedContacto() {
  await fs.mkdir(CONTACTO_DIR, { recursive: true });

  const files = await fs.readdir(CONTACTO_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(CONTACTO_DIR, file));
    }
  }

  for (const contacto of contactos) {
    const filePath = path.join(CONTACTO_DIR, `${contacto.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(contacto, null, 2));
  }

  console.log(`✅ ${contactos.length} contactos generados en src/content/contacto/`);
}
