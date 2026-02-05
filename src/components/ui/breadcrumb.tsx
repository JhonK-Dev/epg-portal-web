import { Fragment } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  showHomeIcon?: boolean;
  className?: string;
}

export function Breadcrumb({ 
  items, 
  variant = 'dark',
  showHomeIcon = false,
  className 
}: BreadcrumbProps) {
  const isLight = variant === 'light';
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn('text-sm mb-6', className)}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <a 
            href="/" 
            className={cn(
              'inline-flex items-center gap-1 transition-colors',
              isLight 
                ? 'text-gray-500 hover:text-gray-900' 
                : 'text-gray-300 hover:text-white'
            )}
          >
            {showHomeIcon ? (
              <>
                <Home className="h-4 w-4" />
                <span className="sr-only">Inicio</span>
              </>
            ) : (
              'Inicio'
            )}
          </a>
        </li>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li 
              aria-hidden="true"
              className={isLight ? 'text-gray-400' : 'text-gray-400'}
            >
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              {item.href ? (
                <a 
                  href={item.href} 
                  className={cn(
                    'transition-colors',
                    isLight 
                      ? 'text-gray-500 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <span 
                  className={cn(
                    'font-medium',
                    isLight ? 'text-epg-navy' : 'text-epg-gold'
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
