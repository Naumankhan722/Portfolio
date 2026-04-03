"use client";

import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center px-8 md:px-16 overflow-hidden"
    >
      <div className="z-10 max-w-4xl section-content">
        <div className="font-mono text-primary mb-4 tracking-[0.2em] text-sm opacity-80 uppercase">
          _INITIALIZING_SEQUENCE
        </div>
        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] text-on-surface">
          NAUMAN KHAN
          <br />
          <span className="text-primary-container">PATHAN</span>
        </h1>
        <div className="mt-4 inline-block bg-primary/10 px-4 py-1 border-l-2 border-primary">
          <span className="font-mono text-primary text-sm tracking-widest">
            SR_SOFTWARE_DEVELOPER
          </span>
        </div>
        <p className="mt-8 text-xl text-outline font-body max-w-xl leading-relaxed">
          Senior Software Developer with 4+ years of experience specializing in
          MERN stack and NestJs. Architecting high-concurrency systems,
          AI-driven SaaS platforms, and Creator-focused tools.
        </p>
        <div className="mt-12 flex gap-8 font-mono text-sm">
          <div className="flex flex-col">
            <span className="text-outline-variant text-[10px]">CURRENT_LOC</span>
            <span className="text-on-surface">AHMEDABAD_IN</span>
          </div>
          <div className="flex flex-col">
            <span className="text-outline-variant text-[10px]">TIME_ZONE</span>
            <span className="text-on-surface">IST (UTC +5:30)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-outline-variant text-[10px]">EXPERIENCE</span>
            <span className="text-primary">4+_YEARS_ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Globe Visual */}
      <div className="hero-visual absolute right-[-5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-60 md:opacity-100 transition-all duration-700">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[110%] h-[110%] rounded-full border border-primary/20 animate-pulse" />
          <div className="absolute w-full h-full rounded-full border border-primary/10 globe-glow" />
          <div className="relative w-[90%] h-[90%]">
            <Globe />
          </div>
          {/* Location pin */}
          <div className="absolute top-[45%] left-[65%] w-4 h-4 bg-primary-container rounded-full shadow-[0_0_20px_#0047FF] z-10" />
          <div className="absolute top-[38%] left-[68%] font-mono text-[10px] text-primary-container bg-surface-container-lowest/80 backdrop-blur-sm px-2 py-1 border border-primary-container/30 z-10">
            HQ: INDIA_WEST
          </div>
        </div>
      </div>

      {/* Bottom coords */}
      <div className="absolute bottom-10 left-8 md:left-16 flex flex-col font-mono text-[10px] text-outline-variant gap-1 opacity-50">
        <span>COORD: 23.0225° N, 72.5714° E</span>
        <span>STATUS: ACTIVE_LISTENING</span>
      </div>
    </section>
  );
}
