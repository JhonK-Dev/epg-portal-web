import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertCircle, Mail } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'card';
  className?: string;
}

// Formspree endpoint - Replace with your actual Formspree form ID
const FORMSPREE_NEWSLETTER_ID = 'xpwzgqvl';

export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Por favor, ingresa tu correo electrónico');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'Nueva suscripción al boletín EPG UNAP',
          tipo: 'newsletter',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      setErrorMessage('Ocurrió un error. Por favor, intenta nuevamente.');
      setStatus('error');
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Tu correo electrónico"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm focus:ring-2 focus:ring-[#E6A817] outline-none disabled:opacity-50 ${
              status === 'error' ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
        <Button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-[#E6A817] text-[#001F3F] hover:bg-[#C9A227] font-semibold px-4"
        >
          {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'success' && <CheckCircle className="h-4 w-4" />}
          {status === 'idle' && 'Suscribirse'}
          {status === 'error' && 'Reintentar'}
        </Button>
      </form>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl p-8 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Mantente informado</h3>
            <p className="text-gray-300">
              Suscríbete a nuestro boletín y recibe las últimas noticias y eventos
            </p>
          </div>
          
          {status === 'success' ? (
            <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-lg px-6 py-4">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <div>
                <p className="font-semibold">¡Gracias por suscribirte!</p>
                <p className="text-sm text-gray-300">Pronto recibirás nuestras novedades</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') {
                        setStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="Tu correo electrónico"
                    disabled={status === 'loading'}
                    className={`w-full md:w-64 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#E6A817] outline-none disabled:opacity-50 ${
                      status === 'error' ? 'ring-2 ring-red-500' : ''
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#E6A817] text-[#001F3F] hover:bg-[#C9A227] font-semibold px-6 py-3 h-auto"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    'Suscribirse'
                  )}
                </Button>
              </div>
              {status === 'error' && errorMessage && (
                <div className="flex items-center gap-2 mt-3 text-red-300 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') {
                setStatus('idle');
                setErrorMessage('');
              }
            }}
            placeholder="Tu correo electrónico"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#E6A817] outline-none disabled:opacity-50 ${
              status === 'error' ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300'
            }`}
          />
        </div>
        <Button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-[#E6A817] text-[#001F3F] hover:bg-[#C9A227] font-semibold px-8 py-3 h-auto"
        >
          {status === 'loading' && (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Enviando...
            </>
          )}
          {status === 'success' && (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              ¡Suscrito!
            </>
          )}
          {(status === 'idle' || status === 'error') && 'Suscribirse'}
        </Button>
      </div>
      
      {status === 'error' && errorMessage && (
        <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          {errorMessage}
        </div>
      )}
      
      {status === 'success' && (
        <div className="flex items-center gap-2 mt-3 text-green-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
        </div>
      )}
    </form>
  );
}
