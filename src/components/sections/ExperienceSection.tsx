export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-surface-container-lowest p-8 md:p-16 flex flex-col justify-center"
    >
      <div className="section-content">
        <h2 className="text-5xl font-black font-headline tracking-tighter uppercase text-on-surface mb-16">
          EXPERIENCE_LOG
        </h2>

        <div className="space-y-12 max-w-4xl">
          {/* Experience 1 */}
          <div className="relative pl-12 border-l border-outline-variant pb-12">
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-primary-container" />
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2">
              <h3 className="text-2xl font-bold font-headline">BACANCY DATA PROPHETS</h3>
              <span className="font-mono text-xs text-primary-container bg-primary-container/10 px-3 py-1">
                JAN 2022 — JAN 2026
              </span>
            </div>
            <div className="font-mono text-sm text-outline-variant mb-4 tracking-wider uppercase">
              Senior Software Engineer (MERN Stack) | Ahmedabad, India
            </div>
            <p className="text-outline max-w-2xl text-sm leading-relaxed mb-4">
              Joined during early-stage startup phase. Architected modular backend services using
              Node.js &amp; NestJS. Improved data retrieval speeds via MongoDB schema refinement.
              Engineered advanced authentication (JWT, OAuth) and applied API reverse engineering for
              data extraction.
            </p>
          </div>

          {/* Education linkage */}
          <div className="relative pl-12 border-l border-outline-variant">
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-outline-variant" />
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-bold font-headline text-outline-variant">
                _SYSTEM_UPGRADE_PRE_2022
              </h3>
            </div>
            <div className="font-mono text-[10px] text-outline-variant mb-4 tracking-widest">
              SEE CREDENTIALS_MODULE FOR EDUCATION DATA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
