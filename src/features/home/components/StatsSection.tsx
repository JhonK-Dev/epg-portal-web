import React, { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  ThumbsUp,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { StatItem } from '@/components/ui/stat-item';
import { IconCircle } from '@/components/ui/icon-circle';
import { estadisticasInstitucionales } from '@/data/estadisticas';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  ThumbsUp,
};

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isVisible) return;
    
    const numericMatch = value.match(/^(\d+)(\+)?$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNumber = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2] || '';
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNumber = Math.floor(targetNumber * easeOutQuart);
      
      setDisplayValue(`${currentNumber.toLocaleString()}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value]);
  
  return <>{displayValue}</>;
}

export const StatsSection: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section className="section-py px-4 sm:px-6 lg:px-8 bg-epg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 bg-epg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-epg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`${headerAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDuration: '600ms', animationFillMode: 'forwards' }}
        >
          <SectionHeader
            badge={{
              label: 'Nuestros números',
              className: 'text-epg-navy bg-epg-gold/80 px-2 py-1 rounded',
            }}
            title="Cifras que nos respaldan"
            description="Más de tres décadas formando líderes para el desarrollo de la Amazonía peruana."
            titleColor="text-white"
            descriptionColor="text-gray-400"
            className="mb-12"
          />
        </div>

        <div 
          ref={gridAnimation.ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {estadisticasInstitucionales.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group ${gridAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 80}ms`, animationDuration: '500ms', animationFillMode: 'forwards' }}
              >
                <StatItem
                  value={<AnimatedCounter value={stat.value} isVisible={gridAnimation.isVisible} />}
                  label={stat.label}
                  description={stat.description}
                  variant="card"
                  icon={
                    <IconCircle
                      icon={<Icon className="w-6 h-6" />}
                      size="md"
                      variant="custom"
                      bgColor="bg-epg-gold/20"
                      iconColor="text-epg-gold"
                      rounded="xl"
                      className="mx-auto group-hover:bg-epg-gold/30 transition-colors"
                    />
                  }
                  valueClassName="text-white"
                  labelClassName="text-epg-gold"
                  descriptionClassName="text-gray-300 text-xs sm:text-sm"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
