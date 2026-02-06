import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from './badge'

export interface SectionHeaderProps {
  /** Badge configuration with label and optional custom className for colors */
  badge?: {
    label: string
    className?: string
  }
  /** Section title */
  title: string
  /** Optional description text below the title */
  description?: string
  /** Text alignment - 'center' or 'left' */
  align?: 'center' | 'left'
  /** Title text color class (e.g., 'text-epg-navy', 'text-white') */
  titleColor?: string
  /** Description text color class (e.g., 'text-gray-600', 'text-gray-400') */
  descriptionColor?: string
  /** Additional className for the container */
  className?: string
  /** Optional right-side action element (e.g., link or button) */
  action?: React.ReactNode
}

/**
 * SectionHeader - A reusable component for section headers with badge, title and description.
 *
 * @example
 * // Centered header with badge
 * <SectionHeader
 *   badge={{ label: "Cronograma", className: "bg-epg-gold/10 text-epg-gold" }}
 *   title="Fechas Importantes"
 *   description="Conoce las fechas clave del proceso de admisión 2025-I"
 * />
 *
 * @example
 * // Left-aligned header with action
 * <SectionHeader
 *   badge={{ label: "Nuestra oferta académica", className: "text-epg-gold" }}
 *   title="Programas Destacados"
 *   description="Descubre los programas más demandados"
 *   align="left"
 *   action={<a href="/programas">Ver todos</a>}
 * />
 */
export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  titleColor = 'text-epg-navy',
  descriptionColor = 'text-gray-600',
  className,
  action,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  // If there's an action, use flex layout for side-by-side arrangement
  if (action) {
    return (
      <div
        className={cn(
          'flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12',
          className,
        )}
      >
        <div className={cn(!isCenter && 'text-left')}>
          {badge && (
            <span
              className={cn(
                'font-semibold text-sm uppercase tracking-wider mb-2 block',
                badge.className,
              )}
            >
              {badge.label}
            </span>
          )}
          <h2 className={cn('text-3xl sm:text-4xl font-bold', titleColor)}>
            {title}
          </h2>
          {description && (
            <p className={cn('mt-2 max-w-xl', descriptionColor)}>
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
    )
  }

  // Standard centered/left layout without action
  return (
    <div className={cn('mb-8', isCenter && 'text-center', className)}>
      {badge && (
        <Badge className={cn('mb-4', badge.className)}>{badge.label}</Badge>
      )}
      <h2 className={cn('text-3xl font-bold mb-4', titleColor)}>{title}</h2>
      {description && (
        <p className={cn('max-w-2xl', isCenter && 'mx-auto', descriptionColor)}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
