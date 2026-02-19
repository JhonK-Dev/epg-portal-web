import { autoridades } from '@/data/autoridades'
import {
  infoInstitucional,
  estadisticas,
  documentos,
} from '@/data/institucional'
import {
  getGradoInfo,
  tipoDocumentoColors,
  tipoDocumentoLabels,
} from '@/lib/config'
import { StatItem } from '@/components/ui/stat-item'
import { DocumentDownloadItem } from '@/components/ui/document-download-item'
import {
  GraduationCap,
  Award,
  Users,
  Calendar,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Globe,
  Shield,
  Mail,
  Phone,
  FileText,
  Download,
  ChevronRight,
  Building2,
  BookOpen,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/ui/section-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CTABannerSideBySide } from '@/components/ui/cta-banner'
import { IconCircle } from '@/components/ui/icon-circle'

// ========================================
// AUTORIDADES COMPONENT
// ========================================
function Autoridades() {
  const autoridadesOrdenadas = [...autoridades].sort(
    (a, b) => a.orden - b.orden,
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {autoridadesOrdenadas.map((autoridad) => {
        const gradoInfo = getGradoInfo(autoridad.grado)

        return (
          <Card
            key={autoridad.id}
            className="group hover:shadow-lg transition-all"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                {/* Avatar placeholder */}
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
  )
}

// ========================================
// ESTADÍSTICAS COMPONENT
// ========================================
function EstadisticasGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="h-8 w-8" />,
    Award: <Award className="h-8 w-8" />,
    Users: <Users className="h-8 w-8" />,
    Calendar: <Calendar className="h-8 w-8" />,
    UserCheck: <Users className="h-8 w-8" />,
    ThumbsUp: <Heart className="h-8 w-8" />,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {estadisticas.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <StatItem
            value={stat.valor}
            label={stat.label}
            variant="card"
            icon={
              <IconCircle
                icon={stat.icono && iconMap[stat.icono]}
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
  )
}

// ========================================
// VALORES COMPONENT
// ========================================
function Valores() {
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {valoresIconos.map((item, index) => {
        const IconComponent = item.icono
        return (
          <div
            key={index}
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
  )
}

// ========================================
// DOCUMENTOS COMPONENT
// ========================================
function Documentos() {
  const reglamentos = documentos.filter((d) => d.tipo === 'reglamento')
  const formatos = documentos.filter((d) => d.tipo === 'formato')
  const guias = documentos.filter(
    (d) => d.tipo === 'guia' || d.tipo === 'manual',
  )

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Reglamentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-red-600" />
            Reglamentos
          </CardTitle>
          <CardDescription>Normativa institucional</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {reglamentos.map((doc) => (
            <DocumentDownloadItem
              key={doc.id}
              name={doc.nombre}
              url={doc.url}
              variant="simple"
            />
          ))}
        </CardContent>
      </Card>

      {/* Formatos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-blue-600" />
            Formatos
          </CardTitle>
          <CardDescription>Plantillas y formularios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {formatos.map((doc) => (
            <DocumentDownloadItem
              key={doc.id}
              name={doc.nombre}
              url={doc.url}
              variant="simple"
            />
          ))}
        </CardContent>
      </Card>

      {/* Guías y Manuales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-green-600" />
            Guías y Manuales
          </CardTitle>
          <CardDescription>Documentos de ayuda</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {guias.map((doc) => (
            <DocumentDownloadItem
              key={doc.id}
              name={doc.nombre}
              url={doc.url}
              variant="simple"
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export function EscuelaContent() {
  return (
    <div className="space-y-16">
      {/* Historia */}
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
              {infoInstitucional.historia
                .split('\n\n')
                .map((parrafo, index) => (
                  <p key={index}>{parrafo}</p>
                ))}
            </div>
          </div>

          {/* Stats Card */}
          <Card className="bg-gradient-to-br from-epg-navy to-epg-navy-light text-white border-0">
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-epg-gold mb-2">35+</p>
                  <p className="text-gray-300">Años de trayectoria</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-epg-gold mb-2">
                    2,500+
                  </p>
                  <p className="text-gray-300">Egresados</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-epg-gold mb-2">15+</p>
                  <p className="text-gray-300">Maestrías</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-epg-gold mb-2">5</p>
                  <p className="text-gray-300">Doctorados</p>
                </div>
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

      {/* Misión y Visión */}
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

      {/* Valores */}
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
        <Valores />
      </section>

      {/* Estadísticas */}
      <section id="estadisticas">
        <SectionHeader
          badge={{
            label: 'Logros',
            className: 'bg-emerald-100 text-emerald-800',
          }}
          title="EPG en Números"
          description="Cifras que reflejan nuestro compromiso con la excelencia académica"
        />
        <EstadisticasGrid />
      </section>

      {/* Autoridades */}
      <section id="autoridades">
        <SectionHeader
          badge={{
            label: 'Equipo Directivo',
            className: 'bg-amber-100 text-amber-800',
          }}
          title="Autoridades"
          description="Profesionales comprometidos con la excelencia académica"
        />
        <Autoridades />
      </section>

      {/* Documentos */}
      <section id="documentos">
        <SectionHeader
          badge={{ label: 'Normativa', className: 'bg-gray-100 text-gray-800' }}
          title="Documentos Institucionales"
          description="Accede a los reglamentos, formatos y guías de la escuela"
        />
        <Documentos />
      </section>

      {/* CTA */}
      <section>
        <CTABannerSideBySide
          title="¿Listo para ser parte de nuestra comunidad?"
          description="Descubre nuestros programas y comienza tu formación de posgrado"
          primaryAction={{
            label: 'Ver programas',
            href: '/programas',
          }}
          secondaryAction={{
            label: 'Admisión',
            href: '/admision',
          }}
        />
      </section>
    </div>
  )
}
