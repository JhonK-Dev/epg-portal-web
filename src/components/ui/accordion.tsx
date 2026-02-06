import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  id: string | number
  title: string | ReactNode
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string | number | null
  className?: string
  itemClassName?: string
  headerClassName?: string
  contentClassName?: string
  iconClassName?: string
  allowMultiple?: boolean
}

export function Accordion({
  items,
  defaultOpenId = null,
  className = '',
  itemClassName = 'bg-white rounded-lg border overflow-hidden',
  headerClassName = 'w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors',
  contentClassName = 'px-4 pb-4',
  iconClassName = 'h-5 w-5 text-gray-500 flex-shrink-0 transition-transform',
  allowMultiple = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string | number>>(
    defaultOpenId !== null ? new Set([defaultOpenId]) : new Set(),
  )

  const isOpen = (id: string | number) => openIds.has(id)

  const toggleItem = (id: string | number) => {
    setOpenIds((prev) => {
      const newSet = allowMultiple ? new Set(prev) : new Set<string | number>()
      if (prev.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className={itemClassName}>
          <button
            onClick={() => toggleItem(item.id)}
            className={headerClassName}
          >
            <span className="font-medium text-gray-900 pr-4">{item.title}</span>
            <ChevronDown
              className={`${iconClassName} ${
                isOpen(item.id) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isOpen(item.id) && (
            <div className={contentClassName}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}
