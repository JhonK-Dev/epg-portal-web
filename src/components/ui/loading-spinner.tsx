import * as React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'default' | 'gold' | 'white';
}

const sizeClasses = {
  xs: 'h-3 w-3 border',
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-2',
  xl: 'h-12 w-12 border-3',
};

const colorClasses = {
  default: 'border-gray-300 border-t-[#0A1628]',
  gold: 'border-gray-300 border-t-[#D4A017]',
  white: 'border-white/30 border-t-white',
};

export function LoadingSpinner({ 
  size = 'md', 
  className,
  color = 'gold' 
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Cargando..."
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
}

interface LoadingOverlayProps {
  message?: string;
  className?: string;
}

export function LoadingOverlay({ 
  message = 'Cargando...', 
  className 
}: LoadingOverlayProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center gap-4 py-12',
      className
    )}>
      <LoadingSpinner size="lg" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
}
