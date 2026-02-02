import type { Autoridad } from '@/types';

export const autoridades: Autoridad[] = [
  {
    id: 'aut-001',
    nombres: 'Juan Carlos',
    apellidos: 'Rodríguez Vega',
    cargo: 'Director de la Escuela de Postgrado',
    grado: 'doctor',
    foto: '/images/autoridades/director.jpg',
    email: 'direccion.epg@universidad.edu.pe',
    telefono: '(065) 123-456',
    orden: 1,
  },
  {
    id: 'aut-002',
    nombres: 'María del Carmen',
    apellidos: 'López Herrera',
    cargo: 'Subdirectora Académica',
    grado: 'doctor',
    foto: '/images/autoridades/subdirectora.jpg',
    email: 'academica.epg@universidad.edu.pe',
    telefono: '(065) 123-457',
    orden: 2,
  },
  {
    id: 'aut-003',
    nombres: 'Alberto',
    apellidos: 'Ramos García',
    cargo: 'Director de Investigación',
    grado: 'doctor',
    foto: '/images/autoridades/investigacion.jpg',
    email: 'investigacion.epg@universidad.edu.pe',
    telefono: '(065) 123-458',
    orden: 3,
  },
  {
    id: 'aut-004',
    nombres: 'Rosa Elena',
    apellidos: 'Campos Villanueva',
    cargo: 'Secretaria Académica',
    grado: 'magister',
    foto: '/images/autoridades/secretaria.jpg',
    email: 'secretaria.epg@universidad.edu.pe',
    telefono: '(065) 123-459',
    orden: 4,
  },
  {
    id: 'aut-005',
    nombres: 'Pedro',
    apellidos: 'Martínez Chávez',
    cargo: 'Jefe de Admisión',
    grado: 'magister',
    foto: '/images/autoridades/admision.jpg',
    email: 'admision.epg@universidad.edu.pe',
    telefono: '(065) 123-460',
    orden: 5,
  },
  {
    id: 'aut-006',
    nombres: 'Claudia',
    apellidos: 'Torres Reátegui',
    cargo: 'Jefa de Grados y Títulos',
    grado: 'magister',
    foto: '/images/autoridades/grados.jpg',
    email: 'grados.epg@universidad.edu.pe',
    telefono: '(065) 123-461',
    orden: 6,
  },
];

// Helpers
export const getAutoridadById = (id: string) => autoridades.find(a => a.id === id);
export const getAutoridadesOrdenadas = () => [...autoridades].sort((a, b) => a.orden - b.orden);
