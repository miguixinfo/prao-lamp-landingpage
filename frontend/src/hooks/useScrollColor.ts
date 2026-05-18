import { useEffect, useRef } from 'react'

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

function interpolate(
  from: [number, number, number],
  to: [number, number, number],
  t: number
): string {
  const r = Math.round(from[0] + (to[0] - from[0]) * t)
  const g = Math.round(from[1] + (to[1] - from[1]) * t)
  const b = Math.round(from[2] + (to[2] - from[2]) * t)
  return `rgb(${r},${g},${b})`
}

/**
 * Interpolates the background of the returned ref element between two hex colors
 * proportional to scroll position within the element.
 *
 * startFraction:  0-1. Fraction of element height to skip before transition begins.
 * viewportLead:   0-1+. Viewport heights of "head start" — 1 means the transition
 *                 starts as soon as the section first enters the viewport from below.
 */
export function useScrollColor<T extends HTMLElement>(
  colorFrom: string,
  colorTo: string,
  startFraction = 0,
  viewportLead = 0
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from = hexToRgb(colorFrom)
    const to   = hexToRgb(colorTo)
    let rafId = 0

    const update = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        const rect             = el.getBoundingClientRect()
        const elHeight         = el.offsetHeight
        const vh               = window.innerHeight
        const scrolled         = vh * viewportLead - rect.top
        const transitionStart  = elHeight * startFraction
        const transitionLength = elHeight * (1 - startFraction)
        const progress = Math.max(0, Math.min(1, (scrolled - transitionStart) / transitionLength))
        const color = interpolate(from, to, progress)
        el.style.background = color
        document.documentElement.style.setProperty('--bg', color)
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(rafId)
    }
  }, [colorFrom, colorTo, startFraction, viewportLead])

  return ref
}
