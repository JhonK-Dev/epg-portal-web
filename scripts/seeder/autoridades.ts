import fs from 'fs/promises';
import path from 'path';
import { fakerES_MX as faker } from '@faker-js/faker';
import slugify from 'slugify';

const AUTORIDADES_DIR = path.join(process.cwd(), 'src/content/autoridades');

const cargos = [
  'Director de la Escuela de Postgrado',
  'Coordinador de Maestrías',
  'Coordinador de Doctorados',
  'Secretario Académico',
  'Jefe de Unidad de Investigación',
];

export async function seedAutoridades() {
  await fs.mkdir(AUTORIDADES_DIR, { recursive: true });

  for (let i = 0; i < cargos.length; i++) {
    const sexo = faker.person.sexType();
    const nombres = faker.person.firstName(sexo);
    const apellidos = faker.person.lastName();
    const nombreCompleto = `${nombres} ${apellidos}`;
    const slug = slugify(cargos[i], { lower: true, strict: true });
    
    const autoridad = {
      id: `aut-${slug}`,
      nombres,
      apellidos,
      cargo: cargos[i],
      grado: i === 0 ? 'doctor' : faker.helpers.arrayElement(['magister', 'doctor']),
      foto: faker.image.avatar(),
      email: `${nombres.toLowerCase().charAt(0)}${apellidos.toLowerCase()}@unapiquitos.edu.pe`,
      telefono: faker.phone.number(),
      orden: i + 1, // El director primero
    };

    await fs.writeFile(
      path.join(AUTORIDADES_DIR, `${slug}.json`),
      JSON.stringify(autoridad, null, 2)
    );
  }
  
  console.log(`✅ ${cargos.length} autoridades generadas en src/content/autoridades/`);
}
