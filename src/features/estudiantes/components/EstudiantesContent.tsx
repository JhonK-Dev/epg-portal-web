import { useState } from 'react';
import type {
  AccesoRapido,
  TramiteEstudiantil,
  DocumentoDescargable,
  FechaCalendario,
  RecursoAcademico,
  PreguntaFrecuente,
} from '@/types';
import {
  ClipboardList,
  Monitor,
  BookOpen,
  Mail,
  Calendar,
  FileText,
  Users,
  Award,
  ClipboardCheck,
  PauseCircle,
  Shuffle,
  GraduationCap,
  CreditCard,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Search,
  Database,
  ShieldCheck,
  Bookmark,
  UserCheck,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { Accordion, type AccordionItem } from '@/components/ui/accordion';
import { DocumentDownloadItem } from '@/components/ui/document-download-item';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CTABannerSideBySide } from '@/components/ui/cta-banner';
import { PageHero } from '@/components/ui/page-hero';
import { IconCircle } from '@/components/ui/icon-circle';

// ========================================
// ICON MAPPER HELPERS
// ========================================
const accesoIconMap: Record<string, React.ReactNode> = {
  clipboard: <ClipboardList className="w-6 h-6 text-white" />,
  monitor: <Monitor className="w-6 h-6 text-white" />,
  'book-open': <BookOpen className="w-6 h-6 text-white" />,
  mail: <Mail className="w-6 h-6 text-white" />,
  calendar: <Calendar className="w-6 h-6 text-white" />,
  'file-text': <FileText className="w-6 h-6 text-white" />,
  users: <Users className="w-6 h-6 text-white" />,
  award: <Award className="w-6 h-6 text-white" />,
};

const tramiteIconMap: Record<string, (className: string) => React.ReactNode> = {
  'clipboard-check': (className) => <ClipboardCheck className={className} />,
  award: (className) => <Award className={className} />,
  users: (className) => <Users className={className} />,
  'pause-circle': (className) => <PauseCircle className={className} />,
  shuffle: (className) => <Shuffle className={className} />,
  'file-text': (className) => <FileText className={className} />,
  'graduation-cap': (className) => <GraduationCap className={className} />,
  'credit-card': (className) => <CreditCard className={className} />,
};

const recursoIconMap: Record<string, React.ReactNode> = {
  database: <Database className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
  'shield-check': <ShieldCheck className="w-5 h-5" />,
  bookmark: <Bookmark className="w-5 h-5" />,
  'graduation-cap': <GraduationCap className="w-5 h-5" />,
  'user-check': <UserCheck className="w-5 h-5" />,
};

