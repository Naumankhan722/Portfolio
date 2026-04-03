"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { href: "#hero", label: "ROOT" },
  { href: "#skills", label: "STACK" },
  { href: "#experience", label: "LOGS" },
  { href: "#projects", label: "DATA" },
  { href: "#education", label: "CREDENTIALS" },
];

export default function TopNav() {
  const activeSection = useActiveSection(navLinks.map((link) => link.href.substring(1)));

  return (
    <header className="bg-surface py-4 fixed top-0 w-full z-[100] px-8 flex justify-between items-center border-b border-white/5">
      <div className="text-xl font-black text-primary-container font-mono uppercase tracking-tighter">
        DEV_PORTFOLIO_V2.0
      </div>
      <nav className="hidden md:flex gap-10">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono uppercase tracking-tighter text-sm transition-all ${
                isActive
                  ? "text-primary-container border-b-2 border-primary-container pb-1"
                  : "text-on-surface opacity-70 hover:bg-primary-container/10 hover:text-primary-container"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="#contact"
        className="font-mono uppercase tracking-tighter text-primary-container hover:bg-primary-container/10 transition-all text-sm border border-primary-container px-4 py-2"
      >
        CONNECT_UPLINK
      </Link>
    </header>
  );
}
