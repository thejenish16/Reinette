import { useState, useEffect } from "react"

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#section-about" },
  { label: "Service", href: "#section-service" },
  { label: "Project", href: "#section-project" },
  { label: "Team", href: "#section-team" },
  { label: "Review", href: "#section-review" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-white font-semibold tracking-wide text-sm group-hover:text-white/60 transition-colors">Reinette</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a key={label} href={href}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group">
                {label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-white group-hover:w-4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a href="mailto:hello@reinette.com"
              className="hidden md:inline-flex items-center gap-2 bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300 shadow-md">
              Contact Us
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 group">
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <div className="bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
              {label}
            </a>
          ))}
          <a href="mailto:hello@reinette.com"
            className="mt-3 text-center bg-white text-black text-sm font-semibold py-2.5 rounded-xl hover:bg-white/80 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}
