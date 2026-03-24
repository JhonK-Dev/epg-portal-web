import {
  DocumentosSection,
  EstadisticasSection,
  HistoriaSection,
  MisionVisionSection,
  ValoresSection,
} from './sections'

// ========================================
// MAIN EXPORT COMPONENT
// ========================================
export function EscuelaContent() {
  return (
    <div className="space-y-16">
      <HistoriaSection />
      <MisionVisionSection />
      <ValoresSection />
      <EstadisticasSection />
      <DocumentosSection />
    </div>
  )
}
