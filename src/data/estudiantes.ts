// ============================================
// DATOS MOCK - Portal del Estudiante
// ============================================

export interface AccesoRapido {
  id: string;
  nombre: string;
  descripcion: string;
  icono: 'clipboard' | 'monitor' | 'book-open' | 'mail' | 'calendar' | 'file-text' | 'users' | 'award';
  href: string;
  color: string; // Tailwind color class
}

export interface TramiteEstudiantil {
  id: string;
  nombre: string;
  descripcion: string;
  icono: 'clipboard-check' | 'award' | 'users' | 'pause-circle' | 'shuffle' | 'file-text' | 'graduation-cap' | 'credit-card';
  color: string; // bg color class
  iconColor: string; // icon color class
  href: string;
  requisitos: string[];
  pasos: string[];
  documentos: string[];
  costo?: string;
  duracion?: string;
}

export interface DocumentoDescargable {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'pdf' | 'docx' | 'xlsx';
  categoria: 'reglamento' | 'formato' | 'guia' | 'manual';
  url: string;
  fechaActualizacion: string;
}

export interface FechaCalendario {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin?: string;
  tipo: 'matricula' | 'examen' | 'sustentacion' | 'vacaciones' | 'evento' | 'pago';
  importante: boolean;
}

export interface RecursoAcademico {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  href: string;
  externo: boolean;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: 'matricula' | 'tramites' | 'tesis' | 'pagos' | 'general';
}

// ============================================
// ACCESOS RÁPIDOS
// ============================================
export const accesosRapidos: AccesoRapido[] = [
  {
    id: 'sigae',
    nombre: 'SIGAE',
    descripcion: 'Sistema Integrado de Gestión Académica',
    icono: 'clipboard',
    href: 'https://sigae.unapiquitos.edu.pe',
    color: 'bg-[#001F3F]'
  },
  {
    id: 'aula-virtual',
    nombre: 'Aula Virtual',
    descripcion: 'Plataforma de aprendizaje en línea',
    icono: 'monitor',
    href: 'https://aulavirtual.unapiquitos.edu.pe',
    color: 'bg-[#001F3F]'
  },
  {
    id: 'biblioteca',
    nombre: 'Biblioteca Virtual',
    descripcion: 'Acceso a recursos bibliográficos',
    icono: 'book-open',
    href: 'https://biblioteca.unapiquitos.edu.pe',
    color: 'bg-[#001F3F]'
  },
  {
    id: 'correo',
    nombre: 'Correo Institucional',
    descripcion: 'Email @unapiquitos.edu.pe',
    icono: 'mail',
    href: 'https://mail.google.com',
    color: 'bg-[#001F3F]'
  }
];

