import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1e1953]/20 bg-white/70 backdrop-blur px-3 py-1 text-sm text-[#1e1953]">
            <span className="w-2 h-2 rounded-full bg-[#f7f000] animate-pulse" />
            Experience the 360° Marketing Agency
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1953]">
            Experience the 360° Marketing Agency.
          </h1>
          <p className="mt-4 text-slate-700 text-lg md:text-xl max-w-2xl">
            ARTX delivers end‑to‑end growth across brand, digital, content and experiences. We blend strategy, creativity and technology to power your next leap.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#1e1953] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Start a Project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#1e1953] text-[#1e1953] px-6 py-3 text-sm font-semibold hover:bg-[#1e1953]/5 transition-colors">Explore Services</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="h-px w-24 bg-[#1e1953]/30" />
          <span className="text-sm text-slate-600">Scroll to explore</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/95" />
    </section>
  )
}
