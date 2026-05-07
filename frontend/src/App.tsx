import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductSection } from './components/ProductSection'
import { MemoriaSection } from './components/MemoriaSection'
import { NightSection } from './components/NightSection'
import { ContactSection } from './components/ContactSection'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <MemoriaSection />
        <NightSection />
        <ContactSection onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
