import useReveal from "../hooks/useReveal"

export default function CTA() {
  const ref = useReveal()

  return (
    <section ref={ref} id="section-cta" className="bg-black text-white py-32 relative overflow-hidden">
      {/* Marquee background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-5 pointer-events-none select-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, j) => (
              <span key={j} className="text-4xl font-black uppercase tracking-widest text-white">
                Reinette &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-10">
        <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">Let's Connect</span>
        <h2 className="reveal delay-1 text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tighter uppercase">
          Get in<br />Touch
        </h2>
        <p className="reveal delay-2 text-sm text-white/40 max-w-sm leading-relaxed">
          Ready to find your dream property? Our team is here to guide you every step of the way.
        </p>
        <div className="reveal delay-3 flex items-center gap-4 flex-wrap justify-center">
          <a href="mailto:hello@reinette.com"
            className="inline-flex items-center gap-3 bg-white text-black text-xs font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white hover:border-white border border-transparent transition-all duration-300 uppercase tracking-widest">
            Email Us ↗
          </a>
          <a href="tel:+12312313"
            className="inline-flex items-center gap-3 border border-white/20 text-white text-xs font-bold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300 uppercase tracking-widest">
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
