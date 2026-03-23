/**
 * Tipos del dominio: Publicaciones y Comunicados
 * @module types/publicaciones
 */

export type TipoPublicacion = 'noticia' | 'evento' | 'aviso' | 'comunicado';

export interface Publicacion {
  id: string;
  titulo: string;
  tipo: TipoPublicacion;
  contenido?: string;
  resumen: string;
  fecha: string;
  fechaEvento?: string; // Solo para eventos
  hora?: string; // Solo para eventos
  lugar?: string; // Solo para eventos
  imagen?: string;
  slug: string;
  autor?: string;
  destacado: boolean;
  etiquetas?: string[];
}

export interface BusquedaPopular {
  id: string;
  label: string; // Texto a mostrar al usuario
  query: string; // Query para la URL (/programas?q=xxx)
  tipo?: import('./programas').TipoPrograma; // Opcional: filtrar por tipo de programa
}
