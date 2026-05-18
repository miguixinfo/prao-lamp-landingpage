import { useState, useEffect, useCallback } from 'react'
import { useScrollColor } from '../hooks/useScrollColor'

const images = [
  '/assets/carrusel/s1.webp',
  '/assets/carrusel/s2.webp',
  '/assets/carrusel/s3.webp',
  '/assets/carrusel/s4.webp',
  '/assets/carrusel/s5.webp',
  '/assets/carrusel/s6.webp',
  '/assets/carrusel/s7.webp',
]



export function ProductMemoriaSection() {
  const sectionRef = useScrollColor<HTMLElement>('#013A4A', '#010012', 0, 1)

  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => setCurrent(index), [])
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
      ref={sectionRef}
      id="lampara"
      style={{ background: '#013A4A' }}
    >
      {/* ── PRODUCT BLOCK (carousel + description) ── */}
      <div
        className="product-block-wrapper"
        style={{ paddingLeft: 'clamp(24px, 4vw, 60px)', paddingRight: 'clamp(24px, 4vw, 60px)' }}
      >
        <div
          className="product-block-grid"
          style={{
            gap: 'clamp(32px, 4vw, 64px)',
            maxWidth: 1400,
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* LEFT — Carousel */}
          <div className="product-carousel-col">
            <div
              style={{
                position: 'relative',
                flex: 1,
                overflow: 'hidden',
                background: 'var(--surface)',
                minHeight: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  height: '100%',
                  transform: `translateX(-${current * 100}%)`,
                  transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform',
                }}
              >
                {images.map((src, i) => (
                  <div key={src} style={{ flexShrink: 0, width: '100%', height: '100%' }}>
                    <img
                      src={src}
                      alt={`Vista ${i + 1} de la lámpara PRAO`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </div>

              <ArrowButton side="left" onClick={() => navigate(-1)} label="Foto anterior" />
              <ArrowButton side="right" onClick={() => navigate(1)} label="Foto siguiente" />

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

            <div style={{ display: 'flex', gap: 6, justifyContent: 'center', paddingTop: 12, flexShrink: 0 }}>
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
            className="product-text-col"
            style={{ paddingLeft: 'clamp(0px, 2vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#b9a76f', marginBottom: 18 }}>
              Lámpara modular · Pieza 001
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: 'clamp(24px, 2.63vw, 45px)', lineHeight: 1, letterSpacing: '0.01em', color: '#b9a76f', margin: '0 0 20px', textTransform: 'uppercase' }}>
              PRAO 001
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'PRAO 001 nace de la inquietud por transformar lo estático en un diálogo constante entre el objeto y quien lo habita.',
                'Bajo la luz del sol, esta lámpara se manifiesta como una pieza de arte geométrica, invitando a la exploración táctil y al juego. Al caer la noche, se redescubre a sí misma, adoptando la forma perfecta para proyectar una luz que da sentido a cualquier espacio.',
                'Esta pieza es el resultado de un meticuloso trabajo de orfebrería contemporánea. Aunque nace de tecnologías de vanguardia, como el acero de alta precisión y la impresión 3D, su alma reside en las horas de diseño detallado y en el ensamblaje exacto de sus nueve componentes. Cada unidad es tratada con la misma devoción que una joya, asegurando que cada encaje sea perfecto y cada arista, intencionada.',
              ].map((text, i) => (
                <p key={i} style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--fg)', opacity: 0.72, margin: 0, textAlign: 'justify', hyphens: 'auto' }} lang="es">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MEMORIA BLOCK ── */}
      <div
        id="memoria"
        style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)' }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#b9a76f', marginBottom: 20 }}>
              Memoria del objeto · PRAO 001
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: 'clamp(24px, 3.38vw, 54px)', lineHeight: 1, color: '#b9a76f', margin: 0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>
                MEMORIA
              </p>
              <img
                src="/assets/eat-logo-final.webp"
                alt="EAT logo"
                loading="lazy"
                style={{ height: 'clamp(24px, 3.38vw, 54px)', width: 'auto', opacity: 0.85 }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 36px)' }}>
            {[
              'PRAO 001 se crea a través de dos estudiantes de la Escuela de Arquitectura de Toledo. Una lámpara que se define por un contraste técnico de nueve componentes: la solidez estructural del acero de corte preciso y la versatilidad de la manufactura aditiva. Un ejercicio de orfebrería contemporánea donde la pureza del metal y la innovación 3D se ensamblan en un ajuste manual perfecto.',
              'Este proyecto no responde directamente a la etiqueta convencional de lámpara: su verdadera esencia es el juego. Es una pieza que pide ser tocada, transformada y explorada constantemente. Bajo un sistema de reglas de ensamble meticulosas, sus componentes despliegan más de 260.000 formas posibles.',
              'Con nueves piezas y 36 ranuras, la lámpara ofrece múltiples combinaciones geométricas. El juego trasciende la forma al integrar la luz: dos focos magnéticos se activan al imantarse con el acero, cerrando el circuito instantáneamente. Un ejercicio de precisión técnica donde el usuario diseña tanto el volumen como la atmósfera, convirtiendo cada gesto en una nueva arquitectura.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  lineHeight: 1.9,
                  color: 'var(--fg)',
                  opacity: 0.72,
                  margin: 0,
                  textAlign: 'justify',
                  hyphens: 'auto',
                }}
                lang="es"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowButton({ side, onClick, label }: { side: 'left' | 'right'; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="carousel-arrow"
      style={{ position: 'absolute', [side]: 14, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(8px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s, border-color 0.2s', padding: 0 }}
    >
      {side === 'left'
        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      }
    </button>
  )
}
