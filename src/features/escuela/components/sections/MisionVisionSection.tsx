import { infoInstitucional } from '@/data/institucional'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Target } from 'lucide-react'

export function MisionVisionSection() {
  return (
    <section id="mision-vision">
      <SectionHeader
        badge={{
          label: 'Identidad Institucional',
          className: 'bg-blue-100 text-blue-800',
        }}
        title="Misión y Visión"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-l-4 border-l-epg-gold hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-14 h-14 bg-epg-gold/10 rounded-full flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-epg-gold" />
            </div>
            <CardTitle className="text-2xl">Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              {infoInstitucional.mision}
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-epg-navy hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-14 h-14 bg-epg-navy/10 rounded-full flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-epg-navy" />
            </div>
            <CardTitle className="text-2xl">Visión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              {infoInstitucional.vision}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
