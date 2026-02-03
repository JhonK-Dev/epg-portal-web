import type { Publicacion } from '@/types';

export const publicaciones: Publicacion[] = [
  // NOTICIAS
  {
    id: 'not-001',
    titulo: 'Escuela de Postgrado obtiene acreditación internacional SIACES',
    tipo: 'noticia',
    contenido: `La Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana ha logrado un importante hito al obtener la acreditación internacional del Sistema Iberoamericano de Acreditación de la Calidad de la Educación Superior (SIACES).

Este reconocimiento valida la calidad de nuestros programas de maestría y doctorado, así como la excelencia de nuestra planta docente y procesos académicos.

El proceso de acreditación incluyó una exhaustiva evaluación de:
- Currículo y planes de estudio
- Calificación del cuerpo docente
- Infraestructura y recursos
- Investigación y producción científica
- Vinculación con la comunidad

"Este logro es resultado del trabajo comprometido de toda nuestra comunidad académica", señaló el Director de la Escuela de Postgrado.`,
    resumen: 'Nuestra escuela recibe reconocimiento internacional por la calidad de sus programas académicos.',
    fecha: '2025-01-15',
    imagen: '/images/publicaciones/acreditacion.jpg',
    slug: 'acreditacion-internacional-siaces',
    autor: 'Oficina de Comunicaciones',
    destacado: true,
    etiquetas: ['acreditación', 'calidad', 'logros'],
  },
  {
    id: 'not-002',
    titulo: 'Docentes de la EPG publican artículos en revistas indexadas',
    tipo: 'noticia',
    contenido: `Cinco docentes de nuestra Escuela de Postgrado han publicado artículos científicos en revistas indexadas en Scopus y Web of Science durante el último trimestre.

Las publicaciones abarcan diversas áreas del conocimiento, incluyendo gestión pública, derecho ambiental, educación superior y ciencias de la salud.

Este logro demuestra el compromiso de nuestra planta docente con la investigación y la generación de conocimiento científico de alto impacto.

Los artículos publicados están disponibles para consulta en el repositorio institucional de la universidad.`,
    resumen: 'Cinco docentes publican investigaciones en revistas de alto impacto internacional.',
    fecha: '2025-01-10',
    imagen: '/images/publicaciones/publicaciones.jpg',
    slug: 'docentes-publican-revistas-indexadas',
    autor: 'Unidad de Investigación',
    destacado: false,
    etiquetas: ['investigación', 'publicaciones', 'docentes'],
  },
  {
    id: 'not-003',
    titulo: 'Convenio de cooperación académica con universidad brasileña',
    tipo: 'noticia',
    contenido: `La Escuela de Postgrado firmó un convenio de cooperación académica con la Universidade Federal do Amazonas (UFAM) de Brasil.

El convenio permitirá:
- Intercambio de docentes y estudiantes
- Investigación conjunta en temas amazónicos
- Coautoría de publicaciones científicas
- Codirección de tesis doctorales

Esta alianza fortalece la internacionalización de nuestra escuela y abre oportunidades para nuestros estudiantes y docentes.`,
    resumen: 'Nueva alianza estratégica con universidad brasileña para investigación y movilidad académica.',
    fecha: '2025-01-05',
    imagen: '/images/publicaciones/convenio.jpg',
    slug: 'convenio-universidad-brasilena',
    autor: 'Oficina de Relaciones Internacionales',
    destacado: true,
    etiquetas: ['convenios', 'internacionalización', 'Brasil'],
  },

  // EVENTOS
  {
    id: 'eve-001',
    titulo: 'III Congreso Internacional de Investigación en Postgrado',
    tipo: 'evento',
    contenido: `La Escuela de Postgrado organiza el III Congreso Internacional de Investigación en Postgrado, que reunirá a investigadores de Perú, Brasil, Colombia y Ecuador.

El evento contará con:
- Conferencias magistrales de expertos internacionales
- Mesas de trabajo por áreas temáticas
- Presentación de avances de tesis
- Talleres de metodología de investigación
- Feria de posters científicos

La inscripción es gratuita para estudiantes y docentes de la EPG. Participantes externos tienen una tarifa especial.

Fecha límite de inscripción: 10 de marzo de 2025.`,
    resumen: 'Congreso que reunirá investigadores de cuatro países para compartir avances científicos.',
    fecha: '2025-01-20',
    fechaEvento: '2025-03-20',
    imagen: '/images/publicaciones/congreso.jpg',
    slug: 'congreso-internacional-investigacion',
    autor: 'Unidad de Investigación',
    destacado: true,
    etiquetas: ['congreso', 'investigación', 'internacional'],
  },
  {
    id: 'eve-002',
    titulo: 'Seminario: Nuevas tendencias en Gestión Pública',
    tipo: 'evento',
    contenido: `Seminario gratuito dirigido a estudiantes y egresados de la Maestría en Gestión Pública.

Temas a tratar:
- Gobierno digital y transformación del Estado
- Gestión por resultados en el sector público
- Ética y transparencia en la administración pública
- Modernización de la gestión pública peruana

Ponente: Dr. Ricardo Martínez, consultor internacional del BID.

Lugar: Auditorio Principal de la EPG
Cupo limitado a 100 participantes.`,
    resumen: 'Seminario gratuito sobre tendencias actuales en gestión del sector público.',
    fecha: '2025-01-18',
    fechaEvento: '2025-02-15',
    imagen: '/images/publicaciones/seminario.jpg',
    slug: 'seminario-gestion-publica',
    autor: 'Coordinación de Gestión Pública',
    destacado: false,
    etiquetas: ['seminario', 'gestión pública', 'gratuito'],
  },
  {
    id: 'eve-003',
    titulo: 'Taller de Redacción de Artículos Científicos',
    tipo: 'evento',
    contenido: `Taller práctico para estudiantes de maestría y doctorado sobre redacción de artículos científicos para revistas indexadas.

Contenido:
- Estructura de un artículo científico
- Selección de revistas objetivo
- Proceso de peer review
- Respuesta a revisores
- Ética en publicaciones

Requisito: Estar cursando o haber egresado de un programa de postgrado.
Certificación: 20 horas académicas.`,
    resumen: 'Aprende a redactar y publicar artículos en revistas científicas indexadas.',
    fecha: '2025-01-12',
    fechaEvento: '2025-02-22',
    imagen: '/images/publicaciones/taller.jpg',
    slug: 'taller-redaccion-articulos',
    autor: 'Unidad de Investigación',
    destacado: false,
    etiquetas: ['taller', 'publicaciones', 'investigación'],
  },

  // AVISOS
  {
    id: 'avi-001',
    titulo: 'Inicio de inscripciones para el proceso de admisión 2025-I',
    tipo: 'aviso',
    contenido: `Se comunica a los interesados que las inscripciones para el proceso de admisión 2025-I están abiertas desde el 15 de enero hasta el 28 de febrero de 2025.

Programas con vacantes:
- Maestría en Gestión Pública (40 vacantes)
- Maestría en Derecho Civil y Comercial (30 vacantes)
- Maestría en Educación (35 vacantes)
- Doctorado en Derecho (20 vacantes)
- Doctorado en Educación (20 vacantes)

Modalidad de inscripción: Virtual a través del portal de admisión.
Costo de inscripción: S/. 350.00

Para más información, visite la sección de Admisión o comuníquese con nuestra oficina.`,
    resumen: 'Inscripciones abiertas para maestrías y doctorados del semestre 2025-I.',
    fecha: '2025-01-14',
    imagen: '/images/publicaciones/acreditacion.jpg',
    slug: 'inscripciones-admision-2025-i',
    autor: 'Oficina de Admisión',
    destacado: true,
    etiquetas: ['admisión', 'inscripciones', '2025'],
  },
  {
    id: 'avi-002',
    titulo: 'Cronograma de sustentaciones de tesis - Febrero 2025',
    tipo: 'aviso',
    contenido: `Se publica el cronograma de sustentaciones de tesis programadas para febrero de 2025.

Las sustentaciones son de acceso público y se llevarán a cabo en el Auditorio de la Escuela de Postgrado.

Consulte el cronograma completo en la sección de Estudiantes > Sustentaciones.

Se recuerda a los tesistas confirmar su asistencia con 48 horas de anticipación.`,
    resumen: 'Cronograma de defensas de tesis para el mes de febrero.',
    fecha: '2025-01-20',
    imagen: '/images/publicaciones/acreditacion.jpg',
    slug: 'cronograma-sustentaciones-febrero',
    autor: 'Secretaría Académica',
    destacado: false,
    etiquetas: ['sustentaciones', 'tesis', 'cronograma'],
  },
  {
    id: 'avi-003',
    titulo: 'Prórroga para regularización de matrícula',
    tipo: 'aviso',
    contenido: `Se comunica a los estudiantes del semestre 2024-II que el plazo para regularización de matrícula se ha extendido hasta el 31 de enero de 2025.

Documentos requeridos:
- Voucher de pago de matrícula
- Ficha de matrícula firmada
- Declaración jurada de veracidad

Acercarse a la Oficina de Registros Académicos en horario de atención: Lunes a Viernes de 8:00 a.m. a 4:00 p.m.`,
    resumen: 'Extensión del plazo de regularización de matrícula hasta fin de enero.',
    fecha: '2025-01-16',
    imagen: '/images/publicaciones/seminario.jpg',
    slug: 'prorroga-regularizacion-matricula',
    autor: 'Oficina de Registros Académicos',
    destacado: false,
    etiquetas: ['matrícula', 'estudiantes', 'plazo'],
  },

  // COMUNICADOS
  {
    id: 'com-001',
    titulo: 'Horario de atención durante vacaciones',
    tipo: 'comunicado',
    contenido: `Se informa a la comunidad universitaria que durante el período de vacaciones (del 1 al 28 de febrero), las oficinas de la Escuela de Postgrado atenderán en horario reducido:

- Lunes a Viernes: 9:00 a.m. a 1:00 p.m.
- Sábados: Cerrado

La atención regular se reanudará el 1 de marzo de 2025.

Para consultas urgentes, escribir a: epg@universidad.edu.pe`,
    resumen: 'Horario especial de atención durante el período vacacional de febrero.',
    fecha: '2025-01-25',
    imagen: '/images/publicaciones/congreso.jpg',
    slug: 'horario-vacaciones',
    autor: 'Dirección de la EPG',
    destacado: false,
    etiquetas: ['horario', 'vacaciones', 'atención'],
  },
];

// Helpers para filtrar publicaciones
export const getNoticias = () => publicaciones.filter(p => p.tipo === 'noticia');
export const getEventos = () => publicaciones.filter(p => p.tipo === 'evento');
export const getAvisos = () => publicaciones.filter(p => p.tipo === 'aviso');
export const getComunicados = () => publicaciones.filter(p => p.tipo === 'comunicado');
export const getDestacadas = () => publicaciones.filter(p => p.destacado);
export const getPublicacionBySlug = (slug: string) => publicaciones.find(p => p.slug === slug);
export const getUltimasPublicaciones = (cantidad: number = 5) => 
  [...publicaciones].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()).slice(0, cantidad);
