export default function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 md:left-64 right-0 h-8 bg-surface z-[110] flex items-center justify-between px-6 border-t border-white/5">
      <div className="font-mono text-[10px] uppercase tracking-widest text-outline-variant">
        SYS_CORE_V2.0 // NKP_2024
      </div>
      <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
        <span className="text-primary-container">ST_OPTIMAL</span>
        <span className="text-outline-variant">LAT_18MS</span>
        <span className="text-outline-variant">MEM_8.4GB</span>
      </div>
    </div>
  );
}
