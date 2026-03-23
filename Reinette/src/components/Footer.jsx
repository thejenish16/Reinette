const socials = [
  {
    href: "https://www.linkedin.com/", alt: "LinkedIn",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
  },
  {
    href: "https://www.tumblr.com/", alt: "Tumblr",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.228 2.371h.08c.682-.02 1.329-.182 1.886-.43l1.104 3.237c-.786.431-2.248.944-4.232 1.005z"/></svg>),
  },
  {
    href: "https://www.meta.com/", alt: "Meta",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.357-2.602zm-10.201.553c1.265 0 2.058.791 3.011 2.222.616.921 1.815 3.037 2.459 4.196l.073.132c-1.073 1.8-1.415 2.399-2.127 3.328-1.187 1.537-1.9 1.952-2.874 1.952-1.057 0-1.9-.432-2.392-1.382a4.905 4.905 0 0 1-.301-.74 7.415 7.415 0 0 1-.179-1.664c0-2.146.606-4.54 1.597-6.088.763-1.2 1.679-2.356 2.733-2.356z"/></svg>),
  },
]

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#section-about" },
  { label: "Service", href: "#section-service" },
  { label: "Project", href: "#section-project" },
  { label: "Review", href: "#section-review" },
]

const utilLinks = ["License", "Changelog", "Instructions", "Style guide"]

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-white/10" />

      {/* Glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-xl border border-white/30 flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-white font-semibold tracking-wide group-hover:text-white/60 transition-colors">Reinette</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Thoughtfully developed spaces for better living and lasting value.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon, alt }) => (
                <a key={alt} href={href} target="_blank"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Navigation</span>
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Utilities</span>
              {utilLinks.map(label => (
                <a key={label} href="#"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200">{label}</a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Newsletter</span>
            <p className="text-sm text-white/40 leading-relaxed">Get the latest updates on properties and market trends.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-white text-black text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-white/80 transition-colors shrink-0">
                →
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span>📞</span>
              <span>+123 123 13</span>
              <span className="mx-1">·</span>
              <span>hello@reinette.com</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/20">
          <span>© 2025 Reinette. All rights reserved.</span>
          <span>Built with ❤️ by <a href="https://webflow.com/templates/designers/kitpro-studio" target="_blank" className="hover:text-white transition-colors">Kitpro</a></span>
        </div>
      </div>
    </footer>
  )
}
