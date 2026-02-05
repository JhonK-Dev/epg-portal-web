import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchInputProps {
  /** Current value of the search input */
  value: string;
  /** Callback when the value changes */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional className for the container */
  className?: string;
  /** Size variant - affects icon size and padding */
  size?: 'sm' | 'md';
}

/**
 * SearchInput - A reusable search input component with search icon and clear button.
 * 
 * @example
 * <SearchInput
 *   value={busqueda}
 *   onChange={setBusqueda}
 *   placeholder="Buscar..."
 * />
 * 
 * @example
 * // With custom width
 * <SearchInput
 *   value={busqueda}
 *   onChange={setBusqueda}
 *   placeholder="Buscar por nombre..."
 *   className="w-full lg:w-80"
 * />
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar...',
  className,
  size = 'sm',
}: SearchInputProps) {
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const inputPadding = size === 'sm' ? 'pl-10 pr-10 py-2' : 'pl-10 pr-4 py-3';

  return (
    <div className={cn('relative', className)}>
      <Search
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400',
          iconSize
        )}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none',
          inputPadding
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          type="button"
          aria-label="Limpiar búsqueda"
        >
          <X className={iconSize} />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
