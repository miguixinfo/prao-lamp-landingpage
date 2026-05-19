const lamps = [
  { src: '/assets/night-lamp/noche 1.webp', delay: '0s', duration: '7s' },
  { src: '/assets/night-lamp/noche 2.webp', delay: '1.8s', duration: '8.5s' },
  { src: '/assets/night-lamp/noche 3.webp', delay: '0.9s', duration: '6.5s' },
]

export function NightSection() {
  return (
    <section
      id="noche"
      style={{
        background: '#010012',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 60px) clamp(60px, 8vh, 100px)',
        gap: 'clamp(60px, 8vh, 96px)',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: '#b9a76f',
            marginBottom: 16,
            opacity: 0.8,
          }}
        >
          PRAO 001 · Modo noche
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'normal',
            fontSize: 'clamp(24px, 3.75vw, 60px)',
            lineHeight: 1,
            letterSpacing: '0.01em',
            color: '#b9a76f',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          MODO NOCHE
        </h2>
      </div>

      {/* Images */}
      <div
        className="flex flex-row max-[880px]:flex-col items-end max-[880px]:items-center justify-center w-full"
        style={{
          gap: 'clamp(16px, 4vw, 56px)',
          maxWidth: 1200,
        }}
      >
        {lamps.map((lamp, i) => (
          <img
            key={i}
            src={lamp.src}
            alt={`Lámpara PRAO de noche, vista ${i + 1}`}
            loading="lazy"
            className="w-[clamp(180px,28vw,400px)] max-[880px]:w-[88vw]"
            style={{
              display: 'block',
              height: 'auto',
              animation: `lamp-float ${lamp.duration} ease-in-out infinite`,
              animationDelay: lamp.delay,
              willChange: 'transform',
            }}
          />
        ))}
      </div>
    </section>
  )
}
