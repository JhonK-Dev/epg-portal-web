import { getGradoInfo } from '@/lib/config'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'
import type { Autoridad } from '@/types/institucional'

interface AutoridadesSectionProps {
  autoridades: Autoridad[];
}

export function AutoridadesSection({ autoridades }: AutoridadesSectionProps) {
  const autoridadesOrdenadas = [...autoridades].sort((a, b) => a.orden - b.orden)

  return (
    <section id="autoridades">
      <SectionHeader
        badge={{
          label: 'Equipo Directivo',
          className: 'bg-amber-100 text-amber-800',
        }}
        title="Autoridades"
        description="Profesionales comprometidos con la excelencia académica"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {autoridadesOrdenadas.map((autoridad) => {
          const gradoInfo = getGradoInfo(autoridad.grado)

          return (
            <Card key={autoridad.id} className="group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-epg-navy to-epg-navy-light flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {autoridad.nombres.charAt(0)}
                    {autoridad.apellidos.charAt(0)}
                  </div>

                  <Badge variant="secondary" className="mb-2">
                    {autoridad.cargo}
                  </Badge>

                  <h3 className="font-semibold text-gray-900">
                    {gradoInfo.label} {autoridad.nombres} {autoridad.apellidos}
                  </h3>

                  <div className="mt-4 space-y-2 w-full">
                    {autoridad.email && (
                      <a
                        href={`mailto:${autoridad.email}`}
                        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-epg-navy"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{autoridad.email}</span>
                      </a>
                    )}
                    {autoridad.telefono && (
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Phone className="h-4 w-4" />
                        <span>{autoridad.telefono}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
