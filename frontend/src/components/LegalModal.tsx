import { useEffect } from 'react'

export type LegalDoc = 'aviso-legal' | 'privacidad' | 'terminos'

interface Props {
  doc: LegalDoc | null
  onClose: () => void
}

const docs: Record<LegalDoc, { title: string; eyebrow: string; sections: { heading: string; body: string }[] }> = {
  'aviso-legal': {
    title: 'Aviso Legal',
    eyebrow: 'praostudio.com · Última actualización: 16 de mayo de 2026',
    sections: [
      {
        heading: '1. Identificación',
        body: 'El sitio web praostudio.com es titularidad de PRAO. Para cualquier comunicación, el usuario puede dirigirse a PRAO a través del formulario de contacto disponible en el Sitio.',
      },
      {
        heading: '2. Objeto',
        body: 'El presente Aviso Legal regula el acceso y uso del Sitio. Al acceder al mismo, el usuario acepta las condiciones aquí recogidas, así como los Términos y Condiciones y la Política de Privacidad publicados en el Sitio.',
      },
      {
        heading: '3. Propiedad intelectual',
        body: 'Todos los contenidos del Sitio, incluyendo diseños, textos, imágenes, vídeos, logotipos y código, son propiedad de PRAO o se usan con autorización. Su reproducción o uso sin consentimiento previo está prohibido.',
      },
      {
        heading: '4. Exclusión de responsabilidad',
        body: 'PRAO no se responsabiliza de posibles errores en los contenidos del Sitio ni de los daños derivados de su uso. Tampoco se responsabiliza del contenido de páginas externas enlazadas desde el Sitio.',
      },
      {
        heading: '5. Legislación aplicable',
        body: 'El presente Aviso Legal se rige por la legislación española.',
      },
    ],
  },
  'privacidad': {
    title: 'Política de Privacidad',
    eyebrow: 'praostudio.com · Última actualización: 16 de mayo de 2026',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: 'El responsable del tratamiento de los datos personales recogidos a través del Sitio praostudio.com es PRAO. Para cualquier cuestión relativa a la protección de datos, el usuario puede contactar a través del formulario disponible en el Sitio.',
      },
      {
        heading: '2. Datos recogidos',
        body: 'A través del formulario de lista de espera se recogen únicamente los siguientes datos: nombre y dirección de correo electrónico.',
      },
      {
        heading: '3. Finalidad del tratamiento',
        body: 'Los datos se recogen con la finalidad exclusiva de gestionar la lista de espera e informar al usuario sobre la disponibilidad futura de los productos de PRAO.',
      },
      {
        heading: '4. Base legal',
        body: 'El tratamiento se basa en el consentimiento del usuario, otorgado de forma voluntaria al enviar el formulario de inscripción.',
      },
      {
        heading: '5. Conservación de los datos',
        body: 'Los datos se conservarán mientras el usuario mantenga su inscripción en la lista de espera o hasta que solicite su supresión.',
      },
      {
        heading: '6. Comunicación a terceros',
        body: 'PRAO no cede ni comparte los datos personales de los usuarios con terceros.',
      },
      {
        heading: '7. Analítica web',
        body: 'El Sitio utiliza una herramienta analítica que no emplea cookies ni recopila datos personales identificativos. Su único propósito es obtener estadísticas agregadas y anónimas sobre el uso del Sitio.',
      },
      {
        heading: '8. Derechos del usuario',
        body: 'El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, dirigiéndose a PRAO a través del formulario de contacto del Sitio. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.',
      },
      {
        heading: '9. Seguridad',
        body: 'PRAO adopta las medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida o alteración.',
      },
    ],
  },
  'terminos': {
    title: 'Términos y Condiciones',
    eyebrow: 'praostudio.com · Última actualización: 16 de mayo de 2026',
    sections: [
      {
        heading: '1. Objeto',
        body: 'Los presentes Términos y Condiciones regulan el acceso y uso del sitio web praostudio.com (en adelante, «el Sitio»), gestionado por PRAO.\n\nEl Sitio tiene como finalidad presentar un proyecto de diseño y permitir a los usuarios inscribirse en una lista de espera facilitando su nombre y correo electrónico. El Sitio no es una tienda en línea y no permite realizar compras ni pagos.',
      },
      {
        heading: '2. Lista de espera',
        body: 'La inscripción en la lista de espera es voluntaria y gratuita. No supone la formalización de ningún contrato ni genera obligación de compra para el usuario.\n\nEl tratamiento de los datos facilitados se rige por la Política de Privacidad, disponible en el Sitio.',
      },
      {
        heading: '3. Uso del Sitio',
        body: 'El usuario se compromete a utilizar el Sitio de forma lícita, conforme a la buena fe y al orden público, y a no emplearlo de manera que pueda dañar o impedir su funcionamiento.',
      },
      {
        heading: '4. Propiedad intelectual',
        body: 'Todos los contenidos del Sitio son propiedad de PRAO o se utilizan con autorización. Queda prohibida su reproducción, distribución o transformación sin consentimiento previo y por escrito de PRAO.',
      },
      {
        heading: '5. Limitación de responsabilidad',
        body: 'PRAO no garantiza la disponibilidad ininterrumpida del Sitio ni la ausencia de errores, aunque adoptará las medidas razonables para su correcto funcionamiento.\n\nPRAO no se responsabiliza de los daños derivados de interrupciones o fallos técnicos ajenos a su control, ni del contenido de sitios web de terceros a los que pueda enlazarse desde el Sitio.',
      },
      {
        heading: '6. Modificaciones',
        body: 'PRAO se reserva el derecho de modificar en cualquier momento los contenidos del Sitio y los presentes Términos y Condiciones. La fecha de última actualización figura al inicio del documento.',
      },
      {
        heading: '7. Legislación aplicable',
        body: 'Estos Términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales que correspondan conforme a la normativa vigente.',
      },
      {
        heading: '8. Contacto',
        body: 'Para cualquier consulta, el usuario puede dirigirse a PRAO a través del formulario de contacto disponible en el Sitio.',
      },
    ],
  },
}

