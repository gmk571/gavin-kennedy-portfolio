/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Sidebar — Fixed left navigation with dark green background, warm burnt orange accents
 */

import { useState, useEffect } from "react";
import { portfolioData, internships } from "@/lib/portfolioData";

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [expandedInternship, setExpandedInternship] = useState<string | null>(null);

  useEffect(() => {
    // Auto-expand the internship section that is active
    const active = internships.find((i) => i.id === activeSection);
    if (active) setExpandedInternship(active.id);
  }, [activeSection]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    ...internships.map((i) => ({ id: i.id, label: i.agency, sub: true, number: i.number })),
    { id: "photography", label: "Photography" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex flex-col"
      style={{ backgroundColor: "oklch(0.20 0.03 35)" }}>
      {/* Logo / Name */}
      <div className="px-8 pt-10 pb-8 border-b" style={{ borderColor: "oklch(0.30 0.04 35)" }}>
        <div className="font-mono text-xs tracking-widest uppercase mb-2"
          style={{ color: "oklch(0.55 0.14 35)" }}>
          Portfolio
        </div>
        <h1 className="font-display text-xl font-bold leading-tight"
          style={{ color: "oklch(0.92 0.02 75)" }}>
          {portfolioData.name}
        </h1>
        <p className="font-body text-xs mt-1 leading-relaxed"
          style={{ color: "oklch(0.70 0.02 75)" }}>
          {portfolioData.tagline}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isSub = (item as any).sub;

            if (isSub && item.id !== "photography") {
              return (
                <li key={item.id} className={`transition-all duration-200 ${expandedInternship === item.id ? "mb-1" : ""}`}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setExpandedInternship(item.id === expandedInternship ? null : item.id);
                    }}
                    className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 group ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <span className="font-mono text-xs shrink-0"
                      style={{ color: "oklch(0.55 0.14 35)" }}>
                      {(item as any).number}
                    </span>
                    <span className={`font-body text-sm transition-all duration-200 ${
                      isActive ? "font-medium" : "font-normal"
                    }`}
                      style={{ color: isActive ? "oklch(0.92 0.02 75)" : "oklch(0.70 0.02 75)" }}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "oklch(0.55 0.14 35)" }} />
                    )}
                  </button>
                </li>
              );
            }

            if (item.id === "photography") {
              return (
                <li key={item.id} className="mt-4 pt-4 border-t" style={{ borderColor: "oklch(0.30 0.04 35)" }}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded font-body text-sm transition-all duration-200 ${
                      isActive
                        ? "font-medium"
                        : "opacity-60 hover:opacity-90"
                    }`}
                    style={{
                      color: isActive ? "oklch(0.92 0.02 75)" : "oklch(0.70 0.02 75)",
                      backgroundColor: isActive ? "oklch(0.30 0.04 35)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded font-body text-sm transition-all duration-200 ${
                    isActive
                      ? "font-medium"
                      : "opacity-60 hover:opacity-90"
                  }`}
                  style={{
                    color: isActive ? "oklch(0.92 0.02 75)" : "oklch(0.70 0.02 75)",
                    backgroundColor: isActive ? "oklch(0.30 0.04 35)" : "transparent",
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer links */}
      <div className="px-8 py-6 border-t" style={{ borderColor: "oklch(0.30 0.04 35)" }}>
        <div className="space-y-3">
          {/* Resume download button */}
          <a href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/lbVUDTigXQfFKdST.pdf"
            download="Gavin-Kennedy-Resume.pdf"
            className="block w-full py-2 px-3 rounded text-xs font-medium text-center transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.55 0.14 35)",
              color: "oklch(0.92 0.02 75)",
            }}
          >
            ↓ Download Resume
          </a>

          {/* Contact links */}
          <div className="space-y-2 pt-2">
            <a href={`mailto:${portfolioData.email}`}
              className="block font-mono text-xs transition-colors duration-200 hover:opacity-100"
              style={{ color: "oklch(0.55 0.14 35)" }}>
              {portfolioData.email}
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer"
              className="block font-mono text-xs transition-colors duration-200 hover:opacity-100"
              style={{ color: "oklch(0.55 0.14 35)" }}>
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
