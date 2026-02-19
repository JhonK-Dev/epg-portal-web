import { useState, useMemo } from 'react'
import type { Programa, TipoPrograma } from '@/types'
import { programas } from '@/data/programas'
import {
  tipoProgramaLabels,
  tipoProgramaButtonColors,
  tipoProgramaBadgeColors,
  modalidadLabels,
  modalidadColors,
} from '@/lib/config'
import {
  Filter,
  GraduationCap,
  Clock,
  MapPin,
  BookOpen,
  ChevronDown,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CTABanner } from '@/components/ui/cta-banner'
import { SearchInput } from '@/components/ui/search-input'
import { EmptyState } from '@/components/ui/empty-state'

type Modalidad = 'presencial' | 'semipresencial' | 'virtual' | 'todos'
type TipoFiltro = TipoPrograma | 'todos'

// Use labels from constants, adding plural forms for display
const tipoLabels: Record<string, string> = {
  todos: 'Todos los programas',
  maestria: 'Maestrías',
  doctorado: 'Doctorados',
  diplomado: 'Diplomados',
  curso: 'Cursos',
}

interface ProgramaCardProps {
  programa: Programa
}

function ProgramaCard({ programa }: ProgramaCardProps) {
  return (
    <a href={`/programas/${programa.slug}`} className="group block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-epg-gold">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge className={tipoProgramaBadgeColors[programa.tipo]}>
              {tipoLabels[programa.tipo]}
            </Badge>
            <Badge className={modalidadColors[programa.modalidad]}>
              {modalidadLabels[programa.modalidad]}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-epg-navy transition-colors leading-tight">
            {programa.nombre}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {programa.descripcionCorta}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{programa.duracion}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gray-400" />
              <span>{programa.creditos} créditos</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="truncate">{programa.facultad}</span>
            </div>
          </div>

          {programa.inversion && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">Inversión</p>
              <p className="font-semibold text-epg-navy">
                {programa.inversion}
              </p>
            </div>
          )}

          <div className="mt-4">
            <span className="text-epg-gold font-medium text-sm group-hover:underline">
              Ver detalles →
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}

