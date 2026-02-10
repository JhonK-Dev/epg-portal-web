import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, GraduationCap, Award, BookOpen } from 'lucide-react';
import { programas } from '@/data/programas';
import { getProgramTypeConfig } from '@/lib/constants';
import type { Programa } from '@/types';

const programTypes = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'maestria', label: 'Maestrías', icon: GraduationCap },
  { id: 'doctorado', label: 'Doctorados', icon: Award },
  { id: 'diplomado', label: 'Diplomados', icon: BookOpen },
];

export const ProgramSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [suggestions, setSuggestions] = useState<Programa[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle input change and filter suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setActiveSuggestionIndex(-1);

    if (query.trim().length >= 2) {
      // Filter programs by query and selected type
      const filtered = programas.filter((programa) => {
        const matchesType = selectedType === 'all' || programa.tipo === selectedType;
        const matchesQuery =
          programa.nombre.toLowerCase().includes(query.toLowerCase()) ||
          programa.descripcionCorta.toLowerCase().includes(query.toLowerCase()) ||
          programa.facultad.toLowerCase().includes(query.toLowerCase());
        
        return matchesType && matchesQuery;
      }).slice(0, 5); // Limit to 5 suggestions

      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestionIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeSuggestionIndex >= 0) {
          // Navigate to selected suggestion
          window.location.href = `/programas/${suggestions[activeSuggestionIndex].slug}`;
        } else {
          // Submit search
          handleSearch(e);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Redirect to programs page with search query
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedType !== 'all') params.set('tipo', selectedType);
    window.location.href = `/programas?${params.toString()}`;
  };

  return (
    <section className="bg-gradient-to-b from-epg-navy to-epg-navy-dark section-py px-4 sm:px-6 lg:px-8">
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
                  ? 'bg-epg-gold text-epg-navy'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {type.icon && <type.icon className="w-4 h-4" />}
              {type.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mb-8" ref={searchRef}>
          <div className="flex items-center bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
            <div className="flex items-center flex-1 px-6 py-4">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="search"
                id="program-search"
                name="q"
                role="combobox"
                aria-label="Buscar programas académicos por nombre, área o palabras clave"
                aria-expanded={showSuggestions}
                aria-controls="search-suggestions"
                aria-activedescendant={activeSuggestionIndex >= 0 ? `suggestion-${activeSuggestionIndex}` : undefined}
                placeholder="Buscar por nombre del programa, área o palabras clave..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => searchQuery.trim().length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
                autoComplete="off"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
              />
            </div>
            <div className="pr-3">
              <button
                type="submit"
                aria-label="Buscar programas académicos"
                className="bg-epg-navy hover:bg-epg-navy-light text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center gap-2"
              >
                Buscar
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Dropdown de Sugerencias */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              id="search-suggestions"
              role="listbox"
              className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
            >
              {suggestions.map((programa, index) => {
                const typeConfig = getProgramTypeConfig(programa.tipo);
                const Icon = typeConfig.icon || GraduationCap;
                
                return (
                  <a
                    key={programa.id}
                    id={`suggestion-${index}`}
                    href={`/programas/${programa.slug}`}
                    role="option"
                    aria-selected={index === activeSuggestionIndex}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                      index === activeSuggestionIndex ? 'bg-gray-100' : ''
                    }`}
                    onMouseEnter={() => setActiveSuggestionIndex(index)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeConfig.bgColor}`}>
                      <Icon className={`w-5 h-5 ${typeConfig.textColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-epg-navy truncate">
                        {programa.nombre}
                      </p>
                      <p className="text-sm text-gray-500">
                        {typeConfig.label} • {programa.modalidad}
                      </p>
                    </div>
                  </a>
                );
              })}
              
              {/* Ver todos los resultados */}
              <div className="border-t mt-2 pt-2 px-4">
                <a
                  href={`/programas?q=${searchQuery}${selectedType !== 'all' ? `&tipo=${selectedType}` : ''}`}
                  className="text-epg-gold text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Ver todos los resultados ({suggestions.length === 5 ? '5+' : suggestions.length})
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </form>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-gray-500">Búsquedas populares:</span>
          <a href="/programas?q=gestion+publica" className="text-epg-gold hover:underline">Gestión Pública</a>
          <a href="/programas?q=derecho" className="text-epg-gold hover:underline">Derecho</a>
          <a href="/programas?q=educacion" className="text-epg-gold hover:underline">Educación</a>
          <a href="/programas?q=ambiental" className="text-epg-gold hover:underline">Ambiental</a>
        </div>
      </div>
    </section>
  );
};
