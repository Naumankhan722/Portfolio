"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ subject: "", contact: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ subject: "", contact: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
            <a href={`https://mail.google.com/mail/u/0/?fs=1&to=${process.env.NEXT_PUBLIC_CONTACT_EMAIL}&tf=cm`} target="_blank" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_EMAIL</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </div>
            </a>
            <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\s+/g, '')}`} className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_PHONE</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                {process.env.NEXT_PUBLIC_CONTACT_PHONE}
              </div>
            </a>
            <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_GITHUB</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                {process.env.NEXT_PUBLIC_GITHUB_LABEL}
              </div>
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" className="block group">
              <span className="font-mono text-[10px] text-outline-variant uppercase">_LINKEDIN</span>
              <div className="text-xl md:text-2xl font-bold font-headline group-hover:text-primary-container transition-colors">
                {process.env.NEXT_PUBLIC_LINKEDIN_LABEL}
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-surface-container p-8 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary-container" />
            <h4 className="font-mono text-xs text-primary-container mb-6">QUICK_MSG</h4>
            
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <span className="material-symbols-outlined text-4xl text-green-500 mb-4">check_circle</span>
                <div className="font-mono text-green-500 tracking-widest">PACKET_DELIVERED</div>
                <div className="text-outline-variant text-[10px] font-mono mt-2">Message successfully routed to ADM_NKP.</div>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="mt-8 border border-outline-variant px-4 py-2 text-[10px] font-mono text-outline hover:text-primary-container hover:border-primary-container transition-all"
                >
                  RST_LINK
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="SENDER_ADDRESS (Email / Phone)"
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary-container outline-none font-mono text-sm uppercase text-on-surface placeholder:text-outline-variant"
                />
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="SUBJECT_LOG"
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary-container outline-none font-mono text-sm uppercase text-on-surface placeholder:text-outline-variant"
                />
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="MESSAGE_PAYLOAD"
                  rows={3}
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary-container outline-none font-mono text-sm uppercase text-on-surface placeholder:text-outline-variant resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-4 bg-primary-container text-on-primary font-mono text-xs px-8 py-4 w-full hover:bg-[#0046fa] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-wait flex justify-center items-center gap-2"
                >
                  {status === "loading" ? "TRANSMITTING..." : "_SEND_PACKET"}
                  {status === "error" && <span className="text-red-900 absolute right-12">FAIL</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
