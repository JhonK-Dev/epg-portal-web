import { Button } from '@/components/ui/button';
import { LinkArrow } from '@/components/ui/link-arrow';
import { ResourceCard } from '@/components/ui/resource-card';
import { SectionHeader } from '@/components/ui/section-header';
import { Separator } from '@/components/ui/separator';
import { ProgramCard } from '@/features/programas';
import type { ApiProgram } from '@/lib/api/programs/types';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

interface FeaturedProgramsProps {
  programs: ApiProgram[] | [];
  maestriasCount: number;
  doctoradosCount: number;
  formacionContinuaCount: number;
  hasError?: boolean;
}

const pluralize = (count: number, singular: string, plural: string): string => {
  return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
};

export const FeaturedPrograms = ({
  programs,
  maestriasCount,
  doctoradosCount,
  formacionContinuaCount,
  hasError = false,
}: FeaturedProgramsProps) => {
  return (
    <section className="home-section px-4 sm:px-6 lg:px-8 bg-gray-50">
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

        {/* Error State */}
        {hasError ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
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
        ) : (
          <>
            {/* Programs Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  programa={program}
                  variant="compact"
                />
              ))}
            </div>
          </>
        )}

        <Separator className="my-10 bg-gray-200/70" />

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <ResourceCard
            href="/programas?program_type=1"
            icon={GraduationCap}
            title="Maestrías"
            description={`${pluralize(maestriasCount, 'programa disponible', 'programas disponibles')} de 2 años para profesionales que buscan especialización.`}
            variant="gradient-navy"
          />

          <ResourceCard
            href="/programas?program_type=2"
            icon={Award}
            title="Doctorados"
            description={`${pluralize(doctoradosCount, 'programa disponible', 'programas disponibles')} de investigación de alto nivel para líderes académicos.`}
            variant="gradient-gold"
          />

          <ResourceCard
            href="/programas/diplomados"
            icon={BookOpen}
            title="Formación Continua"
            description={`${pluralize(formacionContinuaCount, 'programa disponible', 'programas disponibles')} de diplomados y cursos cortos de actualización profesional.`}
            variant="gradient-navy"
          />
        </div>
      </div>
    </section>
  );
};
