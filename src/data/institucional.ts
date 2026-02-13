import type { RedSocial, Estadistica, Documento, ProcesoEstudiantil, Sustentacion } from '@/types';
import { contactoGeneral } from './contacto';

// --- INFORMACIÓN DE CONTACTO ---
// Re-exportar desde contacto.ts para mantener compatibilidad
export const infoContacto = contactoGeneral;

// --- REDES SOCIALES ---
export const redesSociales: RedSocial[] = [
  {
    nombre: 'Facebook',
    url: 'https://facebook.com/epgunap',
    icono: 'Facebook',
  },
  {
    nombre: 'Instagram',
    url: 'https://instagram.com/epgunap',
    icono: 'Instagram',
  },
  {
    nombre: 'YouTube',
    url: 'https://youtube.com/@epgunap',
    icono: 'Youtube',
  },
  {
    nombre: 'LinkedIn',
    url: 'https://linkedin.com/company/epgunap',
    icono: 'Linkedin',
  },
  {
    nombre: 'X (Twitter)',
    url: 'https://twitter.com/epgunap',
    icono: 'Twitter',
  },
];

// --- ESTADÍSTICAS INSTITUCIONALES ---
export const estadisticas: Estadistica[] = [
  {
    valor: '15+',
    label: 'Programas de Maestría',
    icono: 'GraduationCap',
  },
  {
    valor: '5',
    label: 'Programas de Doctorado',
    icono: 'Award',
  },
  {
    valor: '2,500+',
    label: 'Egresados',
    icono: 'Users',
  },
  {
    valor: '120+',
    label: 'Docentes Especializados',
    icono: 'UserCheck',
  },
  {
    valor: '35',
    label: 'Años de Trayectoria',
    icono: 'Calendar',
  },
  {
    valor: '98%',
    label: 'Satisfacción Estudiantil',
    icono: 'ThumbsUp',
  },
];

// --- REGLAMENTOS Y DOCUMENTOS ---
export const documentos: Documento[] = [
  {
    id: 'doc-reg-001',
    nombre: 'Reglamento General de la Escuela de Postgrado',
    descripcion: 'Normas generales que rigen el funcionamiento de la Escuela de Postgrado.',
    url: '/documentos/reglamento-general-epg.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-03-15',
  },
  {
    id: 'doc-reg-002',
    nombre: 'Reglamento de Grados y Títulos',
    descripcion: 'Procedimientos y requisitos para la obtención de grados de Magíster y Doctor.',
    url: '/documentos/reglamento-grados-titulos.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-06-20',
  },
  {
    id: 'doc-reg-003',
    nombre: 'Reglamento de Admisión',
    descripcion: 'Normas que regulan el proceso de admisión a los programas de postgrado.',
    url: '/documentos/reglamento-admision.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-01-10',
  },
  {
    id: 'doc-for-001',
    nombre: 'Formato de Proyecto de Tesis',
    descripcion: 'Modelo para la presentación del proyecto de tesis.',
    url: '/documentos/formato-proyecto-tesis.docx',
    tipo: 'formato',
    fechaActualizacion: '2024-08-05',
  },
  {
    id: 'doc-for-002',
    nombre: 'Formato de Informe de Tesis',
    descripcion: 'Estructura y formato para el informe final de tesis.',
    url: '/documentos/formato-informe-tesis.docx',
    tipo: 'formato',
    fechaActualizacion: '2024-08-05',
  },
  {
    id: 'doc-gui-001',
    nombre: 'Guía de Elaboración de Tesis',
    descripcion: 'Manual completo para la elaboración y sustentación de tesis.',
    url: '/documentos/guia-elaboracion-tesis.pdf',
    tipo: 'guia',
    fechaActualizacion: '2024-07-12',
  },
  {
    id: 'doc-man-001',
    nombre: 'Manual de Usuario SIGAE',
    descripcion: 'Instrucciones para el uso del Sistema de Gestión Académica.',
    url: '/documentos/manual-sigae.pdf',
    tipo: 'manual',
    fechaActualizacion: '2024-02-28',
  },
];

// --- PROCESOS ESTUDIANTILES ---
export const procesosEstudiantiles: ProcesoEstudiantil[] = [
  {
    id: 'proc-001',
    nombre: 'Matrícula',
    descripcion: 'Proceso de inscripción a las asignaturas del semestre académico.',
    icono: 'ClipboardCheck',
    slug: 'matricula',
    requisitos: [
      'Estar admitido en un programa de postgrado',
      'No tener deudas pendientes',
      'Pago de derechos de matrícula',
    ],
    pasos: [
      'Verificar calendario de matrícula',
      'Acceder al SIGAE con credenciales',
      'Seleccionar asignaturas disponibles',
      'Confirmar matrícula',
      'Realizar pago de derechos',
      'Imprimir constancia de matrícula',
    ],
  },
  {
    id: 'proc-002',
    nombre: 'Trámite de Grado',
    descripcion: 'Proceso para obtener el grado académico de Magíster o Doctor.',
    icono: 'Award',
    slug: 'tramite-grado',
    requisitos: [
      'Haber aprobado todas las asignaturas del plan de estudios',
      'Tesis aprobada por jurado evaluador',
      'Sustentación pública aprobada',
      'No tener deudas con la universidad',
    ],
    pasos: [
      'Solicitar expedito en mesa de partes',
      'Pago de derechos de grado',
      'Presentar documentos requeridos',
      'Esperar resolución de consejo',
      'Asistir a ceremonia de colación',
    ],
  },
  {
    id: 'proc-003',
    nombre: 'Cambio de Programa',
    descripcion: 'Procedimiento para trasladarse a otro programa de postgrado.',
    icono: 'RefreshCw',
    slug: 'cambio-programa',
    requisitos: [
      'Haber aprobado al menos un semestre',
      'Promedio ponderado mínimo de 14.0',
      'Vacante disponible en el programa destino',
    ],
    pasos: [
      'Presentar solicitud en mesa de partes',
      'Adjuntar expediente académico',
      'Evaluación por coordinación del programa',
      'Resolución de aprobación/rechazo',
    ],
  },
  {
    id: 'proc-004',
    nombre: 'Licencia de Estudios',
    descripcion: 'Solicitud de suspensión temporal de estudios.',
    icono: 'PauseCircle',
    slug: 'licencia-estudios',
    requisitos: [
      'Justificación documentada',
      'No exceder el límite de licencias permitidas',
      'No tener deudas pendientes',
    ],
    pasos: [
      'Presentar solicitud con documentos sustentatorios',
      'Evaluación por subdirección académica',
      'Emisión de resolución',
      'Notificación al estudiante',
    ],
  },
];

