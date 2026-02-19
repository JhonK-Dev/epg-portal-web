import { SectionHeader } from '@/components/ui/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  calcularEstadoProceso,
  estaConvocatoriaAbierta,
  formatearFechaImportante,
  getProcesoActual,
  getTextoEstado,
} from '@/data/admision';
import { contactoAdmision } from '@/data/contacto';
import { ArrowRight, Calendar, FileText, Phone } from 'lucide-react';
import React from 'react';

export const AdmissionCTA: React.FC = () => {
  const proceso = getProcesoActual();
  const estado = proceso ? calcularEstadoProceso(proceso) : 'cerrada';
  const convocatoriaAbierta = estaConvocatoriaAbierta();
  
  const [leftContentRef, leftVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [card1Ref, card1Visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [card2Ref, card2Visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [card3Ref, card3Visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="home-section px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container-main relative z-10">
        <SectionHeader
          badge={{
            label: 'Admisión / Convocatoria',
            className: 'text-epg-navy bg-epg-gold/80 px-2 py-1 rounded',
          }}
          title="Tu siguiente paso académico"
          description="Revisa fechas, requisitos y canales de contacto para iniciar tu postulación."
          align="left"
          className="mb-10"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftContentRef}
            className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                convocatoriaAbierta
                  ? 'bg-epg-navy text-white'
                  : 'bg-gray-100 text-epg-navy'
              }`}
            >
              {convocatoriaAbierta && (
                <span
                  className="w-2 h-2 bg-success rounded-full animate-pulse"
                  aria-hidden="true"
                />
              )}
              {getTextoEstado(estado)}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-epg-navy mb-6 leading-tight">
              Inicia tu camino hacia la excelencia académica
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              {proceso ? (
                convocatoriaAbierta ? (
                  <>
                    El proceso de admisión <strong>{proceso.periodo}</strong>{' '}
                    está abierto. No pierdas la oportunidad de formar parte de
                    la Escuela de Postgrado líder en la Amazonía.
                  </>
                ) : estado === 'proximamente' ? (
                  <>
                    El proceso de admisión <strong>{proceso.periodo}</strong>{' '}
                    abrirá próximamente. Mantente atento a las fechas de
                    inscripción.
                  </>
                ) : (
                  <>
                    El proceso de admisión <strong>{proceso.periodo}</strong> ha
                    cerrado. Pronto anunciaremos nuevas convocatorias.
                  </>
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
                    className="inline-flex items-center gap-2 bg-epg-gold hover:bg-epg-gold-dark text-epg-navy px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                  >
                    Inscríbete ahora
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/programas"
                    className="inline-flex items-center gap-2 border-2 border-epg-navy text-epg-navy hover:bg-epg-navy hover:text-white px-6 py-3 rounded-lg font-bold transition-all"
                  >
                    Ver programas
                  </a>
                </>
              ) : (
                <a
                  href="/programas"
                  className="inline-flex items-center gap-2 bg-epg-gold hover:bg-epg-gold-dark text-epg-navy px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                >
                  Explorar programas
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="grid gap-4">
            <div 
              ref={card1Ref}
              className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-200/50 transition-all duration-500 ${card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-epg-navy mb-1">
                    {proceso
                      ? `Fechas importantes ${proceso.periodo}`
                      : 'Fechas importantes'}
                  </h3>
                  {proceso ? (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {proceso.fechasImportantes.map((fecha, index) => (
                        <li key={index}>
                          • {fecha.etiqueta}: {formatearFechaImportante(fecha)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No hay fechas disponibles en este momento.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div 
              ref={card2Ref}
              className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-200/50 transition-all duration-500 delay-100 ${card2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-epg-navy mb-1">
                    Requisitos básicos
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• grado de Bachiller o Magíster</li>
                    <li>• DNI o Carnet de Extranjería</li>
                    <li>• Certificado de estudios</li>
                    <li>• Curriculum vitae documentado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              ref={card3Ref}
              className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-200/50 transition-all duration-500 delay-200 ${card3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-800" />
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
                      href={`tel:${contactoAdmision.telefono}`}
                      className="text-sm text-epg-navy font-medium hover:text-blue-800 transition-colors"
                    >
                      {contactoAdmision.telefonoDisplay}
                    </a>
                    <span className="text-blue-400">|</span>
                    <a
                      href={`mailto:${contactoAdmision.email}`}
                      className="text-sm text-epg-navy font-medium hover:text-blue-800 transition-colors"
                    >
                      {contactoAdmision.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
