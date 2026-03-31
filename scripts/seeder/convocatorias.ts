import fs from 'fs/promises';
import path from 'path';

import type { Convocatoria, FechaImportante } from '../../src/types';

const convocatorias: Convocatoria[] = [
  {
    id: 'conv-001',
    nombre: 'Proceso de Admisión 2026-I',
    descripcion:
      'Proceso de admisión para el primer semestre académico 2026. Incluye programas de maestría y doctorado en diversas especialidades.',
    estado: 'abierta',
    fechaInicio: '2026-03-16',
    fechaFin: '2026-04-30',
    fechaExamen: '2026-05-09',
    fechaResultados: '2026-05-13',
    requisitos: [
      'Grado de Bachiller (para maestría) o Magíster (para doctorado)',
      'DNI o Carnet de Extranjería vigente',
      'Certificado de estudios original',
      'Curriculum vitae documentado',
      'Pago de derecho de inscripción: S/. 350.00',
    ],
    documentos: [
      {
        nombre: 'Copia de DNI',
        descripcion: 'Copia legible del DNI vigente por ambos lados',
        obligatorio: true,
      },
      {
        nombre: 'Grado académico',
        descripcion: 'Copia legalizada del diploma de grado',
        obligatorio: true,
      },
      {
        nombre: 'Certificado de estudios',
        descripcion: 'Certificado de estudios original de pregrado/maestría',
        obligatorio: true,
      },
      {
        nombre: 'Curriculum vitae',
        descripcion: 'CV documentado con copias de constancias',
        obligatorio: true,
      },
      {
        nombre: 'Foto tamaño pasaporte',
        descripcion: '2 fotos a color fondo blanco',
        obligatorio: true,
      },
      {
        nombre: 'Carta de presentación',
        descripcion: 'Carta explicando motivación para el programa',
        obligatorio: false,
      },
      {
        nombre: 'Proyecto de investigación',
        descripcion: 'Solo para doctorado: propuesta inicial de investigación',
        obligatorio: false,
      },
    ],
    programas: [
      'mae-001',
      'mae-002',
      'mae-003',
      'mae-004',
      'mae-005',
      'doc-001',
      'doc-002',
      'doc-003',
    ],
    slug: 'admision-2026-i',
  },
  {
    id: 'conv-002',
    nombre: 'Diplomados y Cursos de Actualización - Invierno 2026',
    descripcion:
      'Oferta de diplomados y cursos cortos de actualización profesional para el período de invierno 2026.',
    estado: 'proximamente',
    fechaInicio: '2026-06-15',
    fechaFin: '2026-07-10',
    requisitos: [
      'Título profesional o bachiller universitario',
      'DNI vigente',
      'Acceso a computadora e internet (para cursos virtuales)',
      'Pago de inscripción según programa',
    ],
    documentos: [
      {
        nombre: 'Copia de DNI',
        descripcion: 'Copia legible del DNI',
        obligatorio: true,
      },
      {
        nombre: 'Título o bachiller',
        descripcion: 'Copia simple del grado académico',
        obligatorio: true,
      },
      {
        nombre: 'Ficha de inscripción',
        descripcion: 'Formulario de inscripción completado',
        obligatorio: true,
      },
    ],
    programas: ['dip-001', 'dip-002', 'dip-003', 'cur-001', 'cur-002'],
    slug: 'diplomados-invierno-2026',
  },
  {
    id: 'conv-003',
    nombre: 'Proceso de Admisión 2026-II',
    descripcion:
      'Segundo proceso de admisión del año 2026 para programas de maestría y doctorado.',
    estado: 'proximamente',
    fechaInicio: '2026-08-03',
    fechaFin: '2026-09-18',
    fechaExamen: '2026-10-03',
    fechaResultados: '2026-10-07',
    requisitos: [
      'Grado de Bachiller (para maestría) o Magíster (para doctorado)',
      'DNI o Carnet de Extranjería vigente',
      'Certificado de estudios original',
      'Curriculum vitae documentado',
      'Pago de derecho de inscripción: S/. 350.00',
    ],
    documentos: [
      {
        nombre: 'Copia de DNI',
        descripcion: 'Copia legible del DNI vigente',
        obligatorio: true,
      },
      {
        nombre: 'Grado académico',
        descripcion: 'Copia legalizada del diploma',
        obligatorio: true,
      },
      {
        nombre: 'Certificado de estudios',
        descripcion: 'Certificado original',
        obligatorio: true,
      },
      {
        nombre: 'Curriculum vitae',
        descripcion: 'CV documentado',
        obligatorio: true,
      },
    ],
    programas: ['mae-001', 'mae-002', 'mae-003', 'doc-001', 'doc-002'],
    slug: 'admision-2026-ii',
  },
];

const fechasImportantes: FechaImportante[] = [
  {
    fecha: '2026-03-16',
    descripcion: 'Inicio de inscripciones - Admisión 2026-I',
    tipo: 'inscripcion',
  },
  {
    fecha: '2026-04-30',
    descripcion: 'Cierre de inscripciones - Admisión 2026-I',
    tipo: 'inscripcion',
  },
  {
    fecha: '2026-05-09',
    descripcion: 'Examen de admisión - Admisión 2026-I',
    tipo: 'examen',
  },
  {
    fecha: '2026-05-13',
    descripcion: 'Publicación de resultados - Admisión 2026-I',
    tipo: 'resultados',
  },
  {
    fecha: '2026-05-18',
    descripcion: 'Inicio de matrículas - Semestre 2026-I',
    tipo: 'matricula',
  },
  {
    fecha: '2026-05-27',
    descripcion: 'Fin de matrículas regulares - Semestre 2026-I',
    tipo: 'matricula',
  },
  {
    fecha: '2026-06-01',
    descripcion: 'Inicio de clases - Semestre 2026-I',
    tipo: 'inicio_clases',
  },
];

const CONVOCATORIAS_DIR = path.join(process.cwd(), 'src/content/convocatorias');
const FECHAS_IMPORTANTES_DIR = path.join(
  process.cwd(),
  'src/content/fechas_importantes_admision',
);

async function cleanJsonFiles(directory: string) {
  await fs.mkdir(directory, { recursive: true });

  const files = await fs.readdir(directory);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(directory, file));
    }
  }
}

export async function seedConvocatorias() {
  await cleanJsonFiles(CONVOCATORIAS_DIR);

  for (const convocatoria of convocatorias) {
    const filePath = path.join(CONVOCATORIAS_DIR, `${convocatoria.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(convocatoria, null, 2));
  }

  await cleanJsonFiles(FECHAS_IMPORTANTES_DIR);

  for (const [index, fecha] of fechasImportantes.entries()) {
    const filePath = path.join(FECHAS_IMPORTANTES_DIR, `fecha-${index + 1}.json`);
    await fs.writeFile(filePath, JSON.stringify(fecha, null, 2));
  }

  console.log(`✅ ${convocatorias.length} convocatorias generadas en src/content/convocatorias/`);
  console.log(
    `✅ ${fechasImportantes.length} fechas importantes de admisión generadas en src/content/fechas_importantes_admision/`,
  );
}
