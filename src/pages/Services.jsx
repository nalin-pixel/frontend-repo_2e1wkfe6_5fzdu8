import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Rocket, Users, Palette, Megaphone, MonitorSmartphone, Globe, Camera, Shapes, Calendar, Printer, Megaphone as OOH } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Marketing Consultancy & Business Analysis', desc: 'Market research, GTM, audit and growth acceleration.' },
  { icon: Users, title: 'Business Development', desc: 'Revenue strategy, partnerships and enablement.' },
  { icon: Palette, title: 'Branding & Rebranding', desc: 'Positioning, identity, guidelines and launch.' },
  { icon: Megaphone, title: 'Social Media Management & Advertising', desc: 'Always-on content and paid performance.' },
  { icon: MonitorSmartphone, title: 'Web & App Development', desc: 'Websites, products and e‑commerce.' },
  { icon: Globe, title: 'Influencer Marketing', desc: 'Creators that move culture and outcomes.' },
  { icon: Camera, title: 'Media Production', desc: 'Film, photography and content craft.' },
  { icon: Shapes, title: '3D Design & Special Productions', desc: 'CGI, motion and immersive scenes.' },
  { icon: Calendar, title: 'Events & Exhibitions', desc: 'Launches, conferences and spatial design.' },
  { icon: Printer, title: 'Printing & Creative Production', desc: 'End‑to‑end production for impact.' },
  { icon: OOH, title: 'Outdoor Advertising', desc: 'OOH, DOOH and experiential.' },
]

export default function Services() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Services</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">Eleven capabilities across strategy, creative, media and build — designed to work together, or plug into your needs.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.03}} className="p-6 rounded-2xl border border-violet-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <Icon className="w-6 h-6 text-[#1e1953]" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
