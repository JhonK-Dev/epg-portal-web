import React from 'react'
import { ArrowRight, Calendar, FileText, Phone } from 'lucide-react'
import { 
  getProcesoActual, 
  calcularEstadoProceso, 
  formatearFechaImportante,
  getTextoEstado,
  estaConvocatoriaAbierta
} from '@/data/admision'

export const AdmissionCTA: React.FC = () => {
  const proceso = getProcesoActual()
  const estado = proceso ? calcularEstadoProceso(proceso) : 'cerrada'
  const convocatoriaAbierta = estaConvocatoriaAbierta()
  
  return (
    <section className="section-py px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-epg-gold via-epg-gold to-epg-gold-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              convocatoriaAbierta ? 'bg-epg-navy text-white' : 'bg-white/30 text-epg-navy'
            }`}>
              {convocatoriaAbierta && (
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" aria-hidden="true" />
              )}
              {getTextoEstado(estado)}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-epg-navy mb-6 leading-tight">
              Inicia tu camino hacia la excelencia académica
            </h2>

            <p className="text-epg-navy/80 text-lg mb-8 max-w-lg">
              {proceso ? (
                convocatoriaAbierta ? (
                  <>El proceso de admisión <strong>{proceso.periodo}</strong> está abierto. No pierdas la oportunidad de formar parte de la Escuela de Postgrado líder en la Amazonía.</>
                ) : estado === 'proximamente' ? (
                  <>El proceso de admisión <strong>{proceso.periodo}</strong> abrirá próximamente. Mantente atento a las fechas de inscripción.</>
                ) : (
                  <>El proceso de admisión <strong>{proceso.periodo}</strong> ha cerrado. Pronto anunciaremos nuevas convocatorias.</>
                )
              ) : (
                'Próximamente anunciaremos nuevas convocatorias de admisión.'
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              {convocatoriaAbierta ? (
                <>
                  <a
                    href="/admision"
                    className="inline-flex items-center gap-2 bg-epg-navy hover:bg-epg-navy-light text-white px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                  >
                    Inscríbete ahora
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/programas"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-epg-navy px-6 py-3 rounded-lg font-bold transition-all"
                  >
                    Ver programas
                  </a>
                </>
              ) : (
                <a
                  href="/programas"
                  className="inline-flex items-center gap-2 bg-epg-navy hover:bg-epg-navy-light text-white px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                >
                  Explorar programas
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="grid gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-epg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-epg-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-epg-navy mb-1">
                    {proceso ? `Fechas importantes ${proceso.periodo}` : 'Fechas importantes'}
                  </h3>
                  {proceso ? (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {proceso.fechasImportantes.map((fecha, index) => (
                        <li key={index}>• {fecha.etiqueta}: {formatearFechaImportante(fecha)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600">No hay fechas disponibles en este momento.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-epg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-epg-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-epg-navy mb-1">
                    Requisitos básicos
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Grado de Bachiller o Magíster</li>
                    <li>• DNI o Carnet de Extranjería</li>
                    <li>• Certificado de estudios</li>
                    <li>• Curriculum vitae documentado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-epg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-epg-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-epg-navy mb-1">
                    ¿Tienes dudas?
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Nuestro equipo de admisión está disponible para ayudarte.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+5165123456"
                      className="text-sm text-epg-gold font-medium hover:underline"
                    >
                      (065) 123-456
                    </a>
                    <a
                      href="mailto:admision@universidad.edu.pe"
                      className="text-sm text-epg-gold font-medium hover:underline"
                    >
                      admision@universidad.edu.pe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
