import type { ApiProgram } from '@/lib/api/programs/types';
import { getProgramTypeConfig } from '@/lib/config';
import { ArrowRight, GraduationCap } from 'lucide-react';

interface ProgramCardProps {
  programa: ApiProgram;
  /** 'default' = h-48 image (lista), 'compact' = h-32 image (featured/home) */
  variant?: 'default' | 'compact';
}

export function ProgramCard({
  programa,
  variant = 'default',
}: ProgramCardProps) {
  const typeConfig = getProgramTypeConfig(programa.program_type);
  const Icon = typeConfig.icon || GraduationCap;
  const imageHeight = variant === 'compact' ? 'h-32' : 'h-48';

  return (
    <a href={`/programas/${programa.name}`} className="group block h-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Imagen */}
        <div
          className={`${imageHeight} bg-linear-to-br from-epg-navy to-epg-navy-light relative overflow-hidden`}
        >
          {programa.background ? (
            <img
              src={programa.background}
              alt={programa.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-16 h-16 text-white/20" />
            </div>
          )}
          <div
            className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`inline-block ${typeConfig.bgColor} ${typeConfig.textColor} text-xs font-semibold px-3 py-1 rounded-md`}
            >
              {typeConfig.label}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-epg-navy transition-colors leading-tight line-clamp-2">
            {programa.name}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
            {programa.description}
          </p>

          <div className="pt-4 border-t border-gray-100 mt-auto">
            <span className="inline-flex items-center gap-1 text-epg-gold font-medium text-sm group-hover:gap-2 transition-all">
              Ver programa
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
