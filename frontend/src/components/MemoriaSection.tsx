const blocks = [
  {
    num: '01',
    label: 'Qué',
    body: 'PRAO 001 es una lámpara de sobremesa modular, diseñada y fabricada a mano en Toledo. Está compuesta por siete piezas de madera de roble y aluminio anodizado que el usuario ensambla según su criterio. Dos focos orientables. Una edición de cincuenta unidades.',
  },
  {
    num: '02',
    label: 'Por qué',
    body: 'Vivimos rodeados de objetos que no hemos elegido realmente. La mayoría de las lámparas llegan decididas: una forma, un ángulo, una intención fija. PRAO nació de la pregunta contraria — ¿y si el objeto pudiera adaptarse a quien lo habita? No como producto configurable, sino como un sistema con carácter propio que acepta ser interpretado.',
  },
  {
    num: '03',
    label: 'Cómo',
    body: 'Cada pieza se mecaniza en roble macizo y se une mediante conexiones de aluminio anodizado en negro mate. El ensamblaje no requiere herramientas: encaje, tensión y equilibrio. El resultado no es aleatorio — hay una gramática en las piezas — pero sí personal. Cuarenta y ocho combinaciones posibles. Ninguna igual a otra.',
  },
]

export function MemoriaSection() {
  return (
    <section
      id="memoria"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#b9a76f',
              marginBottom: 20,
            }}
          >
            Memoria del objeto · PRAO 001
          </div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.1,
              color: 'var(--fg)',
              margin: 0,
              maxWidth: 620,
              opacity: 0.9,
            }}
          >
            Un objeto que se pregunta a sí mismo<br />qué quiere ser cuando lo habitas.
          </p>
        </div>

        {/* Blocks */}
        {blocks.map((block, i) => (
          <div key={block.num}>
            {/* Rule */}
            <div style={{ height: 1, background: 'var(--line)', marginBottom: 'clamp(32px, 4vw, 48px)' }} />

            <div
              className="max-[880px]:grid-cols-1 max-[880px]:gap-4"
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 'clamp(32px, 5vw, 72px)',
                alignItems: 'start',
                marginBottom: i < blocks.length - 1 ? 'clamp(32px, 4vw, 48px)' : 0,
              }}
            >
              {/* Label column */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    opacity: 0.4,
                    marginBottom: 8,
                  }}
                >
                  {block.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontStyle: 'italic',
                    fontSize: 'clamp(40px, 4.5vw, 72px)',
                    lineHeight: 0.9,
                    color: '#b9a76f',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {block.label}
                </div>
              </div>

              {/* Body column */}
              <p
                style={{
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  lineHeight: 1.85,
                  color: 'var(--fg)',
                  opacity: 0.72,
                  margin: 0,
                  paddingTop: 6,
                }}
              >
                {block.body}
              </p>
            </div>
          </div>
        ))}

        {/* Closing rule + quote */}
        <div style={{ height: 1, background: 'var(--line)', margin: 'clamp(32px, 4vw, 48px) 0 clamp(48px, 6vw, 72px)' }} />

        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              color: '#b9a76f',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}
          >
            No hay dos iguales.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              opacity: 0.35,
              margin: 0,
            }}
          >
            Toledo · MMXXVI
          </p>
        </div>

      </div>
    </section>
  )
}
