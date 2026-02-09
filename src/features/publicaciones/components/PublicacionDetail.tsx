import type { Publicacion } from '@/types'
import { formatDate, formatDateTime } from '@/lib/formatters'
import { tipoPublicacionLabels, tipoPublicacionColors } from '@/lib/constants'
import {
  Calendar,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Clock,
  MapPin,
  Newspaper,
  CalendarDays,
  Bell,
  Megaphone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PageHero } from '@/components/ui/page-hero'

interface PublicacionDetailProps {
  publicacion: Publicacion
  publicacionesRelacionadas?: Publicacion[]
}

const tipoIcons: Record<string, React.ReactNode> = {
  noticia: <Newspaper className="h-5 w-5" />,
  evento: <CalendarDays className="h-5 w-5" />,
  aviso: <Bell className="h-5 w-5" />,
  comunicado: <Megaphone className="h-5 w-5" />,
}

export function PublicacionDetail({
  publicacion,
  publicacionesRelacionadas = [],
}: PublicacionDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Publicaciones', href: '/publicaciones' },
          { label: tipoPublicacionLabels[publicacion.tipo] },
        ]}
        title={publicacion.titulo}
        bgColorClass={tipoPublicacionColors[publicacion.tipo]}
        variant="solid"
      >
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-white/20 text-white hover:bg-white/30 gap-1">
            {tipoIcons[publicacion.tipo]}
            {tipoPublicacionLabels[publicacion.tipo]}
          </Badge>
          {publicacion.destacado && (
            <Badge className="bg-epg-gold text-epg-navy">Destacado</Badge>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(publicacion.fecha)}</span>
          </div>
          {publicacion.autor && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{publicacion.autor}</span>
            </div>
          )}
        </div>

        {/* Fecha del evento (si aplica) */}
        {publicacion.tipo === 'evento' && publicacion.fechaEvento && (
          <div className="mt-6 bg-white/10 rounded-lg p-4 inline-block">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6" />
              <div>
                <p className="text-sm text-white/80">Fecha del evento</p>
                <p className="font-semibold">
                  {formatDateTime(publicacion.fechaEvento)}
                </p>
              </div>
            </div>
          </div>
        )}
      </PageHero>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            {publicacion.imagen && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={publicacion.imagen}
                  alt={publicacion.titulo}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <article className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {publicacion.resumen}
                </p>
                <Separator className="my-6" />
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {publicacion.contenido}
                </div>
              </div>

              {/* Tags */}
              {publicacion.etiquetas && publicacion.etiquetas.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-4 w-4 text-gray-500" />
                    {publicacion.etiquetas.map((etiqueta, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm"
                      >
                        {etiqueta}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-6 pt-6 border-t flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  ¿Te resultó útil esta información?
                </span>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </article>

            {/* Back Link */}
            <a
              href="/publicaciones"
              className="flex items-center gap-2 text-epg-navy hover:underline mt-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver todas las publicaciones
            </a>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details (if event) */}
            {publicacion.tipo === 'evento' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Detalles del Evento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {publicacion.fechaEvento && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Fecha</p>
                        <p className="font-medium">
                          {formatDateTime(publicacion.fechaEvento)}
                        </p>
                      </div>
                    </div>
                  )}
                  <Separator />
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Lugar</p>
                      <p className="font-medium">Auditorio EPG - UNAP</p>
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full bg-epg-navy hover:bg-epg-navy-dark">
                    Registrarme
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  ¿Necesitas más información?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Si tienes preguntas sobre esta publicación, no dudes en
                  contactarnos.
                </p>
                <Button variant="outline" className="w-full">
                  Contactar
                </Button>
              </CardContent>
            </Card>

            {/* Related Publications */}
            {publicacionesRelacionadas.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Publicaciones Relacionadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {publicacionesRelacionadas.slice(0, 3).map((pub) => (
                    <a
                      key={pub.id}
                      href={`/publicaciones/${pub.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div
                          className={`w-1 ${tipoPublicacionColors[pub.tipo]} rounded-full flex-shrink-0`}
                        />
                        <div>
                          <p className="font-medium text-sm group-hover:text-epg-navy line-clamp-2">
                            {pub.titulo}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(pub.fecha)}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
