/**
 * Configuración visual de Grados Académicos
 * @module lib/config/academic-degrees
 */

export interface GradoInfo {
  label: string;
  labelFull: string;
  color: string;
  bgColor: string;
}

export const gradoLabels: Record<string, GradoInfo> = {
  doctor: { 
    label: 'Dr.', 
    labelFull: 'Doctor', 
    color: 'text-grado-doctor', 
    bgColor: 'bg-grado-doctor-light' 
  },
  phd: { 
    label: 'Ph.D.', 
    labelFull: 'PhD', 
    color: 'text-grado-phd', 
    bgColor: 'bg-grado-phd-light' 
  },
  magister: { 
    label: 'Mg.', 
    labelFull: 'Magíster', 
    color: 'text-grado-magister', 
    bgColor: 'bg-grado-magister-light' 
  },
  bachiller: { 
    label: 'Bach.', 
    labelFull: 'Bachiller', 
    color: 'text-grado-bachiller', 
    bgColor: 'bg-grado-bachiller-light' 
  },
};

export function getGradoInfo(grado: string): GradoInfo {
  return gradoLabels[grado] || gradoLabels.bachiller;
}
