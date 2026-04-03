export default function SkillsSection() {
  return (
    <section id="skills" className="bg-surface p-8 md:p-16 flex flex-col justify-center">
      <div className="section-content">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-black font-headline tracking-tighter uppercase text-on-surface">
            TECH_STACK
          </h2>
          <div className="font-mono text-outline-variant text-sm">MODULE: SKILLS_V2.0</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-1 h-auto md:h-[650px]">
          {/* Frontend — Large card */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-low p-8 group hover:bg-[#1a1a1a] transition-all border border-white/5 flex flex-col">
            <div className="text-primary-container font-mono text-xs mb-4">FRONTEND</div>
            <h3 className="text-3xl font-bold mb-6 font-headline">JAVASCRIPT & MODERN WEB</h3>
            <ul className="text-outline text-sm space-y-3 mb-8 list-none flex-grow">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container" /> HTML5, CSS3, JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container" /> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container" /> React.js & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container" /> Vue.js
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-mono">
                RESPONSIVE
              </span>
              <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-mono">
                WEB_VITALS
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-surface-container p-8 group hover:bg-primary-container transition-all cursor-default border border-white/5 flex flex-col justify-between">
            <div>
              <div className="text-outline-variant group-hover:text-on-primary font-mono text-xs mb-4 transition-colors">
                BACKEND
              </div>
              <h3 className="text-xl font-bold font-headline group-hover:text-on-primary transition-colors">
                NODE.JS & EXPRESS
              </h3>
            </div>
            <div className="text-[10px] font-mono text-outline-variant mt-4 group-hover:text-on-primary/70">
              RESTful API DESIGN
            </div>
          </div>

          {/* Databases */}
          <div className="bg-surface-container p-8 group hover:bg-[#1a1a1a] transition-all border border-white/5 flex flex-col">
            <div className="text-primary-container font-mono text-xs mb-4">DATABASES</div>
            <h3 className="text-xl font-bold font-headline mb-4">MONGODB & SQL</h3>
            <div className="mt-auto flex gap-2 flex-wrap text-[10px] font-mono text-outline">
              <span>MySQL</span> // <span>PostgreSQL</span> // <span>Aggregations</span> //{" "}
              <span>Encryption</span>
            </div>
          </div>

          {/* Styling */}
          <div className="bg-surface-container p-8 group hover:bg-[#1a1a1a] transition-all border border-white/5 flex flex-col">
            <div className="text-primary-container font-mono text-xs mb-4">STYLING</div>
            <h3 className="text-xl font-bold font-headline mb-4">TAILWIND & UI</h3>
            <div className="mt-auto flex gap-2 flex-wrap text-[10px] font-mono text-outline">
              <span>SASS</span> // <span>MaterialUI</span> // <span>Bootstrap</span>
            </div>
          </div>

          {/* Core Engineering */}
          <div className="bg-surface-container p-8 group hover:bg-[#1a1a1a] transition-all border border-white/5 flex flex-col">
            <div className="text-primary-container font-mono text-xs mb-4">CORE_ENG</div>
            <h3 className="text-xl font-bold font-headline mb-4">DSA & AUTH</h3>
            <div className="mt-auto flex gap-2 flex-wrap text-[10px] font-mono text-outline">
              <span>JWT</span> // <span>OAuth2</span> // <span>Algorithms</span>
            </div>
          </div>

          {/* Tools & Process Banner */}
          <div className="md:col-span-2 bg-surface-container-high p-8 flex items-center justify-between border border-white/5">
            <div>
              <div className="text-primary-container font-mono text-xs mb-2">TOOLS_PROCESS</div>
              <div className="text-xl font-bold font-mono text-on-surface">
                GIT / CI-CD / AGILE / UX / SEO
              </div>
            </div>
            <div className="flex gap-1 h-8 items-end opacity-70">
              <div className="w-2 bg-primary-container h-4" />
              <div className="w-2 bg-primary-container h-8" />
              <div className="w-2 bg-primary-container h-5" />
            </div>
          </div>

          {/* Infrastructure & Common Tech Banner */}
          <div className="md:col-span-2 bg-surface-container-low p-8 flex items-center justify-between border border-white/5 group hover:border-primary-container/30 transition-colors">
            <div>
              <div className="text-outline-variant font-mono text-xs mb-2 group-hover:text-primary-container transition-colors">
                CLOUD_INFRA
              </div>
              <div className="text-xl font-bold font-mono text-outline group-hover:text-on-surface transition-colors">
                DOCKER / AWS / REDIS / LINUX
              </div>
              <div className="text-xs font-mono text-outline-variant mt-2">
                + WebSockets, GraphQL, Serverless
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container text-4xl">
              cloud_sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
