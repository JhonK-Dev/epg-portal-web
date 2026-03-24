import fs from 'fs/promises';
import path from 'path';
import { fakerES_MX as faker } from '@faker-js/faker';
import slugify from 'slugify';

const AUTORIDADES_DIR = path.join(process.cwd(), 'src/content/autoridades');

const autoridadesData = [
  {
    cargo: 'Director de la Escuela de Postgrado',
    nombres: 'Carlos Hernán',
    apellidos: 'Zumaeta Vásquez',
    grado: 'doctor',
    foto: 'https://admision.postgradounap.edu.pe/staff/carlos_sumaeta.webp',
  },
  {
    cargo: 'Secretario Académico',
    nombres: 'José Ricardo',
    apellidos: 'Balbuena Hernández',
    grado: 'doctor',
    foto: 'https://admision.postgradounap.edu.pe/staff/jose_balbuena.jpg',
  }
];

export async function seedAutoridades() {
  await fs.mkdir(AUTORIDADES_DIR, { recursive: true });

  // Clean directory first
  const files = await fs.readdir(AUTORIDADES_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(AUTORIDADES_DIR, file));
    }
  }

  for (let i = 0; i < autoridadesData.length; i++) {
    const { cargo, nombres, apellidos, grado, foto } = autoridadesData[i];
    const slug = slugify(cargo, { lower: true, strict: true });
    
    // Generar email normalizado sin tildes ni espacios
    const nombreBase = nombres.split(' ')[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const apellidoBase = apellidos.split(' ')[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const email = `${nombreBase.charAt(0)}${apellidoBase}@unapiquitos.edu.pe`;

    const autoridad = {
      id: `aut-${slug}`,
      nombres,
      apellidos,
      cargo,
      grado,
      foto,
      email,
      telefono: '+51 ' + faker.string.numeric(9),
      orden: i + 1,
    };

    await fs.writeFile(
      path.join(AUTORIDADES_DIR, `${slug}.json`),
      JSON.stringify(autoridad, null, 2)
    );
  }
  
  console.log(`✅ ${autoridadesData.length} autoridades generadas en src/content/autoridades/`);
}
