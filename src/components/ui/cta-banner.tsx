import * as React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface CTABannerAction {
  label: string
  href: string
  icon?: React.ReactNode
  external?: boolean
}

export interface CTABannerProps {
  title: string
  description: string
  primaryAction: CTABannerAction
  secondaryAction?: CTABannerAction
  variant?: 'navy' | 'gold'
  badge?: string
  footer?: React.ReactNode
  className?: string
}

export function CTABanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'navy',
  badge,
  footer,
  className,
}: CTABannerProps) {
  const gradientClass =
    variant === 'navy'
      ? 'bg-gradient-to-r from-epg-navy to-epg-navy-light'
      : 'bg-gradient-to-r from-epg-gold to-epg-gold-dark'

  const primaryButtonClass =
    variant === 'navy'
      ? 'btn-gold'
      : 'bg-epg-navy text-white hover:bg-epg-navy-light font-semibold'

  const secondaryButtonClass =
    variant === 'navy'
      ? 'bg-white text-epg-navy hover:bg-gray-100 border border-white font-semibold'
      : 'bg-transparent text-epg-navy border border-epg-navy hover:bg-epg-navy/10 font-semibold'

  return (
    <Card
      className={cn(
        gradientClass,
        'text-white border-0 p-8 md:p-12',
        className,
      )}
      data-testid="cta-banner"
    >
      {/* Center-aligned layout for centered CTA with badge/footer */}
      <div className="max-w-2xl mx-auto text-center">
        {badge && (
          <Badge className="bg-epg-gold text-epg-navy mb-4">{badge}</Badge>
        )}
        <h2
          className={cn(
            'text-2xl md:text-3xl font-bold mb-4',
            footer && 'md:text-4xl',
          )}
        >
          {title}
        </h2>
        <p className="text-gray-300 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className={primaryButtonClass} asChild>
            <a
              href={primaryAction.href}
              {...(primaryAction.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </a>
          </Button>
          {secondaryAction && (
            <Button
              size="lg"
              variant="ghost"
              className={secondaryButtonClass}
              asChild
            >
              <a
                href={secondaryAction.href}
                {...(secondaryAction.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </a>
            </Button>
          )}
        </div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </Card>
  )
}

// Variant for side-by-side layout (used in some banners)
export function CTABannerSideBySide({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'navy',
  className,
}: Omit<CTABannerProps, 'badge' | 'footer'>) {
  const gradientClass =
    variant === 'navy'
      ? 'bg-gradient-to-r from-epg-navy to-epg-navy-light'
      : 'bg-gradient-to-r from-epg-gold to-epg-gold-dark'

  const primaryButtonClass =
    variant === 'navy'
      ? 'btn-gold'
      : 'bg-epg-navy text-white hover:bg-epg-navy-light font-semibold'

  const secondaryButtonClass =
    variant === 'navy'
      ? 'bg-white text-epg-navy hover:bg-gray-100 border border-white font-semibold'
      : 'bg-transparent text-epg-navy border border-epg-navy hover:bg-epg-navy/10 font-semibold'

  return (
    <Card
      className={cn(gradientClass, 'text-white border-0 p-8', className)}
      data-testid="cta-banner-side-by-side"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className={primaryButtonClass} asChild>
            <a
              href={primaryAction.href}
              {...(primaryAction.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </a>
          </Button>
          {secondaryAction && (
            <Button
              size="lg"
              variant="ghost"
              className={secondaryButtonClass}
              asChild
            >
              <a
                href={secondaryAction.href}
                {...(secondaryAction.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
