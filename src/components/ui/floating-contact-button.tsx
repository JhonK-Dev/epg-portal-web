'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ContactForm } from '@/features/contacto/components/ContactForm';

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 w-11 h-11 bg-epg-navy hover:bg-epg-navy-light rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-epg-gold focus:ring-offset-2"
        aria-label="Abrir formulario de contacto"
      >
        <MessageCircle className="w-5 h-5 text-epg-gold" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal - iOS Style Sheet */}
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 max-h-[50vh] w-[98%] max-w-2xl bg-white rounded-t-2xl shadow-2xl overflow-hidden transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Formulario de contacto"
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-8 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h2 className="text-base font-bold text-epg-navy">Escríbenos</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(50vh-50px)]">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-3">
              Completa el formulario y te contactaremos pronto.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
