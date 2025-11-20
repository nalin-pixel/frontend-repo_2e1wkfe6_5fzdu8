import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const projects = Array.from({ length: 9 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  tag: i % 3 === 0 ? 'Branding' : i % 3 === 1 ? 'Digital' : 'Content',
}))

export default function Projects() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">Selected work shaping brands, products and experiences.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a key={p.title} href="#" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.03}} className="group block rounded-2xl overflow-hidden border border-violet-100 bg-white shadow-sm hover:shadow-md">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1e1953] to-violet-700" />
                <div className="p-4">
                  <div className="text-sm text-slate-500">{p.tag}</div>
                  <div className="font-semibold group-hover:underline">{p.title}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
