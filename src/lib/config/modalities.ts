/**
 * Configuración visual de Modalidades
 * @module lib/config/modalities
 */

// Etiquetas para modalidades
export const modalidadLabels: Record<string, string> = {
  todos: 'Todas las modalidades',
  presencial: 'Presencial',
  semipresencial: 'Semipresencial',
  virtual: 'Virtual',
};

// Colores para badges de modalidades
export const modalidadColors: Record<string, string> = {
  presencial: 'bg-modalidad-presencial-light text-modalidad-presencial',
  semipresencial: 'bg-modalidad-semipresencial-light text-modalidad-semipresencial',
  virtual: 'bg-modalidad-virtual-light text-modalidad-virtual',
};
