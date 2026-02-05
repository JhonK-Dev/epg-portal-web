import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './card';
import { Button } from './button';

export interface EmptyStateProps {
  /** Icon to display */
  icon: React.ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description: string;
  /** Optional action button */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Additional className for the container */
  className?: string;
  /** Variant for styling */
  variant?: 'card' | 'inline';
}

/**
 * EmptyState - A reusable component for displaying empty states or no results.
 * 
 * @example
 * // Basic usage with card variant
 * <EmptyState
 *   icon={<Search className="h-8 w-8" />}
 *   title="No se encontraron resultados"
 *   description="Intenta con otros términos de búsqueda"
 *   action={{
 *     label: "Limpiar filtros",
 *     onClick: () => clearFilters()
 *   }}
 * />
 * 
 * @example
 * // Inline variant without card wrapper
 * <EmptyState
 *   icon={<Icon />}
 *   title="Sin resultados"
 *   description="Ajusta los filtros"
 *   variant="inline"
 * />
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  variant = 'card',
}: EmptyStateProps) {
  const content = (
    <>
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {action && (
        <Button variant="outline" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </>
  );

  if (variant === 'inline') {
    return (
      <div className={cn('text-center py-16 bg-white rounded-xl', className)}>
        {content}
      </div>
    );
  }

  return (
    <Card className={cn('p-12 text-center', className)}>
      {content}
    </Card>
  );
}

export default EmptyState;
