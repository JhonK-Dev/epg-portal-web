import { useState } from 'react';
import {
  accesosRapidos,
  tramitesEstudiantiles,
  documentosDescargables,
  calendarioAcademico,
  recursosAcademicos,
  preguntasFrecuentes,
  type TramiteEstudiantil,
  type DocumentoDescargable,
  type FechaCalendario,
  type PreguntaFrecuente
} from '@/data/estudiantes';
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
  ChevronUp,
  Search,
  Database,
  ShieldCheck,
  Bookmark,
  UserCheck,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// ========================================
// ICON MAPPER HELPERS
// ========================================
const accesoIconMap: Record<string, React.ReactNode> = {
  clipboard: <ClipboardList className="w-7 h-7 text-white" />,
  monitor: <Monitor className="w-7 h-7 text-white" />,
  'book-open': <BookOpen className="w-7 h-7 text-white" />,
  mail: <Mail className="w-7 h-7 text-white" />,
  calendar: <Calendar className="w-7 h-7 text-white" />,
  'file-text': <FileText className="w-7 h-7 text-white" />,
  users: <Users className="w-7 h-7 text-white" />,
  award: <Award className="w-7 h-7 text-white" />
};

const tramiteIconMap: Record<string, (className: string) => React.ReactNode> = {
  'clipboard-check': (className) => <ClipboardCheck className={className} />,
  award: (className) => <Award className={className} />,
  users: (className) => <Users className={className} />,
  'pause-circle': (className) => <PauseCircle className={className} />,
  shuffle: (className) => <Shuffle className={className} />,
  'file-text': (className) => <FileText className={className} />,
  'graduation-cap': (className) => <GraduationCap className={className} />,
  'credit-card': (className) => <CreditCard className={className} />
};

const recursoIconMap: Record<string, React.ReactNode> = {
  database: <Database className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
  'shield-check': <ShieldCheck className="w-5 h-5" />,
  bookmark: <Bookmark className="w-5 h-5" />,
  'graduation-cap': <GraduationCap className="w-5 h-5" />,
  'user-check': <UserCheck className="w-5 h-5" />
};

