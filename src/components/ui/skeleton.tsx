import * as React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
    />
  );
}

export function SkeletonText({ 
  lines = 3,
  className 
}: { 
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-3/4' : 'w-full'
          )} 
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({ 
  size = 'md',
  className 
}: { 
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  return (
    <Skeleton 
      className={cn(
        'rounded-full',
        sizeClasses[size],
        className
      )} 
    />
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-xl overflow-hidden bg-white shadow-sm', className)}>
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-5 w-3/4" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

export function SkeletonDocenteCard({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-xl overflow-hidden bg-white shadow-sm p-6', className)}>
      <div className="flex flex-col items-center text-center">
        <SkeletonAvatar size="xl" className="mb-4" />
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-24 mb-4" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
}

export function SkeletonProgramaCard({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-xl overflow-hidden bg-white shadow-sm', className)}>
      <div className="h-2 bg-gray-300" />
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
        <SkeletonText lines={2} />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonPublicacionCard({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-xl overflow-hidden bg-white shadow-sm', className)}>
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-full" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}
