/**
 * Configuración visual de Publicaciones
 * @module lib/config/publication-types
 */

export interface PublicationTypeConfig {
  label: string;
  bgColor: string;
  textColor: string;
}

/**
 * Obtiene la configuración visual para un tipo de publicación
 * Usado principalmente en NewsAndEvents
 */
export function getPublicationTypeConfig(tipo: string): PublicationTypeConfig {
  const configs: Record<string, PublicationTypeConfig> = {
    noticia: { label: 'Noticia', bgColor: 'bg-publicacion-noticia', textColor: 'text-white' },
    evento: { label: 'Evento', bgColor: 'bg-publicacion-evento', textColor: 'text-white' },
    aviso: { label: 'Aviso', bgColor: 'bg-publicacion-aviso', textColor: 'text-white' },
  };
  
  return configs[tipo] || { label: 'Publicación', bgColor: 'bg-muted', textColor: 'text-muted-foreground' };
}

// Etiquetas para tipos de publicación
export const tipoPublicacionLabels: Record<string, string> = {
  noticia: 'Noticia',
  evento: 'Evento',
  aviso: 'Aviso',
  comunicado: 'Comunicado',
};

// Colores de fondo
export const tipoPublicacionColors: Record<string, string> = {
  noticia: 'bg-publicacion-noticia',
  evento: 'bg-publicacion-evento',
  aviso: 'bg-publicacion-aviso',
  comunicado: 'bg-publicacion-comunicado',
};

// Colores para badges
export const tipoPublicacionBadgeColors: Record<string, string> = {
  noticia: 'bg-publicacion-noticia-light text-publicacion-noticia',
  evento: 'bg-publicacion-evento-light text-publicacion-evento',
  aviso: 'bg-publicacion-aviso-light text-publicacion-aviso',
  comunicado: 'bg-publicacion-comunicado-light text-publicacion-comunicado',
};

// Colores para badges (versión con texto blanco)
export const tipoPublicacionBadgeWhiteColors: Record<string, string> = {
  noticia: 'bg-publicacion-noticia text-white',
  evento: 'bg-publicacion-evento text-white',
  aviso: 'bg-publicacion-aviso text-white',
  comunicado: 'bg-publicacion-comunicado text-white',
};
