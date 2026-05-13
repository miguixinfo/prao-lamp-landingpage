const images = [
  '/assets/tira-horizontal/t_1.webp',
  '/assets/tira-horizontal/t_2.webp',
  '/assets/tira-horizontal/t_3.webp',
  '/assets/tira-horizontal/t_4.webp',
  '/assets/tira-horizontal/t_5.webp',
  '/assets/tira-horizontal/t_6.webp',
]

export function HorizontalStrip() {
  return (
    <div style={{ display: 'flex', width: '100%', height: 'clamp(107px, 15vw, 227px)', overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`PRAO 001 — imagen ${i + 1}`}
          style={{ flex: '1 1 0', minWidth: 0, height: '100%', objectFit: 'cover', display: 'block', opacity: 0.65 }}
        />
      ))}
    </div>
  )
}
