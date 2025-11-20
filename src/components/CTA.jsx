export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#1e1953] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{background:"radial-gradient(600px 200px at 10% 10%, #f7f000, transparent), radial-gradient(600px 200px at 90% 90%, #ffffff, transparent)"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-sm">
              Let’s Build Your Growth Journey Together
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Ready to accelerate?</h2>
            <p className="mt-2 text-white/80">Tell us about your goals and we’ll design the path forward.</p>
          </div>
          <form className="bg-white rounded-2xl p-6 text-[#1e1953] shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Name" />
              <input className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Email" />
              <input className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Company" />
              <textarea rows={4} className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-full bg-[#1e1953] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
