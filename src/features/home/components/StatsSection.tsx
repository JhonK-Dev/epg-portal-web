import { IconCircle } from '@/components/ui/icon-circle';
import { StatItem } from '@/components/ui/stat-item';
import type { Estadistica } from '@/types';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  ThumbsUp,
  Users,
} from 'lucide-react';
import React from 'react';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  ThumbsUp,
};

export const StatsSection: React.FC<{
  estadisticasInstitucionales: Estadistica[];
}> = ({ estadisticasInstitucionales }) => {
  return (
    <section className="home-section px-4 sm:px-6 lg:px-8 bg-epg-navy-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-epg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-epg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {estadisticasInstitucionales.map((stat, index) => {
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
    </section>
  );
};
