import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormInput } from '@/components/ui/form-input';
import { SectionHeader } from '@/components/ui/section-header';
import { Separator } from '@/components/ui/separator';
import { contactoGeneral, getWhatsappHref } from '@/data/contacto';

import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from 'lucide-react';
import React, { useState } from 'react';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
};

const asuntoOptions = [
  { value: '', label: 'Selecciona un asunto' },
  { value: 'admision', label: 'Información de admisión' },
  { value: 'programa', label: 'Consulta sobre un programa' },
  { value: 'tramite', label: 'Trámites y documentos' },
  { value: 'convenio', label: 'Convenios y alianzas' },
  { value: 'otro', label: 'Otro' },
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: contactoGeneral.direccion,
    href: `https://www.google.com/maps?q=${contactoGeneral.coordenadas?.lat},${contactoGeneral.coordenadas?.lng}`,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: contactoGeneral.telefonoDisplay,
    href: `tel:${contactoGeneral.telefono}`,
  },
  {
    icon: Mail,
    label: 'Correo',
    value: contactoGeneral.email,
    href: `mailto:${contactoGeneral.email}`,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: contactoGeneral.horarioAtencion,
  },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with real API later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      });
    }, 4000);
  };

  return (
    <section className="home-section px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <SectionHeader
          badge={{
            label: 'Contacto',
            className: 'text-epg-navy bg-epg-gold/80 px-2 py-1 rounded',
          }}
          title="¿Tienes alguna consulta?"
          description="Completa el formulario y nuestro equipo te responderá a la brevedad. También puedes contactarnos directamente."
          align="center"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* ── Contact Form ── */}
          <div
            className="scroll-reveal lg:col-span-3"
            data-animation="fade-in-left"
          >
            <Card className="rounded-2xl border-gray-100 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-epg-navy mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-500 max-w-sm">
                      Hemos recibido tu consulta. Te responderemos a la brevedad
                      al correo proporcionado.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row: nombre + email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput
                        icon={<User className="h-5 w-5" />}
                        label="Nombre completo"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. María García López"
                      />
                      <FormInput
                        icon={<Mail className="h-5 w-5" />}
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    {/* Row: telefono + asunto */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput
                        icon={<Phone className="h-5 w-5" />}
                        label="Teléfono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="987 654 321"
                      />
                      <div className="w-full">
                        <label
                          htmlFor="contact-asunto"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Asunto<span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Send className="h-5 w-5" />
                          </div>
                          <select
                            id="contact-asunto"
                            name="asunto"
                            required
                            value={formData.asunto}
                            onChange={handleChange}
                            className="w-full py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none transition-colors pl-12 pr-4 text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-size-[20px] bg-position-[right_12px_center] bg-no-repeat"
                          >
                            {asuntoOptions.map((opt) => (
                              <option
                                key={opt.value}
                                value={opt.value}
                                disabled={!opt.value}
                              >
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="w-full">
                      <label
                        htmlFor="contact-mensaje"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mensaje<span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <MessageCircle className="h-5 w-5" />
                        </div>
                        <textarea
                          id="contact-mensaje"
                          name="mensaje"
                          required
                          rows={4}
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Describe tu consulta o comentario…"
                          className="w-full py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none transition-colors pl-12 pr-4 text-sm resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-epg-navy hover:bg-epg-navy-light text-white rounded-xl font-bold px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar consulta
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* ── Contact Info Sidebar ── */}
          <div
            className="scroll-reveal lg:col-span-2 space-y-4"
            data-animation="fade-in-right"
            data-delay="100"
          >
            {contactInfo.map((item, index) => (
              <React.Fragment key={item.label}>
                <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-11 h-11 bg-epg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-epg-navy" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="text-sm font-medium text-epg-navy hover:text-epg-navy-light transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-epg-navy">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                {index < contactInfo.length - 1 && (
                  <Separator className="my-0 bg-transparent" />
                )}
              </React.Fragment>
            ))}

            {/* WhatsApp CTA */}
            <Button
              asChild
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 h-auto justify-start gap-3 font-normal"
            >
              <a
                href={getWhatsappHref(
                  contactoGeneral.whatsapp!,
                  'Hola, tengo una consulta sobre la Escuela de Postgrado.'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Escríbenos por WhatsApp</p>
                  <p className="text-xs text-green-100">
                    Respuesta rápida en horario de atención
                  </p>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
