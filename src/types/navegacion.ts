/**
 * Tipos del dominio: Navegación
 * @module types/navegacion
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items?: NavItem[];
}
