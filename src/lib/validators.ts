/**
 * Utilidades de validación compartidas
 * Este módulo contiene funciones de validación reutilizables en toda la aplicación.
 */

/**
 * Valida que un email tenga el formato correcto
 * @param email - El email a validar
 * @returns true si el email es válido, false en caso contrario
 * @example
 * validateEmail('usuario@ejemplo.com') // true
 * validateEmail('correo-invalido') // false
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida que un texto no esté vacío después de quitar espacios
 * @param value - El valor a validar
 * @returns true si el valor no está vacío, false en caso contrario
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

/**
 * Valida que un texto tenga una longitud mínima
 * @param value - El valor a validar
 * @param minLength - Longitud mínima requerida
 * @returns true si cumple la longitud mínima, false en caso contrario
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}

/**
 * Valida que un texto tenga una longitud máxima
 * @param value - El valor a validar
 * @param maxLength - Longitud máxima permitida
 * @returns true si cumple la longitud máxima, false en caso contrario
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength
}
