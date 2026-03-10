import { SectionHeader } from '@/components/ui/section-header'
import {
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
} from 'lucide-react'

const valoresIconos = [
  { valor: 'Excelencia académica', icono: Target, color: 'bg-blue-500' },
  { valor: 'Integridad y ética', icono: Shield, color: 'bg-purple-500' },
  {
    valor: 'Innovación e investigación',
    icono: Lightbulb,
    color: 'bg-amber-500',
  },
  { valor: 'Responsabilidad social', icono: Users, color: 'bg-emerald-500' },
  { valor: 'Respeto a la diversidad', icono: Globe, color: 'bg-cyan-500' },
  { valor: 'Compromiso con la Amazonía', icono: Heart, color: 'bg-red-500' },
]

export function ValoresSection() {
  return (
    <section
      id="valores"
      className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl"
    >
      <SectionHeader
        badge={{
          label: 'Principios',
          className: 'bg-purple-100 text-purple-800',
        }}
        title="Nuestros Valores"
        description="Los valores que guían nuestra labor académica y compromiso institucional"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {valoresIconos.map((item) => {
          const IconComponent = item.icono

          return (
            <div
              key={item.valor}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-gray-800">{item.valor}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