// ============================================
// TRÁMITES ESTUDIANTILES
// ============================================
export const tramitesEstudiantiles: TramiteEstudiantil[] = [
  {
    id: 'matricula',
    nombre: 'Matrícula',
    descripcion: 'Proceso de inscripción a las asignaturas del semestre académico.',
    icono: 'clipboard-check',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    href: '/estudiantes/matricula',
    requisitos: [
      'Estar al día en pagos',
      'No tener deudas con biblioteca',
      'Haber aprobado requisitos previos de las asignaturas'
    ],
    pasos: [
      'Ingresar al SIGAE con usuario y contraseña',
      'Seleccionar "Matrícula" en el menú principal',
      'Elegir las asignaturas disponibles',
      'Confirmar matrícula y generar boleta de pago',
      'Realizar el pago en ventanilla o banca electrónica'
    ],
    documentos: [
      'Constancia de no adeudo (si aplica)',
      'Ficha de matrícula firmada'
    ],
    duracion: '1-2 días hábiles'
  },
  {
    id: 'tramite-grado',
    nombre: 'Trámite de Grado',
    descripcion: 'Proceso para obtener el grado académico de Magíster o Doctor.',
    icono: 'award',
    color: 'bg-amber-100',
    iconColor: 'text-amber-600',
    href: '/estudiantes/tramite-grado',
    requisitos: [
      'Haber aprobado todas las asignaturas del plan de estudios',
      'Tesis aprobada y sustentada',
      'Constancia de no adeudo de biblioteca',
      'Estar al día en pagos administrativos'
    ],
    pasos: [
      'Solicitar expedito en la Unidad de Postgrado',
      'Presentar documentación completa en mesa de partes',
      'Esperar revisión y aprobación del expediente',
      'Participar en ceremonia de graduación o recojo individual'
    ],
    documentos: [
      'Solicitud dirigida al Director de la EPG',
      'Acta de sustentación de tesis',
      'Tesis empastada (3 ejemplares)',
      'CD con tesis en formato digital',
      'Constancia de no adeudo',
      'Fotos tamaño pasaporte (6 unidades)',
      'Copia de DNI',
      'Recibo de pago por derechos de grado'
    ],
    costo: 'S/ 500.00',
    duracion: '30-45 días hábiles'
  },
  {
    id: 'sustentaciones',
    nombre: 'Sustentaciones',
    descripcion: 'Cronograma y requisitos para la defensa de tesis.',
    icono: 'users',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    href: '/estudiantes/sustentaciones',
    requisitos: [
      'Proyecto de tesis aprobado',
      'Informe de asesor con visto bueno',
      'Revisión de similitud (Turnitin) menor al 25%',
      'Constancia de no adeudo'
    ],
    pasos: [
      'Presentar borrador de tesis al asesor',
      'Obtener visto bueno del asesor',
      'Presentar solicitud de designación de jurado',
      'Esperar resolución de designación de jurado',
      'Entregar tesis a jurados para revisión',
      'Levantar observaciones (si las hubiera)',
      'Programar fecha de sustentación',
      'Sustentar tesis ante el jurado'
    ],
    documentos: [
      'Tesis en formato PDF (4 ejemplares)',
      'Informe del asesor',
      'Constancia de Turnitin',
      'Solicitud de sustentación'
    ],
    duracion: '15-30 días hábiles'
  },
  {
    id: 'licencia-estudios',
    nombre: 'Licencia de Estudios',
    descripcion: 'Solicitud de suspensión temporal de estudios por motivos justificados.',
    icono: 'pause-circle',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    href: '/estudiantes/licencia-estudios',
    requisitos: [
      'Estar matriculado en el semestre actual',
      'Tener motivo justificado (salud, trabajo, viaje, etc.)',
      'No tener deudas pendientes'
    ],
    pasos: [
      'Presentar solicitud en mesa de partes',
      'Adjuntar documentos sustentatorios',
      'Esperar resolución de la Dirección',
      'Recibir resolución de licencia aprobada'
    ],
    documentos: [
      'Solicitud dirigida al Director',
      'Documentos que justifiquen la licencia',
      'Constancia de no adeudo'
    ],
    duracion: '5-10 días hábiles'
  },
  {
    id: 'cambio-programa',
    nombre: 'Cambio de Programa',
    descripcion: 'Procedimiento para trasladarse a otro programa de la EPG.',
    icono: 'shuffle',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    href: '/estudiantes/cambio-programa',
    requisitos: [
      'Haber cursado al menos un semestre',
      'Promedio mínimo de 14',
      'Vacante disponible en el programa destino',
      'Estar al día en pagos'
    ],
    pasos: [
      'Solicitar informe de estudios y notas',
      'Presentar solicitud de cambio de programa',
      'Esperar evaluación del Comité Académico',
      'Recibir resolución de aprobación',
      'Realizar convalidación de asignaturas'
    ],
    documentos: [
      'Solicitud dirigida al Director',
      'Record de notas',
      'Sílabos de asignaturas aprobadas',
      'Carta de motivación'
    ],
    costo: 'S/ 150.00',
    duracion: '15-20 días hábiles'
  },
  {
    id: 'certificados',
    nombre: 'Certificados y Constancias',
    descripcion: 'Solicitud de documentos académicos oficiales.',
    icono: 'file-text',
    color: 'bg-red-100',
    iconColor: 'text-red-600',
    href: '/estudiantes/certificados',
    requisitos: [
      'Ser estudiante o egresado de la EPG',
      'Estar al día en pagos'
    ],
    pasos: [
      'Realizar pago por derecho de certificado',
      'Presentar solicitud con recibo de pago',
      'Esperar procesamiento del documento',
      'Recoger documento en mesa de partes'
    ],
    documentos: [
      'Solicitud simple',
      'Recibo de pago',
      'Copia de DNI'
    ],
    costo: 'S/ 30.00 - S/ 80.00',
    duracion: '3-5 días hábiles'
  }
];

