import { motion } from 'framer-motion'
import { Rocket, Sparkles, Globe, Palette, MonitorSmartphone, Users, Camera, Shapes, Calendar, Printer, Megaphone } from 'lucide-react'

const services = [
  { icon: Rocket, title: 'Marketing Consultancy', desc: 'Growth roadmaps and performance accceleration.' },
  { icon: Users, title: 'Business Development', desc: 'From funnels to partnerships and enablement.' },
  { icon: Palette, title: 'Branding & Rebranding', desc: 'Identity systems, guidelines and campaigns.' },
  { icon: Megaphone, title: 'Social Media & Ads', desc: 'Always-on content and paid performance.' },
  { icon: MonitorSmartphone, title: 'Web & App Dev', desc: 'Websites, e‑commerce and product build.' },
  { icon: Globe, title: 'Influencer Marketing', desc: 'Creators that move culture and outcomes.' },
  { icon: Camera, title: 'Media Production', desc: 'Film, photography and content craft.' },
  { icon: Shapes, title: '3D & Special Productions', desc: 'Immersive visual worlds and CGI.' },
  { icon: Calendar, title: 'Events & Exhibitions', desc: 'Launches, conferences and spatial design.' },
  { icon: Printer, title: 'Printing & Creative Production', desc: 'End‑to‑end production for impact.' },
  { icon: Sparkles, title: 'Outdoor Advertising', desc: 'OOH, DOOH and experiential.' },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1e1953]">Services</h2>
            <p className="text-slate-600 mt-2">Eleven capabilities, one partner for growth.</p>
          </div>
          <a href="/services" className="hidden md:inline-flex items-center justify-center rounded-full border border-[#1e1953] text-[#1e1953] px-5 py-2 font-semibold hover:bg-[#1e1953]/5">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.a
              href="/services"
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1953]/5" />
              <Icon className="w-6 h-6 text-[#1e1953]" />
              <h3 className="mt-4 font-semibold text-[#1e1953]">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="mt-6 text-sm font-semibold text-[#1e1953]">Explore →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
