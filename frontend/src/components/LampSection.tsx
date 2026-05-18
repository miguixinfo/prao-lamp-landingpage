import { useState, useRef, useEffect, useCallback } from 'react'
import { type Theme } from '../context/ThemeContext'

type LampMode = Theme

interface LampImage {
  src: string
  cap: string
}

const DAY_PATH = '/assets/Ascendente%20Modo%20D%C3%ADa'
const NIGHT_PATH = '/assets/Ascendente%20Modo%20Noche'

const IMAGES: Record<LampMode, LampImage[]> = {
  day: [
    { src: `${DAY_PATH}/asc1.png`, cap: 'Configuración · 01' },
    { src: `${DAY_PATH}/asc2.png`, cap: 'Configuración · 02' },
    { src: `${DAY_PATH}/asc3.png`, cap: 'Configuración · 03' },
    { src: `${DAY_PATH}/asc4.png`, cap: 'Configuración · 04' },
    { src: `${DAY_PATH}/asc5.png`, cap: 'Detalle · 05' },
    { src: `${DAY_PATH}/asc6.png`, cap: 'Detalle · 06' },
  ],
  night: [
    { src: `${NIGHT_PATH}/n1.png`, cap: 'Configuración · 01' },
    { src: `${NIGHT_PATH}/n2.png`, cap: 'Configuración · 02' },
    { src: `${NIGHT_PATH}/n3.png`, cap: 'Configuración · 03' },
    { src: `${NIGHT_PATH}/n4.png`, cap: 'Configuración · 04' },
    { src: `${NIGHT_PATH}/n5.png`, cap: 'Detalle · 05' },
    { src: `${NIGHT_PATH}/n6.png`, cap: 'Detalle · 06' },
  ],
}

export function LampSection() {
  const [lampMode, setLampMode] = useState<LampMode>('day')
  const [idx, setIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [slideW, setSlideW] = useState(0)

  const images = IMAGES[lampMode]
  const current = Math.max(0, Math.min(idx, images.length - 1))
  const isNight = lampMode === 'night'

  const calcSlideWidth = useCallback(() => {
    const first = trackRef.current?.children[0] as HTMLElement | null
    if (first) setSlideW(first.getBoundingClientRect().width + 24)
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(calcSlideWidth)
    window.addEventListener('resize', calcSlideWidth)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', calcSlideWidth)
    }
  }, [calcSlideWidth, lampMode])

  const switchMode = (mode: LampMode) => {
    setLampMode(mode)
    setIdx(0)
  }

  const sectionColor = 'var(--fg)'
  const sectionBg = isNight ? '#013a4a' : 'transparent'

  return (
    <section
      id="lampara"
      className="relative border-t"
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px) clamp(80px, 11vw, 160px)',
        background: sectionBg,
        color: sectionColor,
        borderColor: 'var(--line)',
        transition: 'background 600ms ease, color 600ms ease, border-color var(--theme-t)',
      }}
    >
      {/* Section header */}
      <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-20 max-[880px]:gap-8 mb-24 max-[880px]:mb-14">
        <div>
          <div
            className="font-mono text-[11px] tracking-[0.35em] uppercase mb-6"
            style={{ opacity: 0.5 }}
          >
            01 — La pieza
          </div>
          <h2
            className="font-display font-light m-0"
            style={{
              fontSize: 'clamp(21px, 2.63vw, 42px)',
              lineHeight: 1.15,
              letterSpacing: '0em',
            }}
          >
            Una lámpara
            <br />
            que se <em className="text-gold">juega</em>.
          </h2>
        </div>
        <div
          className="text-base self-end"
          style={{ maxWidth: 460, lineHeight: 1.65, opacity: 0.8 }}
        >
          <span
            className="font-display italic text-gold block mb-[18px]"
            style={{ fontSize: 22, lineHeight: 1.3 }}
          >
            "No diseñamos lámparas. Diseñamos la forma en que la luz ocupa un espacio."
          </span>
          Dos familias de piezas en diálogo: planos opacos que absorben y elementos acanalados
          translúcidos que dispersan. Cada módulo se ensambla, se desensambla y se recompone
          tantas veces como quieras.
        </div>
      </div>

      {/* Carousel */}
      <div className="flex flex-col gap-10">
        {/* Controls row */}
        <div className="flex justify-between items-center px-1">
          {/* Day / Night mode toggle */}
          <div
            className="inline-flex rounded-full p-1 font-mono text-[10px] tracking-[0.25em] uppercase border"
            style={{ borderColor: 'currentColor' }}
          >
            {(['day', 'night'] as const).map(m => {
              const active = lampMode === m
              return (
                <button
                  key={m}
                  onClick={() => switchMode(m)}
                  className="rounded-full px-[18px] py-2 cursor-pointer border-none"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'inherit',
                    letterSpacing: 'inherit',
                    textTransform: 'inherit',
                    background: active ? 'currentColor' : 'transparent',
                    color: active ? 'var(--bg)' : 'currentColor',
                    transition: 'background 400ms, color 400ms',
                  }}
                >
                  <span>{m === 'day' ? 'Día' : 'Noche'}</span>
                </button>
              )
            })}
          </div>

          {/* Counter */}
          <span className="font-mono text-[11px] tracking-[0.3em]">
            {String(current + 1).padStart(2, '0')}
            <span className="mx-2" style={{ opacity: 0.4 }}>
              —
            </span>
            <span style={{ opacity: 0.4 }}>{String(images.length).padStart(2, '0')}</span>
          </span>

          {/* Prev / Next */}
          <div className="flex gap-3">
            {[
              { label: 'Anterior', path: 'M15 6l-6 6 6 6', action: () => setIdx(i => Math.max(0, i - 1)) },
              { label: 'Siguiente', path: 'M9 6l6 6-6 6', action: () => setIdx(i => Math.min(images.length - 1, i + 1)) },
            ].map(btn => (
              <button
                key={btn.label}
                onClick={btn.action}
                aria-label={btn.label}
                className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border"
                style={{
                  borderColor: 'currentColor',
                  background: 'transparent',
                  color: 'currentColor',
                  opacity: 0.6,
                  transition: 'opacity 0.3s, background 0.3s, color 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.opacity = '1'
                  el.style.background = 'currentColor'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.opacity = '0.6'
                  el.style.background = 'transparent'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d={btn.path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{
              transform: `translateX(${-current * slideW}px)`,
              transition: 'transform 800ms cubic-bezier(.65,.05,.36,1)',
            }}
          >
            {images.map((img, i) => (
              <div
                key={`${lampMode}-${i}`}
                className="carousel-slide shrink-0"
                style={{
                  background: isNight ? '#0e0e0e' : 'var(--surface)',
                  transition: 'background 400ms',
                }}
              >
                <img
                  src={img.src}
                  alt={img.cap}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                  style={{
                    transform: i === current ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 1200ms ease, opacity 800ms',
                  }}
                />
                <div className="caption">{img.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
