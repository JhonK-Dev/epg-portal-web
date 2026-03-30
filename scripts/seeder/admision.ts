import fs from 'fs/promises';
import path from 'path';

import type { ProcesoAdmision } from '../../src/types';

const procesosAdmision: ProcesoAdmision[] = [
  {
    id: 'adm-2026-I',
    periodo: '2026-I',
    anio: 2026,
    fechaApertura: '2026-03-16',
    fechaCierre: '2026-04-30',
    fechasImportantes: [
      {
        etiqueta: 'Inscripciones',
        fechaInicio: '2026-03-16',
        fechaFin: '2026-04-30',
        descripcion: 'Período de inscripciones para el proceso de admisión',
      },
      {
        etiqueta: 'Examen de admisión',
        fechaInicio: '2026-05-09',
        descripcion: 'Evaluación de conocimientos',
      },
      {
        etiqueta: 'Resultados',
        fechaInicio: '2026-05-13',
        descripcion: 'Publicación de resultados',
      },
      {
        etiqueta: 'Inicio de clases',
        fechaInicio: '2026-06-01',
        descripcion: 'Comienzo del semestre académico',
      },
    ],
  },
  {
    id: 'adm-2026-II',
    periodo: '2026-II',
    anio: 2026,
    fechaApertura: '2026-08-03',
    fechaCierre: '2026-09-18',
    fechasImportantes: [
      {
        etiqueta: 'Inscripciones',
        fechaInicio: '2026-08-03',
        fechaFin: '2026-09-18',
      },
      {
        etiqueta: 'Examen de admisión',
        fechaInicio: '2026-10-03',
      },
      {
        etiqueta: 'Resultados',
        fechaInicio: '2026-10-07',
      },
      {
        etiqueta: 'Inicio de clases',
        fechaInicio: '2026-10-26',
      },
    ],
  },
];

const ADMISION_DIR = path.join(process.cwd(), 'src/content/admision');

export async function seedAdmision() {
  await fs.mkdir(ADMISION_DIR, { recursive: true });

  const files = await fs.readdir(ADMISION_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(ADMISION_DIR, file));
    }
  }

  for (const proceso of procesosAdmision) {
    const filePath = path.join(ADMISION_DIR, `${proceso.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(proceso, null, 2));
  }

  console.log(`✅ ${procesosAdmision.length} procesos de admisión generados en src/content/admision/`);
}