// ============================================
// DOCUMENTOS DESCARGABLES
// ============================================
export const documentosDescargables: DocumentoDescargable[] = [
  {
    id: 'reglamento-general',
    nombre: 'Reglamento General de la EPG',
    descripcion: 'Normativa general que rige el funcionamiento de la Escuela de Postgrado',
    tipo: 'pdf',
    categoria: 'reglamento',
    url: '/documentos/reglamento-general-epg.pdf',
    fechaActualizacion: '2024-03-15'
  },
  {
    id: 'reglamento-grados',
    nombre: 'Reglamento de Grados y Títulos',
    descripcion: 'Procedimientos para la obtención de grados académicos',
    tipo: 'pdf',
    categoria: 'reglamento',
    url: '/documentos/reglamento-grados-titulos.pdf',
    fechaActualizacion: '2024-02-20'
  },
  {
    id: 'formato-proyecto-tesis',
    nombre: 'Formato de Proyecto de Tesis',
    descripcion: 'Plantilla oficial para la presentación del proyecto de investigación',
    tipo: 'docx',
    categoria: 'formato',
    url: '/documentos/formato-proyecto-tesis.docx',
    fechaActualizacion: '2024-01-10'
  },
  {
    id: 'guia-elaboracion-tesis',
    nombre: 'Guía de Elaboración de Tesis',
    descripcion: 'Manual con lineamientos para la redacción de tesis',
    tipo: 'pdf',
    categoria: 'guia',
    url: '/documentos/guia-elaboracion-tesis.pdf',
    fechaActualizacion: '2024-03-01'
  },
  {
    id: 'formato-informe-asesor',
    nombre: 'Formato de Informe de Asesor',
    descripcion: 'Plantilla para el informe de avance del asesor de tesis',
    tipo: 'docx',
    categoria: 'formato',
    url: '/documentos/formato-informe-asesor.docx',
    fechaActualizacion: '2024-02-15'
  },
  {
    id: 'solicitud-general',
    nombre: 'Formato de Solicitud General (FUT)',
    descripcion: 'Formulario único de trámite para diversas solicitudes',
    tipo: 'docx',
    categoria: 'formato',
    url: '/documentos/fut-solicitud-general.docx',
    fechaActualizacion: '2024-01-05'
  },
  {
    id: 'manual-apa7',
    nombre: 'Manual de Estilo APA 7ma Edición',
    descripcion: 'Guía de citación y referencias bibliográficas',
    tipo: 'pdf',
    categoria: 'manual',
    url: '/documentos/manual-apa7.pdf',
    fechaActualizacion: '2023-12-01'
  },
  {
    id: 'formato-constancia-no-adeudo',
    nombre: 'Solicitud de Constancia de No Adeudo',
    descripcion: 'Formato para solicitar constancia de no adeudo',
    tipo: 'docx',
    categoria: 'formato',
    url: '/documentos/solicitud-constancia-no-adeudo.docx',
    fechaActualizacion: '2024-01-20'
  }
];

