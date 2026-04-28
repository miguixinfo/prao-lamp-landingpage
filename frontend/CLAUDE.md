# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured.

## Architecture

Single-page landing site for **PRAO ESTUDIO** (a lamp/interior design brand). Stack: React 19 + TypeScript + Vite + Tailwind CSS v4.

### Theme system

The app has a **day/night** toggle (not the standard dark/light). Theme state lives in `src/context/ThemeContext.tsx` and is consumed via `useTheme()`. Switching theme adds/removes the `night` class on `<html>`. All theming is done through CSS custom properties defined in `src/index.css`:

- Day (`:root`): `--bg`, `--fg`, `--fg-soft`, `--line`, `--surface`
- Night (`html.night`): overrides of the same variables
- Transition duration: `--theme-t: 1200ms cubic-bezier(0.65, 0.05, 0.36, 1)` — apply this to any new themed element

Components use `style={{ color: 'var(--fg)', ... }}` inline or Tailwind with the CSS variable. Do **not** use Tailwind's `dark:` variant — the project uses the custom `night` class strategy instead.

### Tailwind v4 setup

Tailwind is configured via `@theme` in `src/index.css` (no `tailwind.config.*` file). Custom tokens:
- `font-display` → Cormorant Garamond (serif headings)
- `font-mono` → JetBrains Mono
- `bg-gold` / `text-gold` → `#b9a76f`
- `bg-mint` / `text-mint` → `#a8d4c4`

### Component layout

`App.tsx` composes the full page in order: `Navbar` → `Hero` → `LampSection` → `RoomsSection` → `ContactSection` → `Footer`, with a `ContactModal` overlay triggered by state lifted into `App`.

### CSS-only patterns

Some styles must live in `src/index.css` because Tailwind arbitrary values can't express them cleanly:
- `.carousel-slide` — calc-based flex widths for the rooms carousel
- `.caption` hover reveal — uses CSS parent→child selector
- `.dot-pulse` — keyframe animation

The mobile breakpoint used throughout is `880px` (e.g., `max-[880px]:hidden`).
