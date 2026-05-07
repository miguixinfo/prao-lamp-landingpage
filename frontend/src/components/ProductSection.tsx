import { useState, useEffect, useCallback } from 'react'

const images = [
  '/assets/carrusel/s1.webp',
  '/assets/carrusel/s2.webp',
  '/assets/carrusel/s3.webp',
  '/assets/carrusel/s4.webp',
  '/assets/carrusel/s5.webp',
  '/assets/carrusel/s6.webp',
  '/assets/carrusel/s7.webp',
]

const features = [
  'Siete piezas modulares intercambiables',
  'Dos focos de luz orientables',
  'Madera de roble y aluminio anodizado',
  'Fabricación artesanal en Toledo',
  'Edición limitada · 50 unidades',
]

export function ProductSection() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const navigate = useCallback((dir: 1 | -1) => {
    setCurrent(i => (i + dir + images.length) % images.length)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])

  return (
    <section
      id="lampara"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px, 4vw, 60px)',
        background: 'var(--bg)',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="max-[880px]:grid-cols-1 max-[880px]:overflow-y-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: 'clamp(32px, 4vw, 64px)',
          alignItems: 'stretch',
          maxWidth: 1400,
          width: '100%',
          margin: '0 auto',
          height: 'calc(100% - 80px)',
        }}
      >
        {/* LEFT — Carousel */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {/* Image */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              overflow: 'hidden',
              background: 'var(--surface)',
              minHeight: 0,
            }}
          >
            {/* Sliding track */}
            <div
              style={{
                display: 'flex',
                height: '100%',
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {images.map((src, i) => (
                <div key={src} style={{ flexShrink: 0, width: '100%', height: '100%' }}>
                  <img
                    src={src}
                    alt={`Vista ${i + 1} de la lámpara PRAO`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>

            <ArrowButton side="left" onClick={() => navigate(-1)} label="Foto anterior" />
            <ArrowButton side="right" onClick={() => navigate(1)} label="Foto siguiente" />

            {/* Counter */}
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.35em',
                color: 'rgba(255,255,255,0.65)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              justifyContent: 'center',
              paddingTop: 12,
              flexShrink: 0,
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a foto ${i + 1}`}
                style={{
                  width: i === current ? 22 : 6,
                  height: 6,
                  borderRadius: 3,
                  border: 'none',
                  background: i === current ? '#b9a76f' : 'rgba(255,255,255,0.22)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Description */}
        <div
          className="max-[880px]:pl-0"
          style={{
            paddingLeft: 'clamp(0px, 2vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#b9a76f',
              marginBottom: 18,
            }}
          >
            Lámpara modular · Pieza 001
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(34px, 3.5vw, 58px)',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              color: 'var(--fg)',
              margin: '0 0 20px',
            }}
          >
            La lámpara<br />
            <span style={{ fontStyle: 'italic', color: '#b9a76f' }}>que tú construyes</span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'var(--fg)',
              opacity: 0.72,
              margin: '0 0 24px',
              maxWidth: 400,
            }}
          >
            Nacida en la Escuela de Arquitectura de Toledo, PRAO 001 es una lámpara
            modular de edición limitada. Siete piezas ensamblables, dos focos orientables
            y una forma que cada usuario decide. No hay dos iguales.
          </p>

          {/* Features */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {features.map(f => (
              <li
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 13,
                  letterSpacing: '0.02em',
                  color: 'var(--fg)',
                  opacity: 0.78,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#b9a76f',
                    flexShrink: 0,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--line)', marginBottom: 20 }} />

          {/* Footer note */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              opacity: 0.45,
              margin: 0,
            }}
          >
            Fabricado a mano · Toledo, España · MMXXVI
          </p>
        </div>
      </div>
    </section>
  )
}

function ArrowButton({
  side,
  onClick,
  label,
}: {
  side: 'left' | 'right'
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(0,0,0,0.6)'
        el.style.borderColor = 'rgba(255,255,255,0.65)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(0,0,0,0.28)'
        el.style.borderColor = 'rgba(255,255,255,0.3)'
      }}
      style={{
        position: 'absolute',
        [side]: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.3)',
        background: 'rgba(0,0,0,0.28)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        transition: 'background 0.2s, border-color 0.2s',
        padding: 0,
      }}
    >
      {side === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
