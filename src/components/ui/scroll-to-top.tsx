import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export function ScrollToTop({ 
  threshold = 400,
  className 
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Check initial position
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform',
        'bg-[#001F3F] text-white hover:bg-[#E6A817] hover:text-[#001F3F]',
        'focus:outline-none focus:ring-2 focus:ring-[#E6A817] focus:ring-offset-2',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none',
        className
      )}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
