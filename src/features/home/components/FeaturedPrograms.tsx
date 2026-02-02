import React from 'react';
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

// Sample featured programs (in real app, this would come from props or data fetch)
const featuredPrograms = [
  {
    id: 'mae-001',
    nombre: 'Maestría en Gestión Pública',
    tipo: 'maestria',
    descripcionCorta: 'Forma líderes en administración y modernización del Estado.',
    duracion: '2 años',
    modalidad: 'Semipresencial',
    slug: 'maestria-gestion-publica',
  },
  {
    id: 'mae-002',
    nombre: 'Maestría en Derecho Civil y Comercial',
    tipo: 'maestria',
    descripcionCorta: 'Especialización en derecho contractual, societario y de negocios.',
    duracion: '2 años',
    modalidad: 'Presencial',
    slug: 'maestria-derecho-civil-comercial',
  },
  {
    id: 'doc-001',
    nombre: 'Doctorado en Derecho',
    tipo: 'doctorado',
    descripcionCorta: 'Investigación jurídica de alto nivel académico.',
    duracion: '3 años',
    modalidad: 'Presencial',
    slug: 'doctorado-derecho',
  },
  {
    id: 'mae-003',
    nombre: 'Maestría en Educación',
    tipo: 'maestria',
    descripcionCorta: 'Desarrolla competencias pedagógicas para la docencia universitaria.',
    duracion: '2 años',
    modalidad: 'Semipresencial',
    slug: 'maestria-educacion-docencia-universitaria',
  },
];

const getTypeConfig = (tipo: string) => {
  switch (tipo) {
    case 'maestria':
      return { label: 'Maestría', bgColor: 'bg-blue-100', textColor: 'text-blue-700', icon: GraduationCap };
    case 'doctorado':
      return { label: 'Doctorado', bgColor: 'bg-amber-100', textColor: 'text-amber-700', icon: Award };
    case 'diplomado':
      return { label: 'Diplomado', bgColor: 'bg-green-100', textColor: 'text-green-700', icon: BookOpen };
    default:
      return { label: 'Programa', bgColor: 'bg-gray-100', textColor: 'text-gray-700', icon: GraduationCap };
  }
};

export const FeaturedPrograms: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[#E6A817] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Nuestra oferta académica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#001F3F]">
              Programas Destacados
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Descubre los programas más demandados por profesionales como tú.
            </p>
          </div>
          <a
            href="/programas"
            className="inline-flex items-center gap-2 text-[#001F3F] font-semibold hover:text-[#E6A817] transition-colors group"
          >
            Ver todos los programas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPrograms.map((program) => {
            const typeConfig = getTypeConfig(program.tipo);
            const Icon = typeConfig.icon;
            
            return (
              <a
                key={program.id}
                href={`/programas/${program.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#E6A817]/30"
              >
                {/* Card Header with gradient */}
                <div className="h-32 bg-gradient-to-br from-[#001F3F] to-[#003366] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/20" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block ${typeConfig.bgColor} ${typeConfig.textColor} text-xs font-semibold px-3 py-1 rounded-full`}>
                      {typeConfig.label}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-[#001F3F] text-lg mb-2 group-hover:text-[#E6A817] transition-colors line-clamp-2">
                    {program.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {program.descripcionCorta}
                  </p>
                  
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duracion}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {program.modalidad}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5">
                  <span className="inline-flex items-center gap-1 text-[#E6A817] font-medium text-sm group-hover:gap-2 transition-all">
                    Ver programa
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <a
            href="/programas/maestrias"
            className="group bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl p-6 text-white hover:shadow-xl transition-all"
          >
            <GraduationCap className="w-10 h-10 text-[#E6A817] mb-4" />
            <h3 className="text-xl font-bold mb-2">Maestrías</h3>
            <p className="text-gray-300 text-sm mb-4">
              Programas de 2 años para profesionales que buscan especialización.
            </p>
            <span className="inline-flex items-center gap-1 text-[#E6A817] font-medium text-sm group-hover:gap-2 transition-all">
              5 programas disponibles
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="/programas/doctorados"
            className="group bg-gradient-to-br from-[#E6A817] to-[#C9A227] rounded-2xl p-6 text-[#001F3F] hover:shadow-xl transition-all"
          >
            <Award className="w-10 h-10 text-[#001F3F] mb-4" />
            <h3 className="text-xl font-bold mb-2">Doctorados</h3>
            <p className="text-[#001F3F]/70 text-sm mb-4">
              Investigación de alto nivel para líderes académicos.
            </p>
            <span className="inline-flex items-center gap-1 text-[#001F3F] font-medium text-sm group-hover:gap-2 transition-all">
              3 programas disponibles
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="/programas/formacion-continua"
            className="group bg-white border-2 border-gray-200 hover:border-[#E6A817] rounded-2xl p-6 text-[#001F3F] hover:shadow-xl transition-all"
          >
            <BookOpen className="w-10 h-10 text-[#E6A817] mb-4" />
            <h3 className="text-xl font-bold mb-2">Formación Continua</h3>
            <p className="text-gray-600 text-sm mb-4">
              Diplomados y cursos cortos de actualización profesional.
            </p>
            <span className="inline-flex items-center gap-1 text-[#E6A817] font-medium text-sm group-hover:gap-2 transition-all">
              5 programas disponibles
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
