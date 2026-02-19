/**
 * Configuración visual de Documentos Institucionales
 * @module lib/config/document-types
 */

export const tipoDocumentoColors: Record<string, string> = {
  reglamento: 'bg-documento-reglamento-light text-documento-reglamento',
  formato: 'bg-documento-formato-light text-documento-formato',
  guia: 'bg-documento-guia-light text-documento-guia',
  manual: 'bg-documento-manual-light text-documento-manual',
};

export const tipoDocumentoLabels: Record<string, string> = {
  reglamento: 'Reglamento',
  formato: 'Formato',
  guia: 'Guía',
  manual: 'Manual',
};