// ========================================
// ACCESOS RÁPIDOS COMPONENT
// ========================================
function AccesosRapidos({ items }: { items: AccesoRapido[] }) {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{
            label: 'Servicios en Línea',
            className: 'bg-epg-gold/10 text-epg-gold',
          }}
          title="Acceso Rápido"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((acceso) => (
            <a
              key={acceso.id}
              href={acceso.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <IconCircle
                icon={accesoIconMap[acceso.icono]}
                size="lg"
                variant="navy"
                rounded="full"
                className="mx-auto mb-4 group-hover:bg-epg-gold transition-colors"
              />
              <span className="font-medium text-epg-navy block">
                {acceso.nombre}
              </span>
              <span className="text-sm text-gray-500 mt-1 block">
                {acceso.descripcion}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// TRÁMITES COMPONENT
// ========================================
function TramitesGrid({ items }: { items: TramiteEstudiantil[] }) {
  const [selectedTramite, setSelectedTramite] =
    useState<TramiteEstudiantil | null>(null);

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{
            label: 'Gestiones Académicas',
            className: 'bg-blue-100 text-blue-800',
          }}
          title="Procesos y Trámites"
          description="Gestiona tus procesos académicos de manera fácil y rápida"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((tramite) => {
            const IconComponent = tramiteIconMap[tramite.icono];
            return (
              <Card
                key={tramite.id}
                className="hover:shadow-xl transition-all cursor-pointer group"
                onClick={() =>
                  setSelectedTramite(
                    selectedTramite?.id === tramite.id ? null : tramite
                  )
                }
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${tramite.color} rounded-lg flex items-center justify-center`}
                    >
                      {IconComponent &&
                        IconComponent(`w-6 h-6 ${tramite.iconColor}`)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-epg-navy group-hover:text-epg-gold transition-colors">
                        {tramite.nombre}
                      </CardTitle>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        selectedTramite?.id === tramite.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    {tramite.descripcion}
                  </p>

                  {tramite.duracion && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{tramite.duracion}</span>
                    </div>
                  )}

                  {/* Expanded Content */}
                  {selectedTramite?.id === tramite.id && (
                    <div className="mt-4 pt-4 border-t space-y-4 animate-in slide-in-from-top-2">
                      {/* Requisitos */}
                      <div>
                        <h4 className="font-semibold text-sm text-epg-navy mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Requisitos
                        </h4>
                        <ul className="space-y-1">
                          {tramite.requisitos.map((req, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <ChevronRight className="w-4 h-4 text-epg-gold flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pasos */}
                      <div>
                        <h4 className="font-semibold text-sm text-epg-navy mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-500" />
                          Pasos a seguir
                        </h4>
                        <ol className="space-y-1">
                          {tramite.pasos.map((paso, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="w-5 h-5 bg-epg-navy text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                {idx + 1}
                              </span>
                              {paso}
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Documentos */}
                      {tramite.documentos.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-epg-navy mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-amber-500" />
                            Documentos necesarios
                          </h4>
                          <ul className="space-y-1">
                            {tramite.documentos.map((doc, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Costo */}
                      {tramite.costo && (
                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium text-green-800">
                            Costo: {tramite.costo}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// DOCUMENTOS COMPONENT
// ========================================
function DocumentosDescargables({ items }: { items: DocumentoDescargable[] }) {
  const tipoIcon: Record<
    DocumentoDescargable['tipo'],
    { bg: string; text: string }
  > = {
    pdf: { bg: 'bg-red-100', text: 'text-red-600' },
    docx: { bg: 'bg-blue-100', text: 'text-blue-600' },
    xlsx: { bg: 'bg-green-100', text: 'text-green-600' },
  };

  const categorias = ['reglamento', 'formato', 'guia', 'manual'] as const;
  const categoriaLabels: Record<DocumentoDescargable['categoria'], string> = {
    reglamento: 'Reglamentos',
    formato: 'Formatos',
    guia: 'Guías',
    manual: 'Manuales',
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{ label: 'Recursos', className: 'bg-red-100 text-red-800' }}
          title="Documentos Importantes"
          description="Descarga reglamentos, formatos y guías oficiales"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((doc) => (
            <DocumentDownloadItem
              key={doc.id}
              name={doc.nombre}
              url={doc.url}
              type={doc.tipo}
              date={doc.fechaActualizacion}
              variant="detailed"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <a href="/escuela#documentos" className="flex items-center gap-2">
              Ver todos los documentos
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ========================================
// CALENDARIO COMPONENT
// ========================================
function CalendarioAcademico({ items }: { items: FechaCalendario[] }) {
  const tipoStyles: Record<
    FechaCalendario['tipo'],
    {
      accent: string;
      badge: string;
      dateBg: string;
      dateText: string;
      label: string;
    }
  > = {
    matricula: {
      accent: 'from-blue-600 to-blue-400',
      badge: 'border-blue-200 text-blue-700 bg-blue-50',
      dateBg: 'bg-blue-50',
      dateText: 'text-blue-800',
      label: 'Matrícula',
    },
    examen: {
      accent: 'from-red-600 to-rose-400',
      badge: 'border-red-200 text-red-700 bg-red-50',
      dateBg: 'bg-red-50',
      dateText: 'text-red-800',
      label: 'Examen',
    },
    sustentacion: {
      accent: 'from-purple-600 to-fuchsia-400',
      badge: 'border-purple-200 text-purple-700 bg-purple-50',
      dateBg: 'bg-purple-50',
      dateText: 'text-purple-800',
      label: 'Sustentación',
    },
    vacaciones: {
      accent: 'from-green-600 to-emerald-400',
      badge: 'border-green-200 text-green-700 bg-green-50',
      dateBg: 'bg-green-50',
      dateText: 'text-green-800',
      label: 'Vacaciones',
    },
    evento: {
      accent: 'from-amber-600 to-yellow-400',
      badge: 'border-amber-200 text-amber-700 bg-amber-50',
      dateBg: 'bg-amber-50',
      dateText: 'text-amber-800',
      label: 'Evento',
    },
    pago: {
      accent: 'from-emerald-600 to-teal-400',
      badge: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      dateBg: 'bg-emerald-50',
      dateText: 'text-emerald-800',
      label: 'Pago',
    },
  };

  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'short',
    });
  };

  const formatRango = (fechaInicio: string, fechaFin?: string) => {
    if (!fechaFin) {
      return formatFecha(fechaInicio);
    }

    return `${formatFecha(fechaInicio)} - ${formatFecha(fechaFin)}`;
  };

  const eventos = [...items]
    .sort(
      (a, b) =>
        new Date(a.fechaInicio).getTime() - new Date(b.fechaInicio).getTime(),
    )
    .slice(0, 8);

  return (
    <section className="py-12 lg:py-16 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{
            label: 'Planificación',
            className: 'bg-purple-100 text-purple-800',
          }}
          title="Calendario Académico"
          description="Fechas importantes del semestre"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {eventos.map((fecha) => {
            const style = tipoStyles[fecha.tipo];

            return (
              <Card
                key={fecha.id}
                className={`group relative overflow-hidden border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  fecha.importante ? 'ring-2 ring-epg-gold/70' : ''
                }`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${style.accent}`} />

                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <Badge
                      variant="outline"
                      className={`font-medium ${style.badge}`}
                    >
                      {style.label}
                    </Badge>

                    {fecha.importante && (
                      <Badge className="bg-epg-gold text-epg-navy font-semibold">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Prioritario
                      </Badge>
                    )}
                  </div>

                  <h4 className="text-xl leading-tight font-semibold text-epg-navy mb-2">
                    {fecha.titulo}
                  </h4>

                  <p className="text-sm text-gray-600 mb-4 min-h-[44px]">
                    {fecha.descripcion}
                  </p>

                  <div
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 ${style.dateBg}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className={`text-sm font-medium ${style.dateText}`}>
                      {formatRango(fecha.fechaInicio, fecha.fechaFin)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// RECURSOS ACADÉMICOS COMPONENT
// ========================================
function RecursosAcademicosGrid({ items }: { items: RecursoAcademico[] }) {
  return (
    <section className="py-12 lg:py-16 bg-epg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{ label: 'Herramientas', className: 'bg-white/10 text-white' }}
          title="Recursos Académicos"
          description="Herramientas y plataformas para tu investigación"
          titleColor="text-white"
          descriptionColor="text-gray-300"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((recurso) => (
            <a
              key={recurso.id}
              href={recurso.href}
              target={recurso.externo ? '_blank' : undefined}
              rel={recurso.externo ? 'noopener noreferrer' : undefined}
              className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-epg-gold rounded-full flex items-center justify-center mx-auto mb-3 text-epg-navy group-hover:scale-110 transition-transform">
                {recursoIconMap[recurso.icono] || (
                  <BookOpen className="w-5 h-5" />
                )}
              </div>
              <h4 className="font-medium text-white text-sm mb-1">
                {recurso.nombre}
              </h4>
              {recurso.externo && (
                <ExternalLink className="w-3 h-3 text-gray-400 mx-auto" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// FAQ COMPONENT
// ========================================
function PreguntasFrecuentesSection({ items }: { items: PreguntaFrecuente[] }) {
  const categoriaLabels: Record<PreguntaFrecuente['categoria'], string> = {
    matricula: 'Matrícula',
    tramites: 'Trámites',
    tesis: 'Tesis',
    pagos: 'Pagos',
    general: 'General',
  };

  const accordionItems: AccordionItem[] = items.map((faq) => ({
    id: faq.id,
    title: (
      <div className="flex items-center gap-3">
        <HelpCircle className="w-5 h-5 text-epg-gold flex-shrink-0" />
        <span className="font-medium text-epg-navy">{faq.pregunta}</span>
      </div>
    ),
    content: (
      <div className="pl-8 pt-2 border-t animate-in slide-in-from-top-2">
        <Badge variant="outline" className="mb-2 text-xs">
          {categoriaLabels[faq.categoria]}
        </Badge>
        <p className="text-gray-600">{faq.respuesta}</p>
      </div>
    ),
  }));

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{ label: 'Ayuda', className: 'bg-amber-100 text-amber-800' }}
          title="Preguntas Frecuentes"
          description="Respuestas a las dudas más comunes de los estudiantes"
        />

        <Accordion
          items={accordionItems}
          itemClassName="bg-white rounded-lg shadow-sm border overflow-hidden"
          headerClassName="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          contentClassName="px-6 pb-4"
        />

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <Button className="bg-epg-navy hover:bg-epg-navy-dark" asChild>
            <a
              href="mailto:epg@unapiquitos.edu.pe"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ========================================
// CTA COMPONENT
// ========================================
function CtaSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABannerSideBySide
          title="¿Necesitas ayuda adicional?"
          description="Nuestro equipo de atención al estudiante está disponible para ayudarte"
          primaryAction={{
            label: 'Ir a SIGAE',
            href: 'https://sigae.unapiquitos.edu.pe',
            external: true,
          }}
          secondaryAction={{
            label: 'Ver todos los servicios',
            href: '/servicios',
          }}
        />
      </div>
    </section>
  );
}

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export interface EstudiantesContentProps {
  accesosRapidos: AccesoRapido[];
  tramites: TramiteEstudiantil[];
  calendario: FechaCalendario[];
  documentos: DocumentoDescargable[];
  recursos: RecursoAcademico[];
  faq: PreguntaFrecuente[];
}

export function EstudiantesContent({
  accesosRapidos,
  tramites,
  calendario,
  documentos,
  recursos,
  faq,
}: EstudiantesContentProps) {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Portal del Estudiante"
        subtitle="Accede a recursos, trámites y servicios exclusivos para estudiantes de la Escuela de Postgrado."
        breadcrumbs={[]}
        variant="solid"
        bgColorClass="bg-epg-navy"
      />

      {/* Accesos Rápidos */}
      <AccesosRapidos items={accesosRapidos} />

      {/* Trámites */}
      <TramitesGrid items={tramites} />

      {/* Calendario */}
      <CalendarioAcademico items={calendario} />

      {/* Documentos */}
      <DocumentosDescargables items={documentos} />

      {/* Recursos Académicos */}
      <RecursosAcademicosGrid items={recursos} />

      {/* FAQ */}
      <PreguntasFrecuentesSection items={faq} />

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
