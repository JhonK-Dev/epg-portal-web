import type { InfoContacto } from '@/types';

/**
 * Información de contacto general de la EPG
 */
export const contactoGeneral: InfoContacto = {
  direccion: 'Calle los Rosales S/N - Sta cuadra San Juan Bautista',
  telefono: '+51987654320',
  telefonoDisplay: '(065) 987-654-320',
  email: 'postgrado@unap.edu.pe',
  whatsapp: '+51987654320',
  horarioAtencion: 'Lunes a Viernes: 7:00 a.m. - 2:00 p.m.',
  coordenadas: {
    lat: -3.7437,
    lng: -73.2516,
  },
};

/**
 * Información de contacto específica para admisión
 */
export const contactoAdmision: InfoContacto = {
  ...contactoGeneral,
  telefono: '+51987654321',
  telefonoDisplay: '(065) 987-654-321',
  email: 'admision@unap.edu.pe',
  whatsapp: '+51987654321',
};

/**
 * Información de contacto para soporte técnico
 */
export const contactoSoporte: InfoContacto = {
  ...contactoGeneral,
  telefono: '+51987654322',
  telefonoDisplay: '(065) 987-654-322',
  email: 'soporte@unap.edu.pe',
  whatsapp: '+51987654322',
};

/**
 * Helper para obtener el href de teléfono
 */
export const getTelefonoHref = (telefono: string): string => {
  return `tel:${telefono}`;
};

/**
 * Helper para obtener el href de email
 */
export const getEmailHref = (email: string): string => {
  return `mailto:${email}`;
};

/**
 * Helper para obtener el link de WhatsApp
 */
export const getWhatsappHref = (whatsapp: string, mensaje?: string): string => {
  const numero = whatsapp.replace(/\D/g, ''); // Remover caracteres no numéricos
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${numero}${texto}`;
};
