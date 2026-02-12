import type { Estadistica } from '@/types';

/**
 * Estadísticas institucionales de la EPG UNAP
 * Estos datos se muestran en la sección de estadísticas del Home
 */
export const estadisticasInstitucionales: Estadistica[] = [
  {
    id: 'trayectoria',
    value: '35+',
    label: 'Años de Trayectoria',
    description: 'Formando profesionales desde 1990',
    icon: 'Calendar',
  },
  {
    id: 'egresados',
    value: '2,500+',
    label: 'Egresados',
    description: 'Profesionales que lideran el cambio',
    icon: 'Users',
  },
  {
    id: 'maestrias',
    value: '15+',
    label: 'Maestrías',
    description: 'Programas de especialización',
    icon: 'GraduationCap',
  },
  {
    id: 'doctorados',
    value: '5',
    label: 'Doctorados',
    description: 'Investigación de alto nivel',
    icon: 'Award',
  },
  {
    id: 'docentes',
    value: '120+',
    label: 'Docentes',
    description: 'Profesionales especializados',
    icon: 'BookOpen',
  },
  {
    id: 'satisfaccion',
    value: '98%',
    label: 'Satisfacción',
    description: 'Estudiantes satisfechos',
    icon: 'ThumbsUp',
  },
];
