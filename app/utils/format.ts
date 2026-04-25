export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return value.toLocaleString('id-ID', options)
}

export function formatCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + 'M'
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + 'jt'
  }
  if (value >= 1_000) {
    return (value / 1_000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + 'rb'
  }
  return value.toLocaleString('id-ID')
}

export function formatCurrency(value: number, compact: boolean = true): string {
  if (compact) {
    return 'Rp ' + formatCompact(value)
  }
  return 'Rp ' + formatNumber(value)
}

// Alias for backward compatibility if needed, but it's better to update callers
export const formatRevenue = formatCompact
