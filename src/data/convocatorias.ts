import type { Convocatoria, FechaImportante } from '@/types';

export const convocatorias: Convocatoria[] = [
  {
    id: 'conv-001',
    nombre: 'Proceso de Admisión 2025-I',
    descripcion: 'Proceso de admisión para el primer semestre académico 2025. Incluye programas de maestría y doctorado en diversas especialidades.',
    estado: 'abierta',
    fechaInicio: '2025-01-15',
    fechaFin: '2025-02-28',
    fechaExamen: '2025-03-08',
    fechaResultados: '2025-03-12',
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
    programas: ['mae-001', 'mae-002', 'mae-003', 'mae-004', 'mae-005', 'doc-001', 'doc-002', 'doc-003'],
    slug: 'admision-2025-i',
  },
  {
    id: 'conv-002',
    nombre: 'Diplomados y Cursos de Actualización - Verano 2025',
    descripcion: 'Oferta de diplomados y cursos cortos de actualización profesional para el período de verano 2025.',
    estado: 'abierta',
    fechaInicio: '2025-01-10',
    fechaFin: '2025-01-31',
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
    slug: 'diplomados-verano-2025',
  },
  {
    id: 'conv-003',
    nombre: 'Proceso de Admisión 2025-II',
    descripcion: 'Segundo proceso de admisión del año 2025 para programas de maestría y doctorado.',
    estado: 'proximamente',
    fechaInicio: '2025-06-01',
    fechaFin: '2025-07-15',
    fechaExamen: '2025-07-26',
    fechaResultados: '2025-07-30',
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
    slug: 'admision-2025-ii',
  },
];

export const fechasImportantes: FechaImportante[] = [
  // Proceso 2025-I
  {
    fecha: '2025-01-15',
    descripcion: 'Inicio de inscripciones - Admisión 2025-I',
    tipo: 'inscripcion',
  },
  {
    fecha: '2025-02-28',
    descripcion: 'Cierre de inscripciones - Admisión 2025-I',
    tipo: 'inscripcion',
  },
  {
    fecha: '2025-03-08',
    descripcion: 'Examen de admisión - Admisión 2025-I',
    tipo: 'examen',
  },
  {
    fecha: '2025-03-12',
    descripcion: 'Publicación de resultados - Admisión 2025-I',
    tipo: 'resultados',
  },
  {
    fecha: '2025-03-15',
    descripcion: 'Inicio de matrículas - Semestre 2025-I',
    tipo: 'matricula',
  },
  {
    fecha: '2025-03-20',
    descripcion: 'Fin de matrículas regulares - Semestre 2025-I',
    tipo: 'matricula',
  },
  {
    fecha: '2025-04-01',
    descripcion: 'Inicio de clases - Semestre 2025-I',
    tipo: 'inicio_clases',
  },
];

// Helpers
export const getConvocatoriaById = (id: string) => convocatorias.find(c => c.id === id);
export const getConvocatoriaBySlug = (slug: string) => convocatorias.find(c => c.slug === slug);
export const getConvocatoriasAbiertas = () => convocatorias.filter(c => c.estado === 'abierta');
export const getConvocatoriasProximas = () => convocatorias.filter(c => c.estado === 'proximamente');
export const getFechasProximas = (cantidad: number = 5) => {
  const hoy = new Date();
  return fechasImportantes
    .filter(f => new Date(f.fecha) >= hoy)
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
    .slice(0, cantidad);
};
