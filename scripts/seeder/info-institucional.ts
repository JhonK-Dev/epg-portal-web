import fs from 'fs/promises';
import path from 'path';

import type { InfoInstitucional } from '../../src/types';

const infoInstitucional: InfoInstitucional & { id: string } = {
  id: 'principal',
  nombreCompleto:
    'Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana',
  nombreCorto: 'EPG-UNAP',
  lema: 'Formando líderes para el desarrollo de la Amazonía',
  historia: `La Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana fue creada en 1990, con la misión de formar profesionales de alto nivel académico comprometidos con el desarrollo sostenible de la región amazónica.

A lo largo de más de tres décadas, hemos graduado a miles de profesionales que hoy ocupan cargos de liderazgo en instituciones públicas y privadas, contribuyendo significativamente al desarrollo de nuestra región y del país.

Nuestra oferta académica ha evolucionado para responder a las demandas del mercado laboral y las necesidades de desarrollo regional, incorporando programas innovadores en áreas estratégicas como gestión pública, derecho, educación, salud pública y ciencias ambientales.`,
  mision:
    'Formar profesionales de postgrado con excelencia académica, competencias investigativas y compromiso ético, capaces de generar conocimiento y liderar procesos de transformación para el desarrollo sostenible de la Amazonía peruana.',
  vision:
    'Ser una Escuela de Postgrado líder en la formación de profesionales e investigadores de alto nivel en la Amazonía, reconocida nacional e internacionalmente por la calidad de sus programas, la producción científica de su comunidad académica y su contribución al desarrollo regional.',
  valores: [
    'Excelencia académica',
    'Integridad y ética',
    'Innovación e investigación',
    'Responsabilidad social',
    'Respeto a la diversidad',
    'Compromiso con la Amazonía',
  ],
};

const INFO_INSTITUCIONAL_DIR = path.join(
  process.cwd(),
  'src/content/info_institucional',
);

export async function seedInfoInstitucional() {
  await fs.mkdir(INFO_INSTITUCIONAL_DIR, { recursive: true });

  const files = await fs.readdir(INFO_INSTITUCIONAL_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(INFO_INSTITUCIONAL_DIR, file));
    }
  }

  const filePath = path.join(INFO_INSTITUCIONAL_DIR, 'principal.json');
  await fs.writeFile(filePath, JSON.stringify(infoInstitucional, null, 2));

  console.log('✅ Información institucional generada en src/content/info_institucional/');
}
