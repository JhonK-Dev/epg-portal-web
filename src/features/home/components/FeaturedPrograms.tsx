import React from 'react'
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react'
import { programas } from '@/data/programas'
import { getProgramTypeConfig } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/section-header'
import { LinkArrow } from '@/components/ui/link-arrow'
import { ResourceCard } from '@/components/ui/resource-card'

// Get featured programs from data
const featuredPrograms = programas
  .filter((p) => p.destacado)
  .slice(0, 4)

// Fallback: if less than 4 featured, fill with active programs
const displayPrograms =
  featuredPrograms.length >= 4
    ? featuredPrograms
    : [
        ...featuredPrograms,
        ...programas
          .filter((p) => !p.destacado && p.estado === 'activo')
          .slice(0, 4 - featuredPrograms.length),
      ]

// Helper function for pluralization
const pluralize = (count: number, singular: string, plural: string): string => {
  return count === 1 ? `${count} ${singular}` : `${count} ${plural}`
}

export const FeaturedPrograms: React.FC = () => {
  // Calculate dynamic counters for each program type
  const maestriasCount = programas.filter((p) => p.tipo === 'maestria' && p.estado === 'activo').length
  const doctoradosCount = programas.filter((p) => p.tipo === 'doctorado' && p.estado === 'activo').length
  const formacionContinuaCount = programas.filter(
    (p) => (p.tipo === 'diplomado' || p.tipo === 'curso') && p.estado === 'activo'
  ).length
  return (
    <section className="section-py px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container-main">
        {/* Section Header */}
        <SectionHeader
          badge={{
            label: 'Nuestra oferta académica',
            className: 'text-epg-gold',
          }}
          title="Programas Destacados"
          description="Descubre los programas más demandados por profesionales como tú."
          align="left"
          action={
            <a
              href="/programas"
              className="text-epg-navy font-semibold hover:text-epg-gold transition-colors group"
            >
              <LinkArrow>Ver todos los programas</LinkArrow>
            </a>
          }
        />

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {displayPrograms.map((program) => {
            const typeConfig = getProgramTypeConfig(program.tipo)
            const Icon = typeConfig.icon || GraduationCap

            return (
              <a
                key={program.id}
                href={`/programas/${program.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-epg-gold/30"
              >
                {/* Card Header with image or gradient */}
                <div className="h-32 bg-gradient-to-br from-epg-navy to-epg-navy-light relative overflow-hidden">
                  {program.imagen ? (
                    <img
                      src={program.imagen}
                      alt={program.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block ${typeConfig.bgColor} ${typeConfig.textColor} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {typeConfig.label}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-epg-navy text-lg mb-2 group-hover:text-epg-gold transition-colors line-clamp-2">
                    {program.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {program.descripcionCorta}
                  </p>


                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {program.duracion}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {program.modalidad}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5">
                  <span className="inline-flex items-center gap-1 text-epg-gold font-medium text-sm group-hover:gap-2 transition-all">
                    Ver programa
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <ResourceCard
            href="/programas/maestrias"
            icon={GraduationCap}
            title="Maestrías"
            description={`${pluralize(maestriasCount, 'programa disponible', 'programas disponibles')} de 2 años para profesionales que buscan especialización.`}
            variant="gradient-navy"
          />

          <ResourceCard
            href="/programas/doctorados"
            icon={Award}
            title="Doctorados"
            description={`${pluralize(doctoradosCount, 'programa disponible', 'programas disponibles')} de investigación de alto nivel para líderes académicos.`}
            variant="gradient-gold"
          />

          <a
            href="/programas/formacion-continua"
            className="group bg-white border-2 border-gray-200 hover:border-epg-gold rounded-2xl p-6 text-epg-navy hover:shadow-xl transition-all"
          >
            <BookOpen className="w-10 h-10 text-epg-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Formación Continua</h3>
            <p className="text-gray-600 text-sm mb-4">
              Diplomados y cursos cortos de actualización profesional.
            </p>
            <span className="inline-flex items-center gap-1 text-epg-gold font-medium text-sm group-hover:gap-2 transition-all">
              {pluralize(formacionContinuaCount, 'programa disponible', 'programas disponibles')}
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
