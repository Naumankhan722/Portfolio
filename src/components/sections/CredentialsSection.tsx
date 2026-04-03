export default function CredentialsSection() {
  return (
    <section
      id="education"
      className="bg-surface-container-lowest p-8 md:p-16 flex flex-col justify-center"
    >
      <div className="section-content">
        <h2 className="text-5xl font-black font-headline tracking-tighter uppercase text-on-surface mb-16">
          CREDENTIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div className="border-l border-outline-variant pl-8">
            <div className="font-mono text-primary-container text-xs mb-2">ACADEMIC_CERT</div>
            <h3 className="text-2xl font-bold font-headline mb-1 uppercase">
              B.E. Information Technology
            </h3>
            <div className="text-outline-variant font-mono text-sm">
              GUJARAT TECHNOLOGICAL UNIVERSITY | 2018 — 2022
            </div>
            <div className="mt-4 flex gap-4">
              <div className="bg-surface-container-low p-4 border border-white/5">
                <span className="font-mono text-[10px] text-outline block mb-1">CGPA</span>
                <span className="text-2xl font-black text-primary-container">7.00</span>
              </div>
              <div className="bg-surface-container-low p-4 border border-white/5">
                <span className="font-mono text-[10px] text-outline block mb-1">HONORS</span>
                <span className="text-xs font-bold text-on-surface uppercase">First Class</span>
              </div>
            </div>
            <p className="mt-6 text-outline text-sm max-w-sm">
              Focused on Information Systems, Software Engineering, and Digital Logic at Ahmedabad
              campus.
            </p>
          </div>

          {/* Availability */}
          <div className="border-l border-outline-variant pl-8">
            <div className="font-mono text-primary-container text-xs mb-2">SYSTEM_HEALTH</div>
            <h3 className="text-2xl font-bold font-headline mb-1 uppercase">AVAILABLE FOR HIRE</h3>
            <div className="text-outline-variant font-mono text-sm">UPTIME: 100%</div>
            <p className="mt-4 text-outline text-sm max-w-sm">
              Currently seeking Senior Developer roles or complex backend challenges. Open for
              remote and relocation.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
              <span className="font-mono text-[10px] text-green-500 tracking-widest uppercase">
                ST_READY_FOR_UPSTREAM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
