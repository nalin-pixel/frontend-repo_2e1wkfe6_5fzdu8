import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1e1953]">About ARTX</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We are a 360° marketing agency engineered for a world in motion. Our teams connect business strategy with brand, content and digital products to create measurable growth. From Saudi to global, we partner with leaders to build what’s next.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-flex items-center justify-center rounded-full bg-[#1e1953] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Our Story</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-[#1e1953] to-violet-700" />
            <div className="absolute inset-6 rounded-2xl border-2 border-dashed border-[#f7f000]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
