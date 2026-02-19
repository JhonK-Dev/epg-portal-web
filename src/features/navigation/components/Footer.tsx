import React from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { contactoGeneral } from '@/data/contacto';

const footerLinks = {
  programas: [
    { label: 'Maestrías', href: '/programas/maestrias' },
    { label: 'Doctorados', href: '/programas/doctorados' },
    { label: 'Diplomados', href: '/programas/diplomados' },
    { label: 'Cursos', href: '/programas/cursos' },
  ],
  laEscuela: [
    { label: 'Presentación', href: '/escuela' },
    { label: 'Autoridades', href: '/escuela/autoridades' },
    { label: 'Directorio', href: '/escuela/directorio' },
    { label: 'Contacto', href: '/contacto' },
  ],
  estudiantes: [
    { label: 'Portal del Estudiante', href: '/estudiantes' },
    { label: 'Trámites', href: '/estudiantes/tramites' },
    { label: 'Sustentaciones', href: '/estudiantes/sustentaciones' },
    { label: 'Biblioteca', href: '/servicios/biblioteca-virtual' },
  ],
  servicios: [
    { label: 'SIGAE', href: '/servicios/sigae' },
    { label: 'Aula Virtual', href: '/servicios/aula-virtual' },
    { label: 'Correo Institucional', href: '/servicios/correo-institucional' },
    { label: 'Mesa de Partes', href: '/servicios/mesa-partes' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/epgunap', label: 'Facebook' },
  {
    icon: Instagram,
    href: 'https://instagram.com/epgunap',
    label: 'Instagram',
  },
  { icon: Youtube, href: 'https://youtube.com/@epgunap', label: 'YouTube' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/epgunap',
    label: 'LinkedIn',
  },
  { icon: Twitter, href: 'https://twitter.com/epgunap', label: 'X (Twitter)' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-epg-navy text-white">
      {/* Main Footer */}
      <div className="container-main py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/public/images/logo/logo-epg.webp"
                alt="Escuela de Postgrado Logo"
                className="w-64 h-auto object-contain"
              />
              {/* <div>
                <span className="text-sm font-semibold leading-tight block">
                  ESCUELA DE POSTGRADO
                </span>
                <span className="text-xs text-gray-400">
                  Universidad Nacional de la Amazonía Peruana
                </span>
              </div> */}
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Formando líderes para el desarrollo sostenible de la Amazonía
              peruana desde 1990.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-epg-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {contactoGeneral.direccion}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-epg-gold flex-shrink-0" />
                <a
                  href={`tel:${contactoGeneral.telefono}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactoGeneral.telefonoDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-epg-gold flex-shrink-0" />
                <a
                  href={`mailto:${contactoGeneral.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactoGeneral.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-epg-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {contactoGeneral.horarioAtencion}
                </span>
              </div>
            </div>
          </div>

          {/* Programas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Programas</h4>
            <ul className="space-y-2">
              {footerLinks.programas.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-epg-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* La Escuela */}
          <div>
            <h4 className="font-semibold text-white mb-4">La Escuela</h4>
            <ul className="space-y-2">
              {footerLinks.laEscuela.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-epg-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Estudiantes */}
          <div>
            <h4 className="font-semibold text-white mb-4">Estudiantes</h4>
            <ul className="space-y-2">
              {footerLinks.estudiantes.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-epg-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-epg-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-gray-200">
          <span className="text-gray-300">¿Listo para postular?</span>{' '}
          <a
            href="/admision"
            className="text-epg-gold font-semibold hover:text-epg-gold-dark transition-colors"
          >
            Revisa la convocatoria vigente
          </a>
          <span className="text-gray-400"> o </span>
          <a
            href="/contacto"
            className="text-epg-gold font-semibold hover:text-epg-gold-dark transition-colors"
          >
            habla con admisión
          </a>
          .
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Síguenos:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-epg-gold transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-epg-navy" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a
                href="/politica-privacidad"
                className="hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="/terminos-condiciones"
                className="hover:text-white transition-colors"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-epg-navy-dark py-4 border-t border-gray-800">
        <div className="container-main">
          <div className="text-center text-sm text-gray-500">
            <p>
              © {currentYear} Escuela de Postgrado - Universidad Nacional de la
              Amazonía Peruana. Todos los derechos reservados.
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Oficina de Soporte Informático
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
