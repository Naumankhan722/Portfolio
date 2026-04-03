"use client";

import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "CHATBASE",
    tag: "AI_CORE",
    subtitle: "CUSTOM AI AGENT PLATFORM",
    description:
      "Multi-tenant AI platform, RAG-based retrieval, Vector embeddings, and Web Crawling Pipelines.",
    image: "/projects/chatbase.png",
  },
  {
    title: "INDITE.IO",
    tag: "NO_CODE",
    subtitle: "AI CHATBOT BUILDER",
    description:
      "Drag-and-drop builder with RBAC, feature gating, and real-time analytics for businesses.",
    image: "/projects/indite.png",
  },
  {
    title: "BENEFITS BOOST",
    tag: "SAAS",
    subtitle: "AI DISABILITY PLATFORM",
    description:
      "Streamlining Social Security applications with form validation and accessibility features.",
    image: null,
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -520 : 520;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="bg-surface p-8 md:p-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="section-content w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-5xl font-black font-headline tracking-tighter uppercase text-on-surface">
            REPOS_PROJ
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary-container text-outline hover:text-primary-container transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary-container text-outline hover:text-primary-container transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-[400px] md:min-w-[500px] bg-surface-container-low snap-start p-0 flex flex-col group border border-transparent hover:border-primary-container/20 transition-all"
            >
              <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary-container/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
                <div className="absolute top-4 right-4 bg-primary-container px-3 py-1 font-mono text-[10px] text-on-primary">
                  {project.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-headline mb-2">{project.title}</h3>
                <div className="font-mono text-[10px] text-primary-container/70 mb-4 tracking-widest">
                  {project.subtitle}
                </div>
                <p className="text-outline text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
