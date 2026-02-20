/**
 * Scroll Reveal — single vanilla script for all scroll-triggered animations.
 *
 * Usage (Astro or React):
 *   <div class="scroll-reveal" data-animation="fade-in-left" data-delay="200">
 *
 * Supported data attributes (all optional):
 *   data-animation  — tw-animate-css class to add (default: "animate-fade-in-up")
 *   data-delay      — ms delay before transition starts (default: 0)
 *   data-duration   — ms transition duration (default: 600)
 *   data-threshold  — IntersectionObserver threshold 0-1 (default: 0.1)
 *   data-once       — "false" to re-animate on every scroll; anything else = once (default: true)
 */

const ANIMATION_MAP: Record<string, string> = {
  'fade-in': 'animate-fade-in',
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-down': 'animate-fade-in-down',
  'fade-in-left': 'animate-fade-in-left',
  'fade-in-right': 'animate-fade-in-right',
  'slide-in-up': 'animate-slide-in-from-bottom',
  'slide-in-down': 'animate-slide-in-from-top',
  'slide-in-left': 'animate-slide-in-from-right',
  'slide-in-right': 'animate-slide-in-from-left',
  'zoom-in': 'animate-zoom-in',
  'zoom-in-up': 'animate-zoom-in-up',
};

function resolveAnimation(raw: string): string {
  return ANIMATION_MAP[raw] ?? raw;
}

function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
  if (elements.length === 0) return;

  elements.forEach((el) => {
    const animation = resolveAnimation(el.dataset.animation || 'fade-in-up');
    const delay = parseInt(el.dataset.delay || '0', 10);
    const duration = parseInt(el.dataset.duration || '600', 10);
    const threshold = parseFloat(el.dataset.threshold || '0.1');
    const once = el.dataset.once !== 'false';

    // Set initial hidden state
    el.style.opacity = '0';
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionDelay = `${delay}ms`;
    el.style.transitionProperty = 'opacity, transform';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(animation);
            el.style.opacity = '1';
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            el.classList.remove(animation);
            el.style.opacity = '0';
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
  });
}

// Support Astro view transitions
document.addEventListener('astro:page-load', initScrollReveal);

// Fallback for pages without view transitions
if (document.readyState === 'complete') {
  initScrollReveal();
}
