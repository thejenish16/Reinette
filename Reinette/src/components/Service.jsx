import { useEffect, useRef } from "react"

const services = [
  { num: "01", title: "Property Consultation", desc: "Guiding you to the right property based on your needs." },
  { num: "02", title: "Market Analysis", desc: "In-depth insights to help you make smarter investment decisions." },
  { num: "03", title: "Property Management", desc: "We handle maintenance, tenants, and daily property needs." },
  { num: "04", title: "Financing Assistance", desc: "Helping you choose the best and most flexible financing options." },
]

export default function Service() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => el.classList.add("visible"))
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="section-service" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-10 mb-16">
          <div className="flex flex-col gap-2">
            <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">Service</span>
            <h2 className="reveal delay-1 text-[clamp(2rem,5vw,4rem)] font-black leading-tight uppercase tracking-tighter">
              Our Services,<br />Built for Your<br />Property Goals
            </h2>
          </div>
          <p className="reveal-right delay-2 max-w-xs text-sm text-white/40 leading-relaxed md:text-right">
            Discover tailored property solutions designed to elevate your living experience.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {services.map(({ num, title, desc }, i) => (
            <div key={num}
              className={`reveal delay-${i + 1} group flex flex-col sm:flex-row sm:items-center gap-4 py-8 hover:bg-white/5 px-4 -mx-4 rounded-xl transition-all duration-300 cursor-default`}>
              <span className="text-xs text-white/20 font-mono w-8 shrink-0 group-hover:text-white/60 transition-colors">{num}</span>
              <h3 className="text-xl md:text-2xl font-bold flex-1 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
              <p className="text-sm text-white/40 max-w-xs leading-relaxed sm:text-right group-hover:text-white/70 transition-colors duration-300">{desc}</p>
              <span className="hidden sm:block text-white/10 group-hover:text-white/60 transition-colors duration-300 text-lg">↗</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
