import { motion } from 'framer-motion'

const logos = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta']

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-xl font-semibold text-[#1e1953]">Partners of Success</h3>
          <p className="text-slate-500 text-sm">Trusted by ambitious brands</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="h-16 rounded-xl border border-violet-100 bg-white grid place-items-center text-slate-500 hover:text-[#1e1953] hover:shadow-sm transition-colors"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
