import fs from 'fs/promises';
import path from 'path';

import type { Estadistica } from '../../src/types';

const estadisticasInstitucionales: Estadistica[] = [
  {
    id: 'trayectoria',
    value: '35+',
    label: 'Años de Trayectoria',
    description: 'Formando profesionales desde 1990',
    icon: 'Calendar',
  },
  {
    id: 'egresados',
    value: '2,500+',
    label: 'Egresados',
    description: 'Profesionales que lideran el cambio',
    icon: 'Users',
  },
  {
    id: 'maestrias',
    value: '15+',
    label: 'Maestrías',
    description: 'Programas de especialización',
    icon: 'GraduationCap',
  },
  {
    id: 'doctorados',
    value: '5',
    label: 'Doctorados',
    description: 'Investigación de alto nivel',
    icon: 'Award',
  },
  {
    id: 'docentes',
    value: '120+',
    label: 'Docentes',
    description: 'Profesionales especializados',
    icon: 'BookOpen',
  },
  {
    id: 'satisfaccion',
    value: '98%',
    label: 'Satisfacción',
    description: 'Estudiantes satisfechos',
    icon: 'ThumbsUp',
  },
];

const ESTADISTICAS_DIR = path.join(process.cwd(), 'src/content/estadisticas');

export async function seedEstadisticas() {
  await fs.mkdir(ESTADISTICAS_DIR, { recursive: true });

  const files = await fs.readdir(ESTADISTICAS_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(ESTADISTICAS_DIR, file));
    }
  }

  for (const estadistica of estadisticasInstitucionales) {
    const filePath = path.join(ESTADISTICAS_DIR, `${estadistica.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(estadistica, null, 2));
  }

  console.log(`✅ ${estadisticasInstitucionales.length} estadísticas generadas en src/content/estadisticas/`);
}
