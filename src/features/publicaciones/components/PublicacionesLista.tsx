import { useState, useMemo } from 'react'
import type { Publicacion } from '@/types/publicaciones'
import { formatDate } from '@/lib/formatters'
import { LinkArrow } from '@/components/ui/link-arrow'
import {
  tipoPublicacionLabels,
  tipoPublicacionBadgeColors,
} from '@/lib/config'
import {
  Newspaper,
  Calendar,
  Bell,
  Megaphone,
  ChevronRight,
  Clock,
  Search,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SearchInput } from '@/components/ui/search-input'
import { FilterTabs } from '@/components/ui/filter-tabs'
import { EmptyState } from '@/components/ui/empty-state'
import { NewsletterForm } from '@/features/contacto'

type TipoPublicacion = 'todas' | 'noticia' | 'evento' | 'aviso' | 'comunicado'

const tipoConfig: Record<
  string,
  { label: string; color: string; bgColor: string; icon: React.ReactNode }
> = {
  noticia: {
    label: tipoPublicacionLabels.noticia,
    color: 'text-blue-800',
    bgColor: 'bg-blue-100',
    icon: <Newspaper className="h-4 w-4" />,
  },
  evento: {
    label: tipoPublicacionLabels.evento,
    color: 'text-purple-800',
    bgColor: 'bg-purple-100',
    icon: <Calendar className="h-4 w-4" />,
  },
  aviso: {
    label: tipoPublicacionLabels.aviso,
    color: 'text-green-800',
    bgColor: 'bg-green-100',
    icon: <Bell className="h-4 w-4" />,
  },
  comunicado: {
    label: tipoPublicacionLabels.comunicado,
    color: 'text-amber-800',
    bgColor: 'bg-amber-100',
    icon: <Megaphone className="h-4 w-4" />,
  },
}

interface PublicacionesListaProps {
  publicaciones: Publicacion[]
}

