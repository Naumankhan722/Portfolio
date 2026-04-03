import React, { useRef } from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

export default function ScrollItem({ children, id }) {
  const ref = useRef(null);

  // Link to the viewport intersection progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth, slightly elastic easing for the "pop" feel
  const zoomEase = cubicBezier(0.34, 1.56, 0.64, 1);

  // 1. DYNAMIC ANCHOR POINT
  // First half of scroll: Bottom-Right (100% 100%)
  // Second half of scroll: Top-Right (100% 0%)
  const origin = useTransform(scrollYProgress, (v) => (v > 0.5 ? "100% 0%" : "100% 100%"));

  // 2. SCALE: 0 (at bottom) -> 1 (center) -> 0 (at top)
  // We use wider ranges [0, 0.4] and [0.6, 1] to keep it full-sized longer in the middle
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0],
    { ease: zoomEase }
  );

  // 3. OPACITY: Fade in/out to hide the sharp "0 scale" point
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div
      id={id}
      ref={ref}
      style={{
        width: '100%',
        margin: '10vh 0',
        position: 'relative',
        // Perspective helps with rendering smooth sub-pixel scales
        perspective: '1200px'
      }}
    >
      <motion.div
        style={{
          transformOrigin: origin,
          scale,
          opacity,
          width: '100%',
          overflow: 'hidden',
          borderRadius: 24,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ padding: '32px' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}