import { useEffect, useRef } from "react"

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
