import { Instagram, Linkedin, Youtube, Behance } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#1e1953] font-extrabold tracking-tight">ARTX</div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#1e1953]"><Linkedin /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#1e1953]"><Instagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#1e1953]"><Youtube /></a>
            <a href="#" aria-label="Behance" className="hover:text-[#1e1953]"><Behance /></a>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} ARTX. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
