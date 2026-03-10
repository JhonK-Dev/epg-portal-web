import { documentos } from '@/data/institucional'
import { DocumentDownloadItem } from '@/components/ui/document-download-item'
import { SectionHeader } from '@/components/ui/section-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookOpen, FileText } from 'lucide-react'

export function DocumentosSection() {
  const reglamentos = documentos.filter((documento) => documento.tipo === 'reglamento')
  const formatos = documentos.filter((documento) => documento.tipo === 'formato')
  const guias = documentos.filter(
    (documento) => documento.tipo === 'guia' || documento.tipo === 'manual',
  )

  return (
    <section id="documentos">
      <SectionHeader
        badge={{ label: 'Normativa', className: 'bg-gray-100 text-gray-800' }}
        title="Documentos Institucionales"
        description="Accede a los reglamentos, formatos y guías de la escuela"
      />

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-red-600" />
              Reglamentos
            </CardTitle>
            <CardDescription>Normativa institucional</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {reglamentos.map((documento) => (
              <DocumentDownloadItem
                key={documento.id}
                name={documento.nombre}
                url={documento.url}
                variant="simple"
              />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-blue-600" />
              Formatos
            </CardTitle>
            <CardDescription>Plantillas y formularios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {formatos.map((documento) => (
              <DocumentDownloadItem
                key={documento.id}
                name={documento.nombre}
                url={documento.url}
                variant="simple"
              />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-green-600" />
              Guías y Manuales
            </CardTitle>
            <CardDescription>Documentos de ayuda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {guias.map((documento) => (
              <DocumentDownloadItem
                key={documento.id}
                name={documento.nombre}
                url={documento.url}
                variant="simple"
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
