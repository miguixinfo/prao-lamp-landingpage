interface Props {
  onOpenModal: () => void
}

export function ContactSection({ onOpenModal }: Props) {
  return (
    <section
      id="contacto"
      className="relative border-t text-center"
      style={{
        padding: 'clamp(100px, 12vw, 180px) clamp(24px, 4vw, 60px) clamp(120px, 14vw, 200px)',
        background: '#000000',
        borderColor: 'var(--line)',
      }}
    >
      <div
        className="font-mono text-[11px] tracking-[0.35em] uppercase mb-8"
        style={{ opacity: 0.5 }}
      >
        03 — Únete
      </div>

      <h2
        className="font-display font-light m-0 mb-8"
        style={{
          fontSize: 'clamp(32px, 4.5vw, 72px)',
          lineHeight: 1.15,
          letterSpacing: '0em',
        }}
      >
        Deja tu <em className="text-gold">rastro</em>.
      </h2>

      <p
        className="max-w-[480px] mx-auto mb-14 text-base"
        style={{ lineHeight: 1.65, opacity: 0.75 }}
      >
        La preventa es íntima y por invitación. Si quieres recibir la información antes que nadie,
        escríbenos.
      </p>

      <button
        onClick={onOpenModal}
        className="inline-flex items-center gap-[14px] px-9 py-[22px] font-mono text-[11px] tracking-[0.35em] uppercase cursor-pointer border-none"
        style={{
          background: 'var(--fg)',
          color: 'var(--bg)',
          transition: 'background 0.3s, color 0.3s, transform 0.3s',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.background = '#b9a76f'
          el.style.color = '#0a0a0a'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.background = 'var(--fg)'
          el.style.color = 'var(--bg)'
          el.style.transform = 'translateY(0)'
        }}
      >
        Solicitar información
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </section>
  )
}
