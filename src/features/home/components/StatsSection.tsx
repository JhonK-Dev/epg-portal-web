import React from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  ThumbsUp,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { StatItem } from '@/components/ui/stat-item'
import { IconCircle } from '@/components/ui/icon-circle'
import { estadisticasInstitucionales } from '@/data/estadisticas'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  ThumbsUp,
}

export const StatsSection: React.FC = () => {
  return (
    <section className="section-py px-4 sm:px-6 lg:px-8 bg-epg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-epg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-epg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge={{ label: 'Nuestros números', className: 'text-epg-gold' }}
          title="Cifras que nos respaldan"
          description="Más de tres décadas formando líderes para el desarrollo de la Amazonía peruana."
          titleColor="text-white"
          descriptionColor="text-gray-400"
          className="mb-12"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {estadisticasInstitucionales.map((stat) => {
            const Icon = iconMap[stat.icon]
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
                  descriptionClassName="text-gray-500 hidden lg:block"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
