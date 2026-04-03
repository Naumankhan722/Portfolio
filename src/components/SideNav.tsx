"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";

const sideLinks = [
  { href: "#hero", icon: "terminal", label: "INITIALIZE" },
  { href: "#skills", icon: "memory", label: "TECH_STACK" },
  { href: "#experience", icon: "history_edu", label: "EXP_LOG" },
  { href: "#projects", icon: "data_object", label: "REPOS_PROJ" },
  { href: "#education", icon: "workspace_premium", label: "CREDENTIALS" },
  { href: "#contact", icon: "settings_input_component", label: "UPLINK" },
];

export default function SideNav() {
  const activeSection = useActiveSection(sideLinks.map((link) => link.href.substring(1)));

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest flex-col pt-24 z-[90] hidden md:flex border-r border-white/5">
      <div className="px-8 mb-12">
        <div className="text-primary-container font-bold text-lg font-mono">ADM_NKP</div>
        <div className="text-outline text-[10px] font-mono tracking-widest mt-1">
          STATUS: OPTIMAL
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {sideLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 py-3 font-mono text-sm uppercase ${
                isActive
                  ? "text-primary-container font-bold border-l-4 border-primary-container pl-4"
                  : "text-outline pl-4 hover:bg-surface hover:text-primary-container group"
              }`}
            >
              <span className="material-symbols-outlined text-sm">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-auto p-8">
        <a
          href="/Nauman%20Sr.%20Software%20Dev.pdf"
          download="Nauman_Khan_Pathan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 py-4 border border-outline-variant text-primary-container font-mono text-xs hover:bg-primary-container hover:text-on-primary transition-all group"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          FETCH_CV.DAT
        </a>
      </div>
    </aside>
  );
}
