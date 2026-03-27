import React, { useRef, useState, useEffect } from 'react'
import { COLORS } from '../styles/colors'

export default function BlurUpImage({ src, alt = '', width = 600, height = 360, style = {}, className = '' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
  }, [inView, src])

  const wrapperStyle = Object.assign({
    width: width,
    height: height,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: COLORS.TEXT_PRIMARY
  }, style)

  const placeholderStyle = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(16px) brightness(0.9)',
    transform: loaded ? 'scale(1.03)' : 'scale(1.06)',
    transition: 'opacity 420ms ease, transform 420ms ease'
  }

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 420ms ease'
  }

  // Generate a tiny blurred placeholder using a very small inline SVG gradient — lightweight fallback.
  const blurPlaceholder = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><rect width='100%' height='100%' fill='${encodeURIComponent(COLORS.TEXT_PRIMARY)}'/></svg>`

  return (
    <div ref={ref} className={className} style={wrapperStyle} aria-hidden={alt ? 'false' : 'true'}>
      <div style={{...placeholderStyle, backgroundImage: `url(${blurPlaceholder})`, opacity: loaded ? 0 : 1}} />
      {inView && (
        <img
          src={src}
          alt={alt}
          style={imgStyle}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </div>
  )
}
