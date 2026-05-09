export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-[22px] border-b backdrop-blur-sm"
      style={{
        background: 'color-mix(in oklab, var(--bg) 60%, transparent)',
        borderColor: 'var(--line)',
        transition: 'background 0.1s ease, border-color 0.1s ease',
      }}
    >
      {/* Brand */}
      <img
        src="/assets/PRAO LOGO BLANCO.png"
        alt="PRAO Estudio"
        style={{ height: 32, width: 'auto' }}
      />

      {/* Nav links — hidden on mobile */}
      <div className="flex gap-10 items-center max-[880px]:hidden">
        {[
          ['Lámpara', '#lampara'],
          ['Espacios', '#espacios'],
          ['Estudio', '#estudio'],
          ['Contacto', '#contacto'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-[11px] tracking-[0.28em] uppercase no-underline"
            style={{ color: 'var(--fg)', opacity: 0.7, transition: 'opacity 0.3s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
