import useReveal from "../hooks/useReveal"

const BASE = "https://cdn.prod.website-files.com/6933d4dce1575ce638974488/"

const reviews = [
  { img: "69391fa25cee93580138a3fd_d9a90be59b4a04d7a183c3112b665d19_sincerely_media_fuu5kvcrqdu_unsplash_1.webp", alt: "Beatrix", name: "Beatrix", job: "Property Investor", text: "The team guided us through the buying process smoothly and professionally. Couldn't have asked for a better experience." },
  { img: "693921b531b361947fa6cab2_husqy_official_7rssns3x6z8_unsplash_1.webp", alt: "Ronan", name: "Ronan", job: "Seller Client", text: "Reliable, trustworthy, and truly committed to helping clients make the right choice." },
  { img: "693921b483db23b54b4e5052_dmitriy_frantsev_tgq77ammyxm_unsplash_1.webp", alt: "Luna", name: "Luna", job: "Investment Client", text: "Great communication and clear explanations made everything easy to understand." },
  { img: "693921b497af1453d38978ff_ernest_flowers_pgotg7uzto4_unsplash_1.webp", alt: "Smith", name: "Smith", job: "Home Buyer", text: "We found our ideal home thanks to their dedication and attention to detail. Truly exceptional service." },
]

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

export default function Review() {
  const ref = useReveal()

  return (
    <section ref={ref} id="section-review" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-2">
            <span className="reveal text-[10px] uppercase tracking-[0.3em] text-white/30">Testimonials</span>
            <h2 className="reveal delay-1 text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tighter uppercase">
              Reviews
            </h2>
          </div>
          <div className="reveal-right delay-2 flex flex-col gap-1 md:text-right">
            <span className="text-3xl font-black">4.9 / 5</span>
            <span className="text-xs text-white/40 uppercase tracking-widest">Based on 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map(({ img, alt, name, job, text }, i) => (
            <div key={name}
              className={`reveal delay-${i + 1} group relative flex flex-col justify-between gap-8 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 overflow-hidden card-glow cursor-default`}>
              <span className="absolute top-4 right-6 text-[7rem] leading-none font-black text-white/5 select-none group-hover:text-white/10 transition-colors duration-300">"</span>
              <Stars />
              <p className="text-base md:text-lg text-white/70 leading-relaxed font-light relative z-10 group-hover:text-white/90 transition-colors duration-300">
                "{text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img src={`${BASE}${img}`} alt={alt} loading="lazy"
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold tracking-wide">{name}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">{job}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