export function ProgramasLista() {
  const [tipoFiltro, setTipoFiltro] = useState<TipoFiltro>('todos')
  const [modalidadFiltro, setModalidadFiltro] = useState<Modalidad>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  const programasFiltrados = useMemo(() => {
    return programas.filter((programa) => {
      // Filtro por tipo
      if (tipoFiltro !== 'todos' && programa.tipo !== tipoFiltro) {
        return false
      }

      // Filtro por modalidad
      if (
        modalidadFiltro !== 'todos' &&
        programa.modalidad !== modalidadFiltro
      ) {
        return false
      }

      // Filtro por búsqueda
      if (busqueda.trim()) {
        const searchLower = busqueda.toLowerCase()
        return (
          programa.nombre.toLowerCase().includes(searchLower) ||
          programa.descripcion.toLowerCase().includes(searchLower) ||
          programa.facultad.toLowerCase().includes(searchLower)
        )
      }

      return true
    })
  }, [tipoFiltro, modalidadFiltro, busqueda])

  const conteosPorTipo = useMemo(() => {
    const conteos: Record<string, number> = { todos: programas.length }
    programas.forEach((p) => {
      conteos[p.tipo] = (conteos[p.tipo] || 0) + 1
    })
    return conteos
  }, [])

  const limpiarFiltros = () => {
    setTipoFiltro('todos')
    setModalidadFiltro('todos')
    setBusqueda('')
  }

  const hayFiltrosActivos =
    tipoFiltro !== 'todos' ||
    modalidadFiltro !== 'todos' ||
    busqueda.trim() !== ''

  return (
    <div>
      {/* Barra de búsqueda y filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Búsqueda */}
          <SearchInput
            value={busqueda}
            onChange={setBusqueda}
            placeholder="Buscar por nombre, descripción o facultad..."
            className="flex-1"
            size="md"
          />

          {/* Botón de filtros (móvil) */}
          <Button
            variant="outline"
            className="lg:hidden gap-2"
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
          >
            <Filter className="h-4 w-4" />
            Filtros
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mostrarFiltros ? 'rotate-180' : ''}`}
            />
          </Button>

          {/* Filtros (desktop) */}
          <div className="hidden lg:flex gap-4">
            {/* Tipo de programa */}
            <select
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value as TipoFiltro)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-epg-navy bg-white min-w-[180px]"
            >
              <option value="todos">Todos los tipos</option>
              <option value="maestria">
                Maestrías ({conteosPorTipo.maestria || 0})
              </option>
              <option value="doctorado">
                Doctorados ({conteosPorTipo.doctorado || 0})
              </option>
              <option value="diplomado">
                Diplomados ({conteosPorTipo.diplomado || 0})
              </option>
              <option value="curso">
                Cursos ({conteosPorTipo.curso || 0})
              </option>
            </select>

            {/* Modalidad */}
            <select
              value={modalidadFiltro}
              onChange={(e) => setModalidadFiltro(e.target.value as Modalidad)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-epg-navy bg-white min-w-[180px]"
            >
              <option value="todos">Todas las modalidades</option>
              <option value="presencial">Presencial</option>
              <option value="semipresencial">Semipresencial</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>
        </div>

        {/* Filtros móvil expandidos */}
        {mostrarFiltros && (
          <div className="lg:hidden mt-4 pt-4 border-t grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de programa
              </label>
              <select
                value={tipoFiltro}
                onChange={(e) => setTipoFiltro(e.target.value as TipoFiltro)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-epg-navy bg-white"
              >
                <option value="todos">Todos los tipos</option>
                <option value="maestria">
                  Maestrías ({conteosPorTipo.maestria || 0})
                </option>
                <option value="doctorado">
                  Doctorados ({conteosPorTipo.doctorado || 0})
                </option>
                <option value="diplomado">
                  Diplomados ({conteosPorTipo.diplomado || 0})
                </option>
                <option value="curso">
                  Cursos ({conteosPorTipo.curso || 0})
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modalidad
              </label>
              <select
                value={modalidadFiltro}
                onChange={(e) =>
                  setModalidadFiltro(e.target.value as Modalidad)
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-epg-navy bg-white"
              >
                <option value="todos">Todas las modalidades</option>
                <option value="presencial">Presencial</option>
                <option value="semipresencial">Semipresencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
          </div>
        )}

        {/* Filtros activos */}
        {hayFiltrosActivos && (
          <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Filtros activos:</span>

            {tipoFiltro !== 'todos' && (
              <Badge variant="secondary" className="gap-1">
                {tipoLabels[tipoFiltro]}
                <button onClick={() => setTipoFiltro('todos')} aria-label="Quitar filtro de tipo de programa">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            {modalidadFiltro !== 'todos' && (
              <Badge variant="secondary" className="gap-1">
                {modalidadLabels[modalidadFiltro]}
                <button onClick={() => setModalidadFiltro('todos')} aria-label="Quitar filtro de modalidad">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            {busqueda.trim() && (
              <Badge variant="secondary" className="gap-1">
                "{busqueda}"
                <button onClick={() => setBusqueda('')} aria-label="Quitar filtro de búsqueda">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={limpiarFiltros}
              className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
            >
              Limpiar todo
            </Button>
          </div>
        )}
      </div>

      {/* Tabs de tipo rápido */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(
          ['todos', 'maestria', 'doctorado', 'diplomado', 'curso'] as const
        ).map((tipo) => (
          <Button
            key={tipo}
            variant={tipoFiltro === tipo ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTipoFiltro(tipo)}
            className={
              tipoFiltro === tipo ? 'bg-epg-navy hover:bg-epg-navy-dark' : ''
            }
          >
            {tipoLabels[tipo]}
            <span className="ml-1 text-xs opacity-70">
              ({conteosPorTipo[tipo] || 0})
            </span>
          </Button>
        ))}
      </div>

      {/* Resultados */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {programasFiltrados.length === 1
            ? '1 programa encontrado'
            : `${programasFiltrados.length} programas encontrados`}
        </p>
      </div>

      {/* Grid de programas */}
      {programasFiltrados.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programasFiltrados.map((programa) => (
            <ProgramaCard key={programa.id} programa={programa} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<GraduationCap className="h-16 w-16" />}
          title="No se encontraron programas"
          description="Intenta ajustar los filtros o el término de búsqueda."
          action={{
            label: 'Limpiar filtros',
            onClick: limpiarFiltros,
          }}
          variant="inline"
        />
      )}

      {/* CTA de contacto */}
      <div className="mt-12">
        <CTABanner
          title="¿No encuentras lo que buscas?"
          description="Nuestro equipo de admisión puede ayudarte a encontrar el programa ideal según tu perfil profesional y objetivos académicos."
          primaryAction={{
            label: 'Iniciar proceso de admisión',
            href: '/admision',
          }}
          secondaryAction={{
            label: 'Contactar asesor',
            href: '#',
          }}
          className="text-center"
        />
      </div>
    </div>
  )
}
