import React, { useState } from 'react';
import { Search, ArrowRight, GraduationCap, Award, BookOpen } from 'lucide-react';

const programTypes = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'maestria', label: 'Maestrías', icon: GraduationCap },
  { id: 'doctorado', label: 'Doctorados', icon: Award },
  { id: 'diplomado', label: 'Diplomados', icon: BookOpen },
];

export const ProgramSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to programs page with search query
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedType !== 'all') params.set('tipo', selectedType);
    window.location.href = `/programas?${params.toString()}`;
  };

  return (
    <section className="bg-gradient-to-b from-[#0A1628] to-[#060D17] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Encuentra tu programa ideal
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explora nuestra oferta académica de maestrías, doctorados y programas de formación continua.
          </p>
        </div>

        {/* Program Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {programTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedType === type.id
                  ? 'bg-[#D4A017] text-[#0A1628]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {type.icon && <type.icon className="w-4 h-4" />}
              {type.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
            <div className="flex items-center flex-1 px-6 py-4">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Buscar por nombre del programa, área o palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
              />
            </div>
            <div className="pr-3">
              <button
                type="submit"
                className="bg-[#0A1628] hover:bg-[#0D2240] text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2"
              >
                Buscar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-gray-500">Búsquedas populares:</span>
          <a href="/programas?q=gestion+publica" className="text-[#D4A017] hover:underline">Gestión Pública</a>
          <a href="/programas?q=derecho" className="text-[#D4A017] hover:underline">Derecho</a>
          <a href="/programas?q=educacion" className="text-[#D4A017] hover:underline">Educación</a>
          <a href="/programas?q=ambiental" className="text-[#D4A017] hover:underline">Ambiental</a>
        </div>
      </div>
    </section>
  );
};
