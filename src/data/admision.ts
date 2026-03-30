import { getCollection } from 'astro:content';
import type { ProcesoAdmision, FechaImportanteAdmision, EstadoConvocatoria } from '@/types';

async function fetchProcesosAdmision(): Promise<ProcesoAdmision[]> {
  const collection = await getCollection('admision');

  return collection
    .map((entry) => ({
      ...entry.data,
      id: entry.data.id ?? entry.id,
    }))
    .sort(
      (a, b) =>
        new Date(a.fechaApertura).getTime() - new Date(b.fechaApertura).getTime(),
    ) as ProcesoAdmision[];
}

/**
 * Calcula el estado de un proceso de admisión basado en las fechas o override manual
 */
export const calcularEstadoProceso = (proceso: ProcesoAdmision): EstadoConvocatoria => {
  // Si hay override manual, usar ese valor
  if (proceso.estadoOverride) {
    return proceso.estadoOverride;
  }
  
  // Calcular automáticamente basado en fechas
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); // Normalizar a medianoche
  
  const inicio = new Date(proceso.fechaApertura);
  inicio.setHours(0, 0, 0, 0);
  
  const fin = new Date(proceso.fechaCierre);
  fin.setHours(23, 59, 59, 999); // Hasta el final del día
  
  if (hoy < inicio) return 'proximamente';
  if (hoy > fin) return 'cerrada';
  return 'abierta';
};

/**
 * Obtiene todos los procesos de admisión
 */
export const getProcesosAdmision = async (): Promise<ProcesoAdmision[]> => {
  const procesosAdmision = await fetchProcesosAdmision();
  return [...procesosAdmision];
};

/**
 * Obtiene los procesos con convocatoria abierta
 */
export const getProcesosActivos = async (): Promise<ProcesoAdmision[]> => {
  const procesosAdmision = await fetchProcesosAdmision();
  return procesosAdmision.filter(p => calcularEstadoProceso(p) === 'abierta');
};

/**
 * Obtiene el proceso actual (primero activo, o el más próximo si no hay activos)
 */
export const getProcesoActual = async (): Promise<ProcesoAdmision | null> => {
  const procesosAdmision = await fetchProcesosAdmision();
  const activos = procesosAdmision.filter(
    (p) => calcularEstadoProceso(p) === 'abierta',
  );
  
  if (activos.length > 0) {
    return activos[0];
  }
  
  // Si no hay activos, buscar el próximo
  const hoy = new Date();
  const proximos = procesosAdmision
    .filter(p => new Date(p.fechaApertura) > hoy)
    .sort((a, b) => new Date(a.fechaApertura).getTime() - new Date(b.fechaApertura).getTime());
  
  if (proximos.length > 0) {
    return proximos[0];
  }
  
  // Si no hay próximos, retornar el último cerrado
  return procesosAdmision[procesosAdmision.length - 1] || null;
};

/**
 * Verifica si hay al menos una convocatoria abierta
 */
export const estaConvocatoriaAbierta = async (): Promise<boolean> => {
  const activos = await getProcesosActivos();
  return activos.length > 0;
};

/**
 * Obtiene el estado del proceso actual
 */
export const getEstadoProcesoActual = async (): Promise<EstadoConvocatoria> => {
  const proceso = await getProcesoActual();
  if (!proceso) return 'cerrada';
  return calcularEstadoProceso(proceso);
};

/**
 * Formatea un rango de fechas para mostrar
 * Ejemplo: "15 de enero - 28 de febrero" o "8 de marzo"
 */
export const formatearRangoFecha = (fechaInicio: string, fechaFin?: string): string => {
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  const inicio = new Date(fechaInicio);
  const diaInicio = inicio.getDate();
  const mesInicio = meses[inicio.getMonth()];
  
  if (!fechaFin) {
    return `${diaInicio} de ${mesInicio}`;
  }
  
  const fin = new Date(fechaFin);
  const diaFin = fin.getDate();
  const mesFin = meses[fin.getMonth()];
  
  if (inicio.getMonth() === fin.getMonth()) {
    return `${diaInicio} al ${diaFin} de ${mesInicio}`;
  }
  
  return `${diaInicio} de ${mesInicio} - ${diaFin} de ${mesFin}`;
};

/**
 * Formatea una fecha importante para mostrar
 */
export const formatearFechaImportante = (fecha: FechaImportanteAdmision): string => {
  return formatearRangoFecha(fecha.fechaInicio, fecha.fechaFin);
};

/**
 * Obtiene el texto del badge según el estado
 */
export const getTextoEstado = (estado: EstadoConvocatoria): string => {
  const textos: Record<EstadoConvocatoria, string> = {
    'abierta': 'Convocatoria abierta',
    'cerrada': 'Convocatoria cerrada',
    'proximamente': 'Próximamente',
    'en_evaluacion': 'En evaluación'
  };
  return textos[estado];
};

/**
 * Obtiene el color del badge según el estado
 */
export const getColorEstado = (estado: EstadoConvocatoria): { bg: string; text: string } => {
  const colores: Record<EstadoConvocatoria, { bg: string; text: string }> = {
    'abierta': { bg: 'bg-success', text: 'text-white' },
    'cerrada': { bg: 'bg-gray-500', text: 'text-white' },
    'proximamente': { bg: 'bg-epg-gold', text: 'text-epg-navy' },
    'en_evaluacion': { bg: 'bg-blue-500', text: 'text-white' }
  };
  return colores[estado];
};
