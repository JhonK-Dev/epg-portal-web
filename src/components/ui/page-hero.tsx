import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from './badge'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageHeroProps {
  /** Breadcrumb navigation items */
  breadcrumbs: BreadcrumbItem[]
  /** Main page title */
  title: string
  /** Optional subtitle/description */
  subtitle?: string
  /** Optional badge to display */
  badge?: {
    label: string
    variant?: 'default' | 'secondary' | 'outline' | 'destructive'
    className?: string
    icon?: React.ReactNode
  }
  /** Additional content to render in the hero */
  children?: React.ReactNode
  /** Visual variant for the hero background */
  variant?: 'solid' | 'gradient'
  /** Custom background color classes (overrides variant) */
  bgColorClass?: string
  /** Additional className for the hero container */
  className?: string
}

/**
 * PageHero - A reusable hero component for page headers with breadcrumbs.
 *
 * @example
 * // Basic usage with solid background
 * <PageHero
 *   breadcrumbs={[
 *     { label: 'Inicio', href: '/' },
 *     { label: 'Programas', href: '/programas' },
 *     { label: 'Maestrías' }
 *   ]}
 *   title="Maestría en Gestión Pública"
 *   subtitle="Programa de postgrado orientado a la gestión pública moderna"
 *   badge={{ label: 'Maestría', variant: 'outline' }}
 *   variant="solid"
 *   bgColorClass="bg-blue-600"
 * />
 *
 * @example
 * // With gradient and custom content
 * <PageHero
 *   breadcrumbs={[...]}
 *   title="Portal del Estudiante"
 *   subtitle="Accede a recursos y servicios exclusivos"
 *   variant="gradient"
 * >
 *   <div className="mt-6">
 *     <Button>Acción rápida</Button>
 *   </div>
 * </PageHero>
 */
export function PageHero({
  breadcrumbs,
  title,
  subtitle,
  badge,
  children,
  variant = 'gradient',
  bgColorClass,
  className,
}: PageHeroProps) {
  // Determine background class
  const bgClass =
    bgColorClass ||
    (variant === 'gradient'
      ? 'bg-gradient-to-br from-epg-navy to-epg-navy-light'
      : 'bg-epg-navy')

  return (
    <div className={cn(bgClass, 'text-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1

              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <li className="text-gray-400" aria-hidden="true">
                      /
                    </li>
                  )}
                  <li>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className={isLast ? 'text-epg-gold' : 'text-white'}>
                        {item.label}
                      </span>
                    )}
                  </li>
                </React.Fragment>
              )
            })}
          </ol>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="mb-4">
            <Badge
              variant={badge.variant}
              className={cn(
                'bg-white/20 text-white hover:bg-white/30 gap-1',
                badge.className,
              )}
            >
              {badge.icon}
              {badge.label}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            {subtitle}
          </p>
        )}

        {/* Custom content */}
        {children}
      </div>
    </div>
  )
}

export default PageHero