export function LegalModal({ doc, onClose }: Props) {
  const isOpen = doc !== null
  const content = doc ? docs[doc] : null

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center"
      style={{
        background: 'rgba(1,0,18,0.7)',
        backdropFilter: 'blur(12px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.35s',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          background: '#0c0b1a',
          borderTop: '1px solid var(--line)',
          width: '100%',
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateY(0)' : 'translateY(40px)',
          transition: 'transform 0.4s cubic-bezier(0.65,0.05,0.36,1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(20px, 3vw, 32px) clamp(24px, 5vw, 80px)',
            borderBottom: '1px solid var(--line)',
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#b9a76f', marginBottom: 6, opacity: 0.8 }}>
              PRAO · Legal
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: 'clamp(22px, 3vw, 40px)', color: '#b9a76f', margin: 0, letterSpacing: '0.01em', textTransform: 'uppercase', lineHeight: 1 }}>
              {content?.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{ background: 'none', border: 'none', color: 'var(--fg)', opacity: 0.5, cursor: 'pointer', padding: 8, transition: 'opacity 0.2s', flexShrink: 0 }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.5')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: 'auto', padding: 'clamp(32px, 4vw, 56px) clamp(24px, 5vw, 80px)', flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.3em', opacity: 0.35, marginBottom: 'clamp(32px, 4vw, 48px)', textTransform: 'uppercase' }}>
            {content?.eyebrow}
          </p>

          <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 3vw, 40px)' }}>
            {content?.sections.map((s, i) => (
              <div key={i}>
                <div style={{ height: 1, background: 'var(--line)', marginBottom: 'clamp(16px, 2vw, 24px)' }} />
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#b9a76f', margin: '0 0 12px', fontWeight: 'normal' }}>
                  {s.heading}
                </h3>
                {s.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--fg)', opacity: 0.72, margin: j > 0 ? '12px 0 0' : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--line)', margin: 'clamp(32px, 4vw, 48px) 0 clamp(20px, 3vw, 32px)' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.35em', opacity: 0.3, margin: 0, textTransform: 'uppercase' }}>
            © PRAO — praostudio.com
          </p>
        </div>
      </div>
    </div>
  )
}
