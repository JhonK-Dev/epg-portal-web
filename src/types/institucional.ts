/**
 * Tipos del dominio: Institucional
 * @module types/institucional
 */

import type { GradoAcademico } from './docentes';

export interface Autoridad {
  id: string;
  nombres: string;
  apellidos: string;
  cargo: string;
  grado: GradoAcademico;
  foto?: string;
  email?: string;
  telefono?: string;
  orden: number; // Para ordenar en la vista
}

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionCorta: string;
  icono: string; // Nombre del icono de Lucide
  url?: string; // URL externa si aplica
  esExterno: boolean;
  slug: string;
  instrucciones?: string;
}

export interface InfoContacto {
  direccion: string;
  telefono: string;          // Formato para href (ej: +51987654321)
  telefonoDisplay: string;   // Formato visual (ej: (065) 987-654-321)
  email: string;
  whatsapp?: string;         // Número para wa.me link
  horarioAtencion: string;
  coordenadas?: {
    lat: number;
    lng: number;
  };
}

export interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

export interface Documento {
  id: string;
  nombre: string;
  descripcion?: string;
  url: string;
  tipo: 'reglamento' | 'formato' | 'manual' | 'guia';
  fechaActualizacion?: string;
}

export interface InfoInstitucional {
  nombreCompleto: string;
  nombreCorto: string;
  lema: string;
  historia: string;
  mision: string;
  vision: string;
  valores: string[];
}
