import { useState, useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductMemoriaSection } from './components/ProductMemoriaSection'
import { HorizontalStrip } from './components/HorizontalStrip'
import { NightSection } from './components/NightSection'
import { ContactSection } from './components/ContactSection'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'
import { LegalModal, type LegalDoc } from './components/LegalModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null)

  const openModal   = useCallback(() => setModalOpen(true), [])
  const closeModal  = useCallback(() => setModalOpen(false), [])
  const closeLegal  = useCallback(() => setLegalDoc(null), [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductMemoriaSection />
        <HorizontalStrip />
        <NightSection />
        <ContactSection onOpenModal={openModal} />
      </main>
      <Footer onOpenLegal={setLegalDoc} />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
      <LegalModal doc={legalDoc} onClose={closeLegal} />
    </>
  )
}
