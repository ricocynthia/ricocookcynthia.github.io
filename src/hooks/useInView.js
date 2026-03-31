import { useEffect, useRef, useState } from 'react'

/**
 * A simple hook that returns [ref, inView].
 * Attach ref to an element — inView becomes true once it enters the viewport.
 * Uses IntersectionObserver under the hood.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Once it's been seen, stop observing
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
