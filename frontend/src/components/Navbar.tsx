import { useTheme } from '../context/ThemeContext'

export function Navbar() {
  const { theme, toggle } = useTheme()
  const isNight = theme === 'night'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-[22px] border-b backdrop-blur-sm"
      style={{
        background: 'color-mix(in oklab, var(--bg) 60%, transparent)',
        borderColor: 'var(--line)',
        transition: 'background var(--theme-t), border-color var(--theme-t)',
      }}
    >
      {/* Brand */}
      <div className="font-display text-[18px] tracking-[0.45em] uppercase font-normal">
        PRAO
        <span className="text-[11px] tracking-[0.3em] ml-[14px]" style={{ opacity: 0.55 }}>
          ESTUDIO
        </span>
      </div>

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

      {/* Day/Night toggle */}
      <button
        onClick={toggle}
        className="flex items-center gap-[10px] cursor-pointer select-none border rounded-full px-3 py-[6px]"
        style={{
          borderColor: 'var(--line)',
          background: 'transparent',
          color: 'var(--fg)',
          transition: 'border-color var(--theme-t)',
        }}
        aria-label="Cambiar modo día/noche"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          {isNight ? 'Noche' : 'Día'}
        </span>
        <div
          className="relative w-8 h-4 rounded-full"
          style={{ background: 'color-mix(in oklab, var(--fg) 15%, transparent)' }}
        >
          <div
            className="absolute top-[2px] left-[2px] w-3 h-3 rounded-full bg-gold"
            style={{
              transform: isNight ? 'translateX(16px)' : 'translateX(0)',
              transition: 'transform 400ms cubic-bezier(.65,.05,.36,1)',
            }}
          />
        </div>
      </button>
    </nav>
  )
}
