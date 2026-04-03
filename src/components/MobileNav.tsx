"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";

const mobileLinks = [
  { href: "#hero", icon: "terminal" },
  { href: "#skills", icon: "memory" },
  { href: "#experience", icon: "history_edu" },
  { href: "#projects", icon: "data_object" },
  { href: "#education", icon: "workspace_premium" },
  { href: "#contact", icon: "settings_input_component" },
];

export default function MobileNav() {
  const activeSection = useActiveSection(mobileLinks.map((link) => link.href.substring(1)));

  return (
    <div className="md:hidden fixed bottom-12 left-1/2 -translate-x-1/2 bg-surface px-6 py-4 flex gap-8 z-[200] border border-primary-container/20 shadow-2xl">
      {mobileLinks.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <Link key={link.href} href={link.href}>
            <span
              className={`material-symbols-outlined ${
                isActive ? "text-primary-container" : "text-outline"
              }`}
            >
              {link.icon}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
