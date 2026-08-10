import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noticiasCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/noticias' }),
  schema: z.object({
    id: z.string().optional(),
    titulo: z.string(),
    tipo: z.enum(['noticia', 'evento', 'aviso', 'comunicado']),
    resumen: z.string(),
    fecha: z.string(),
    fechaEvento: z.string().optional(),
    hora: z.string().optional(),
    lugar: z.string().optional(),
    imagen: z.string().optional(),
    autor: z.string().optional(),
    destacado: z.boolean().default(false),
    etiquetas: z.array(z.string()).optional(),
  }),
});

const docentesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/docentes' }),
  schema: z.object({
    id: z.string().optional(),
    nombres: z.string(),
    apellidos: z.string(),
    grado: z.enum(['bachiller', 'magister', 'doctor', 'phd']),
    especialidad: z.string(),
    email: z.string().email().optional(),
    foto: z.string().optional(),
    resumenPerfil: z.string().optional(),
    programas: z.array(z.string()).optional(),
    orcid: z.string().url().optional(),
    googleScholar: z.string().url().optional(),
    biografia: z.string().optional(),
    areasInvestigacion: z.array(z.string()).optional(),
    formacionAcademica: z.array(z.object({
      grado: z.string(),
      institucion: z.string(),
      pais: z.string(),
      anio: z.number()
    })).optional(),
    experienciaProfesional: z.array(z.object({
      cargo: z.string(),
      institucion: z.string(),
      periodo: z.string(),
      descripcion: z.string().optional()
    })).optional(),
    publicacionesAcademicas: z.array(z.object({
      titulo: z.string(),
      revista: z.string(),
      anio: z.number(),
      url: z.string().url().optional(),
      doi: z.string().optional()
    })).optional(),
    reconocimientos: z.array(z.string()).optional(),
    proyectosInvestigacion: z.array(z.string()).optional(),
    telefono: z.string().optional(),
    linkedin: z.string().url().optional(),
    researchgate: z.string().url().optional(),
  }),
});

const autoridadesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/autoridades' }),
  schema: z.object({
    id: z.string().optional(),
    nombres: z.string(),
    apellidos: z.string(),
    cargo: z.string(),
    grado: z.enum(['bachiller', 'magister', 'doctor', 'phd']),
    foto: z.string().optional(),
    email: z.string().email().optional(),
    telefono: z.string().optional(),
    orden: z.number(),
  }),
});

const sustentacionesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/sustentaciones' }),
  schema: z.object({
    id: z.string().optional(),
    tesista: z.string(),
    titulo: z.string(),
    programa: z.string(),
    fecha: z.string(),
    hora: z.string(),
    lugar: z.string(),
    jurados: z.array(z.string()),
    asesor: z.string(),
    tipo: z.enum(['tesis', 'proyecto', 'trabajo_investigacion']),
  }),
});

const programasCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/programas' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    tipo: z.enum(['maestria', 'doctorado', 'diplomado', 'curso']),
    descripcion: z.string(),
    descripcionCorta: z.string(),
    duracion: z.string(),
    creditos: z.number(),
    modalidad: z.enum(['presencial', 'semipresencial', 'virtual']),
    estado: z.enum(['activo', 'inactivo', 'proximamente']),
    fechaInicio: z.string().optional(),
    imagen: z.string().optional(),
    slug: z.string(),
    facultad: z.string(),
    requisitos: z.array(z.string()).optional(),
    planEstudios: z.string().optional(),
    coordinador: z.string().optional(),
    inversion: z.string().optional(),
    destacado: z.boolean().optional(),
  }),
});

const serviciosCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/servicios' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    descripcionCorta: z.string(),
    icono: z.string(),
    url: z.string().optional(),
    esExterno: z.boolean(),
    slug: z.string(),
    instrucciones: z.string().optional(),
  }),
});

const admisionCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/admision' }),
  schema: z.object({
    id: z.string().optional(),
    periodo: z.string(),
    anio: z.number(),
    fechaApertura: z.string(),
    fechaCierre: z.string(),
    fechasImportantes: z.array(z.object({
      etiqueta: z.string(),
      fechaInicio: z.string(),
      fechaFin: z.string().optional(),
      descripcion: z.string().optional(),
    })),
    estadoOverride: z.enum(['abierta', 'cerrada', 'proximamente', 'en_evaluacion']).optional(),
  }),
});

const contactoCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/contacto' }),
  schema: z.object({
    id: z.string().optional(),
    direccion: z.string(),
    telefono: z.string(),
    telefonoDisplay: z.string(),
    email: z.string().email(),
    whatsapp: z.string().optional(),
    horarioAtencion: z.string(),
    coordenadas: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
  }),
});

const busquedasPopularesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/busquedas_populares' }),
  schema: z.object({
    id: z.string().optional(),
    label: z.string(),
    query: z.string(),
    tipo: z.enum(['maestria', 'doctorado', 'diplomado', 'curso']).optional(),
  }),
});

const estadisticasCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estadisticas' }),
  schema: z.object({
    id: z.string().optional(),
    value: z.string(),
    label: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const infoInstitucionalCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/info_institucional' }),
  schema: z.object({
    id: z.string().optional(),
    nombreCompleto: z.string(),
    nombreCorto: z.string(),
    lema: z.string(),
    historia: z.string(),
    mision: z.string(),
    vision: z.string(),
    valores: z.array(z.string()),
  }),
});

const documentosInstitucionalesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/documentos_institucionales' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string().optional(),
    url: z.string(),
    tipo: z.enum(['reglamento', 'formato', 'manual', 'guia']),
    fechaActualizacion: z.string().optional(),
  }),
});

const convocatoriasCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/convocatorias' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    estado: z.enum(['abierta', 'cerrada', 'proximamente', 'en_evaluacion']),
    fechaInicio: z.string(),
    fechaFin: z.string(),
    fechaExamen: z.string().optional(),
    fechaResultados: z.string().optional(),
    requisitos: z.array(z.string()),
    documentos: z.array(
      z.object({
        nombre: z.string(),
        descripcion: z.string(),
        obligatorio: z.boolean(),
      }),
    ),
    programas: z.array(z.string()),
    slug: z.string(),
  }),
});

const fechasImportantesAdmisionCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/fechas_importantes_admision' }),
  schema: z.object({
    id: z.string().optional(),
    fecha: z.string(),
    descripcion: z.string(),
    tipo: z.enum(['inscripcion', 'examen', 'resultados', 'matricula', 'inicio_clases']),
  }),
});

const estudiantesAccesosCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_accesos' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.string(),
    href: z.string(),
    color: z.string(),
  }),
});

const estudiantesTramitesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_tramites' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.string(),
    color: z.string(),
    iconColor: z.string(),
    href: z.string(),
    requisitos: z.array(z.string()),
    pasos: z.array(z.string()),
    documentos: z.array(z.string()),
    costo: z.string().optional(),
    duracion: z.string().optional(),
  }),
});

const estudiantesDocumentosCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_documentos' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    tipo: z.enum(['pdf', 'docx', 'xlsx']),
    categoria: z.enum(['reglamento', 'formato', 'guia', 'manual']),
    url: z.string(),
    fechaActualizacion: z.string(),
  }),
});

const estudiantesCalendarioCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_calendario' }),
  schema: z.object({
    id: z.string().optional(),
    titulo: z.string(),
    descripcion: z.string(),
    fechaInicio: z.string(),
    fechaFin: z.string().optional(),
    tipo: z.enum(['matricula', 'examen', 'sustentacion', 'vacaciones', 'evento', 'pago']),
    importante: z.boolean(),
  }),
});

const estudiantesRecursosCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_recursos' }),
  schema: z.object({
    id: z.string().optional(),
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.string(),
    href: z.string(),
    externo: z.boolean(),
  }),
});

const estudiantesFaqCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/estudiantes_faq' }),
  schema: z.object({
    id: z.string().optional(),
    pregunta: z.string(),
    respuesta: z.string(),
    categoria: z.enum(['matricula', 'tramites', 'tesis', 'pagos', 'general']),
  }),
});

export const collections = {
  contacto: contactoCollection,
  busquedas_populares: busquedasPopularesCollection,
  estadisticas: estadisticasCollection,
  info_institucional: infoInstitucionalCollection,
  documentos_institucionales: documentosInstitucionalesCollection,
  convocatorias: convocatoriasCollection,
  fechas_importantes_admision: fechasImportantesAdmisionCollection,
  admision: admisionCollection,
  estudiantes_accesos: estudiantesAccesosCollection,
  estudiantes_tramites: estudiantesTramitesCollection,
  estudiantes_documentos: estudiantesDocumentosCollection,
  estudiantes_calendario: estudiantesCalendarioCollection,
  estudiantes_recursos: estudiantesRecursosCollection,
  estudiantes_faq: estudiantesFaqCollection,
  servicios: serviciosCollection,
  programas: programasCollection,
  noticias: noticiasCollection,
  docentes: docentesCollection,
  autoridades: autoridadesCollection,
  sustentaciones: sustentacionesCollection,
};
