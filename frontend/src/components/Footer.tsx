export function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-10 py-8 border-t font-mono text-[10px] tracking-[0.3em] uppercase max-[880px]:flex-col max-[880px]:gap-6 max-[880px]:text-center"
      style={{
        background: '#010012',
        borderColor: 'var(--line)',
        color: 'var(--fg)',
        opacity: 1,
      }}
    >
      <div>© 2026 · Prao Estudio</div>
      <div className="flex gap-8">
        {[
          ['Aviso legal', '#'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="no-underline"
            style={{ color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
