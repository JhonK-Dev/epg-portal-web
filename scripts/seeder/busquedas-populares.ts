import fs from 'fs/promises';
import path from 'path';

import type { BusquedaPopular } from '../../src/types';

const busquedasPopulares: BusquedaPopular[] = [
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

const BUSQUEDAS_DIR = path.join(process.cwd(), 'src/content/busquedas_populares');

export async function seedBusquedasPopulares() {
  await fs.mkdir(BUSQUEDAS_DIR, { recursive: true });

  const files = await fs.readdir(BUSQUEDAS_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(BUSQUEDAS_DIR, file));
    }
  }

  for (const busqueda of busquedasPopulares) {
    const filePath = path.join(BUSQUEDAS_DIR, `${busqueda.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(busqueda, null, 2));
  }

  console.log(`✅ ${busquedasPopulares.length} búsquedas populares generadas en src/content/busquedas_populares/`);
}
