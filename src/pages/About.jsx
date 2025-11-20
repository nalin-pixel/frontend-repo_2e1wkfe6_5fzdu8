import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Target, Eye, HeartHandshake, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About ARTX</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">We’re a 360° marketing partner uniting strategy, creativity and technology. We design brands, build products and orchestrate content that drives growth.</p>

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="space-y-6">
              <h2 className="text-2xl font-bold">Story</h2>
              <p className="text-slate-700">Born to serve ambitious leaders, we assembled a multi‑disciplinary team across brand, digital, media and production to deliver end‑to‑end outcomes. Our model is simple: clarity, craft, and speed.</p>

              <h2 className="text-2xl font-bold">Vision</h2>
              <p className="text-slate-700">To be the region’s most trusted growth partner — shaping brands people love and systems that scale.</p>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="space-y-6">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="text-slate-700">Enable organizations to move faster with clarity — from strategy to execution — through integrated 360° capabilities.</p>

              <h2 className="text-2xl font-bold">Core Values</h2>
              <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
                <li className="flex items-start gap-3"><Target className="w-5 h-5 text-[#1e1953]"/> Focus on outcomes</li>
                <li className="flex items-start gap-3"><Eye className="w-5 h-5 text-[#1e1953]"/> Taste and craft</li>
                <li className="flex items-start gap-3"><HeartHandshake className="w-5 h-5 text-[#1e1953]"/> Partners, not vendors</li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-[#1e1953]"/> Integrity and trust</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
