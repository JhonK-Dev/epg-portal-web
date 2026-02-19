import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTABanner } from '@/components/ui/cta-banner';
import { EmptyState } from '@/components/ui/empty-state';
import type { ApiProgram } from '@/lib/api';
import { GraduationCap, Search, X } from 'lucide-react';
import { ProgramCard } from './program-card';

interface ProgramasListaProps {
  programs: ApiProgram[];
  hasError: boolean;
  currentFilter: number | 'todos';
  searchQuery: string;
}

// Map program_type numbers to labels
const tipoLabels: Record<string, string> = {
  todos: 'Todos los programas',
  maestria: 'Maestrías',
  doctorado: 'Doctorados',
  diplomado: 'Diplomados',
};

// Map filter value to URL param
const getFilterUrl = (tipo: string, currentSearch: string) => {
  const params = new URLSearchParams();

  if (tipo !== 'todos') {
    const typeMap: Record<string, number> = {
      maestria: 1,
      doctorado: 2,
      diplomado: 3,
    };
    params.set('program_type', String(typeMap[tipo]));
  }

  if (currentSearch) {
    params.set('search', currentSearch);
  }

  const queryString = params.toString();
  return queryString ? `/programas?${queryString}` : '/programas';
};

// Get search URL with new search term
const getSearchUrl = (searchTerm: string, currentFilter: number | 'todos') => {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.set('search', searchTerm);
  }

  if (currentFilter !== 'todos') {
    params.set('program_type', String(currentFilter));
  }

  const queryString = params.toString();
  return queryString ? `/programas?${queryString}` : '/programas';
};

// Get clear filters URL
const getClearUrl = () => '/programas';

export function ProgramasLista({
  programs,
  hasError,
  currentFilter,
  searchQuery,
}: ProgramasListaProps) {
  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get('search') as string;
    window.location.href = getSearchUrl(searchValue, currentFilter);
  };

  const tipoFiltro =
    currentFilter === 'todos'
      ? 'todos'
      : currentFilter === 1
        ? 'maestria'
        : currentFilter === 2
          ? 'doctorado'
          : currentFilter === 3
            ? 'diplomado'
            : 'curso';

  const hayFiltrosActivos = tipoFiltro !== 'todos' || searchQuery.trim() !== '';

  // Estado de error
  if (hasError) {
    return (
      <div className="text-center py-16">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-lg mx-auto">
          <GraduationCap className="h-16 w-16 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            No se pudieron cargar los programas
          </h3>
          <p className="text-red-600 mb-6">
            Estamos experimentando problemas técnicos. Por favor, intenta
            nuevamente más tarde.
          </p>
          <Button onClick={() => window.location.reload()}>Reintentar</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Barra de búsqueda y filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Búsqueda */}
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Buscar por nombre o descripción..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-epg-navy bg-white"
              />
            </div>
            <Button type="submit">Buscar</Button>
          </form>
        </div>

        {/* Filtros activos */}
        {hayFiltrosActivos && (
          <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Filtros activos:</span>

            {tipoFiltro !== 'todos' && (
              <Badge variant="secondary" className="gap-1">
                {tipoLabels[tipoFiltro]}
                <a
                  href={getSearchUrl(searchQuery, 'todos')}
                  aria-label="Quitar filtro de tipo"
                >
                  <X className="h-3 w-3" />
                </a>
              </Badge>
            )}

            {searchQuery.trim() && (
              <Badge variant="secondary" className="gap-1">
                "{searchQuery}"
                <a
                  href={getFilterUrl(tipoFiltro, '')}
                  aria-label="Quitar búsqueda"
                >
                  <X className="h-3 w-3" />
                </a>
              </Badge>
            )}

            <a
              href={getClearUrl()}
              className="text-sm text-destructive hover:text-destructive/80 hover:underline ml-2"
            >
              Limpiar todo
            </a>
          </div>
        )}
      </div>

      {/* Tabs de tipo rápido */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['todos', 'maestria', 'doctorado', 'diplomado'] as const).map(
          (tipo) => (
            <a key={tipo} href={getFilterUrl(tipo, searchQuery)}>
              <Button
                variant={tipoFiltro === tipo ? 'default' : 'outline'}
                size="sm"
                className={
                  tipoFiltro === tipo
                    ? 'bg-epg-navy hover:bg-epg-navy-dark text-white'
                    : ''
                }
              >
                {tipoLabels[tipo]}
              </Button>
            </a>
          )
        )}
      </div>

      {/* Resultados */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {programs.length === 1
            ? '1 programa encontrado'
            : `${programs.length} programas encontrados`}
        </p>
      </div>

      {/* Grid de programas */}
      {programs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((programa) => (
            <ProgramCard key={programa.id} programa={programa} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<GraduationCap className="h-16 w-16" />}
          title="No se encontraron programas"
          description="Intenta ajustar los filtros o el término de búsqueda."
          action={{
            label: 'Limpiar filtros',
            onClick: () => (window.location.href = getClearUrl()),
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
            href: '/contacto',
          }}
          className="text-center"
        />
      </div>
    </div>
  );
}
