import * as React from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Icon to display on the left side of the input */
  icon?: React.ReactNode
  /** Error message to display below the input */
  error?: string
  /** Label text to display above the input */
  label?: string
  /** Whether the field is required (shows asterisk) */
  required?: boolean
  /** Additional className for the container */
  containerClassName?: string
}

/**
 * FormInput - A reusable form input component with icon, label, and error handling.
 *
 * @example
 * // Basic usage with icon and label
 * <FormInput
 *   icon={<User className="h-5 w-5" />}
 *   label="Nombre completo"
 *   name="nombre"
 *   placeholder="Ingresa tu nombre"
 *   required
 * />
 *
 * @example
 * // With error state
 * <FormInput
 *   icon={<Mail className="h-5 w-5" />}
 *   label="Correo electrónico"
 *   type="email"
 *   error="El correo electrónico es inválido"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 *
 * @example
 * // Without icon
 * <FormInput
 *   label="Teléfono"
 *   type="tel"
 *   placeholder="999 999 999"
 * />
 */
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      icon,
      error,
      label,
      required,
      containerClassName,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    // Generate ID from name if not provided
    const inputId = id || props.name

    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Icon */}
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full py-3 rounded-lg border focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none disabled:opacity-50 transition-colors',
              icon ? 'pl-12 pr-4' : 'px-4',
              error ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300',
              className,
            )}
            {...props}
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 flex-shrink-0" />
            {error}
          </p>
        )}
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'

export default FormInput