// ============================================
// CALENDARIO ACADÉMICO
// ============================================
export const calendarioAcademico: FechaCalendario[] = [
  {
    id: 'matricula-2024-1',
    titulo: 'Matrícula Regular 2024-I',
    descripcion: 'Periodo de matrícula para el semestre 2024-I',
    fechaInicio: '2024-03-01',
    fechaFin: '2024-03-15',
    tipo: 'matricula',
    importante: true
  },
  {
    id: 'inicio-clases-2024-1',
    titulo: 'Inicio de Clases 2024-I',
    descripcion: 'Inicio del semestre académico 2024-I',
    fechaInicio: '2024-03-18',
    tipo: 'evento',
    importante: true
  },
  {
    id: 'examen-parcial-2024-1',
    titulo: 'Exámenes Parciales 2024-I',
    descripcion: 'Semana de evaluaciones parciales',
    fechaInicio: '2024-05-06',
    fechaFin: '2024-05-11',
    tipo: 'examen',
    importante: true
  },
  {
    id: 'pago-cuota2-2024-1',
    titulo: 'Fecha límite pago 2da cuota',
    descripcion: 'Último día para pagar la segunda cuota del semestre',
    fechaInicio: '2024-04-30',
    tipo: 'pago',
    importante: true
  },
  {
    id: 'examen-final-2024-1',
    titulo: 'Exámenes Finales 2024-I',
    descripcion: 'Semana de evaluaciones finales',
    fechaInicio: '2024-07-08',
    fechaFin: '2024-07-13',
    tipo: 'examen',
    importante: true
  },
  {
    id: 'sustentaciones-junio',
    titulo: 'Sustentaciones de Tesis - Junio',
    descripcion: 'Periodo programado para sustentaciones de tesis',
    fechaInicio: '2024-06-17',
    fechaFin: '2024-06-28',
    tipo: 'sustentacion',
    importante: false
  },
  {
    id: 'vacaciones-medio-año',
    titulo: 'Vacaciones de Medio Año',
    descripcion: 'Periodo de vacaciones entre semestres',
    fechaInicio: '2024-07-15',
    fechaFin: '2024-08-04',
    tipo: 'vacaciones',
    importante: false
  },
  {
    id: 'matricula-2024-2',
    titulo: 'Matrícula Regular 2024-II',
    descripcion: 'Periodo de matrícula para el semestre 2024-II',
    fechaInicio: '2024-08-05',
    fechaFin: '2024-08-16',
    tipo: 'matricula',
    importante: true
  }
];

// ============================================
// RECURSOS ACADÉMICOS
// ============================================
export const recursosAcademicos: RecursoAcademico[] = [
  {
    id: 'repositorio-tesis',
    nombre: 'Repositorio de Tesis',
    descripcion: 'Acceso a tesis de maestría y doctorado',
    icono: 'database',
    href: 'https://repositorio.unapiquitos.edu.pe',
    externo: true
  },
  {
    id: 'bases-datos',
    nombre: 'Bases de Datos Científicas',
    descripcion: 'Scopus, Web of Science, Scielo y más',
    icono: 'search',
    href: '/servicios/bases-datos',
    externo: false
  },
  {
    id: 'turnitin',
    nombre: 'Turnitin',
    descripcion: 'Sistema de detección de similitud',
    icono: 'shield-check',
    href: 'https://www.turnitin.com',
    externo: true
  },
  {
    id: 'mendeley',
    nombre: 'Mendeley',
    descripcion: 'Gestor de referencias bibliográficas',
    icono: 'bookmark',
    href: 'https://www.mendeley.com',
    externo: true
  },
  {
    id: 'google-scholar',
    nombre: 'Google Scholar',
    descripcion: 'Buscador de literatura académica',
    icono: 'graduation-cap',
    href: 'https://scholar.google.com',
    externo: true
  },
  {
    id: 'orcid',
    nombre: 'ORCID',
    descripcion: 'Identificador de investigador',
    icono: 'user-check',
    href: 'https://orcid.org',
    externo: true
  }
];

