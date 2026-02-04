import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero/epg-fondo.jpeg"
          alt="Escuela de Postgrado UNAP"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Navy Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-epg-navy/95 via-epg-navy/85 to-epg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-epg-navy/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements - subtle glow effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-epg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-epg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* SUNEDU Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-epg-gold rounded-full" />
                <div className="w-2 h-2 bg-epg-gold rounded-full" />
                <div className="w-2 h-2 bg-epg-gold rounded-full" />
              </div>
              <span className="text-white text-sm font-medium">
                Universidad licenciada por SUNEDU
              </span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Impulsa tu carrera con un{' '}
              <span className="text-epg-gold">Postgrado de Excelencia</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Forma parte de la Escuela de Postgrado líder en la Amazonía. Maestrías, Doctorados y Diplomados diseñados para transformar tu futuro profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="/admision"
                className="inline-flex items-center gap-2 bg-epg-gold hover:bg-epg-gold-dark text-epg-navy px-6 py-3 rounded-lg text-base font-bold transition-all hover:shadow-lg hover:shadow-epg-gold/20"
              >
                Postula ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/programas"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:bg-white/10"
              >
                Ver programas
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-epg-gold">35+</div>
                <div className="text-sm text-gray-400">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-epg-gold">2,500+</div>
                <div className="text-sm text-gray-400">Egresados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-epg-gold">20+</div>
                <div className="text-sm text-gray-400">Programas</div>
              </div>
            </div>
          </div>

          {/* Right Column - Admission Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  ABIERTO
                </span>
                <span className="text-white/80 text-sm">Proceso de Admisión 2025-I</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Inscripciones abiertas!
              </h3>
              
              <p className="text-gray-300 mb-6">
                Aprovecha esta oportunidad para avanzar en tu carrera profesional. Contamos con vacantes limitadas.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-epg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-epg-gold font-bold text-sm">1</span>
                  </div>
                  <span>Inscripciones hasta el 28 de febrero</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-epg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-epg-gold font-bold text-sm">2</span>
                  </div>
                  <span>Examen de admisión: 8 de marzo</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 bg-epg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-epg-gold font-bold text-sm">3</span>
                  </div>
                  <span>Inicio de clases: 1 de abril</span>
                </div>
              </div>

              <a
                href="/admision"
                className="block w-full bg-epg-gold hover:bg-epg-gold-dark text-epg-navy text-center py-3 rounded-lg font-bold transition-colors"
              >
                Inscríbete ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
