import React from 'react';
import { GraduationCap, Users, Award, BookOpen, Calendar, ThumbsUp } from 'lucide-react';

const stats = [
  {
    value: '35+',
    label: 'Años de Trayectoria',
    icon: Calendar,
    description: 'Formando profesionales desde 1990',
  },
  {
    value: '2,500+',
    label: 'Egresados',
    icon: Users,
    description: 'Profesionales que lideran el cambio',
  },
  {
    value: '15+',
    label: 'Maestrías',
    icon: GraduationCap,
    description: 'Programas de especialización',
  },
  {
    value: '5',
    label: 'Doctorados',
    icon: Award,
    description: 'Investigación de alto nivel',
  },
  {
    value: '120+',
    label: 'Docentes',
    icon: BookOpen,
    description: 'Profesionales especializados',
  },
  {
    value: '98%',
    label: 'Satisfacción',
    icon: ThumbsUp,
    description: 'Estudiantes satisfechos',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#001F3F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#E6A817]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E6A817]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#E6A817] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Nuestros números
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cifras que nos respaldan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Más de tres décadas formando líderes para el desarrollo de la Amazonía peruana.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#E6A817]/20 flex items-center justify-center group-hover:bg-[#E6A817]/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#E6A817]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[#E6A817] font-medium text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs hidden lg:block">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
