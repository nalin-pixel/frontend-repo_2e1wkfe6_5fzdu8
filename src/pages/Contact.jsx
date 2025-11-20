import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Instagram, Linkedin, Youtube, Behance } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white text-[#1e1953]">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let’s Build Your Growth Journey Together.</h1>
              <p className="mt-4 text-slate-700 max-w-2xl">Tell us about your goals — we’ll come back with a tailored plan across brand, content and digital.</p>
              <div className="mt-6 flex items-center gap-4 text-slate-600">
                <a href="#" className="hover:text-[#1e1953]" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" className="hover:text-[#1e1953]" aria-label="Instagram"><Instagram /></a>
                <a href="#" className="hover:text-[#1e1953]" aria-label="YouTube"><Youtube /></a>
                <a href="#" className="hover:text-[#1e1953]" aria-label="Behance"><Behance /></a>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Name" />
                <input className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Email" />
                <input className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Company" />
                <textarea rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e1953]" placeholder="Tell us about your project" />
              </div>
              <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-full bg-[#1e1953] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Send</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
