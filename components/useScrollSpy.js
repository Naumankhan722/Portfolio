import { useEffect, useState } from 'react'

export default function useScrollSpy(ids = [], options = {}) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!ids || ids.length === 0) return
    const observed = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (observed.length === 0) return

    const rootMargin = options.rootMargin ?? '-35% 0px -45% 0px'
    const threshold = typeof options.threshold === 'number' ? options.threshold : 0.1

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    observed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // ids.join used to detect id array changes
  }, [ids.join(','), options.rootMargin, options.threshold])

  return activeId
}
