import { IconCircle } from '@/components/ui/icon-circle';
import { StatItem } from '@/components/ui/stat-item';
import { busquedasPopulares, getBusquedaUrl } from '@/data/busquedas-populares';
import { estadisticasInstitucionales } from '@/data/estadisticas';
import { programas } from '@/data/programas';
import { getProgramTypeConfig } from '@/lib/config';

import type { Programa } from '@/types';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  Search,
  ThumbsUp,
  Users,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const programTypes = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'maestria', label: 'Maestrías', icon: GraduationCap },
  { id: 'doctorado', label: 'Doctorados', icon: Award },
  { id: 'diplomado', label: 'Diplomados', icon: BookOpen },
];

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  ThumbsUp,
};

export const ProgramSearchWithStats: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [suggestions, setSuggestions] = useState<Programa[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getProgramCount = (tipo: string): number => {
    if (tipo === 'all') return programas.length;
    return programas.filter((p) => p.tipo === tipo).length;
  };

  const getButtonText = (): string => {
    const typeConfig = programTypes.find((t) => t.id === selectedType);
    if (selectedType === 'all') return 'Buscar';
    return `Buscar ${typeConfig?.label || ''}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const filtered = programas
        .filter((programa) => {
          const matchesType =
            selectedType === 'all' || programa.tipo === selectedType;
          const matchesQuery =
            programa.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            programa.descripcionCorta
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            programa.facultad.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesType && matchesQuery;
        })
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  }, [selectedType, searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setActiveSuggestionIndex(-1);

    if (query.trim().length >= 2) {
      const filtered = programas
        .filter((programa) => {
          const matchesType =
            selectedType === 'all' || programa.tipo === selectedType;
          const matchesQuery =
            programa.nombre.toLowerCase().includes(query.toLowerCase()) ||
            programa.descripcionCorta
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            programa.facultad.toLowerCase().includes(query.toLowerCase());
          return matchesType && matchesQuery;
        })
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

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
          window.location.href = `/programas/${suggestions[activeSuggestionIndex].slug}`;
        } else {
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
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedType !== 'all') params.set('tipo', selectedType);
    window.location.href = `/programas?${params.toString()}`;
  };

  return (
    <section className="bg-linear-to-b from-epg-navy to-epg-navy-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-epg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-epg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Search Area ── */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
            Encuentra tu programa ideal
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Explora nuestra oferta académica de maestrías, doctorados y
            programas de formación continua.
          </p>
        </div>

        {/* Program Type Filters */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
          role="group"
          aria-label="Filtrar por tipo de programa"
        >
          {programTypes.map((type) => {
            const count = getProgramCount(type.id);
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                aria-pressed={isSelected}
                aria-label={`Filtrar por ${type.label}, ${count} programas disponibles`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-epg-gold text-epg-navy'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {type.icon && (
                  <type.icon className="w-4 h-4" aria-hidden="true" />
                )}
                <span>{type.label}</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                    isSelected
                      ? 'bg-epg-navy/20 text-epg-navy'
                      : 'bg-white/20 text-white'
                  }`}
                  aria-hidden="true"
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          role="search"
          className="relative max-w-3xl mx-auto mb-4"
          ref={searchRef}
        >
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-xl shadow-black/15">
            <div className="flex items-center flex-1 px-3 sm:px-5 py-2.5 sm:py-3">
              <Search className="w-5 h-5 text-gray-400 mr-2 sm:mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="search"
                id="program-search"
                name="q"
                role="combobox"
                aria-label="Buscar programas académicos por nombre, área o palabras clave"
                aria-expanded={showSuggestions}
                aria-controls="search-suggestions"
                aria-activedescendant={
                  activeSuggestionIndex >= 0
                    ? `suggestion-${activeSuggestionIndex}`
                    : undefined
                }
                placeholder="Buscar programas…"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() =>
                  searchQuery.trim().length >= 2 &&
                  suggestions.length > 0 &&
                  setShowSuggestions(true)
                }
                autoComplete="off"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
            <div className="pr-2 sm:pr-3">
              <button
                type="submit"
                aria-label="Buscar programas académicos"
                className="bg-epg-navy hover:bg-epg-navy-light text-white px-3 sm:px-5 py-2.5 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span className="hidden sm:inline">{getButtonText()}</span>
                <ArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 text-center mt-3">
            Al buscar, te llevamos a la página de programas.
          </p>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              id="search-suggestions"
              role="listbox"
              className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
            >
              {suggestions.map((programa, index) => {
                const tipoToNumber: Record<string, number> = {
                  maestria: 1,
                  doctorado: 2,
                  diplomado: 3,
                  curso: 4,
                };
                const typeConfig = getProgramTypeConfig(
                  tipoToNumber[programa.tipo] ?? 0
                );
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
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeConfig.bgColor}`}
                    >
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
              <div className="border-t mt-2 pt-2 px-4">
                <a
                  href={`/programas?q=${searchQuery}${selectedType !== 'all' ? `&tipo=${selectedType}` : ''}`}
                  className="text-epg-gold text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Ver todos los resultados (
                  {suggestions.length === 5 ? '5+' : suggestions.length})
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </form>

        {/* Quick Links */}
        <nav aria-label="Búsquedas populares" className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <span className="text-gray-500" aria-hidden="true">
              Búsquedas populares:
            </span>
            {busquedasPopulares.map((busqueda) => (
              <a
                key={busqueda.id}
                href={getBusquedaUrl(busqueda)}
                className="text-epg-gold hover:underline"
                aria-label={`Buscar programas sobre ${busqueda.label}`}
              >
                {busqueda.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Divider ── */}
        <div className="border-t border-white/10 mb-10" />

        {/* ── Stats Grid ── */}
        <div className="scroll-reveal max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {estadisticasInstitucionales.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.id}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <StatItem
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                    variant="card"
                    icon={
                      <IconCircle
                        icon={<Icon className="w-6 h-6" />}
                        size="md"
                        variant="custom"
                        bgColor="bg-epg-gold/20"
                        iconColor="text-epg-gold"
                        rounded="xl"
                        className="mx-auto group-hover:bg-epg-gold/30 transition-colors"
                      />
                    }
                    valueClassName="text-white"
                    labelClassName="text-epg-gold"
                    descriptionClassName="text-gray-300 text-xs sm:text-sm"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
