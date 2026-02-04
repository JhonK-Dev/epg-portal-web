import React from 'react';
import { ArrowRight, Calendar, FileText, Phone } from 'lucide-react';

export const AdmissionCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#D4A017] via-[#D4A017] to-[#B8860B] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Convocatoria abierta
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              Inicia tu camino hacia la excelencia académica
            </h2>

            <p className="text-[#0A1628]/80 text-lg mb-8 max-w-lg">
              El proceso de admisión 2025-I está abierto. No pierdas la oportunidad de formar parte de la Escuela de Postgrado líder en la Amazonía.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/admision"
                className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#0D2240] text-white px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
              >
                Inscríbete ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/programas"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-[#0A1628] px-6 py-3 rounded-lg font-bold transition-all"
              >
                Ver programas
              </a>
            </div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="grid gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A017]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-1">Fechas importantes</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Inscripciones: 15 de enero - 28 de febrero</li>
                    <li>• Examen de admisión: 8 de marzo</li>
                    <li>• Resultados: 12 de marzo</li>
                    <li>• Inicio de clases: 1 de abril</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A017]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-1">Requisitos básicos</h3>
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
                <div className="w-12 h-12 bg-[#D4A017]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-1">¿Tienes dudas?</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Nuestro equipo de admisión está disponible para ayudarte.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="tel:+5165123456" className="text-sm text-[#D4A017] font-medium hover:underline">
                      (065) 123-456
                    </a>
                    <a href="mailto:admision@universidad.edu.pe" className="text-sm text-[#D4A017] font-medium hover:underline">
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
  );
};
