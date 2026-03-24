import fs from 'fs/promises';
import path from 'path';
import { fakerES_MX as faker } from '@faker-js/faker';

const SUSTENTACIONES_DIR = path.join(process.cwd(), 'src/content/sustentaciones');

export async function seedSustentaciones(count = 15) {
  await fs.mkdir(SUSTENTACIONES_DIR, { recursive: true });

  // Clean directory first
  const files = await fs.readdir(SUSTENTACIONES_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(SUSTENTACIONES_DIR, file));
    }
  }

  const programas = [
    'Maestría en Gestión Pública',
    'Maestría en Salud Pública',
    'Maestría in Ciencias Ambientales',
    'Doctorado en Educación',
    'Doctorado en Administración'
  ];

  const tipos = ['tesis', 'proyecto', 'trabajo_investigacion'];

  for (let i = 0; i < count; i++) {
    const slug = faker.string.uuid();
    
    // Generate an hour like 10:00 AM
    const hora = faker.date.future().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });

    const sustentacion = {
      id: `sus-${slug}`,
      tesista: `${faker.person.firstName()} ${faker.person.lastName()}`,
      titulo: faker.lorem.sentence({ min: 5, max: 10 }),
      programa: faker.helpers.arrayElement(programas),
      fecha: faker.date.future().toISOString().split('T')[0],
      hora: hora,
      lugar: faker.helpers.arrayElement(['Auditorio Principal', 'Aula Virtual 1', 'Aula Virtual 2', 'Sala de Grados']),
      jurados: [
        `${faker.person.firstName()} ${faker.person.lastName()}`,
        `${faker.person.firstName()} ${faker.person.lastName()}`,
        `${faker.person.firstName()} ${faker.person.lastName()}`
      ],
      asesor: `${faker.person.firstName()} ${faker.person.lastName()}`,
      tipo: faker.helpers.arrayElement(tipos),
    };

    await fs.writeFile(
      path.join(SUSTENTACIONES_DIR, `${slug}.json`),
      JSON.stringify(sustentacion, null, 2)
    );
  }
  
  console.log(`✅ ${count} sustentaciones generadas en src/content/sustentaciones/`);
}
