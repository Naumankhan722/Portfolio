export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-background p-8 md:p-16 relative flex flex-col justify-center overflow-hidden min-h-screen"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <div className="max-w-4xl z-10 section-content">
        <div className="text-primary-container font-mono text-sm mb-8 tracking-widest uppercase">
          _SYSTEM_STATUS: AVAILABLE_FOR_HIRE
        </div>
        <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface mb-12">
          CONNECT_UPLINK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          {/* Contact links */}
          <div className="space-y-6">
            <a href="mailto:naumanpathan722@gmail.com" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_EMAIL</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                NAUMANPATHAN722@GMAIL.COM
              </div>
            </a>
            <a href="tel:+917226883189" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_PHONE</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                +91 7226883189
              </div>
            </a>
            <a href="#" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_GITHUB</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                GITHUB.COM/NAUMAN
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-surface-container p-8 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary-container" />
            <h4 className="font-mono text-xs text-primary-container mb-6">QUICK_MSG</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary-container outline-none font-mono text-sm uppercase text-on-surface placeholder:text-outline-variant"
              />
              <textarea
                placeholder="MESSAGE_PAYLOAD"
                rows={3}
                className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary-container outline-none font-mono text-sm uppercase text-on-surface placeholder:text-outline-variant resize-none"
              />
              <button
                type="submit"
                className="mt-4 bg-primary-container text-on-primary font-mono text-xs px-8 py-4 w-full hover:bg-[#0046fa] transition-all cursor-pointer"
              >
                _SEND_PACKET
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
