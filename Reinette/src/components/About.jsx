import useReveal from "../hooks/useReveal"

const BASE = "https://cdn.prod.website-files.com/6933d4dce1575ce638974488/"

const images = [
  { src: "6937e198127f5dc8700c17fe_modern_coastal_architecture.webp", alt: "Modern coastal architecture" },
  { src: "6937e225f73e928e74459c78_a12.webp", alt: "Contemporary white house" },
  { src: "6937e1981d4687047ac49aec_modern_minimalist_house_1_.webp", alt: "Modern minimalist house" },
  { src: "6937e19808c635cad8d00af0_modern_elevated_house.webp", alt: "Modern elevated house" },
  { src: "6937e19702654e4c57dc0966_serene_tropical_escape.webp", alt: "Tropical escape" },
  { src: "6937e19839b8c5077f68c7d0_modern_minimalist_house_2_.webp", alt: "Minimalist house 2" },
  { src: "6937e198c83905f0d0e961bd_modern_sunset_retreat.webp", alt: "Sunset retreat" },
  { src: "6937e199ef38e7f0132760d2_modern_architecture_and_reflections.webp", alt: "Architecture reflections" },
]

const stats = [
  { num: "12+", label: "Years Experience" },
  { num: "500+", label: "Properties Sold" },
  { num: "98%", label: "Client Satisfaction" },
]

export default function About() {
  const ref = useReveal()

  return (
    <section ref={ref} id="section-about" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10 pb-10 mb-16">
          <div className="flex flex-col gap-3">
            <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">About Us</span>
            <h2 className="reveal delay-1 text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight uppercase tracking-tighter">
              Thoughtful spaces,<br />
              we build <em className="not-italic border-b border-white">homes</em> that<br />
              bring comfort to<br />
              <em className="not-italic border-b border-white">your life</em>
            </h2>
          </div>
          <div className="reveal-right delay-2 flex flex-col gap-6 md:items-end">
            <p className="max-w-xs text-sm text-white/40 leading-relaxed md:text-right">
              Focused on crafting exceptional living through careful planning and trusted property options.
            </p>
            <div className="flex items-center gap-8">
              {stats.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-0.5 md:items-end group cursor-default">
                  <span className="text-2xl font-black group-hover:scale-110 transition-transform duration-300 inline-block">{num}</span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map(({ src, alt }, i) => (
            <div key={src} className={`reveal delay-${(i % 4) + 1} aspect-square overflow-hidden rounded-xl group`}>
              <img src={`${BASE}${src}`} alt={alt} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
          <div className="reveal delay-3 aspect-square overflow-hidden rounded-xl col-span-2 sm:col-span-1 group">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <source src="https://cdn.prod.website-files.com/6933d4dce1575ce638974488%2F693d02970ba26fcf4cff8dc0_4185235-sd_960_540_25fps_mp4.mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  )
}
