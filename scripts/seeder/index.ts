import { seedDocentes } from './docentes';
import { seedNoticias } from './noticias';
import { seedAutoridades } from './autoridades';
import { seedSustentaciones } from './sustentaciones';
import { seedProgramas } from './programas';
import { seedServicios } from './servicios';
import { seedAdmision } from './admision';
import { seedContacto } from './contacto';
import { seedBusquedasPopulares } from './busquedas-populares';
import { seedEstadisticas } from './estadisticas';
import { seedInfoInstitucional } from './info-institucional';
import { seedDocumentosInstitucionales } from './documentos-institucionales';
import { seedConvocatorias } from './convocatorias';

async function runSeeders() {
  console.log('🌱 Iniciando generación de datos (Seeders)...');
  
  try {
    await seedDocentes(30);
    await seedNoticias(25);
    await seedAutoridades();
    await seedSustentaciones(15);
    await seedProgramas();
    await seedServicios();
    await seedAdmision();
    await seedContacto();
    await seedBusquedasPopulares();
    await seedEstadisticas();
    await seedInfoInstitucional();
    await seedDocumentosInstitucionales();
    await seedConvocatorias();
    
    console.log('✅ Todos los seeders se ejecutaron correctamente.');
  } catch (error) {
    console.error('❌ Error ejecutando seeders:', error);
    process.exit(1);
  }
}

runSeeders();
