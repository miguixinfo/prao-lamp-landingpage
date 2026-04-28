export function Hero() {
  return (
    <section className="relative min-h-screen grid overflow-hidden" style={{ gridTemplateRows: '1fr auto' }}>
      {/* Background: grid pattern + radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--surface)',
          transition: 'background var(--theme-t)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent 0 40px, color-mix(in oklab, var(--fg) 5%, transparent) 40px 41px),
              radial-gradient(ellipse at center, color-mix(in oklab, var(--fg) 6%, transparent) 0%, transparent 70%)
            `,
          }}
        />
        {/* Video placeholder label */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap"
          style={{ color: 'var(--fg)', opacity: 0.35 }}
        >
          video / loop · proceso de creación
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, transparent 0%, var(--bg) 100%)',
          opacity: 0.55,
          transition: 'background var(--theme-t)',
        }}
      />

      {/* Vertical side text */}
      <div
        className="absolute right-10 top-1/2 font-mono text-[10px] tracking-[0.45em] uppercase whitespace-nowrap max-[880px]:hidden"
        style={{
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'right center',
          color: 'var(--fg)',
          opacity: 0.4,
        }}
      >
        PRAO · MMXXVI · TOLEDO
      </div>

      {/* Content grid */}
      <div
        className="relative z-10 grid grid-cols-2 max-[880px]:grid-cols-1 gap-10 items-end min-h-screen"
        style={{ padding: '140px clamp(24px, 4vw, 60px) 80px' }}
      >
        {/* Eyebrow */}
        <div
          className="col-span-full self-start flex items-center gap-4 font-mono text-[11px] tracking-[0.35em] uppercase"
          style={{ opacity: 0.55 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block shrink-0" />
          <span>Preventa abierta · Castellana, 12 mayo</span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-light m-0"
          style={{
            fontSize: 'clamp(56px, 9vw, 148px)',
            lineHeight: 0.95,
            letterSpacing: '-0.015em',
          }}
        >
          El arte de
          <br />
          habitar la <em className="text-gold">luz</em>.
        </h1>

        {/* Meta */}
        <div
          className="justify-self-end text-right max-w-[320px] max-[880px]:justify-self-start max-[880px]:text-left"
        >
          <p
            className="text-sm mb-4"
            style={{ lineHeight: 1.6, opacity: 0.75 }}
          >
            Una lámpara modular nacida en la Escuela de Arquitectura de Toledo. Siete piezas. Dos
            focos. Una forma que tú decides.
          </p>
          <span
            className="inline-flex items-center gap-[10px] px-[18px] py-[10px] border rounded-full font-mono text-[10px] tracking-[0.3em] uppercase"
            style={{ borderColor: 'var(--line)' }}
          >
            <span
              className="dot-pulse w-1.5 h-1.5 rounded-full bg-gold shrink-0 inline-block"
              style={{ boxShadow: '0 0 12px #b9a76f' }}
            />
            Pieza 001 · En preventa
          </span>
        </div>
      </div>
    </section>
  )
}
