import fs from 'fs/promises';
import path from 'path';

import type { Documento } from '../../src/types';

const documentos: Documento[] = [
  {
    id: 'doc-reg-001',
    nombre: 'Reglamento General de la Escuela de Postgrado',
    descripcion:
      'Normas generales que rigen el funcionamiento de la Escuela de Postgrado.',
    url: '/documentos/reglamento-general-epg.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-03-15',
  },
  {
    id: 'doc-reg-002',
    nombre: 'Reglamento de Grados y Títulos',
    descripcion:
      'Procedimientos y requisitos para la obtención de grados de Magíster y Doctor.',
    url: '/documentos/reglamento-grados-titulos.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-06-20',
  },
  {
    id: 'doc-reg-003',
    nombre: 'Reglamento de Admisión',
    descripcion:
      'Normas que regulan el proceso de admisión a los programas de postgrado.',
    url: '/documentos/reglamento-admision.pdf',
    tipo: 'reglamento',
    fechaActualizacion: '2024-01-10',
  },
  {
    id: 'doc-for-001',
    nombre: 'Formato de Proyecto de Tesis',
    descripcion: 'Modelo para la presentación del proyecto de tesis.',
    url: '/documentos/formato-proyecto-tesis.docx',
    tipo: 'formato',
    fechaActualizacion: '2024-08-05',
  },
  {
    id: 'doc-for-002',
    nombre: 'Formato de Informe de Tesis',
    descripcion: 'Estructura y formato para el informe final de tesis.',
    url: '/documentos/formato-informe-tesis.docx',
    tipo: 'formato',
    fechaActualizacion: '2024-08-05',
  },
  {
    id: 'doc-gui-001',
    nombre: 'Guía de Elaboración de Tesis',
    descripcion: 'Manual completo para la elaboración y sustentación de tesis.',
    url: '/documentos/guia-elaboracion-tesis.pdf',
    tipo: 'guia',
    fechaActualizacion: '2024-07-12',
  },
  {
    id: 'doc-man-001',
    nombre: 'Manual de Usuario SIGAE',
    descripcion:
      'Instrucciones para el uso del Sistema de Gestión Académica.',
    url: '/documentos/manual-sigae.pdf',
    tipo: 'manual',
    fechaActualizacion: '2024-02-28',
  },
];

const DOCUMENTOS_DIR = path.join(process.cwd(), 'src/content/documentos_institucionales');

export async function seedDocumentosInstitucionales() {
  await fs.mkdir(DOCUMENTOS_DIR, { recursive: true });

  const files = await fs.readdir(DOCUMENTOS_DIR);
  for (const file of files) {
    if (file.endsWith('.json')) {
      await fs.unlink(path.join(DOCUMENTOS_DIR, file));
    }
  }

  for (const documento of documentos) {
    const filePath = path.join(DOCUMENTOS_DIR, `${documento.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(documento, null, 2));
  }

  console.log(
    `✅ ${documentos.length} documentos institucionales generados en src/content/documentos_institucionales/`,
  );
}
