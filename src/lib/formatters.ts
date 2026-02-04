/**
 * Utilidades de formateo de fechas y textos
 * @module lib/formatters
 */

/**
 * Formatea una fecha en formato largo en español (Perú)
 * Ejemplo: "15 de enero de 2025"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Formatea una fecha con el día de la semana
 * Ejemplo: "lunes, 15 de enero de 2025"
 */
export function formatDateTime(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-PE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Formatea una fecha en formato corto
 * Ejemplo: "15 ene 2025"
 */
export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Formatea una fecha para mostrar en calendarios/eventos
 * Retorna un objeto con día y mes separados
 * Ejemplo: { day: "15", month: "ENE" }
 */
export function formatEventDate(dateString: string): { day: string; month: string } {
  const date = new Date(dateString);
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('es-PE', { month: 'short' }).toUpperCase(),
  };
}

/**
 * Formatea una fecha de manera segura, retornando un valor por defecto si no es válida
 */
export function formatDateSafe(dateString?: string, fallback: string = 'Por definir'): string {
  if (!dateString) return fallback;
  return formatDate(dateString);
}
