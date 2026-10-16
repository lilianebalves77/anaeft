import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Recognition } from '@/components/Recognition'

import { AboutAna } from '@/components/AboutAna'
import EFTSection from '@/components/EFTSection'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recognition />
        
        <AboutAna />
        <EFTSection />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}