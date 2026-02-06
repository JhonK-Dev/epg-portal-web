import React from 'react'
import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react'
import { formatShortDate, formatEventDate } from '@/lib/formatters'
import { getPublicationTypeConfig } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/section-header'
import { LinkArrow } from '@/components/ui/link-arrow'

// Sample news and events
const publications = [
  {
    id: 'not-001',
    titulo: 'Escuela de Postgrado obtiene acreditación internacional SIACES',
    tipo: 'noticia',
    resumen:
      'Nuestra escuela recibe reconocimiento internacional por la calidad de sus programas académicos.',
    fecha: '2025-01-15',
    slug: 'acreditacion-internacional-siaces',
    destacado: true,
  },
  {
    id: 'eve-001',
    titulo: 'III Congreso Internacional de Investigación en Postgrado',
    tipo: 'evento',
    resumen:
      'Congreso que reunirá investigadores de cuatro países para compartir avances científicos.',
    fecha: '2025-01-20',
    fechaEvento: '2025-03-20',
    slug: 'congreso-internacional-investigacion',
    destacado: true,
  },
  {
    id: 'avi-001',
    titulo: 'Inicio de inscripciones para el proceso de admisión 2025-I',
    tipo: 'aviso',
    resumen:
      'Inscripciones abiertas para maestrías y doctorados del semestre 2025-I.',
    fecha: '2025-01-14',
    slug: 'inscripciones-admision-2025-i',
    destacado: true,
  },
]

const events = [
  {
    id: 'eve-001',
    titulo: 'III Congreso Internacional de Investigación',
    fecha: '2025-03-20',
    hora: '09:00',
    lugar: 'Auditorio Principal - EPG',
  },
  {
    id: 'eve-002',
    titulo: 'Seminario: Nuevas tendencias en Gestión Pública',
    fecha: '2025-02-15',
    hora: '15:00',
    lugar: 'Auditorio Principal - EPG',
  },
  {
    id: 'eve-003',
    titulo: 'Taller de Redacción de Artículos Científicos',
    fecha: '2025-02-22',
    hora: '10:00',
    lugar: 'Sala de Capacitaciones',
  },
]

export const NewsAndEvents: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          badge={{ label: 'Mantente informado', className: 'text-epg-gold' }}
          title="Noticias y Eventos"
          align="left"
          action={
            <a
              href="/publicaciones"
              className="inline-flex items-center gap-2 text-epg-navy font-semibold hover:text-epg-gold transition-colors group"
            >
              Ver todas las publicaciones
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          }
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Column */}
          <div className="lg:col-span-2 space-y-6">
            {publications.map((pub, index) => {
              const typeConfig = getPublicationTypeConfig(pub.tipo)

              if (index === 0) {
                // Featured/Large card for first item
                return (
                  <a
                    key={pub.id}
                    href={`/publicaciones/${pub.slug}`}
                    className="group block bg-gradient-to-br from-epg-navy to-epg-navy-light rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="p-8">
                      <span
                        className={`inline-block ${typeConfig.bgColor} ${typeConfig.textColor} text-xs font-bold px-3 py-1 rounded-full mb-4`}
                      >
                        {typeConfig.label}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-epg-gold transition-colors">
                        {pub.titulo}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {pub.resumen}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-gray-400 text-sm">
                          {formatShortDate(pub.fecha)}
                        </time>
                        <LinkArrow className="text-epg-gold font-medium">
                          Leer más
                        </LinkArrow>
                      </div>
                    </div>
                  </a>
                )
              }

              // Regular cards for other items
              return (
                <a
                  key={pub.id}
                  href={`/publicaciones/${pub.slug}`}
                  className="group flex gap-4 bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-epg-navy to-epg-navy-light rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-epg-gold/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block ${typeConfig.bgColor} ${typeConfig.textColor} text-xs font-bold px-2 py-0.5 rounded mb-2`}
                    >
                      {typeConfig.label}
                    </span>
                    <h4 className="font-bold text-epg-navy group-hover:text-epg-gold transition-colors line-clamp-2 mb-1">
                      {pub.titulo}
                    </h4>
                    <time className="text-gray-500 text-sm">
                      {formatShortDate(pub.fecha)}
                    </time>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-epg-navy text-lg mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-epg-gold" />
                Próximos Eventos
              </h3>

              <div className="space-y-4">
                {events.map((event) => {
                  const eventDate = formatEventDate(event.fecha)

                  return (
                    <div
                      key={event.id}
                      className="flex gap-4 p-3 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer"
                    >
                      {/* Date Badge */}
                      <div className="w-14 h-14 bg-epg-navy rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg leading-none">
                          {eventDate.day}
                        </span>
                        <span className="text-epg-gold text-xs font-medium">
                          {eventDate.month}
                        </span>
                      </div>

                      {/* Event Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-epg-navy text-sm line-clamp-2 mb-1">
                          {event.titulo}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.hora}
                          </span>
                          <span className="flex items-center gap-1 truncate">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{event.lugar}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href="/publicaciones/eventos"
                className="block text-center text-epg-gold font-medium text-sm mt-6 hover:underline"
              >
                Ver todos los eventos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
