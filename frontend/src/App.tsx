import { useState } from 'react'
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductMemoriaSection />
        <HorizontalStrip />
        <NightSection />
        <ContactSection onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer onOpenLegal={setLegalDoc} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </>
  )
}
