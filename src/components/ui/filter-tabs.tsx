import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FilterTab {
  /** Unique identifier for the tab */
  id: string
  /** Display label for the tab */
  label: string
  /** Optional icon to display before the label */
  icon?: React.ReactNode
  /** Optional count to display in a badge */
  count?: number
}

export interface FilterTabsProps {
  /** Array of tab configurations */
  tabs: FilterTab[]
  /** ID of the currently active tab */
  activeTab: string
  /** Callback when a tab is clicked */
  onTabChange: (tabId: string) => void
  /** Visual style variant */
  variant?: 'pill' | 'rounded'
  /** Additional className for the container */
  className?: string
}

/**
 * FilterTabs - A reusable tabs component with optional icons and count badges.
 *
 * @example
 * // Basic usage with pill variant
 * <FilterTabs
 *   tabs={[
 *     { id: 'todas', label: 'Todas', count: 10 },
 *     { id: 'noticias', label: 'Noticias', icon: <Icon />, count: 5 }
 *   ]}
 *   activeTab={activeTab}
 *   onTabChange={setActiveTab}
 * />
 *
 * @example
 * // With rounded variant
 * <FilterTabs
 *   tabs={tabs}
 *   activeTab={filtro}
 *   onTabChange={setFiltro}
 *   variant="rounded"
 * />
 */
export function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
  variant = 'pill',
  className,
}: FilterTabsProps) {
  const baseButtonClasses =
    'flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all'

  const variantClasses = {
    pill: 'rounded-full',
    rounded: 'rounded-lg',
  }

  const activeClasses = 'bg-epg-navy text-white'
  const inactiveClasses = 'bg-gray-100 text-gray-600 hover:bg-gray-200'

  return (
    <div
      className={cn('flex overflow-x-auto gap-2 pb-2 lg:pb-0', className)}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            baseButtonClasses,
            variantClasses[variant],
            activeTab === tab.id ? activeClasses : inactiveClasses,
          )}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
        >
          {tab.icon && tab.icon}
          {tab.label}
          {tab.count !== undefined && (
            <span
              className={cn(
                'ml-1 text-xs px-2 py-0.5 rounded-full',
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200',
              )}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
