import { contactoSoporte } from '@/data/contacto'
import { LinkArrow } from '@/components/ui/link-arrow'
import {
  GraduationCap,
  Library,
  Mail,
  CreditCard,
  BookOpen,
  Monitor,
  Briefcase,
  FileText,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  Phone,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABannerSideBySide } from '@/components/ui/cta-banner'
import { IconCircle } from '@/components/ui/icon-circle'

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-10 w-10" />,
  Library: <Library className="h-10 w-10" />,
  Mail: <Mail className="h-10 w-10" />,
  IdCard: <CreditCard className="h-10 w-10" />,
  BookOpen: <BookOpen className="h-10 w-10" />,
  Monitor: <Monitor className="h-10 w-10" />,
  Briefcase: <Briefcase className="h-10 w-10" />,
  FileText: <FileText className="h-10 w-10" />,
}

const gradientColors = [
  'from-epg-navy to-epg-navy-light',
  'from-epg-gold to-epg-gold-dark',
  'from-epg-navy-light to-epg-navy-dark',
  'from-epg-navy to-epg-navy-light',
  'from-epg-gold to-epg-gold-dark',
  'from-epg-navy-light to-epg-navy-dark',
  'from-epg-navy to-epg-navy-light',
  'from-epg-gold to-epg-gold-dark',
]

import type { Servicio } from '@/types'

export function ServiciosGrid({ servicios }: { servicios: Servicio[] }) {
  return (
    <div className="space-y-12">
      {/* Grid de Servicios */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => {
            const isExternal = servicio.esExterno
            const isGold =
              gradientColors[index % gradientColors.length].includes('E6A817')

            const CardWrapper = isExternal ? 'a' : 'div'
            const cardProps = isExternal
              ? {
                  href: servicio.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'block group',
                }
              : { className: 'block group' }

            return (
              <CardWrapper key={servicio.id} {...cardProps}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div
                    className={`h-32 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center relative`}
                  >
                    <div className={isGold ? 'text-epg-navy' : 'text-epg-gold'}>
                      {iconMap[servicio.icono || 'FileText']}
                    </div>
                    {isExternal && (
                      <div className="absolute top-3 right-3">
                        <ExternalLink
                          className={`h-5 w-5 ${isGold ? 'text-epg-navy/50' : 'text-white/50'}`}
                        />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-epg-navy group-hover:text-epg-gold transition-colors">
                        {servicio.nombre}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {servicio.descripcionCorta || servicio.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <LinkArrow className="text-epg-gold font-medium text-sm">
                        {isExternal ? 'Acceder al servicio' : 'Ver información'}
                      </LinkArrow>
                      {isExternal && (
                        <Badge variant="secondary" className="text-xs">
                          Externo
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>
      </section>

      {/* Información Adicional */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Guía de Acceso */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <IconCircle
                  icon={<HelpCircle className="h-6 w-6" />}
                  size="md"
                  variant="navy"
                  rounded="lg"
                />
                <div>
                  <h3 className="font-bold text-epg-navy mb-2">
                    Guía de Acceso a Servicios
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Si es la primera vez que accedes a nuestros servicios
                    digitales, consulta nuestra guía de inicio rápido con
                    instrucciones paso a paso.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/estudiantes/guia-servicios">Ver guía de inicio</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problemas de Acceso */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <IconCircle
                  icon={<Phone className="h-6 w-6" />}
                  size="md"
                  variant="destructive"
                  rounded="lg"
                />
                <div>
                  <h3 className="font-bold text-epg-navy mb-2">
                    Problemas de Acceso
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Si tienes problemas para acceder a algún servicio, contacta
                    a soporte técnico o visita nuestra mesa de ayuda.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${contactoSoporte.email}`}>
                        <Mail className="h-4 w-4 mr-1" />
                        Soporte
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`tel:${contactoSoporte.telefono}`}>
                        <Phone className="h-4 w-4 mr-1" />
                        Llamar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section>
        <CTABannerSideBySide
          title="¿Necesitas ayuda adicional?"
          description="Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta"
          primaryAction={{
            label: 'Escribir a soporte',
            href: `mailto:${contactoSoporte.email}`,
            icon: <Mail className="h-4 w-4 mr-2" />,
          }}
          secondaryAction={{
            label: contactoSoporte.telefonoDisplay,
            href: `tel:${contactoSoporte.telefono}`,
            icon: <Phone className="h-4 w-4 mr-2" />,
          }}
        />
      </section>
    </div>
  )
}
