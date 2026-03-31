import {
  DocumentosSection,
  EstadisticasSection,
  HistoriaSection,
  MisionVisionSection,
  ValoresSection,
} from './sections'
import type { Documento, Estadistica, InfoInstitucional } from '@/types'

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export function EscuelaContent({
  infoInstitucional,
  estadisticasInstitucionales,
  documentos,
}: {
  infoInstitucional: InfoInstitucional
  estadisticasInstitucionales: Estadistica[]
  documentos: Documento[]
}) {
  return (
    <div className="space-y-16">
      <HistoriaSection
        infoInstitucional={infoInstitucional}
        estadisticasInstitucionales={estadisticasInstitucionales}
      />
      <MisionVisionSection infoInstitucional={infoInstitucional} />
      <ValoresSection />
      <EstadisticasSection estadisticasInstitucionales={estadisticasInstitucionales} />
      <DocumentosSection documentos={documentos} />
    </div>
  )
}
