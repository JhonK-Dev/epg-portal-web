import { FileText, Download } from 'lucide-react'
import { Badge } from './badge'

interface DocumentDownloadItemProps {
  name: string
  url: string
  type?: 'pdf' | 'docx' | 'xlsx'
  date?: string
  variant?: 'simple' | 'detailed'
  className?: string
}

const typeStyles = {
  pdf: { bg: 'bg-red-100', text: 'text-red-600' },
  docx: { bg: 'bg-blue-100', text: 'text-blue-600' },
  xlsx: { bg: 'bg-green-100', text: 'text-green-600' },
}

export function DocumentDownloadItem({
  name,
  url,
  type,
  date,
  variant = 'simple',
  className = '',
}: DocumentDownloadItemProps) {
  if (variant === 'simple') {
    return (
      <a
        href={url}
        className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group ${className}`}
      >
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-gray-900 group-hover:text-epg-navy truncate">
            {name}
          </p>
        </div>
        <Download className="h-4 w-4 text-gray-400 group-hover:text-epg-gold flex-shrink-0 ml-2" />
      </a>
    )
  }

  // detailed variant
  const style = type
    ? typeStyles[type]
    : { bg: 'bg-gray-100', text: 'text-gray-600' }

  return (
    <a
      href={url}
      className={`flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow group ${className}`}
    >
      <div
        className={`w-10 h-10 ${style.bg} rounded flex items-center justify-center flex-shrink-0`}
      >
        <FileText className={`w-5 h-5 ${style.text}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-epg-navy group-hover:text-epg-gold transition-colors truncate">
          {name}
        </h4>
        <div className="flex items-center gap-2">
          {type && (
            <Badge variant="outline" className="text-xs uppercase">
              {type}
            </Badge>
          )}
          {date && (
            <span className="text-xs text-gray-500">
              Actualizado: {new Date(date).toLocaleDateString('es-PE')}
            </span>
          )}
        </div>
      </div>
      <Download className="w-5 h-5 text-gray-400 group-hover:text-epg-gold flex-shrink-0" />
    </a>
  )
}
