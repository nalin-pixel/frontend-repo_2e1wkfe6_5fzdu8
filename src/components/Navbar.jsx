import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#1e1953] grid place-items-center">
              <Sparkles className="w-5 h-5 text-[#f7f000]" />
            </div>
            <div className="font-extrabold tracking-tight text-[#1e1953] text-lg">ARTX</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-[#1e1953]' : 'text-slate-500 hover:text-[#1e1953]'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1e1953] text-white px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md hover:translate-y-[-1px] transition-all"
            >
              Let’s Talk
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-slate-200">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-md ${isActive ? 'bg-violet-50 text-[#1e1953]' : 'text-slate-600 hover:bg-violet-50 hover:text-[#1e1953]'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-full bg-[#1e1953] text-white font-semibold"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
