import type { LegalDoc } from './LegalModal'

interface Props {
  onOpenLegal: (doc: LegalDoc) => void
}

export function Footer({ onOpenLegal }: Props) {
  const linkStyle = { color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' } as const

  return (
    <footer
      className="flex justify-between items-center px-10 py-8 border-t font-mono text-[10px] tracking-[0.3em] uppercase max-[880px]:flex-col max-[880px]:gap-6 max-[880px]:text-center"
      style={{ background: '#010012', borderColor: 'var(--line)', color: 'var(--fg)' }}
    >
      <div>© 2026 · Prao Estudio</div>
      <div className="flex gap-8 max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-4">
        <a href="#" className="footer-link no-underline" style={linkStyle}>
          Instagram
        </a>
        {(['aviso-legal', 'privacidad', 'terminos'] as LegalDoc[]).map((doc) => {
          const labels: Record<LegalDoc, string> = {
            'aviso-legal': 'Aviso legal',
            'privacidad': 'Privacidad',
            'terminos': 'Términos',
          }
          return (
            <button
              key={doc}
              onClick={() => onOpenLegal(doc)}
              className="footer-link bg-transparent border-none cursor-pointer font-mono text-[10px] tracking-[0.3em] uppercase p-0"
              style={linkStyle}
            >
              {labels[doc]}
            </button>
          )
        })}
        <a href="mailto:praostudio@gmail.com" className="footer-link no-underline" style={linkStyle}>
          praostudio@gmail.com
        </a>
      </div>
    </footer>
  )
}