// ========================================
// ACCESOS RÁPIDOS COMPONENT
// ========================================
function AccesosRapidos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
<Badge className="bg-epg-gold/10 text-epg-gold mb-4">Servicios en Línea</Badge>
          <h2 className="text-2xl font-bold text-epg-navy">Acceso Rápido</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {accesosRapidos.map((acceso) => (
            <a
              key={acceso.id}
              href={acceso.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
<div className="w-14 h-14 bg-epg-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-epg-gold transition-colors">
                {accesoIconMap[acceso.icono]}
              </div>
              <span className="font-medium text-epg-navy block">{acceso.nombre}</span>
              <span className="text-sm text-gray-500 mt-1 block">{acceso.descripcion}</span>
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
function TramitesGrid() {
  const [selectedTramite, setSelectedTramite] = useState<TramiteEstudiantil | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Gestiones Académicas</Badge>
          <h2 className="text-2xl font-bold text-epg-navy mb-2">Procesos y Trámites</h2>
          <p className="text-gray-600">Gestiona tus procesos académicos de manera fácil y rápida</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tramitesEstudiantiles.map((tramite) => {
            const IconComponent = tramiteIconMap[tramite.icono];
            return (
              <Card
                key={tramite.id}
                className="hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedTramite(selectedTramite?.id === tramite.id ? null : tramite)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${tramite.color} rounded-lg flex items-center justify-center`}>
                      {IconComponent && IconComponent(`w-6 h-6 ${tramite.iconColor}`)}
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
                  <p className="text-gray-600 text-sm mb-3">{tramite.descripcion}</p>
                  
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
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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
                          <span className="text-sm font-medium text-green-800">Costo: {tramite.costo}</span>
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
function DocumentosDescargables() {
  const tipoIcon: Record<DocumentoDescargable['tipo'], { bg: string; text: string }> = {
    pdf: { bg: 'bg-red-100', text: 'text-red-600' },
    docx: { bg: 'bg-blue-100', text: 'text-blue-600' },
    xlsx: { bg: 'bg-green-100', text: 'text-green-600' }
  };

  const categorias = ['reglamento', 'formato', 'guia', 'manual'] as const;
  const categoriaLabels: Record<DocumentoDescargable['categoria'], string> = {
    reglamento: 'Reglamentos',
    formato: 'Formatos',
    guia: 'Guías',
    manual: 'Manuales'
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-red-100 text-red-800 mb-4">Recursos</Badge>
          <h2 className="text-2xl font-bold text-epg-navy mb-2">Documentos Importantes</h2>
          <p className="text-gray-600">Descarga reglamentos, formatos y guías oficiales</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {documentosDescargables.map((doc) => {
            const style = tipoIcon[doc.tipo];
            return (
              <a
                key={doc.id}
                href={doc.url}
                className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow group"
              >
                <div className={`w-10 h-10 ${style.bg} rounded flex items-center justify-center flex-shrink-0`}>
                  <FileText className={`w-5 h-5 ${style.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-epg-navy group-hover:text-epg-gold transition-colors truncate">
                    {doc.nombre}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs uppercase">
                      {doc.tipo}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      Actualizado: {new Date(doc.fechaActualizacion).toLocaleDateString('es-PE')}
                    </span>
                  </div>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-epg-gold flex-shrink-0" />
              </a>
            );
          })}
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
function CalendarioAcademico() {
  const tipoStyles: Record<FechaCalendario['tipo'], { bg: string; text: string; label: string }> = {
    matricula: { bg: 'bg-blue-500', text: 'text-blue-500', label: 'Matrícula' },
    examen: { bg: 'bg-red-500', text: 'text-red-500', label: 'Examen' },
    sustentacion: { bg: 'bg-purple-500', text: 'text-purple-500', label: 'Sustentación' },
    vacaciones: { bg: 'bg-green-500', text: 'text-green-500', label: 'Vacaciones' },
    evento: { bg: 'bg-amber-500', text: 'text-amber-500', label: 'Evento' },
    pago: { bg: 'bg-emerald-500', text: 'text-emerald-500', label: 'Pago' }
  };

  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-purple-100 text-purple-800 mb-4">Planificación</Badge>
          <h2 className="text-2xl font-bold text-epg-navy mb-2">Calendario Académico</h2>
          <p className="text-gray-600">Fechas importantes del semestre</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {calendarioAcademico.slice(0, 8).map((fecha) => {
            const style = tipoStyles[fecha.tipo];
            return (
              <Card key={fecha.id} className={`relative overflow-hidden ${fecha.importante ? 'ring-2 ring-epg-gold' : ''}`}>
                <div className={`absolute top-0 left-0 w-1 h-full ${style.bg}`} />
                <CardContent className="pt-4">
                  <Badge variant="outline" className={`mb-2 ${style.text} border-current`}>
                    {style.label}
                  </Badge>
                  <h4 className="font-semibold text-epg-navy mb-1">{fecha.titulo}</h4>
                  <p className="text-sm text-gray-600 mb-2">{fecha.descripcion}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatFecha(fecha.fechaInicio)}
                      {fecha.fechaFin && ` - ${formatFecha(fecha.fechaFin)}`}
                    </span>
                  </div>
                  {fecha.importante && (
                    <Badge className="mt-2 bg-epg-gold text-epg-navy">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Importante
                    </Badge>
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
// RECURSOS ACADÉMICOS COMPONENT
// ========================================
function RecursosAcademicosGrid() {
  return (
    <section className="py-12 bg-epg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-white/10 text-white mb-4">Herramientas</Badge>
          <h2 className="text-2xl font-bold text-white mb-2">Recursos Académicos</h2>
          <p className="text-gray-300">Herramientas y plataformas para tu investigación</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {recursosAcademicos.map((recurso) => (
            <a
              key={recurso.id}
              href={recurso.href}
              target={recurso.externo ? '_blank' : undefined}
              rel={recurso.externo ? 'noopener noreferrer' : undefined}
              className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-epg-gold rounded-full flex items-center justify-center mx-auto mb-3 text-epg-navy group-hover:scale-110 transition-transform">
                {recursoIconMap[recurso.icono] || <BookOpen className="w-5 h-5" />}
              </div>
              <h4 className="font-medium text-white text-sm mb-1">{recurso.nombre}</h4>
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
function PreguntasFrecuentesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const categoriaLabels: Record<PreguntaFrecuente['categoria'], string> = {
    matricula: 'Matrícula',
    tramites: 'Trámites',
    tesis: 'Tesis',
    pagos: 'Pagos',
    general: 'General'
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Ayuda</Badge>
          <h2 className="text-2xl font-bold text-epg-navy mb-2">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Respuestas a las dudas más comunes de los estudiantes</p>
        </div>

        <div className="space-y-3">
          {preguntasFrecuentes.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
<HelpCircle className="w-5 h-5 text-epg-gold flex-shrink-0" />
                  <span className="font-medium text-epg-navy">{faq.pregunta}</span>
                </div>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4 animate-in slide-in-from-top-2">
                  <div className="pl-8 pt-2 border-t">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {categoriaLabels[faq.categoria]}
                    </Badge>
                    <p className="text-gray-600">{faq.respuesta}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <Button className="bg-epg-navy hover:bg-epg-navy-dark" asChild>
            <a href="mailto:epg@unapiquitos.edu.pe" className="flex items-center gap-2">
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-epg-navy to-epg-navy-light text-white border-0 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda adicional?</h3>
              <p className="text-gray-300">
                Nuestro equipo de atención al estudiante está disponible para ayudarte
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-epg-gold text-epg-navy hover:bg-epg-gold-dark font-semibold"
                asChild
              >
                <a href="https://sigae.unapiquitos.edu.pe" target="_blank" rel="noopener noreferrer">
                  Ir a SIGAE
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="/servicios">Ver todos los servicios</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export function EstudiantesContent() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-epg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-epg-gold">Estudiantes</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portal del Estudiante</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Accede a recursos, trámites y servicios exclusivos para estudiantes de la Escuela de Postgrado.
          </p>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <AccesosRapidos />

      {/* Trámites */}
      <TramitesGrid />

      {/* Calendario */}
      <CalendarioAcademico />

      {/* Documentos */}
      <DocumentosDescargables />

      {/* Recursos Académicos */}
      <RecursosAcademicosGrid />

      {/* FAQ */}
      <PreguntasFrecuentesSection />

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
