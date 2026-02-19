/**
 * Configuración visual de Fechas de Admisión
 * @module lib/config/admission-dates
 */

export const tipoFechaAdmisionColors: Record<string, string> = {
  inscripcion: 'bg-info',
  examen: 'bg-doctorado',
  resultados: 'bg-diplomado',
  matricula: 'bg-curso',
  inicio_clases: 'bg-success',
};

export const tipoFechaAdmisionLabels: Record<string, string> = {
  inscripcion: 'Inscripción',
  examen: 'Examen',
  resultados: 'Resultados',
  matricula: 'Matrícula',
  inicio_clases: 'Inicio',
};
