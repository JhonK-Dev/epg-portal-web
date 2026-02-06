import { useState, useMemo } from 'react'
import { docentes, getDoctores, getMagisteres } from '@/data/docentes'
import { getGradoInfo } from '@/lib/constants'
import {
  Search,
  Mail,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Users,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTABannerSideBySide } from '@/components/ui/cta-banner'
import { SearchInput } from '@/components/ui/search-input'
import { FilterTabs } from '@/components/ui/filter-tabs'
import { EmptyState } from '@/components/ui/empty-state'
import { IconCircle } from '@/components/ui/icon-circle'

type FiltroGrado = 'todos' | 'doctores' | 'magisteres'

export function DocentesGrid() {
  const [filtroGrado, setFiltroGrado] = useState<FiltroGrado>('todos')
  const [busqueda, setBusqueda] = useState('')

  const docentesFiltrados = useMemo(() => {
    let resultado = [...docentes]

    // Filtrar por grado
    if (filtroGrado === 'doctores') {
      resultado = getDoctores()
    } else if (filtroGrado === 'magisteres') {
      resultado = getMagisteres()
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const termino = busqueda.toLowerCase()
      resultado = resultado.filter(
        (d) =>
          d.nombres.toLowerCase().includes(termino) ||
          d.apellidos.toLowerCase().includes(termino) ||
          d.especialidad?.toLowerCase().includes(termino),
      )
    }

    // Ordenar por apellidos
    return resultado.sort((a, b) => a.apellidos.localeCompare(b.apellidos))
  }, [filtroGrado, busqueda])

  const conteos = useMemo(
    () => ({
      todos: docentes.length,
      doctores: getDoctores().length,
      magisteres: getMagisteres().length,
    }),
    [],
  )

  const tabs: { id: FiltroGrado; label: string; icon: React.ReactNode }[] = [
    { id: 'todos', label: 'Todos', icon: <Users className="h-4 w-4" /> },
    { id: 'doctores', label: 'Doctores', icon: <Award className="h-4 w-4" /> },
    {
      id: 'magisteres',
      label: 'Magísteres',
      icon: <GraduationCap className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <FilterTabs
          tabs={tabs.map((tab) => ({
            id: tab.id,
            label: tab.label,
            icon: tab.icon,
            count: conteos[tab.id],
          }))}
          activeTab={filtroGrado}
          onTabChange={(id) => setFiltroGrado(id as FiltroGrado)}
          variant="rounded"
        />

        {/* Búsqueda */}
        <SearchInput
          value={busqueda}
          onChange={setBusqueda}
          placeholder="Buscar por nombre o especialidad..."
          className="w-full lg:w-80"
        />
      </div>

      {/* Grid de Docentes */}
      {docentesFiltrados.length === 0 ? (
        <EmptyState
          icon={<Search className="h-8 w-8" />}
          title="No se encontraron docentes"
          description="Intenta con otros términos de búsqueda o cambia los filtros"
          action={{
            label: 'Limpiar filtros',
            onClick: () => {
              setFiltroGrado('todos')
              setBusqueda('')
            },
          }}
        />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {docentesFiltrados.map((docente) => {
            const gradoInfo = getGradoInfo(docente.grado)

            return (
              <Card
                key={docente.id}
                className="overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Avatar */}
                <div className="h-48 bg-gradient-to-br from-epg-navy to-epg-navy-light flex items-center justify-center relative overflow-hidden">
                  {docente.foto ? (
                    <img
                      src={docente.foto}
                      alt={`${docente.nombres} ${docente.apellidos}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {docente.nombres.charAt(0)}
                      {docente.apellidos.charAt(0)}
                    </div>
                  )}
                  <Badge
                    className={`absolute top-3 left-3 ${gradoInfo.bgColor} ${gradoInfo.color}`}
                  >
                    {gradoInfo.label}
                  </Badge>
                </div>

                {/* Info */}
                <CardContent className="p-5">
                  <h3 className="font-bold text-epg-navy mb-1 group-hover:text-epg-gold transition-colors">
                    {gradoInfo.label} {docente.nombres} {docente.apellidos}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                    {docente.especialidad}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {docente.resumenPerfil}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {docente.email && (
                      <a
                        href={`mailto:${docente.email}`}
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-epg-navy transition-colors"
                      >
                        <Mail className="h-3 w-3" />
                        Email
                      </a>
                    )}
                    {docente.orcid && (
                      <a
                        href={`https://orcid.org/${docente.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-green-600 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        ORCID
                      </a>
                    )}
                    {docente.googleScholar && (
                      <a
                        href={docente.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <BookOpen className="h-3 w-3" />
                        Scholar
                      </a>
                    )}
                  </div>

                  <a
                    href={`/docentes/${docente.id}`}
                    className="text-epg-gold text-sm font-medium hover:underline"
                  >
                    Ver perfil completo →
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Recursos para Docentes */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-epg-navy mb-8 text-center">
          Recursos para Docentes
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="/docentes/recursos"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
          >
            <div className="w-14 h-14 bg-epg-navy rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-epg-gold transition-colors">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-epg-navy mb-2">Material Académico</h3>
            <p className="text-gray-600 text-sm">
              Formatos, plantillas y recursos para la docencia
            </p>
          </a>

          <a
            href="https://aulavirtual.universidad.edu.pe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
          >
            <IconCircle
              icon={<GraduationCap className="h-7 w-7" />}
              size="lg"
              variant="navy"
              rounded="lg"
              className="mx-auto mb-4 group-hover:bg-epg-gold transition-colors"
            />
            <h3 className="font-bold text-epg-navy mb-2">Aula Virtual</h3>
            <p className="text-gray-600 text-sm">
              Administra tus cursos en la plataforma Moodle
            </p>
          </a>

          <a
            href="/calendario-academico"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group text-center"
          >
            <IconCircle
              icon={<Calendar className="h-7 w-7" />}
              size="lg"
              variant="navy"
              rounded="lg"
              className="mx-auto mb-4 group-hover:bg-epg-gold transition-colors"
            />
            <h3 className="font-bold text-epg-navy mb-2">
              Calendario Académico
            </h3>
            <p className="text-gray-600 text-sm">
              Fechas importantes del semestre
            </p>
          </a>
        </div>
      </section>

      {/* CTA para ser docente */}
      <section>
        <CTABannerSideBySide
          title="¿Interesado en ser docente de la EPG?"
          description="Convocamos a profesionales con grado de maestría o doctorado para integrar nuestra plana docente"
          primaryAction={{
            label: 'Ver convocatoria',
            href: '/docentes/convocatoria',
          }}
        />
      </section>
    </div>
  )
}
