interface RoomCard {
  name: string
  label: string
  num: string
  colStart: number
  colSpan: number
  marginTop?: number
  ratio: string
}

const ROOMS: RoomCard[] = [
  { name: 'room-1', label: 'Salón principal · imagen pendiente ·', num: '— 01', colStart: 1, colSpan: 5, ratio: '4 / 5' },
  { name: 'room-2', label: 'Estudio · imagen pendiente ·', num: '— 02', colStart: 6, colSpan: 4, marginTop: 80, ratio: '1 / 1' },
  { name: 'room-3', label: 'Rincón de lectura', num: '— 03', colStart: 10, colSpan: 3, ratio: '3 / 4' },
  { name: 'room-4', label: 'Dormitorio · imagen pendiente ·', num: '— 04', colStart: 2, colSpan: 4, marginTop: 60, ratio: '1 / 1' },
  { name: 'room-5', label: 'Comedor panorámico · imagen pendiente ·', num: '— 05', colStart: 7, colSpan: 6, ratio: '16 / 10' },
]

const ROOM_NAMES = ['Salón', 'Estudio', 'Lectura', 'Dormitorio', 'Comedor']

export function RoomsSection() {
  return (
    <section
      id="espacios"
      className="relative border-t"
      style={{
        padding: 'clamp(80px, 11vw, 160px) clamp(24px, 4vw, 60px)',
        borderColor: 'var(--line)',
        transition: 'border-color var(--theme-t)',
      }}
    >
      {/* Decorative vertical word */}
      <div
        className="absolute left-6 top-1/2 font-display italic pointer-events-none select-none max-[880px]:hidden"
        style={{
          fontSize: 88,
          color: '#b9a76f',
          opacity: 0.18,
          whiteSpace: 'nowrap',
          letterSpacing: '-0.02em',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'left center',
        }}
      >
        compón
      </div>

      {/* Section header */}
      <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-20 max-[880px]:gap-8 mb-24 max-[880px]:mb-14">
        <div>
          <div
            className="font-mono text-[11px] tracking-[0.35em] uppercase mb-6"
            style={{ opacity: 0.5 }}
          >
            02 — En tu casa
          </div>
          <h2
            className="font-display font-light m-0"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 56px)',
              lineHeight: 1.15,
              letterSpacing: '0em',
            }}
          >
            Cómo te quedaría.
          </h2>
        </div>
        <div
          className="text-base self-end"
          style={{ maxWidth: 460, lineHeight: 1.65, opacity: 0.8 }}
        >
          <span
            className="font-display italic text-gold block mb-[18px]"
            style={{ fontSize: 22, lineHeight: 1.3 }}
          >
            Puede ser torre, puede ser horizonte, puede ser cruce.
          </span>
          No hay una forma definitiva. Hay siete. Setenta. La forma es una decisión tuya, no del
          diseñador. Aquí, algunos lugares donde la luz se vuelve arquitectura cotidiana.
        </div>
      </div>

      {/* Rooms grid — 12 columns on desktop, single column on mobile */}
      <div className="grid grid-cols-12 max-[880px]:grid-cols-1 gap-6 mt-24 max-[880px]:mt-0">
        {ROOMS.map((room, i) => (
          <div
            key={room.name}
            className="relative overflow-hidden max-[880px]:col-[1/-1] max-[880px]:mt-0"
            style={{
              gridColumnStart: room.colStart,
              gridColumnEnd: `span ${room.colSpan}`,
              marginTop: room.marginTop ?? 0,
              background: 'var(--surface)',
              transition: 'background var(--theme-t)',
            }}
          >
            {/* Placeholder image area */}
            <div
              className="flex items-center justify-center"
              style={{
                aspectRatio: room.ratio,
                backgroundImage: `repeating-linear-gradient(
                  135deg,
                  color-mix(in oklab, var(--fg) 4%, transparent) 0 12px,
                  transparent 12px 24px
                )`,
              }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.3em] uppercase text-center px-4"
                style={{ color: 'var(--fg)', opacity: 0.5 }}
              >
                {room.label}
              </span>
            </div>

            {/* Card meta */}
            <div
              className="flex justify-between items-baseline px-1 pt-[18px] pb-1"
            >
              <span className="font-display italic text-[22px]">{ROOM_NAMES[i]}</span>
              <span
                className="font-mono text-[10px] tracking-[0.25em]"
                style={{ opacity: 0.5 }}
              >
                {room.num}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Closing text */}
      <div className="ml-auto mt-10 max-w-[520px]">
        <p className="text-base m-0" style={{ lineHeight: 1.7, opacity: 0.8 }}>
          Pensamos cada módulo como una pieza arquitectónica a escala doméstica. Donde la pongas,
          va a cambiar el aire del lugar — porque no es un objeto que se enciende: es uno que se
          habita.
        </p>
      </div>
    </section>
  )
}
