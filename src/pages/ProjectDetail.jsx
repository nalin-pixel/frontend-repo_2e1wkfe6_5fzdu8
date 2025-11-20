import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-[#1e1953] to-violet-700" />
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Project Title</h1>
          <p className="mt-3 text-slate-700">Project details and outcomes go here. Replace with real content later.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