// --- SUSTENTACIONES ---
export const sustentaciones: Sustentacion[] = [
  {
    id: 'sus-001',
    tesista: 'Mg. Juan Carlos Pérez López',
    titulo: 'Impacto de las políticas públicas en el desarrollo sostenible de la región Loreto',
    programa: 'Doctorado en Gestión Pública',
    fecha: '2025-02-15',
    hora: '10:00',
    lugar: 'Auditorio Principal - EPG',
    jurados: [
      'Dr. Fernando Castillo Mendoza (Presidente)',
      'Dra. Patricia Vargas Lozano',
      'Dr. Carlos Mendoza Ríos',
    ],
    asesor: 'Dr. Roberto Sánchez Torres',
    tipo: 'tesis',
  },
  {
    id: 'sus-002',
    tesista: 'Bach. María Elena García Ruiz',
    titulo: 'Estrategias didácticas innovadoras para la enseñanza virtual en educación superior',
    programa: 'Maestría en Educación',
    fecha: '2025-02-18',
    hora: '15:00',
    lugar: 'Sala de Sustentaciones B',
    jurados: [
      'Dra. Lucía Ramírez Delgado (Presidenta)',
      'Dr. Roberto Sánchez Torres',
      'Mg. Elena Torres Campos',
    ],
    asesor: 'Dra. Lucía Ramírez Delgado',
    tipo: 'tesis',
  },
  {
    id: 'sus-003',
    tesista: 'Bach. Pedro Martínez Vásquez',
    titulo: 'Evaluación del impacto ambiental de la minería ilegal en la cuenca del río Nanay',
    programa: 'Maestría en Ingeniería Ambiental',
    fecha: '2025-02-20',
    hora: '11:00',
    lugar: 'Auditorio Principal - EPG',
    jurados: [
      'Dr. José Luis Vásquez Fernández (Presidente)',
      'Dr. Miguel Ángel Paredes Ruiz',
      'Mg. Ana María Quispe Rodríguez',
    ],
    asesor: 'Dr. Miguel Ángel Paredes Ruiz',
    tipo: 'tesis',
  },
];

// --- INFORMACIÓN INSTITUCIONAL ---
export const infoInstitucional = {
  nombreCompleto: 'Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana',
  nombreCorto: 'EPG-UNAP',
  lema: 'Formando líderes para el desarrollo de la Amazonía',
  historia: `La Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana fue creada en 1990, con la misión de formar profesionales de alto nivel académico comprometidos con el desarrollo sostenible de la región amazónica.

A lo largo de más de tres décadas, hemos graduado a miles de profesionales que hoy ocupan cargos de liderazgo en instituciones públicas y privadas, contribuyendo significativamente al desarrollo de nuestra región y del país.

Nuestra oferta académica ha evolucionado para responder a las demandas del mercado laboral y las necesidades de desarrollo regional, incorporando programas innovadores en áreas estratégicas como gestión pública, derecho, educación, salud pública y ciencias ambientales.`,
  mision: 'Formar profesionales de postgrado con excelencia académica, competencias investigativas y compromiso ético, capaces de generar conocimiento y liderar procesos de transformación para el desarrollo sostenible de la Amazonía peruana.',
  vision: 'Ser una Escuela de Postgrado líder en la formación de profesionales e investigadores de alto nivel en la Amazonía, reconocida nacional e internacionalmente por la calidad de sus programas, la producción científica de su comunidad académica y su contribución al desarrollo regional.',
  valores: [
    'Excelencia académica',
    'Integridad y ética',
    'Innovación e investigación',
    'Responsabilidad social',
    'Respeto a la diversidad',
    'Compromiso con la Amazonía',
  ],
};

// Helpers
export const getDocumentosByTipo = (tipo: Documento['tipo']) => documentos.filter(d => d.tipo === tipo);
export const getReglamentos = () => getDocumentosByTipo('reglamento');
export const getFormatos = () => getDocumentosByTipo('formato');
export const getGuias = () => getDocumentosByTipo('guia');
export const getManuales = () => getDocumentosByTipo('manual');
export const getSustentacionesProximas = () => {
  const hoy = new Date();
  return sustentaciones
    .filter(s => new Date(s.fecha) >= hoy)
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
};
