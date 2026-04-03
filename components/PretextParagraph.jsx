import React, { useEffect, useState, useRef } from 'react';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';
import { COLORS } from '../styles/colors';

export default function PretextParagraph({
  text,
  fontSize = 16,
  lineHeight = 28,
  fontWeight = 'normal',
  color = COLORS.TEXT_SECONDARY,
  style = {}
}) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    if (!containerRef.current) return;

    let lastClientX = -999;
    let lastClientY = -999;

    const updatePosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = lastClientX - rect.left;
      const y = lastClientY - rect.top;

      requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    const handleMouseMove = (e) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      updatePosition();
    };

    const handleScroll = () => {
      updatePosition();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    let isMounted = true;

    const updateLayout = () => {
      const width = containerRef.current.clientWidth;

      const fontStr = `${fontWeight} ${fontSize}px "Inter", "Segoe UI", system-ui, sans-serif`;
      const prepared = prepareWithSegments(text.toString(), fontStr);

      let cursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = 0;
      const newLines = [];
      const boxSize = 160;

      while (true) {
        const cx = mousePos.x;
        const cy = mousePos.y;
        const r = boxSize / 2;

        const closestY = Math.max(y, Math.min(cy, y + lineHeight));
        const dy = Math.abs(closestY - cy);

        let intersectsCircle = false;
        let mLeft = 0;
        let mRight = 0;

        if (dy < r) {
          const dx = Math.sqrt(r * r - dy * dy);
          mLeft = cx - dx;
          mRight = cx + dx;
          intersectsCircle = (mLeft < width && mRight > 0);
        }

        if (intersectsCircle) {
          let leftWidth = mLeft;
          if (leftWidth > 30) {
            const leftLine = layoutNextLine(prepared, cursor, leftWidth);
            if (leftLine) {
              newLines.push({ text: leftLine.text, x: 0, y, width: leftLine.width });
              cursor = leftLine.end;
            }
          }
          let rightWidth = width - mRight;
          if (rightWidth > 30 && cursor) {
            const rightLine = layoutNextLine(prepared, cursor, rightWidth);
            if (rightLine) {
              newLines.push({ text: rightLine.text, x: mRight, y, width: rightLine.width });
              cursor = rightLine.end;
            }
          }
        } else {
          const line = layoutNextLine(prepared, cursor, width);
          if (line === null) break;
          newLines.push({ text: line.text, x: 0, y, width: line.width });
          cursor = line.end;
        }

        if (!cursor) break;
        y += lineHeight;
      }

      if (isMounted) setLines(newLines);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => {
      isMounted = false;
      window.removeEventListener('resize', updateLayout);
    };
  }, [mousePos, text, fontSize, lineHeight, fontWeight]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: lines.length > 0 ? lines[lines.length - 1].y + lineHeight : lineHeight,
        ...style
      }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: line.y,
            left: line.x,
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: color,
            whiteSpace: 'pre',
            lineHeight: `${lineHeight}px`,
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}
