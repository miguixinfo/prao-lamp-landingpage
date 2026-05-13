import { useState, useEffect, type FormEvent } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  nombre: string
  email: string
}

const EMPTY_FORM: FormData = { nombre: '', email: '' }

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-[22px]">
      <label
        className="block font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
        style={{ opacity: 0.6 }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--line)',
  padding: '10px 0',
  color: 'var(--fg)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.3s',
}

export function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const id = setTimeout(() => {
        setForm(EMPTY_FORM)
        setSubmitted(false)
      }, 400)
      return () => clearTimeout(id)
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = '#b9a76f'
  }
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = 'var(--line)'
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'color-mix(in oklab, var(--bg) 70%, transparent)',
        backdropFilter: 'blur(20px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative border"
        style={{
          background: 'var(--bg)',
          borderColor: 'var(--line)',
          width: 'min(560px, 92vw)',
          padding: 'clamp(32px, 5vw, 56px)',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: isOpen ? 1 : 0,
          transition: 'transform 500ms cubic-bezier(.65,.05,.36,1), opacity 400ms',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border-none cursor-pointer"
          style={{ background: 'none', color: 'var(--fg)', opacity: 0.6, transition: 'opacity 0.3s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.6')}
          aria-label="Cerrar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Form view */}
        {!submitted ? (
          <>
            <h3
              className="font-display font-light m-0 mb-2"
              style={{ fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.01em' }}
            >
              La lista de espera
              <br />
              está <em className="text-gold">abierta</em>.
            </h3>
            <p
              className="m-0 mb-9 text-[13px]"
              style={{ opacity: 0.65, lineHeight: 1.5 }}
            >
              Déjanos cómo encontrarte. Te escribiremos solo cuando tengamos algo que decir.
            </p>

            <form onSubmit={handleSubmit}>
              <Field label="Nombre">
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange('nombre')}
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange('email')}
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </Field>

              <button
                type="submit"
                className="mt-3 w-full py-[18px] border-none cursor-pointer font-mono text-[11px] tracking-[0.35em] uppercase"
                style={{
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.background = '#b9a76f'
                  el.style.color = '#0a0a0a'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.background = 'var(--fg)'
                  el.style.color = 'var(--bg)'
                }}
              >
                Enviar
              </button>
            </form>
          </>
        ) : (
          /* Success view */
          <div className="text-center py-6">
            <div
              className="w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-6 text-gold"
              style={{ borderColor: '#b9a76f' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h3
              className="font-display font-light m-0 mb-3"
              style={{ fontSize: 32, lineHeight: 1.1 }}
            >
              Gracias por <em className="text-gold">estar</em>.
            </h3>
            <p className="text-sm m-0" style={{ opacity: 0.7 }}>
              Te escribiremos cuando la luz esté lista.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
