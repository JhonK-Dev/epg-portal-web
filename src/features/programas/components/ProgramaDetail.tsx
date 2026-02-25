import type { Programa } from '@/types'
import { formatDateSafe } from '@/lib/formatters'
import {
  tipoProgramaLabels,
  tipoProgramaColors,
  modalidadLabels,
  modalidadColors,
} from '@/lib/config'
import {
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
  User,
  BookOpen,
  DollarSign,
  CheckCircle2,
  FileText,
  ArrowLeft,
  Share2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PageHero } from '@/components/ui/page-hero'

interface ProgramaDetailProps {
  programa: Programa
}

export function ProgramaDetail({ programa }: ProgramaDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <PageHero
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Programas', href: '/programas' },
          { label: tipoProgramaLabels[programa.tipo] },
        ]}
        title={programa.nombre}
        subtitle={programa.descripcionCorta}
        badge={{
          label: tipoProgramaLabels[programa.tipo],
          className: 'bg-white/20 text-white hover:bg-white/30',
        }}
        bgColorClass={tipoProgramaColors[programa.tipo]}
        variant="solid"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mt-6">
          <div className="flex-1">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="h-5 w-5" />
                <span>{programa.duracion}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <BookOpen className="h-5 w-5" />
                <span>{programa.creditos} créditos</span>
              </div>
              <Badge className={modalidadColors[programa.modalidad]}>
                {modalidadLabels[programa.modalidad]}
              </Badge>
            </div>
          </div>

          {/* Action Card */}
          <Card className="lg:w-80 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Inscríbete ahora</CardTitle>
              <CardDescription>Proceso de admisión 2025-I</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {programa.fechaInicio && (
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Inicio de clases</p>
                    <p className="text-gray-600">
                      {formatDateSafe(programa.fechaInicio)}
                    </p>
                  </div>
                </div>
              )}
              {programa.inversion && (
                <div className="flex items-center gap-3 text-sm">
                  <DollarSign className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Inversión</p>
                    <p className="text-gray-600">{programa.inversion}</p>
                  </div>
                </div>
              )}
              <Separator />
              <Button
                className="w-full bg-epg-navy hover:bg-epg-navy-dark"
                size="lg"
              >
                Solicitar información
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Descargar brochure
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageHero>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descripción */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-epg-navy" />
                  Descripción del Programa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {programa.descripcion}
                </p>
              </CardContent>
            </Card>

            {/* Requisitos */}
            {programa.requisitos && programa.requisitos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-epg-navy" />
                    Requisitos de Admisión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programa.requisitos.map((requisito, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{requisito}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Plan de Estudios Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-epg-navy" />
                  Plan de Estudios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  El plan de estudios está diseñado para proporcionar una
                  formación integral que combine teoría y práctica, preparándote
                  para los desafíos del mundo profesional.
                </p>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Descargar Plan de Estudios (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Información del Programa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Tipo de Programa</p>
                    <p className="font-medium">
                      {tipoProgramaLabels[programa.tipo]}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Facultad</p>
                    <p className="font-medium">{programa.facultad}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Duración</p>
                    <p className="font-medium">{programa.duracion}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Créditos</p>
                    <p className="font-medium">{programa.creditos} créditos</p>
                  </div>
                </div>

                {programa.coordinador && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-epg-navy flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Coordinador</p>
                        <p className="font-medium">{programa.coordinador}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-500 mb-3">
                  Compartir este programa
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartir
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Back Link */}
            <a
              href="/programas"
              className="flex items-center gap-2 text-epg-navy hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver todos los programas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
