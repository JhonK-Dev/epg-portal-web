import React from 'react';
import { CheckCircle2, GraduationCap } from 'lucide-react';

interface FeatureItem {
  text: string;
}

const features: FeatureItem[] = [
  {
    text: 'Ofrece autonomía y destaca por su excelencia académica en diversos programas de posgrado.',
  },
  {
    text: 'Facultad calificada y recursos de investigación avanzados para una educación de alta calidad',
  },
  {
    text: 'Contribuye al progreso regional, brindando oportunidades de crecimiento profesional y formación especializada',
  },
  {
    text: 'Proporciona a los estudiantes oportunidades significativas para avanzar en sus carreras y desarrollo personal.',
  },
];

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Preparándote para el futuro: Bienvenidos a la Escuela de Postgrado.
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              La EPG-UNAP, con autonomía y excelencia, ofrece maestrías y doctorados, destacando facultad calificada, investigación avanzada y contribución al desarrollo regional. ¡Explora los programas de posgrado de la UNAP y descubre las oportunidades que te esperan!
            </p>

            {/* Features Card */}
            <div className="bg-[#FFF9E6] rounded-2xl p-6 lg:p-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  La Escuela de Postgrado:
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main Large Image */}
            <div className="col-span-1 row-span-2">
              <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=600&q=80"
                  alt="Graduada sosteniendo diploma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top Right Image */}
            <div className="col-span-1">
              <div className="h-[190px] lg:h-[240px] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80"
                  alt="Estudiante graduada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="col-span-1">
              <div className="h-[190px] lg:h-[240px] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=400&q=80"
                  alt="Graduada celebrando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
