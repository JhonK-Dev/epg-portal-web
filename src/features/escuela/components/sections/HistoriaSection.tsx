import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Building2 } from 'lucide-react'
import type { Estadistica, InfoInstitucional } from '@/types'

export function HistoriaSection({
  infoInstitucional,
  estadisticasInstitucionales,
}: {
  infoInstitucional: InfoInstitucional
  estadisticasInstitucionales: Estadistica[]
}) {
  const destacados = estadisticasInstitucionales.slice(0, 4)

  return (
    <section id="historia">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-epg-gold/10 text-epg-gold mb-4">
            Nuestra Historia
          </Badge>
          <h2 className="text-3xl font-bold text-epg-navy mb-6">
            Más de 35 años formando líderes
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            {infoInstitucional.historia.split('\n\n').map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-epg-navy to-epg-navy-light text-white border-0">
          <CardContent className="pt-8">
            <div className="grid grid-cols-2 gap-8">
              {destacados.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="text-5xl font-bold text-epg-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <Separator className="my-8 bg-white/20" />
            <div className="text-center">
              <Badge className="bg-white/20 text-white mb-2">
                <Building2 className="h-4 w-4 mr-1" />
                Acreditación SUNEDU
              </Badge>
              <p className="text-sm text-gray-300">
                Universidad licenciada por la Superintendencia Nacional de
                Educación Superior Universitaria
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
