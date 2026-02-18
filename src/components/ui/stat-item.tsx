import type { ReactNode } from 'react'

interface StatItemProps {
  value: string | number
  label: string
  icon?: ReactNode
  description?: string
  variant?: 'card' | 'inline'
  className?: string
  valueClassName?: string
  labelClassName?: string
  descriptionClassName?: string
}

export function StatItem({
  value,
  label,
  icon,
  description,
  variant = 'inline',
  className = '',
  valueClassName = '',
  labelClassName = '',
  descriptionClassName = '',
}: StatItemProps) {
  if (variant === 'card') {
    return (
      <div className={`text-center ${className}`} style={{ opacity: 1, visibility: 'visible' }}>
        {icon && <div className="mb-4">{icon}</div>}
        <div
          className={`text-3xl lg:text-4xl font-bold mb-1 ${valueClassName}`}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {value}
        </div>
        <div 
          className={`font-medium text-sm mb-1 ${labelClassName}`}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {label}
        </div>
        {description && (
          <div 
            className={`text-xs ${descriptionClassName}`}
            style={{ opacity: 1, visibility: 'visible' }}
          >
            {description}
          </div>
        )}
      </div>
    )
  }

  // inline variant
  return (
    <div className={`text-center ${className}`} style={{ opacity: 1, visibility: 'visible' }}>
      {icon && <div className="mb-2">{icon}</div>}
      <div 
        className={`text-3xl font-bold ${valueClassName}`}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        {value}
      </div>
      <div 
        className={`text-sm ${labelClassName}`}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        {label}
      </div>
      {description && (
        <div 
          className={`text-xs mt-1 ${descriptionClassName}`}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {description}
        </div>
      )}
    </div>
  )
}
