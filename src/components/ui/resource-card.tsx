import React from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { IconCircle } from './icon-circle'

export interface ResourceCardProps {
  href: string
  icon: LucideIcon
  title: string
  description?: string
  external?: boolean
  variant?: 'default' | 'gradient-navy' | 'gradient-gold'
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  href,
  icon: Icon,
  title,
  description,
  external = false,
  variant = 'default',
}) => {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (variant === 'default') {
    return (
      <a
        href={href}
        {...linkProps}
        className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center"
      >
        <IconCircle
          icon={<Icon className="h-6 w-6" />}
          variant="navy"
          size="lg"
          className="mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <span className="inline-flex items-center gap-2 text-epg-navy font-semibold group-hover:gap-3 transition-all">
          Acceder
          <ArrowRight className="w-5 h-5" />
        </span>
      </a>
    )
  }

  // Gradient variants for category cards
  const gradientClass =
    variant === 'gradient-navy'
      ? 'bg-gradient-to-br from-epg-navy to-epg-navy/80'
      : 'bg-gradient-to-br from-epg-gold to-epg-gold/80'

  return (
    <a
      href={href}
      {...linkProps}
      className={`group ${gradientClass} rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-white`}
    >
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          {description && (
            <p className="text-white/90 mb-4 leading-relaxed">{description}</p>
          )}
          <span className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
            Ver programas
            <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </a>
  )
}
