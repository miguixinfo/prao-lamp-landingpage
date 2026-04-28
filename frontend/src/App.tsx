import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LampSection } from './components/LampSection'
import { RoomsSection } from './components/RoomsSection'
import { ContactSection } from './components/ContactSection'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <LampSection />
        <RoomsSection />
        <ContactSection onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </ThemeProvider>
  )
}
