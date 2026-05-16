import { useState, useEffect } from 'react'

const NAV_LINKS = [
  ['Lámpara', '#lampara'],
  ['Memoria', '#memoria'],
  ['Noche', '#noche'],
  ['Contacto', '#contacto'],
] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
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
          style={{ height: 24, width: 'auto' }}
        />

        {/* Nav links — desktop */}
        <div className="flex gap-10 items-center max-[880px]:hidden">
          {NAV_LINKS.map(([label, href]) => (
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

        {/* Hamburger button — mobile only */}
        <button
          className="hidden max-[880px]:flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-0 cursor-pointer p-0"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--fg)',
              opacity: menuOpen ? 0 : 0.7,
              transform: menuOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 hidden max-[880px]:block pointer-events-none"
        style={{
          background: 'var(--bg)',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
          paddingTop: 80,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 pb-20">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="text-[13px] tracking-[0.35em] uppercase no-underline"
              style={{ color: 'var(--fg)', opacity: 0.75, transition: 'opacity 0.3s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.75')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