export function PublicacionesLista({ publicaciones }: PublicacionesListaProps) {
  const [tipoActivo, setTipoActivo] = useState<TipoPublicacion>('todas')
  const [busqueda, setBusqueda] = useState('')

  const destacadas = useMemo(
    () => publicaciones.filter((p) => p.destacado),
    [publicaciones]
  )

  const publicacionesFiltradas = useMemo(() => {
    let resultado = [...publicaciones]

    // Filtrar por tipo
    if (tipoActivo !== 'todas') {
      resultado = resultado.filter((p) => p.tipo === tipoActivo)
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const termino = busqueda.toLowerCase()
      resultado = resultado.filter(
        (p) =>
          p.titulo.toLowerCase().includes(termino) ||
          p.resumen?.toLowerCase().includes(termino) ||
          p.etiquetas?.some((e) => e.toLowerCase().includes(termino)),
      )
    }

    // Ordenar por fecha
    return resultado.sort(
      (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
    )
  }, [tipoActivo, busqueda])

  const conteos = useMemo(
    () => ({
      todas: publicaciones.length,
      noticia: publicaciones.filter((p) => p.tipo === 'noticia').length,
      evento: publicaciones.filter((p) => p.tipo === 'evento').length,
      aviso: publicaciones.filter((p) => p.tipo === 'aviso').length,
      comunicado: publicaciones.filter((p) => p.tipo === 'comunicado').length,
    }),
    [],
  )

  const tabs: { id: TipoPublicacion; label: string; icon: React.ReactNode }[] =
    [
      { id: 'todas', label: 'Todas', icon: null },
      {
        id: 'noticia',
        label: 'Noticias',
        icon: <Newspaper className="h-4 w-4" />,
      },
      {
        id: 'evento',
        label: 'Eventos',
        icon: <Calendar className="h-4 w-4" />,
      },
      { id: 'aviso', label: 'Avisos', icon: <Bell className="h-4 w-4" /> },
      {
        id: 'comunicado',
        label: 'Comunicados',
        icon: <Megaphone className="h-4 w-4" />,
      },
    ]

  return (
    <div className="space-y-12">
      {/* Tabs y Búsqueda */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <FilterTabs
          tabs={tabs.map((tab) => ({
            id: tab.id,
            label: tab.label,
            icon: tab.icon,
            count: conteos[tab.id],
          }))}
          activeTab={tipoActivo}
          onTabChange={(id) => setTipoActivo(id as TipoPublicacion)}
          variant="pill"
        />

        {/* Búsqueda */}
        <SearchInput
          value={busqueda}
          onChange={setBusqueda}
          placeholder="Buscar publicaciones..."
          className="w-full lg:w-72"
        />
      </div>

      {/* Destacadas (solo cuando no hay filtro activo) */}
      {tipoActivo === 'todas' && !busqueda && destacadas.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-epg-navy mb-6">Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {destacadas.slice(0, 2).map((pub) => (
              <a
                key={pub.id}
                href={`/publicaciones/${pub.slug}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all h-full">
                  <div
                    className={`h-48 relative ${
                      pub.tipo === 'evento'
                        ? 'bg-gradient-to-br from-epg-gold to-epg-gold-dark'
                        : 'bg-gradient-to-br from-epg-navy to-epg-navy-light'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {pub.tipo === 'noticia' && (
                        <Newspaper className="h-16 w-16 text-white/20" />
                      )}
                      {pub.tipo === 'evento' && (
                        <Calendar className="h-16 w-16 text-epg-navy/20" />
                      )}
                      {pub.tipo === 'aviso' && (
                        <Bell className="h-16 w-16 text-white/20" />
                      )}
                    </div>
                    <Badge
                      className={`absolute top-4 left-4 ${tipoConfig[pub.tipo].bgColor} ${tipoConfig[pub.tipo].color}`}
                    >
                      {tipoConfig[pub.tipo].label.toUpperCase()}
                    </Badge>
                    {pub.destacado && (
                      <Badge className="absolute top-4 right-4 bg-epg-gold text-epg-navy">
                        DESTACADO
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4" />
                      {formatDate(pub.fecha)}
                    </div>
                    <h3 className="text-xl font-bold text-epg-navy mb-3 group-hover:text-epg-gold transition-colors line-clamp-2">
                      {pub.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {pub.resumen}
                    </p>
                    <LinkArrow className="text-epg-gold font-medium">
                      Leer más
                    </LinkArrow>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Listado */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-epg-navy">
            {tipoActivo === 'todas'
              ? 'Últimas publicaciones'
              : `${tabs.find((t) => t.id === tipoActivo)?.label}`}
          </h2>
          <span className="text-gray-500 text-sm">
            {publicacionesFiltradas.length} resultado
            {publicacionesFiltradas.length !== 1 ? 's' : ''}
          </span>
        </div>

        {publicacionesFiltradas.length === 0 ? (
          <EmptyState
            icon={<Search className="h-8 w-8" />}
            title="No se encontraron publicaciones"
            description="Intenta con otros términos de búsqueda o cambia los filtros"
            action={{
              label: 'Limpiar filtros',
              onClick: () => {
                setTipoActivo('todas')
                setBusqueda('')
              },
            }}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicacionesFiltradas.map((pub) => (
              <a
                key={pub.id}
                href={`/publicaciones/${pub.slug}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <Badge
                      className={`absolute top-3 left-3 ${tipoConfig[pub.tipo].bgColor} ${tipoConfig[pub.tipo].color}`}
                    >
                      {tipoConfig[pub.tipo].icon}
                      <span className="ml-1">{tipoConfig[pub.tipo].label}</span>
                    </Badge>
                    {pub.fechaEvento && (
                      <div className="absolute bottom-3 right-3 bg-white rounded-lg px-3 py-1 shadow-sm">
                        <p className="text-xs text-gray-500">
                          Fecha del evento
                        </p>
                        <p className="text-sm font-semibold text-epg-navy">
                          {formatDate(pub.fechaEvento)}
                        </p>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Clock className="h-3 w-3" />
                      {formatDate(pub.fecha)}
                    </div>
                    <h3 className="font-bold text-epg-navy mb-2 group-hover:text-epg-gold transition-colors line-clamp-2">
                      {pub.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 flex-1">
                      {pub.resumen}
                    </p>
                    {pub.etiquetas && pub.etiquetas.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {pub.etiquetas.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Suscripción */}
      <section>
        <NewsletterForm variant="card" />
      </section>
    </div>
  )
}
