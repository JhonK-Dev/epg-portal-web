export function getTelefonoHref(telefono: string): string {
  return `tel:${telefono}`;
}

export function getEmailHref(email: string): string {
  return `mailto:${email}`;
}

export function getWhatsappHref(whatsapp: string, mensaje?: string): string {
  const numero = whatsapp.replace(/\D/g, '');
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${numero}${texto}`;
}