// ============================================
// PREGUNTAS FRECUENTES
// ============================================
export const preguntasFrecuentes: PreguntaFrecuente[] = [
  {
    id: 'faq-1',
    pregunta: '¿Cuál es el plazo máximo para terminar la maestría?',
    respuesta: 'El plazo máximo para culminar los estudios de maestría es de 4 años contados desde la fecha de ingreso. En casos excepcionales, se puede solicitar una ampliación de plazo presentando una solicitud debidamente justificada.',
    categoria: 'general'
  },
  {
    id: 'faq-2',
    pregunta: '¿Cómo puedo solicitar una constancia de estudios?',
    respuesta: 'Debe presentar una solicitud (FUT) en mesa de partes adjuntando el recibo de pago correspondiente (S/ 30.00). El documento estará listo en 3 a 5 días hábiles.',
    categoria: 'tramites'
  },
  {
    id: 'faq-3',
    pregunta: '¿Cuántas veces puedo sustentar mi tesis si desapruebo?',
    respuesta: 'El estudiante tiene derecho a dos (2) oportunidades adicionales para sustentar su tesis en caso de desaprobación. Cada nueva sustentación requiere un pago adicional por derecho de sustentación.',
    categoria: 'tesis'
  },
  {
    id: 'faq-4',
    pregunta: '¿Puedo realizar pagos fraccionados?',
    respuesta: 'Sí, la pensión de estudios puede pagarse en cuotas mensuales según el cronograma establecido por la EPG. El incumplimiento de pagos puede generar intereses y restricciones en el acceso a servicios académicos.',
    categoria: 'pagos'
  },
  {
    id: 'faq-5',
    pregunta: '¿Qué porcentaje de similitud acepta Turnitin?',
    respuesta: 'El porcentaje máximo de similitud permitido es del 25%. Si la tesis supera este porcentaje, deberá realizar las correcciones necesarias antes de poder sustentar.',
    categoria: 'tesis'
  },
  {
    id: 'faq-6',
    pregunta: '¿Cómo solicito cambio de asesor de tesis?',
    respuesta: 'Debe presentar una solicitud (FUT) indicando los motivos del cambio, adjuntando una carta de aceptación del nuevo asesor propuesto. La solicitud será evaluada por el Comité de Investigación.',
    categoria: 'tesis'
  },
  {
    id: 'faq-7',
    pregunta: '¿Puedo matricularme en asignaturas de otro programa?',
    respuesta: 'Sí, puede llevar asignaturas electivas de otros programas siempre que existan vacantes disponibles y cuente con la autorización del coordinador de su programa.',
    categoria: 'matricula'
  },
  {
    id: 'faq-8',
    pregunta: '¿Qué pasa si no me matriculo en un semestre?',
    respuesta: 'Si no se matricula en un semestre sin haber solicitado licencia, será considerado como abandono de estudios. Para reingresar, deberá solicitar reincorporación y regularizar su situación académica.',
    categoria: 'matricula'
  }
];

// ============================================
// HELPERS / FUNCIONES ÚTILES
// ============================================

export function getTramiteById(id: string): TramiteEstudiantil | undefined {
  return tramitesEstudiantiles.find(t => t.id === id);
}

export function getDocumentosByCategoria(categoria: DocumentoDescargable['categoria']): DocumentoDescargable[] {
  return documentosDescargables.filter(d => d.categoria === categoria);
}

export function getFechasImportantes(): FechaCalendario[] {
  return calendarioAcademico.filter(f => f.importante);
}

export function getPreguntasByCategoria(categoria: PreguntaFrecuente['categoria']): PreguntaFrecuente[] {
  return preguntasFrecuentes.filter(p => p.categoria === categoria);
}

export function getProximasFechas(cantidad: number = 5): FechaCalendario[] {
  const hoy = new Date();
  return calendarioAcademico
    .filter(f => new Date(f.fechaInicio) >= hoy)
    .sort((a, b) => new Date(a.fechaInicio).getTime() - new Date(b.fechaInicio).getTime())
    .slice(0, cantidad);
}
