import { useState } from 'react'
import { COSTS } from './config/tools'

export const PRESETS = [
  { label: '€50',             rate: 50  },
  { label: '€75',    rate: 75  },
  { label: '€100',       rate: 100 },
  { label: '€120',         rate: 120 },
 
]

export function fmt(n) {
  return '€' + Math.round(n).toLocaleString('nl-NL')
}

export function fmtHrs(n) {
  const r = Math.round(n * 10) / 10
  return r + ' uur'
}

export function beHrs(cost, rate) {
  return fmtHrs(cost / rate)
}

export function verdictFor(pct) {
  if (pct < 15)  return { label: '✓ GO',   cls: 'verdict-go'   }
  if (pct < 35)  return { label: '⚠ RANDGEVAL', cls: 'verdict-edge' }
  return               { label: '✗ NEE',   cls: 'verdict-no'   }
}

export function costColorFor(pct) {
  if (pct < 15)  return 'accent'
  if (pct < 35)  return 'warn'
  return               'danger'
}

export function useROI() {
  const [rate, setRate]         = useState(75)
  const [monthlyHours, setMH]   = useState(144)
  const [gain, setGain]         = useState(15)

  const hoursSaved  = monthlyHours * (gain / 100)
  const valueSaved  = hoursSaved * rate
  const roi         = valueSaved / 30

  const tiers = Object.entries(COSTS).map(([key, tier]) => {
    const pct = Math.min((tier.eur / valueSaved) * 100, 100)
    return {
      key,
      ...tier,
      pct,
      verdict:   verdictFor(pct),
      costColor: costColorFor(pct),
      breakEven: beHrs(tier.eur, rate),
    }
  })

  return {
    rate,         setRate,
    monthlyHours, setMH,
    gain,         setGain,
    hoursSaved,
    valueSaved,
    roi,
    tiers,
  }
}
