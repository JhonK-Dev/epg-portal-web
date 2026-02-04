import { servicios } from '@/data/servicios';
import { 
  GraduationCap, 
  Library, 
  Mail, 
  CreditCard, 
  BookOpen, 
  Monitor, 
  Briefcase, 
  FileText,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  Phone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-10 w-10" />,
  Library: <Library className="h-10 w-10" />,
  Mail: <Mail className="h-10 w-10" />,
  IdCard: <CreditCard className="h-10 w-10" />,
  BookOpen: <BookOpen className="h-10 w-10" />,
  Monitor: <Monitor className="h-10 w-10" />,
  Briefcase: <Briefcase className="h-10 w-10" />,
  FileText: <FileText className="h-10 w-10" />,
};

const gradientColors = [
  'from-[#0A1628] to-[#0D2240]',
  'from-[#D4A017] to-[#B8860B]',
  'from-[#0D2240] to-[#060D17]',
  'from-[#0A1628] to-[#0D2240]',
  'from-[#D4A017] to-[#B8860B]',
  'from-[#0D2240] to-[#060D17]',
  'from-[#0A1628] to-[#0D2240]',
  'from-[#D4A017] to-[#B8860B]',
];

export function ServiciosGrid() {
  return (
    <div className="space-y-12">
      {/* Grid de Servicios */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => {
            const isExternal = servicio.esExterno;
            const isGold = gradientColors[index % gradientColors.length].includes('E6A817');
            
            const CardWrapper = isExternal ? 'a' : 'div';
            const cardProps = isExternal 
              ? { 
                  href: servicio.url, 
                  target: '_blank', 
                  rel: 'noopener noreferrer',
                  className: 'block group'
                } 
              : { className: 'block group' };

            return (
              <CardWrapper key={servicio.id} {...cardProps}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className={`h-32 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center relative`}>
                    <div className={isGold ? 'text-[#0A1628]' : 'text-[#D4A017]'}>
                      {iconMap[servicio.icono || 'FileText']}
                    </div>
                    {isExternal && (
                      <div className="absolute top-3 right-3">
                        <ExternalLink className={`h-5 w-5 ${isGold ? 'text-[#0A1628]/50' : 'text-white/50'}`} />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-[#0A1628] group-hover:text-[#D4A017] transition-colors">
                        {servicio.nombre}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {servicio.descripcionCorta || servicio.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#D4A017] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {isExternal ? 'Acceder al servicio' : 'Ver información'}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      {isExternal && (
                        <Badge variant="secondary" className="text-xs">
                          Externo
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Información Adicional */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Guía de Acceso */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">
                    Guía de Acceso a Servicios
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Si es la primera vez que accedes a nuestros servicios digitales, consulta nuestra guía de inicio rápido con instrucciones paso a paso.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/estudiantes/guia-servicios">
                      Ver guía de inicio
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problemas de Acceso */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">
                    Problemas de Acceso
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Si tienes problemas para acceder a algún servicio, contacta a soporte técnico o visita nuestra mesa de ayuda.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:soporte@universidad.edu.pe">
                        <Mail className="h-4 w-4 mr-1" />
                        Soporte
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+5165123456">
                        <Phone className="h-4 w-4 mr-1" />
                        Llamar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-gradient-to-r from-[#0A1628] to-[#0D2240] text-white border-0 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                ¿Necesitas ayuda adicional?
              </h3>
              <p className="text-gray-300">
                Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                className="bg-[#D4A017] text-[#0A1628] hover:bg-[#B8860B] font-semibold"
                asChild
              >
                <a href="mailto:soporte@universidad.edu.pe">
                  <Mail className="h-4 w-4 mr-2" />
                  Escribir a soporte
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+5165123456">
                  <Phone className="h-4 w-4 mr-2" />
                  (065) 123-456
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
