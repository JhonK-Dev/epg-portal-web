import { ArrowRight } from 'lucide-react';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/logo-front.jpeg"
          alt="Escuela de Postgrado UNAP"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark Navy Overlay with gradient for text readability */}
        <div className="absolute inset-0 bg-epg-navy/70" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-epg-navy/80 via-epg-navy/60 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="font-sans font-extrabold tracking-tight leading-tight mb-6">
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl uppercase">
              IMPULSA TU
            </span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl uppercase">
              CARRERA CON UN
            </span>
            <span className="block text-epg-gold text-4xl sm:text-5xl lg:text-6xl uppercase">
              POSTGRADO DE
            </span>
            <span className="block text-epg-gold text-4xl sm:text-5xl lg:text-6xl uppercase">
              EXCELENCIA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Formación académica de alto nivel en la Amazonía peruana
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/admision"
              className="inline-flex items-center gap-2 bg-epg-gold hover:bg-epg-gold-dark text-epg-navy px-8 py-3 rounded-lg text-base font-bold shadow-lg shadow-epg-gold/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epg-gold focus-visible:ring-offset-2 focus-visible:ring-offset-epg-navy"
            >
              Postula ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/programas"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-epg-navy"
            >
              Explorar programas
            </a>
          </div>

          {/* Metrics Section */}
          <div className="flex flex-wrap gap-6 md:gap-10 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 max-w-2xl">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-epg-gold tracking-tight">
                35+
              </span>
              <span className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wide">
                Años de experiencia
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-epg-gold tracking-tight">
                2,500+
              </span>
              <span className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wide">
                Egresados
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-epg-gold tracking-tight">
                20+
              </span>
              <span className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wide">
                Programas activos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
