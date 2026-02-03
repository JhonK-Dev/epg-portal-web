import { useState, useMemo } from 'react';
import { publicaciones, getDestacadas } from '@/data/publicaciones';
import { 
  Newspaper, 
  Calendar, 
  Bell, 
  Megaphone,
  Search,
  X,
  ChevronRight,
  Clock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NewsletterForm } from '@/features/contacto';

type TipoPublicacion = 'todas' | 'noticia' | 'evento' | 'aviso' | 'comunicado';

const tipoConfig: Record<string, { label: string; color: string; bgColor: string; icon: React.ReactNode }> = {
  noticia: { 
    label: 'Noticia', 
    color: 'text-blue-800', 
    bgColor: 'bg-blue-100',
    icon: <Newspaper className="h-4 w-4" />
  },
  evento: { 
    label: 'Evento', 
    color: 'text-purple-800', 
    bgColor: 'bg-purple-100',
    icon: <Calendar className="h-4 w-4" />
  },
  aviso: { 
    label: 'Aviso', 
    color: 'text-green-800', 
    bgColor: 'bg-green-100',
    icon: <Bell className="h-4 w-4" />
  },
  comunicado: { 
    label: 'Comunicado', 
    color: 'text-amber-800', 
    bgColor: 'bg-amber-100',
    icon: <Megaphone className="h-4 w-4" />
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function PublicacionesLista() {
  const [tipoActivo, setTipoActivo] = useState<TipoPublicacion>('todas');
  const [busqueda, setBusqueda] = useState('');

  const destacadas = getDestacadas();

  const publicacionesFiltradas = useMemo(() => {
    let resultado = [...publicaciones];

    // Filtrar por tipo
    if (tipoActivo !== 'todas') {
      resultado = resultado.filter(p => p.tipo === tipoActivo);
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      const termino = busqueda.toLowerCase();
      resultado = resultado.filter(p => 
        p.titulo.toLowerCase().includes(termino) ||
        p.resumen?.toLowerCase().includes(termino) ||
        p.etiquetas?.some(e => e.toLowerCase().includes(termino))
      );
    }

    // Ordenar por fecha
    return resultado.sort((a, b) => 
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }, [tipoActivo, busqueda]);

  const conteos = useMemo(() => ({
    todas: publicaciones.length,
    noticia: publicaciones.filter(p => p.tipo === 'noticia').length,
    evento: publicaciones.filter(p => p.tipo === 'evento').length,
    aviso: publicaciones.filter(p => p.tipo === 'aviso').length,
    comunicado: publicaciones.filter(p => p.tipo === 'comunicado').length,
  }), []);

  const tabs: { id: TipoPublicacion; label: string; icon: React.ReactNode }[] = [
    { id: 'todas', label: 'Todas', icon: null },
    { id: 'noticia', label: 'Noticias', icon: <Newspaper className="h-4 w-4" /> },
    { id: 'evento', label: 'Eventos', icon: <Calendar className="h-4 w-4" /> },
    { id: 'aviso', label: 'Avisos', icon: <Bell className="h-4 w-4" /> },
    { id: 'comunicado', label: 'Comunicados', icon: <Megaphone className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-12">
      {/* Tabs y Búsqueda */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTipoActivo(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                tipoActivo === tab.id
                  ? 'bg-[#001F3F] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                tipoActivo === tab.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {conteos[tab.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Búsqueda */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar publicaciones..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full lg:w-72 pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6A817] focus:border-transparent outline-none"
          />
          {busqueda && (
            <button
              onClick={() => setBusqueda('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Destacadas (solo cuando no hay filtro activo) */}
      {tipoActivo === 'todas' && !busqueda && destacadas.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {destacadas.slice(0, 2).map((pub) => (
              <a 
                key={pub.id}
                href={`/publicaciones/${pub.slug}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all h-full">
                  <div className={`h-48 relative ${
                    pub.tipo === 'evento' 
                      ? 'bg-gradient-to-br from-[#E6A817] to-[#C9A227]' 
                      : 'bg-gradient-to-br from-[#001F3F] to-[#003366]'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {pub.tipo === 'noticia' && <Newspaper className="h-16 w-16 text-white/20" />}
                      {pub.tipo === 'evento' && <Calendar className="h-16 w-16 text-[#001F3F]/20" />}
                      {pub.tipo === 'aviso' && <Bell className="h-16 w-16 text-white/20" />}
                    </div>
                    <Badge className={`absolute top-4 left-4 ${tipoConfig[pub.tipo].bgColor} ${tipoConfig[pub.tipo].color}`}>
                      {tipoConfig[pub.tipo].label.toUpperCase()}
                    </Badge>
                    {pub.destacado && (
                      <Badge className="absolute top-4 right-4 bg-[#E6A817] text-[#001F3F]">
                        DESTACADO
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4" />
                      {formatDate(pub.fecha)}
                    </div>
                    <h3 className="text-xl font-bold text-[#001F3F] mb-3 group-hover:text-[#E6A817] transition-colors line-clamp-2">
                      {pub.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {pub.resumen}
                    </p>
                    <span className="text-[#E6A817] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ChevronRight className="h-4 w-4" />
                    </span>
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
          <h2 className="text-2xl font-bold text-[#001F3F]">
            {tipoActivo === 'todas' ? 'Últimas publicaciones' : `${tabs.find(t => t.id === tipoActivo)?.label}`}
          </h2>
          <span className="text-gray-500 text-sm">
            {publicacionesFiltradas.length} resultado{publicacionesFiltradas.length !== 1 ? 's' : ''}
          </span>
        </div>

        {publicacionesFiltradas.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No se encontraron publicaciones
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otros términos de búsqueda o cambia los filtros
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setTipoActivo('todas');
                setBusqueda('');
              }}
            >
              Limpiar filtros
            </Button>
          </Card>
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
                    <Badge className={`absolute top-3 left-3 ${tipoConfig[pub.tipo].bgColor} ${tipoConfig[pub.tipo].color}`}>
                      {tipoConfig[pub.tipo].icon}
                      <span className="ml-1">{tipoConfig[pub.tipo].label}</span>
                    </Badge>
                    {pub.fechaEvento && (
                      <div className="absolute bottom-3 right-3 bg-white rounded-lg px-3 py-1 shadow-sm">
                        <p className="text-xs text-gray-500">Fecha del evento</p>
                        <p className="text-sm font-semibold text-[#001F3F]">
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
                    <h3 className="font-bold text-[#001F3F] mb-2 group-hover:text-[#E6A817] transition-colors line-clamp-2">
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
  );
}
