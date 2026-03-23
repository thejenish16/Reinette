import useReveal from "../hooks/useReveal"

export default function Hero() {
  const ref = useReveal()

  return (
    <section ref={ref} id="section-hero" className="min-h-screen bg-black text-white flex flex-col justify-between pt-20">

      {/* Top label bar */}
      <div className="max-w-6xl mx-auto px-6 w-full pt-10">
        <div className="reveal flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Est. 2024</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Real Estate Studio</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Premium Living</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-16">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <h1 className="reveal delay-1 text-[clamp(5rem,15vw,13rem)] font-black leading-none tracking-tighter uppercase">
              Rein
            </h1>
            <h1 className="reveal delay-2 text-[clamp(5rem,15vw,13rem)] font-black leading-none tracking-tighter uppercase text-transparent"
              style={{ WebkitTextStroke: "1.5px white" }}>
              ette
            </h1>
          </div>

          <div className="reveal delay-3 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Thoughtfully developed spaces for better living — where design meets purpose.
            </p>
            <a href="https://webflow.com/templates/designers/kitpro-studio" target="_blank"
              className="inline-flex items-center gap-3 bg-white text-black text-xs font-bold px-7 py-3.5 rounded-full hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300 self-start md:self-end uppercase tracking-widest border border-transparent">
              Get started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 w-full border-t border-white/10 py-5">
        <div className="reveal delay-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
            <span>©</span>
            <span>Real estate</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
            <div className="w-6 h-px bg-white/20" />
            <span>Scroll down</span>
            <div className="animate-float w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/" target="_blank"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.tumblr.com/" target="_blank"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.228 2.371h.08c.682-.02 1.329-.182 1.886-.43l1.104 3.237c-.786.431-2.248.944-4.232 1.005z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
