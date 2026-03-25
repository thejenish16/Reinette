import { useEffect, useRef } from "react"

const BASE = "https://cdn.prod.website-files.com/6933d4dce1575ce638974488/"

const members = [
  { name: "Emily", job: "Inspector", num: "01", img: "69391fa25cee93580138a3fd_d9a90be59b4a04d7a183c3112b665d19_sincerely_media_fuu5kvcrqdu_unsplash_1.webp", alt: "Emily" },
  { name: "Nathan Clarke", job: "Manager", num: "02", img: "693921b531b361947fa6cab2_husqy_official_7rssns3x6z8_unsplash_1.webp", alt: "Nathan Clarke" },
  { name: "Michelle", job: "Planner", num: "03", img: "693921b483db23b54b4e5052_dmitriy_frantsev_tgq77ammyxm_unsplash_1.webp", alt: "Michelle" },
  { name: "Alex K.", job: "Consultant", num: "04", img: "693921b497af1453d38978ff_ernest_flowers_pgotg7uzto4_unsplash_1.webp", alt: "Alex K." },
]

export default function Team() {
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
    <section ref={ref} id="section-team" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-10 mb-16">
          <div className="flex flex-col gap-2">
            <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">Our Team</span>
            <h2 className="reveal delay-1 text-[clamp(2rem,5vw,4rem)] font-black leading-tight uppercase tracking-tighter">
              The Faces of<br />Our Company
            </h2>
          </div>
          <p className="reveal-right delay-2 max-w-xs text-sm text-white/40 leading-relaxed md:text-right">
            A group of professionals committed to delivering exceptional real estate experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map(({ name, job, img, alt, num }, i) => (
            <div key={name} className={`reveal delay-${i + 1} group flex flex-col gap-4`}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5">
                <img src={`${BASE}${img}`} alt={alt} loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#"
                    className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 scale-75 group-hover:scale-100">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-mono text-white/30">{num}</span>
              </div>
              <div className="flex flex-col gap-0.5 px-1">
                <span className="font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">{job}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-16 pt-6 border-t border-white/10">
          <span className="text-[10px] text-white/20 uppercase tracking-widest">Real Estate Studio</span>
          <span className="text-[10px] text-white/20 uppercase tracking-widest">© Since 2025</span>
        </div>

      </div>
    </section>
  )
}
