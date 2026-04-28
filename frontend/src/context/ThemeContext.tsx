import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Theme = 'day' | 'night'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'day',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('day')

  useEffect(() => {
    document.documentElement.classList.toggle('night', theme === 'night')
  }, [theme])

  const toggle = () => setTheme(t => (t === 'day' ? 'night' : 'day'))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
