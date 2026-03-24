import type { Docente, Programa } from '@/types';

import { getGradoInfo, getSocialNetworkClasses } from '@/lib/config';
import {
  Mail,
  Phone,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Star,
  Lightbulb,
  ChevronLeft,
  MapPin,
  Calendar,
  Users,
  Building2,
  Globe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHero } from '@/components/ui/page-hero';

interface DocenteDetailProps {
  docente: Docente;
  programasDocente: Programa[];
}

export function DocenteDetail({ docente, programasDocente }: DocenteDetailProps) {
  const gradoInfo = getGradoInfo(docente.grado);
  const nombreCompleto = `${gradoInfo.label} ${docente.nombres} ${docente.apellidos}`;

  // Get programs where this teacher teaches
  

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={nombreCompleto}
        subtitle={docente.resumenPerfil}
        breadcrumbs={[]}
        badge={{
          label: gradoInfo.labelFull,
          className: `${gradoInfo.bgColor} ${gradoInfo.color}`,
        }}
        variant="gradient"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-start mt-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl bg-white/10 flex items-center justify-center text-white text-5xl lg:text-6xl font-bold border-4 border-epg-gold/30">
              {docente.nombres.charAt(0)}
              {docente.apellidos.charAt(0)}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-xl text-epg-gold mb-4">{docente.especialidad}</p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3">
              {docente.email && (
                <a
                  href={`mailto:${docente.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{docente.email}</span>
                </a>
              )}
              {docente.telefono && (
                <a
                  href={`tel:${docente.telefono}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{docente.telefono}</span>
                </a>
              )}
            </div>

            {/* Academic Links */}
            <div className="flex flex-wrap gap-3 mt-4">
              {docente.orcid && (
                <a
                  href={`https://orcid.org/${docente.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${getSocialNetworkClasses('orcid')}`}
                >
                  <Globe className="w-4 h-4" />
                  ORCID
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {docente.googleScholar && (
                <a
                  href={docente.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${getSocialNetworkClasses('googleScholar')}`}
                >
                  <BookOpen className="w-4 h-4" />
                  Google Scholar
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {docente.linkedin && (
                <a
                  href={docente.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${getSocialNetworkClasses('linkedin')}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {docente.researchgate && (
                <a
                  href={docente.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${getSocialNetworkClasses('researchGate')}`}
                >
                  <BookOpen className="w-4 h-4" />
                  ResearchGate
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </PageHero>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biografía */}
              {docente.biografia && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-epg-gold" />
                      Biografía
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {docente.biografia}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Áreas de Investigación */}
              {docente.areasInvestigacion &&
                docente.areasInvestigacion.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-epg-gold" />
                        Áreas de Investigación
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {docente.areasInvestigacion.map((area, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-epg-gold/10 text-epg-navy"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* Formación Académica */}
              {docente.formacionAcademica &&
                docente.formacionAcademica.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-epg-gold" />
                        Formación Académica
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {docente.formacionAcademica.map((formacion, index) => (
                          <div key={index} className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-epg-navy rounded-full flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-epg-navy">
                                {formacion.grado}
                              </h4>
                              <p className="text-gray-600">
                                {formacion.institucion}
                              </p>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>{formacion.pais}</span>
                                <span>•</span>
                                <Calendar className="w-3 h-3" />
                                <span>{formacion.anio}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* Experiencia Profesional */}
              {docente.experienciaProfesional &&
                docente.experienciaProfesional.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-epg-gold" />
                        Experiencia Profesional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {docente.experienciaProfesional.map((exp, index) => (
                          <div key={index} className="flex gap-4 items-start">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-epg-navy">
                                {exp.cargo}
                              </h4>
                              <p className="text-gray-600">{exp.institucion}</p>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.periodo}</span>
                              </div>
                              {exp.descripcion && (
                                <p className="text-sm text-gray-500 mt-2">
                                  {exp.descripcion}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* Publicaciones */}
              {docente.publicacionesAcademicas &&
                docente.publicacionesAcademicas.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-epg-gold" />
                        Publicaciones Académicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {docente.publicacionesAcademicas.map((pub, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-50 rounded-lg"
                          >
                            <h4 className="font-medium text-epg-navy mb-1">
                              {pub.titulo}
                            </h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">{pub.revista}</span>
                              <span className="mx-2">•</span>
                              <span>{pub.anio}</span>
                            </p>
                            {pub.doi && (
                              <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mt-2"
                              >
                                DOI: {pub.doi}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* Proyectos de Investigación */}
              {docente.proyectosInvestigacion &&
                docente.proyectosInvestigacion.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-epg-gold" />
                        Proyectos de Investigación
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {docente.proyectosInvestigacion.map(
                          (proyecto, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div
                                className="w-2 h-2 bg-epg-gold rounded-full mt-2 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-gray-600">{proyecto}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Reconocimientos */}
              {docente.reconocimientos &&
                docente.reconocimientos.length > 0 && (
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-amber-800">
                        <Award className="w-5 h-5" />
                        Reconocimientos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {docente.reconocimientos.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-amber-900">
                              {rec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

              {/* Programas donde enseña */}
              {programasDocente.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-epg-gold" />
                      Programas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {programasDocente.map((programa) => (
                        <a
                          key={programa!.id}
                          href={`/programas/${programa!.slug}`}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <Badge
                            variant="outline"
                            className="mb-2 text-xs capitalize"
                          >
                            {programa!.tipo}
                          </Badge>
                          <h4 className="text-sm font-medium text-epg-navy group-hover:text-epg-gold transition-colors">
                            {programa!.nombre}
                          </h4>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA - Contactar */}
              <Card className="bg-epg-navy text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    ¿Interesado en los programas?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Conoce más sobre nuestros programas de postgrado y cómo
                    aplicar.
                  </p>
                  <Button
                    className="w-full bg-epg-gold text-epg-navy hover:bg-epg-gold-dark"
                    asChild
                  >
                    <a href="/admision">Ver admisión</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Back button */}
              <Button variant="outline" className="w-full" asChild>
                <a href="/docentes" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Volver a Docentes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
