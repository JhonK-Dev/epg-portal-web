import { faker } from '@faker-js/faker';
import fs from 'fs/promises';
import path from 'path';

// Datos estáticos originales
const serviciosData = [
  {
    id: 'srv-001',
    nombre: 'SIGAE - Sistema de Gestión Académica',
    descripcion: 'Sistema integrado para la gestión académica de estudiantes de postgrado. Permite consultar notas, horarios, estado de matrícula, realizar trámites en línea y acceder a recursos académicos.',
    descripcionCorta: 'Gestión académica integral para estudiantes.',
    icono: 'GraduationCap',
    url: 'https://sigae.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'sigae',
    instrucciones: 'Ingrese con su código de estudiante y contraseña proporcionada al momento de la matrícula. Si olvidó su contraseña, solicite recuperación en la oficina de sistemas.',
  },
  {
    id: 'srv-002',
    nombre: 'Repositorio Institucional',
    descripcion: 'Acceda a tesis, artículos científicos, libros y otros documentos producidos por la comunidad académica de la universidad. Repositorio digital de acceso abierto.',
    descripcionCorta: 'Biblioteca digital de tesis y publicaciones.',
    icono: 'Library',
    url: 'https://repositorio.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'repositorio',
    instrucciones: 'El repositorio es de acceso público. Para descargar documentos completos puede requerirse registro gratuito.',
  },
  {
    id: 'srv-003',
    nombre: 'Correo Institucional',
    descripcion: 'Servicio de correo electrónico institucional para estudiantes y docentes de la Escuela de Postgrado. Incluye almacenamiento en la nube y herramientas de colaboración.',
    descripcionCorta: 'Email institucional con herramientas de Office 365.',
    icono: 'Mail',
    url: 'https://outlook.office.com',
    esExterno: true,
    slug: 'correo-institucional',
    instrucciones: 'Su cuenta es su código de estudiante seguido de @unap.edu.pe. La contraseña inicial se proporciona junto con su carnet universitario.',
  },
  {
    id: 'srv-004',
    nombre: 'Carnet Universitario',
    descripcion: 'Información sobre el carnet universitario de postgrado. Trámite de emisión, renovación y beneficios asociados como medio pasaje y descuentos en establecimientos.',
    descripcionCorta: 'Trámite y beneficios del carnet universitario.',
    icono: 'IdCard',
    esExterno: false,
    slug: 'carnet-universitario',
    instrucciones: 'El carnet se tramita automáticamente al completar la matrícula. La entrega se realiza en la oficina de Bienestar Universitario.',
  },
  {
    id: 'srv-005',
    nombre: 'Biblioteca Virtual',
    descripcion: 'Acceso a bases de datos científicas, eBooks, revistas electrónicas y recursos bibliográficos digitales. Incluye acceso a Scopus, Web of Science, EBSCO y más.',
    descripcionCorta: 'Bases de datos y recursos bibliográficos digitales.',
    icono: 'BookOpen',
    url: 'https://biblioteca.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'biblioteca-virtual',
    instrucciones: 'Ingrese con sus credenciales institucionales. El acceso remoto requiere VPN institucional o autenticación desde la red universitaria.',
  },
  {
    id: 'srv-006',
    nombre: 'Aula Virtual',
    descripcion: 'Plataforma de aprendizaje en línea donde encontrarás los cursos, materiales, tareas y foros de discusión de tus asignaturas.',
    descripcionCorta: 'Plataforma de aprendizaje Moodle.',
    icono: 'Monitor',
    url: 'https://aulavirtual.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'aula-virtual',
    instrucciones: 'Use su código de estudiante como usuario y su DNI como contraseña inicial. Se recomienda cambiar la contraseña después del primer ingreso.',
  },
  {
    id: 'srv-007',
    nombre: 'Bolsa de Trabajo',
    descripcion: 'Portal de empleabilidad con ofertas laborales exclusivas para estudiantes y egresados de postgrado. Incluye oportunidades de consultoría y docencia.',
    descripcionCorta: 'Ofertas laborales para estudiantes y egresados.',
    icono: 'Briefcase',
    url: 'https://www.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'bolsa-trabajo',
    instrucciones: 'Regístrese con su correo institucional para acceder a las ofertas. Complete su perfil profesional para recibir ofertas personalizadas.',
  },
  {
    id: 'srv-008',
    nombre: 'Mesa de Partes Virtual',
    descripcion: 'Sistema para presentar documentos y solicitudes de manera virtual. Incluye seguimiento de trámites y notificaciones automáticas.',
    descripcionCorta: 'Trámites documentarios en línea.',
    icono: 'FileText',
    url: 'https://www.unapiquitos.edu.pe',
    esExterno: true,
    slug: 'mesa-partes',
    instrucciones: 'Registre su solicitud adjuntando los documentos requeridos en formato PDF. Recibirá un número de expediente para seguimiento.',
  },
];

export async function seedServicios() {
  faker.seed(123); // Determinism
  
  const contentDir = path.join(process.cwd(), 'src/content/servicios');
  
  try {
    await fs.mkdir(contentDir, { recursive: true });
    
    // Clear existing
    const files = await fs.readdir(contentDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        await fs.unlink(path.join(contentDir, file));
      }
    }
    
    for (const servicio of serviciosData) {
      const fileName = `${servicio.slug}.json`;
      const filePath = path.join(contentDir, fileName);
      
      await fs.writeFile(
        filePath,
        JSON.stringify(servicio, null, 2),
        'utf-8'
      );
    }
    
    console.log(`✅ ${serviciosData.length} servicios generados en src/content/servicios`);
  } catch (error) {
    console.error('Error seeding servicios:', error);
  }
}
