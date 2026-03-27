import React, { useState, useEffect, useRef } from 'react';
import { COLORS } from '../styles/colors';

const ImageScrubber = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 240;

  useEffect(() => {
    // Preload all images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/assets/images/frames/ezgif-frame-${String(i).padStart(3, '0')}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    // Scroll event listener to serve as the timeline
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;

      let progress = 0;
      if (maxScroll > 0) {
        progress = scrollY / maxScroll;
      }

      progress = Math.max(0, Math.min(1, progress));

      // Map progress to frame index
      const frame = Math.floor(progress * (frameCount - 1)) + 1;
      setCurrentFrame(frame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize with current scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Render current frame to canvas
    if (images.length > 0 && images[currentFrame - 1]) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const img = images[currentFrame - 1];

      if (canvas.width !== img.width || canvas.height !== img.height) {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [currentFrame, images]);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // zIndex: 1, // Keep behind content so text is readable
      pointerEvents: 'none', // Allow clicking through to underlying elements
      opacity: isLoaded ? 0.3 : 0, // Slight opacity so it acts as a subtle background
      transition: 'opacity 0.5s ease'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: 'auto',
          height: 'auto',
          position: 'fixed', // Use fixed on the canvas so it follows the scroll while the parent is absolute
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};

export default ImageScrubber;
