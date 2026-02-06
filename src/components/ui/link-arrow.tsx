import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface LinkArrowProps {
  children: ReactNode
  className?: string
}

export function LinkArrow({ children, className = '' }: LinkArrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 group-hover:gap-2 transition-all ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </span>
  )
}
