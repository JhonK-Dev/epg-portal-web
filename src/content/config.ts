import { defineCollection, z } from 'astro:content';

const noticiasCollection = defineCollection({
  type: 'content',
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
  type: 'data',
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
  type: 'data',
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
  type: 'data',
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
  type: 'data',
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
  type: 'data',
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

export const collections = {
  servicios: serviciosCollection,
  programas: programasCollection,
  noticias: noticiasCollection,
  docentes: docentesCollection,
  autoridades: autoridadesCollection,
  sustentaciones: sustentacionesCollection,
};
