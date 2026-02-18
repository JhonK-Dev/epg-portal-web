import React, { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in' | 'slide-up'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function ScrollAnimation({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const animationClasses: Record<string, string> = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'zoom-in': 'animate-zoom-in',
    'slide-up': 'animate-slide-up',
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ children, staggerDelay = 100, className = '' }: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
          style={{
            animationDelay: `${index * staggerDelay}ms`,
            animationDuration: '500ms',
            animationFillMode: 'forwards',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
