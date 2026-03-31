import type { ReactNode } from 'react'
import { StatItem } from '@/components/ui/stat-item'
import { SectionHeader } from '@/components/ui/section-header'
import { IconCircle } from '@/components/ui/icon-circle'
import type { Estadistica } from '@/types'
import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  Heart,
  Users,
} from 'lucide-react'

const iconMap: Record<string, ReactNode> = {
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Award: <Award className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  Calendar: <Calendar className="h-8 w-8" />,
  BookOpen: <BookOpen className="h-8 w-8" />,
  ThumbsUp: <Heart className="h-8 w-8" />,
}

export function EstadisticasSection({
  estadisticasInstitucionales,
}: {
  estadisticasInstitucionales: Estadistica[]
}) {
  return (
    <section id="estadisticas">
      <SectionHeader
        badge={{
          label: 'Logros',
          className: 'bg-emerald-100 text-emerald-800',
        }}
        title="EPG en Números"
        description="Cifras que reflejan nuestro compromiso con la excelencia académica"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {estadisticasInstitucionales.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <StatItem
              value={stat.value}
              label={stat.label}
              variant="card"
              description={stat.description}
              icon={
                <IconCircle
                  icon={stat.icon ? iconMap[stat.icon] : null}
                  size="xl"
                  variant="custom"
                  bgColor="bg-epg-gold/10"
                  iconColor="text-epg-gold"
                  rounded="full"
                  className="mx-auto"
                />
              }
              valueClassName="text-epg-navy"
              labelClassName="text-gray-600"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
