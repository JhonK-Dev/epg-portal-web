import fs from 'fs/promises';
import path from 'path';
import { fakerES_MX as faker } from '@faker-js/faker';
import slugify from 'slugify';

const DOCENTES_DIR = path.join(process.cwd(), 'src/content/docentes');

const especialidades = [
  'Ciencias Ambientales',
  'Gestión Pública',
  'Derecho Constitucional',
  'Salud Pública',
  'Docencia Universitaria',
  'Ingeniería de Sistemas',
  'Biología Molecular',
  'Administración de Empresas',
];

const grados = ['magister', 'doctor', 'phd'] as const;

export async function seedDocentes(count: number = 30) {
  await fs.mkdir(DOCENTES_DIR, { recursive: true });

  for (let i = 0; i < count; i++) {
    const sexo = faker.person.sexType();
    const nombres = faker.person.firstName(sexo);
    const apellidos = faker.person.lastName();
    const nombreCompleto = `${nombres} ${apellidos}`;
    const slug = slugify(nombreCompleto, { lower: true, strict: true });
    
    const grado = faker.helpers.arrayElement(grados);
    const especialidad = faker.helpers.arrayElement(especialidades);
    
    // Some will have photos, some won't
    const hasPhoto = faker.datatype.boolean({ probability: 0.8 });
    const fotoUrl = hasPhoto ? faker.image.avatar() : undefined;
    
    const docente = {
      id: `doc-${slug}`,
      nombres,
      apellidos,
      grado,
      especialidad,
      email: `${nombres.toLowerCase()}.${apellidos.toLowerCase()}@unapiquitos.edu.pe`,
      foto: fotoUrl,
      resumenPerfil: faker.lorem.paragraph(),
      orcid: `https://orcid.org/0000-000${faker.string.numeric(1)}-${faker.string.numeric(4)}-${faker.string.numeric(4)}`,
      biografia: faker.lorem.paragraphs(2),
      areasInvestigacion: faker.helpers.arrayElements(especialidades, { min: 1, max: 3 }),
      formacionAcademica: [
        {
          grado: 'Magíster',
          institucion: 'Universidad Nacional de la Amazonía Peruana',
          pais: 'Perú',
          anio: faker.date.past({ years: 10 }).getFullYear()
        },
        {
          grado: 'Bachiller',
          institucion: 'Universidad Nacional de la Amazonía Peruana',
          pais: 'Perú',
          anio: faker.date.past({ years: 20 }).getFullYear()
        }
      ],
      experienciaProfesional: [
        {
          cargo: 'Docente Investigador',
          institucion: 'Universidad Nacional de la Amazonía Peruana',
          periodo: `${faker.date.past({ years: 5 }).getFullYear()} - Presente`,
        }
      ],
      telefono: faker.phone.number(),
    };

    await fs.writeFile(
      path.join(DOCENTES_DIR, `${slug}.json`),
      JSON.stringify(docente, null, 2)
    );
  }
  
  console.log(`✅ ${count} docentes generados en src/content/docentes/`);
}
