import fs from 'fs/promises';
import path from 'path';
import { fakerES_MX as faker } from '@faker-js/faker';
import slugify from 'slugify';

const NOTICIAS_DIR = path.join(process.cwd(), 'src/content/noticias');

const tipos = ['noticia', 'evento', 'aviso', 'comunicado'] as const;

const plantillasTitulos = [
  "La EPG UNAP organiza el {numero} Seminario de {especialidad}",
  "Exitosa sustentación de la Maestría en {especialidad}",
  "Estudiantes de {especialidad} publican artículo en revista indexada",
  "Convenio marco entre EPG UNAP y universidad de {pais}",
  "Apertura de inscripciones para el proceso de admisión {año}-I",
  "Dr. {nombre} recibe reconocimiento por investigación en {especialidad}",
  "Taller de redacción científica para doctorandos en {especialidad}",
  "Nuevo cronograma de actividades académicas {año}",
];

const especialidades = [
  'Gestión Pública', 'Derecho Civil', 'Educación', 'Ciencias Ambientales', 'Salud Pública', 'Negocios Internacionales', 'Ingeniería de Sistemas'
];
const paises = ['Brasil', 'Colombia', 'México', 'España', 'Chile'];

function generarTitulo() {
  const plantilla = faker.helpers.arrayElement(plantillasTitulos);
  return plantilla
    .replace('{numero}', faker.number.int({ min: 1, max: 10 }).toString() + '°')
    .replace('{especialidad}', faker.helpers.arrayElement(especialidades))
    .replace('{pais}', faker.helpers.arrayElement(paises))
    .replace('{año}', '202' + faker.number.int({ min: 4, max: 6 }).toString())
    .replace('{nombre}', faker.person.lastName());
}

export async function seedNoticias(count: number = 20) {
  await fs.mkdir(NOTICIAS_DIR, { recursive: true });

  for (let i = 0; i < count; i++) {
    const titulo = generarTitulo();
    const slug = slugify(titulo, { lower: true, strict: true }).substring(0, 50);
    const tipo = faker.helpers.arrayElement(tipos);
    const fecha = faker.date.past({ years: 1 }).toISOString().split('T')[0]; // YYYY-MM-DD
    const esEvento = tipo === 'evento';
    
    // Frontmatter
    let content = `---\n`;
    content += `titulo: "${titulo}"\n`;
    content += `tipo: "${tipo}"\n`;
    content += `resumen: "${faker.lorem.sentences(1)}"\n`;
    content += `fecha: "${fecha}"\n`;
    
    if (esEvento) {
      content += `fechaEvento: "${faker.date.future({ years: 0.5 }).toISOString().split('T')[0]}"\n`;
      content += `hora: "10:00 AM"\n`;
      content += `lugar: "Auditorio Principal EPG UNAP"\n`;
    }
    
    if (faker.datatype.boolean({ probability: 0.7 })) {
        content += `imagen: "https://picsum.photos/seed/${slug}/800/600"\n`;
    }
    
    content += `autor: "Oficina de Imagen Institucional"\n`;
    content += `destacado: ${faker.datatype.boolean({ probability: 0.2 })}\n`;
    content += `etiquetas: ["${faker.helpers.arrayElement(especialidades)}", "UNAP"]\n`;
    content += `---\n\n`;
    
    // Markdown body
    content += `## ${titulo}\n\n`;
    content += `${faker.lorem.paragraphs(2)}\n\n`;
    content += `### Desarrollo\n\n`;
    content += `${faker.lorem.paragraphs(3)}\n\n`;

    await fs.writeFile(
      path.join(NOTICIAS_DIR, `${slug}.md`),
      content
    );
  }
  
  console.log(`✅ ${count} noticias generadas en src/content/noticias/`);
}
