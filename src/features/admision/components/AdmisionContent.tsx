import { useState } from 'react';
import { convocatorias, fechasImportantes } from '@/data/convocatorias';
import { programas, getProgramaBySlug } from '@/data/programas';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileText, 
  CreditCard,
  ChevronDown,
  GraduationCap,
  Award,
  Users,
  ClipboardList,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  BookOpen,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// ========================================
// TIMELINE COMPONENT
// ========================================
function Timeline() {
  const fechasProximas = fechasImportantes
    .filter(f => new Date(f.fecha) >= new Date('2025-01-01'))
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

  const tipoColors: Record<string, string> = {
    inscripcion: 'bg-blue-500',
    examen: 'bg-purple-500',
    resultados: 'bg-emerald-500',
    matricula: 'bg-amber-500',
    inicio_clases: 'bg-green-600',
  };

  const tipoLabels: Record<string, string> = {
    inscripcion: 'Inscripción',
    examen: 'Examen',
    resultados: 'Resultados',
    matricula: 'Matrícula',
    inicio_clases: 'Inicio',
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between relative">
          {/* Line */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0" />
          <div className="absolute top-5 left-0 h-1 bg-[#E6A817] z-0" style={{ width: '20%' }} />
          
          {fechasProximas.slice(0, 7).map((fecha, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${tipoColors[fecha.tipo]} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                {new Date(fecha.fecha).getDate()}
              </div>
              <Badge variant="secondary" className="mt-2 text-xs">
                {tipoLabels[fecha.tipo]}
              </Badge>
              <p className="text-xs text-gray-600 mt-1 text-center max-w-[100px]">
                {formatDate(fecha.fecha)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {fechasProximas.slice(0, 5).map((fecha, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${tipoColors[fecha.tipo]} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
              {new Date(fecha.fecha).getDate()}
            </div>
            <div className="flex-1">
              <Badge variant="secondary" className="text-xs mb-1">
                {tipoLabels[fecha.tipo]}
              </Badge>
              <p className="text-sm font-medium text-gray-900">{fecha.descripcion}</p>
              <p className="text-xs text-gray-500">
                {new Date(fecha.fecha).toLocaleDateString('es-PE', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// PROCESO STEPS COMPONENT
// ========================================
function ProcesoAdmision() {
  const pasos = [
    {
      numero: 1,
      titulo: 'Regístrate en línea',
      descripcion: 'Completa el formulario de inscripción en nuestro portal de admisión con tus datos personales.',
      icono: ClipboardList,
      color: 'bg-blue-500',
    },
    {
      numero: 2,
      titulo: 'Realiza el pago',
      descripcion: 'Paga el derecho de inscripción (S/. 350.00) en Banco de la Nación o transferencia bancaria.',
      icono: CreditCard,
      color: 'bg-emerald-500',
    },
    {
      numero: 3,
      titulo: 'Sube tus documentos',
      descripcion: 'Carga los documentos requeridos en formato PDF a través del portal de admisión.',
      icono: FileText,
      color: 'bg-purple-500',
    },
    {
      numero: 4,
      titulo: 'Rinde el examen',
      descripcion: 'Presenta el examen de admisión en la fecha programada según tu programa.',
      icono: BookOpen,
      color: 'bg-amber-500',
    },
    {
      numero: 5,
      titulo: 'Revisa resultados',
      descripcion: 'Consulta los resultados publicados en nuestra página web oficial.',
      icono: CheckCircle2,
      color: 'bg-green-600',
    },
    {
      numero: 6,
      titulo: 'Matricúlate',
      descripcion: 'Si aprobaste, completa tu matrícula y ¡bienvenido a la EPG UNAP!',
      icono: GraduationCap,
      color: 'bg-[#001F3F]',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pasos.map((paso) => (
        <Card key={paso.numero} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className={`absolute top-0 left-0 w-1 h-full ${paso.color}`} />
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${paso.color} flex items-center justify-center text-white font-bold`}>
                {paso.numero}
              </div>
              <CardTitle className="text-lg">{paso.titulo}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">{paso.descripcion}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ========================================
// REQUISITOS COMPONENT
// ========================================
function Requisitos() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<'maestria' | 'doctorado'>('maestria');
  
  const convocatoriaPrincipal = convocatorias.find(c => c.estado === 'abierta' && c.id === 'conv-001');

  const requisitosMaestria = [
    { texto: 'Grado de Bachiller universitario', obligatorio: true },
    { texto: 'DNI o Carnet de Extranjería vigente', obligatorio: true },
    { texto: 'Certificado de estudios original de pregrado', obligatorio: true },
    { texto: 'Curriculum vitae documentado', obligatorio: true },
    { texto: 'Foto tamaño pasaporte (2 unidades)', obligatorio: true },
    { texto: 'Carta de presentación/motivación', obligatorio: false },
    { texto: 'Constancia de trabajo (si aplica)', obligatorio: false },
  ];

  const requisitosDoctorado = [
    { texto: 'Grado de Magíster en área afín', obligatorio: true },
    { texto: 'DNI o Carnet de Extranjería vigente', obligatorio: true },
    { texto: 'Certificado de estudios de maestría original', obligatorio: true },
    { texto: 'Proyecto de investigación doctoral (5-10 páginas)', obligatorio: true },
    { texto: 'Curriculum vitae documentado', obligatorio: true },
    { texto: 'Constancia de dominio de idioma extranjero', obligatorio: true },
    { texto: 'Publicaciones académicas previas', obligatorio: false },
    { texto: 'Cartas de recomendación (2)', obligatorio: false },
  ];

  const requisitos = tipoSeleccionado === 'maestria' ? requisitosMaestria : requisitosDoctorado;

  return (
    <div>
      {/* Selector de tipo */}
      <div className="flex gap-4 mb-8">
        <Button
          variant={tipoSeleccionado === 'maestria' ? 'default' : 'outline'}
          size="lg"
          onClick={() => setTipoSeleccionado('maestria')}
          className={tipoSeleccionado === 'maestria' ? 'bg-blue-600 hover:bg-blue-700' : ''}
        >
          <GraduationCap className="h-5 w-5 mr-2" />
          Maestría
        </Button>
        <Button
          variant={tipoSeleccionado === 'doctorado' ? 'default' : 'outline'}
          size="lg"
          onClick={() => setTipoSeleccionado('doctorado')}
          className={tipoSeleccionado === 'doctorado' ? 'bg-purple-600 hover:bg-purple-700' : ''}
        >
          <Award className="h-5 w-5 mr-2" />
          Doctorado
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Requisitos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Requisitos para {tipoSeleccionado === 'maestria' ? 'Maestría' : 'Doctorado'}
            </CardTitle>
            <CardDescription>
              Documentos que debes presentar para tu inscripción
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {requisitos.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${req.obligatorio ? 'text-green-600' : 'text-gray-400'}`} />
                  <div>
                    <span className={req.obligatorio ? 'text-gray-900' : 'text-gray-500'}>
                      {req.texto}
                    </span>
                    {!req.obligatorio && (
                      <Badge variant="secondary" className="ml-2 text-xs">Opcional</Badge>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Documentos a subir */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Documentos a Subir
            </CardTitle>
            <CardDescription>
              Formatos aceptados: PDF, tamaño máximo 5MB por archivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {convocatoriaPrincipal?.documentos.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <FileText className={`h-5 w-5 flex-shrink-0 mt-0.5 ${doc.obligatorio ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div>
                    <p className="font-medium text-gray-900">{doc.nombre}</p>
                    <p className="text-sm text-gray-500">{doc.descripcion}</p>
                    {!doc.obligatorio && (
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {tipoSeleccionado === 'doctorado' ? 'Requerido para doctorado' : 'Opcional'}
                      </Badge>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ========================================
// COSTOS COMPONENT
// ========================================
function Costos() {
  const costosMaestria = {
    inscripcion: 350,
    matricula: 500,
    mensualidad: 800,
    duracion: 24,
    total: 12500,
  };

  const costosDoctorado = {
    inscripcion: 350,
    matricula: 800,
    mensualidad: 1200,
    duracion: 36,
    total: 25000,
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Maestría */}
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-2">Maestría</Badge>
              <CardTitle>Inversión en Maestría</CardTitle>
            </div>
            <GraduationCap className="h-10 w-10 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Inscripción (único pago)</span>
              <span className="font-semibold">S/. {costosMaestria.inscripcion.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Matrícula por semestre</span>
              <span className="font-semibold">S/. {costosMaestria.matricula.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Mensualidad aprox.</span>
              <span className="font-semibold">S/. {costosMaestria.mensualidad.toFixed(2)}</span>
            </div>
          </div>
          <Separator />
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Inversión total aproximada</p>
            <p className="text-3xl font-bold text-blue-600">
              S/. {costosMaestria.total.toLocaleString('es-PE')}.00
            </p>
            <p className="text-xs text-gray-500 mt-1">
              *Varía según el programa seleccionado
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Duración: 2 años (4 semestres)</span>
          </div>
        </CardContent>
      </Card>

      {/* Doctorado */}
      <Card className="border-t-4 border-t-purple-600">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-2">Doctorado</Badge>
              <CardTitle>Inversión en Doctorado</CardTitle>
            </div>
            <Award className="h-10 w-10 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Inscripción (único pago)</span>
              <span className="font-semibold">S/. {costosDoctorado.inscripcion.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Matrícula por semestre</span>
              <span className="font-semibold">S/. {costosDoctorado.matricula.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Mensualidad aprox.</span>
              <span className="font-semibold">S/. {costosDoctorado.mensualidad.toFixed(2)}</span>
            </div>
          </div>
          <Separator />
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Inversión total aproximada</p>
            <p className="text-3xl font-bold text-purple-600">
              S/. {costosDoctorado.total.toLocaleString('es-PE')}.00
            </p>
            <p className="text-xs text-gray-500 mt-1">
              *Varía según el programa seleccionado
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Duración: 3 años (6 semestres)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ========================================
// FAQ COMPONENT
// ========================================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const preguntas = [
    {
      pregunta: '¿Cuáles son las fechas del proceso de admisión 2025-I?',
      respuesta: 'Las inscripciones están abiertas del 15 de enero al 28 de febrero de 2025. El examen de admisión será el 8 de marzo y los resultados se publicarán el 12 de marzo de 2025.',
    },
    {
      pregunta: '¿Puedo inscribirme si aún estoy tramitando mi grado de bachiller?',
      respuesta: 'No, es requisito indispensable contar con el grado de bachiller al momento de la inscripción. Sin embargo, si estás en proceso de obtención, te recomendamos postular al siguiente proceso de admisión.',
    },
    {
      pregunta: '¿Las clases son presenciales o virtuales?',
      respuesta: 'Ofrecemos programas en tres modalidades: presencial, semipresencial y virtual. Cada programa tiene su propia modalidad definida. Consulta el detalle en la sección de programas.',
    },
    {
      pregunta: '¿Hay facilidades de pago?',
      respuesta: 'Sí, ofrecemos pago fraccionado de la matrícula y mensualidades. Además, existen convenios con algunas instituciones para descuentos especiales. Consulta en la oficina de admisión.',
    },
    {
      pregunta: '¿Qué incluye el examen de admisión?',
      respuesta: 'El examen de admisión evalúa conocimientos generales, razonamiento lógico-verbal y conocimientos específicos del área del programa al que postulas. Para doctorado, también se evalúa el proyecto de investigación.',
    },
    {
      pregunta: '¿Puedo cambiar de programa después de inscribirme?',
      respuesta: 'No es posible cambiar de programa una vez realizada la inscripción. Por ello, te recomendamos revisar cuidadosamente la información de cada programa antes de inscribirte.',
    },
    {
      pregunta: '¿Tienen convenios con otras universidades?',
      respuesta: 'Sí, la EPG UNAP tiene convenios de cooperación académica con universidades nacionales e internacionales, que permiten movilidad estudiantil e intercambio de docentes.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {preguntas.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">{item.pregunta}</span>
              <ChevronDown 
                className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600">{item.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// PROGRAMAS CON VACANTES
// ========================================
function ProgramasVacantes() {
  const programasConVacantes = [
    { slug: 'maestria-gestion-publica', vacantes: 40 },
    { slug: 'maestria-derecho-civil-comercial', vacantes: 30 },
    { slug: 'maestria-educacion-docencia-universitaria', vacantes: 35 },
    { slug: 'maestria-ingenieria-ambiental', vacantes: 25 },
    { slug: 'maestria-salud-publica', vacantes: 30 },
    { slug: 'doctorado-derecho', vacantes: 20 },
    { slug: 'doctorado-educacion', vacantes: 20 },
    { slug: 'doctorado-ciencias-ambientales', vacantes: 15 },
  ];

  const tipoColors: Record<string, string> = {
    maestria: 'bg-blue-100 text-blue-800',
    doctorado: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {programasConVacantes.map(({ slug, vacantes }) => {
        const programa = programas.find(p => p.slug === slug);
        if (!programa) return null;

        return (
          <a 
            key={slug}
            href={`/programas/${slug}`}
            className="group bg-white rounded-lg border p-4 hover:shadow-lg hover:border-[#E6A817] transition-all"
          >
            <Badge className={tipoColors[programa.tipo]}>
              {programa.tipo === 'maestria' ? 'Maestría' : 'Doctorado'}
            </Badge>
            <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-[#001F3F] line-clamp-2">
              {programa.nombre.replace('Maestría en ', '').replace('Doctorado en ', '')}
            </h3>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{vacantes} vacantes</span>
              </div>
              <ArrowRight className="h-4 w-4 text-[#E6A817] group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export function AdmisionContent() {
  return (
    <div className="space-y-16">
      {/* Timeline */}
      <section id="cronograma">
        <div className="text-center mb-8">
          <Badge className="bg-[#E6A817]/10 text-[#E6A817] mb-4">Cronograma</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Fechas Importantes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce las fechas clave del proceso de admisión 2025-I
          </p>
        </div>
        <Card className="p-6">
          <Timeline />
        </Card>
      </section>

      {/* Proceso de Admisión */}
      <section id="proceso">
        <div className="text-center mb-8">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Paso a Paso</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Proceso de Admisión</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sigue estos sencillos pasos para completar tu inscripción
          </p>
        </div>
        <ProcesoAdmision />
      </section>

      {/* Programas con Vacantes */}
      <section id="programas">
        <div className="text-center mb-8">
          <Badge className="bg-emerald-100 text-emerald-800 mb-4">Disponibles</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Programas con Vacantes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona el programa que mejor se adapte a tus objetivos profesionales
          </p>
        </div>
        <ProgramasVacantes />
        <div className="text-center mt-6">
          <Button variant="outline" asChild>
            <a href="/programas" className="gap-2">
              Ver todos los programas
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Requisitos */}
      <section id="requisitos">
        <div className="text-center mb-8">
          <Badge className="bg-purple-100 text-purple-800 mb-4">Documentación</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Requisitos de Admisión</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prepara la documentación necesaria para tu inscripción
          </p>
        </div>
        <Requisitos />
      </section>

      {/* Costos */}
      <section id="costos">
        <div className="text-center mb-8">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Inversión</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Costos y Formas de Pago</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce la inversión requerida para tu formación de posgrado
          </p>
        </div>
        <Costos />
        <Card className="mt-6 p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Formas de pago</h4>
              <p className="text-blue-800 text-sm">
                Aceptamos pagos en efectivo en Banco de la Nación, transferencias bancarias y pago con tarjeta.
                Consulta por convenios institucionales y descuentos especiales en la oficina de admisión.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="text-center mb-8">
          <Badge className="bg-gray-100 text-gray-800 mb-4">Dudas</Badge>
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre el proceso de admisión
          </p>
        </div>
        <FAQ />
      </section>

      {/* CTA Final */}
      <section id="inscribete">
        <Card className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <Badge className="bg-[#E6A817] text-[#001F3F] mb-4">¡Inscríbete ahora!</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Da el siguiente paso en tu carrera
            </h2>
            <p className="text-gray-300 mb-8">
              Únete a la comunidad de profesionales que eligen la EPG UNAP para su formación de posgrado.
              Las inscripciones cierran el 28 de febrero de 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#E6A817] text-[#001F3F] hover:bg-[#C9A227] font-semibold"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Inscripción en línea
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                Contactar asesor
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad Universitaria, Puno</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Vie 8am - 5pm</span>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
