import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { FormInput } from '@/components/ui/form-input'
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  FileText,
  Send,
} from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  asunto?: string
  mensaje?: string
}

// Formspree endpoint - Replace with your actual Formspree form ID
const FORMSPREE_CONTACT_ID = 'mzzboqpn'

const asuntoOptions = [
  { value: '', label: 'Selecciona un asunto' },
  { value: 'informacion-programas', label: 'Información sobre programas' },
  { value: 'proceso-admision', label: 'Proceso de admisión' },
  { value: 'tramites-academicos', label: 'Trámites académicos' },
  { value: 'certificaciones', label: 'Certificaciones y constancias' },
  { value: 'soporte-tecnico', label: 'Soporte técnico (SIGAE, Aula Virtual)' },
  { value: 'convenios', label: 'Convenios institucionales' },
  { value: 'otro', label: 'Otro' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido'
    }

    if (!formData.asunto) {
      newErrors.asunto = 'Selecciona un asunto'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (formData.mensaje.trim().length < 20) {
      newErrors.mensaje = 'El mensaje debe tener al menos 20 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateForm()) {
      return
    }

    setStatus('loading')

    try {
      const asuntoLabel =
        asuntoOptions.find((opt) => opt.value === formData.asunto)?.label ||
        formData.asunto

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_CONTACT_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            asunto: asuntoLabel,
            mensaje: formData.mensaje,
            _subject: `[EPG UNAP] ${asuntoLabel} - ${formData.nombre}`,
          }),
        },
      )

      if (response.ok) {
        setStatus('success')
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      } else {
        throw new Error('Error al enviar')
      }
    } catch {
      setErrorMessage(
        'Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              ¡Mensaje enviado exitosamente!
            </h3>
            <p className="text-green-700 mb-6">
              Gracias por contactarnos. Responderemos a tu consulta en el menor
              tiempo posible.
            </p>
            <Button
              onClick={() => setStatus('idle')}
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-100"
            >
              Enviar otro mensaje
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-epg-navy">
          Envíanos un mensaje
        </CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <FormInput
            icon={<User className="h-5 w-5" />}
            label="Nombre completo"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="Ingresa tu nombre completo"
            error={errors.nombre}
            required
          />

          {/* Email */}
          <FormInput
            icon={<Mail className="h-5 w-5" />}
            label="Correo electrónico"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="tucorreo@ejemplo.com"
            error={errors.email}
            required
          />

          {/* Asunto */}
          <div>
            <label
              htmlFor="asunto"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Asunto <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none disabled:opacity-50 appearance-none bg-white ${
                  errors.asunto
                    ? 'border-red-500 ring-2 ring-red-200'
                    : 'border-gray-300'
                }`}
              >
                {asuntoOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.asunto && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.asunto}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensaje <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-epg-gold focus:border-transparent outline-none disabled:opacity-50 resize-none ${
                  errors.mensaje
                    ? 'border-red-500 ring-2 ring-red-200'
                    : 'border-gray-300'
                }`}
              />
            </div>
            <div className="flex justify-between mt-1">
              {errors.mensaje ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.mensaje}
                </p>
              ) : (
                <span />
              )}
              <span
                className={`text-xs ${formData.mensaje.length < 20 ? 'text-gray-400' : 'text-green-600'}`}
              >
                {formData.mensaje.length}/20 caracteres mínimo
              </span>
            </div>
          </div>

          {/* Error general */}
          {status === 'error' && errorMessage && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-epg-navy hover:bg-epg-navy-light text-white font-semibold py-3 h-auto"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Enviando mensaje...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar este formulario, aceptas nuestra{' '}
            <a
              href="/politica-privacidad"
              className="text-epg-gold hover:underline"
            >
              Política de Privacidad
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
