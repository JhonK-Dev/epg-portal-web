import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IconCircleProps {
  /** Icon element to display */
  icon: React.ReactNode
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Color variant */
  variant?: 'navy' | 'gold' | 'white' | 'destructive' | 'custom'
  /** Custom background color (overrides variant) */
  bgColor?: string
  /** Custom icon/text color */
  iconColor?: string
  /** Border radius */
  rounded?: 'full' | 'lg' | 'xl'
  /** Additional className for the container */
  className?: string
}

/**
 * IconCircle - A reusable circular icon container component.
 *
 * @example
 * // Basic usage with navy variant
 * <IconCircle
 *   icon={<User className="h-6 w-6" />}
 *   size="md"
 *   variant="navy"
 * />
 *
 * @example
 * // Custom colors
 * <IconCircle
 *   icon={<Star />}
 *   size="lg"
 *   variant="custom"
 *   bgColor="bg-purple-500"
 *   iconColor="text-white"
 * />
 *
 * @example
 * // With hover effects
 * <IconCircle
 *   icon={<Mail />}
 *   size="md"
 *   variant="gold"
 *   className="group-hover:bg-epg-navy transition-colors"
 * />
 */
export function IconCircle({
  icon,
  size = 'md',
  variant = 'navy',
  bgColor,
  iconColor,
  rounded = 'lg',
  className,
}: IconCircleProps) {
  // Size classes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  }

  // Variant classes
  const variantClasses = {
    navy: 'bg-epg-navy text-white',
    gold: 'bg-epg-gold text-epg-navy',
    white: 'bg-white text-epg-navy',
    destructive: 'bg-destructive text-white',
    custom: '', // Custom colors will be applied via props
  }

  // Rounded classes
  const roundedClasses = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }

  // Determine background color
  const bgClass = bgColor || variantClasses[variant]

  return (
    <div
      className={cn(
        'flex items-center justify-center flex-shrink-0',
        sizeClasses[size],
        roundedClasses[rounded],
        bgClass,
        iconColor,
        className,
      )}
    >
      {icon}
    </div>
  )
}

export default IconCircle
