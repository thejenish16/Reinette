import useReveal from "../hooks/useReveal"

const BASE = "https://cdn.prod.website-files.com/6933d4dce1575ce638974488/"

const projects = [
  {
    id: "1", num: "01",
    img: "6937e1981d4687047ac49aec_modern_minimalist_house_1_.webp",
    alt: "Minimalist desert-style modern",
    name: "Murthon", nameEm: "house",
    type: "Villa", loc: "Harbor St. 111", area: "220",
  },
  {
    id: "2", num: "02",
    img: "6937e19702654e4c57dc0966_serene_tropical_escape.webp",
    alt: "Luxury tropical house with swimming pool",
    name: "Aurora", nameEm: "resort",
    type: "Resort", loc: "Tulum Beach", area: "400",
  },
  {
    id: "3", num: "03",
    img: "6937e1982e335d92c6a7a559_modern_minimalist_house.webp",
    alt: "Minimalist house",
    name: "Velora", nameEm: "suites",
    type: "Suites", loc: "Zermatt, Switzerland", area: "310",
  },
  {
    id: "4", num: "04",
    img: "6937e198127f5dc8700c17fe_modern_coastal_architecture.webp",
    alt: "Modern curved architecture",
    name: "Lunara", nameEm: "hills",
    type: "Villas", loc: "Wadi Rum, Jordan", area: "300",
  },
]

export default function Project() {
  const ref = useReveal()

  return (
    <section ref={ref} id="section-project" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-10 mb-16">
          <div className="flex flex-col gap-2">
            <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">Projects</span>
            <h2 className="reveal delay-1 text-[clamp(2rem,5vw,4rem)] font-black leading-tight uppercase tracking-tighter">
              A Showcase of<br />Our Best Work
            </h2>
          </div>
          <p className="reveal-right delay-2 max-w-xs text-sm text-white/40 leading-relaxed md:text-right">
            Handpicked properties that define our commitment to quality and design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(({ id, num, img, alt, name, nameEm, type, loc, area }, i) => (
            <div key={id}
              className={`reveal delay-${i + 1} group relative overflow-hidden rounded-2xl bg-white/5 cursor-pointer card-glow`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={`${BASE}${img}`} alt={alt} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono text-white/30 group-hover:text-white/60 transition-colors">{num}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {name} <em className="not-italic text-white/50">{nameEm}</em>
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/50 flex-wrap">
                  <span className="px-2 py-1 rounded-full border border-white/20 text-white/60">{type}</span>
                  <span>📍 {loc}</span>
                  <span>⬜ {area} m²</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-xs bg-white text-black px-3 py-1.5 rounded-full font-bold tracking-wide">Explore ↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
