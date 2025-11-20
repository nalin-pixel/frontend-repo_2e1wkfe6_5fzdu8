import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import AboutPreview from '../components/AboutPreview'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Partners />
      <CTA />
      <Footer />
    </div>
  )
}
