import { useEffect, useRef } from "react"

export default function Achievement() {
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
    <div ref={ref} className="bg-black text-white border-t border-b border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-16">

        <div className="reveal-left flex flex-col items-center gap-1 group cursor-default">
          <div className="flex items-end gap-1">
            <span className="text-6xl font-black group-hover:scale-110 transition-transform duration-300 inline-block">15</span>
            <span className="text-4xl font-black text-white/40 mb-1">+</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Years Experience</p>
        </div>

        <div className="reveal w-px h-16 bg-white/10 hidden sm:block" />

        <div className="reveal-right flex flex-col items-center gap-1 group cursor-default">
          <div className="flex items-end gap-1">
            <span className="text-6xl font-black group-hover:scale-110 transition-transform duration-300 inline-block">10</span>
            <span className="text-4xl font-black text-white/40 mb-1">k</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Happy Customers</p>
        </div>

      </div>
    </div>
  )
}
