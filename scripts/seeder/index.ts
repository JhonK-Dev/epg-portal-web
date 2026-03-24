import { seedDocentes } from './docentes';
import { seedNoticias } from './noticias';
import { seedAutoridades } from './autoridades';
import { seedSustentaciones } from './sustentaciones';
import { seedProgramas } from './programas';

async function runSeeders() {
  console.log('🌱 Iniciando generación de datos (Seeders)...');
  
  try {
    await seedDocentes(30);
    await seedNoticias(25);
    await seedAutoridades();
    await seedSustentaciones(15);
    await seedProgramas();
    
    console.log('✅ Todos los seeders se ejecutaron correctamente.');
  } catch (error) {
    console.error('❌ Error ejecutando seeders:', error);
    process.exit(1);
  }
}

runSeeders();
