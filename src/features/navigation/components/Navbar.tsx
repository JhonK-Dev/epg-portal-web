import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface DropdownItem {
  label: string;
  href: string;
  items?: NavItem[];
}

const mainNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'La Escuela', href: '/escuela' },
  { label: 'Admisión', href: '/admision' },
  { label: 'Programas', href: '/programas' },
  { label: 'Contacto', href: '/contacto' },
];

const secondaryNavItems: DropdownItem[] = [
  {
    label: 'Publicaciones',
    href: '/publicaciones',
    items: [
      { label: 'Todas las publicaciones', href: '/publicaciones' },
      { label: 'Noticias', href: '/publicaciones/noticias' },
      { label: 'Eventos', href: '/publicaciones/eventos' },
      { label: 'Avisos', href: '/publicaciones/avisos' },
    ],
  },
  {
    label: 'Docentes',
    href: '/docentes',
    items: [
      { label: 'Nuestros Docentes', href: '/docentes' },
      { label: 'Recursos Docentes', href: '/docentes/recursos' },
      { label: 'Calendario Académico', href: '/docentes/calendario' },
    ],
  },
  {
    label: 'Estudiantes',
    href: '/estudiantes',
    items: [
      { label: 'Portal del Estudiante', href: '/estudiantes' },
      { label: 'Matrícula', href: '/estudiantes/matricula' },
      { label: 'Trámite de Grado', href: '/estudiantes/tramite-grado' },
      { label: 'Sustentaciones', href: '/estudiantes/sustentaciones' },
    ],
  },
  {
    label: 'Servicios',
    href: '/servicios',
    items: [
      { label: 'Todos los Servicios', href: '/servicios' },
      {
        label: 'SIGAE',
        href: 'https://sigae.universidad.edu.pe',
        isExternal: true,
      },
      {
        label: 'Aula Virtual',
        href: 'https://aulavirtual.universidad.edu.pe',
        isExternal: true,
      },
      {
        label: 'Biblioteca Virtual',
        href: 'https://biblioteca.universidad.edu.pe',
        isExternal: true,
      },
      {
        label: 'Correo Institucional',
        href: 'https://outlook.office.com',
        isExternal: true,
      },
    ],
  },
];

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Estados para el comportamiento de scroll
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detectar si estamos en el hero (top)
      setIsAtTop(currentScrollY < 50);

      // Detectar dirección del scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll down - ocultar navbar
        setIsHidden(true);
      } else {
        // Scroll up - mostrar navbar
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Main Navigation - Navy Bar */}
      <nav
        className={`transition-all duration-300 ${
          isAtTop
            ? 'bg-transparent text-white'
            : 'bg-epg-navy text-white shadow-lg'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo/logo-epg.webp"
                alt="Logo EPG UNAP"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                loading="eager"
              />
            </a>

            {/* Main Navigation Items - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-epg-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="/admision"
                className="btn-gold px-4 py-2 rounded-lg text-sm font-bold"
              >
                Inscríbete
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation - Gold Bar - Desktop */}
      <nav
        className={`hidden md:block transition-all duration-300 ${
          isAtTop
            ? 'bg-transparent/80 text-white'
            : 'bg-epg-gold-dark text-white'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-end h-11 gap-6">
            {secondaryNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium hover:text-white/80 transition-colors py-3"
                >
                  {item.label}
                  {item.items && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                {openDropdown === item.label && item.items && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-md overflow-hidden z-50">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.isExternal ? '_blank' : undefined}
                        rel={
                          subItem.isExternal ? 'noopener noreferrer' : undefined
                        }
                        className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-epg-navy transition-colors"
                      >
                        {subItem.label}
                        {subItem.isExternal && (
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-epg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {/* Main Nav Items */}
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="border-t border-white/10 my-4"></div>

            {/* Secondary Nav Items with Dropdowns */}
            {secondaryNavItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="flex items-center justify-between w-full px-3 py-2 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
                  aria-expanded={mobileDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                {mobileDropdown === item.label && item.items && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.isExternal ? '_blank' : undefined}
                        rel={
                          subItem.isExternal ? 'noopener noreferrer' : undefined
                        }
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {subItem.label}
                        {subItem.isExternal && (
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-white/10 my-4"></div>

            {/* CTA Button */}
            <a
              href="/admision"
              className="block w-full btn-gold px-4 py-3 rounded-lg text-center font-bold"
            >
              Inscríbete ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
