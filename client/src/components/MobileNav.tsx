/*
 * DESIGN PHILOSOPHY: Warm Modernist Studio
 * MobileNav — Top bar for screens < lg, espresso background, hamburger menu
 */

import { useState } from "react";
import { portfolioData, internships } from "@/lib/portfolioData";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    ...internships.map((i) => ({ id: i.id, label: i.agency, number: i.number })),
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:hidden"
        style={{ backgroundColor: "oklch(0.18 0.035 55)" }}>
        <div>
          <div className="font-mono-warm text-xs tracking-widest uppercase mb-0.5"
            style={{ color: "oklch(0.54 0.14 40)" }}>
            Portfolio
          </div>
          <div className="font-display font-bold text-base"
            style={{ color: "oklch(0.94 0.022 75)" }}>
            {portfolioData.name}
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "oklch(0.72 0.025 55)",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }} />
          <span className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "oklch(0.72 0.025 55)",
              opacity: open ? 0 : 1,
            }} />
          <span className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "oklch(0.72 0.025 55)",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }} />
        </button>
      </header>

      {/* Drawer */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

        {/* Panel */}
        <nav
          className="absolute top-0 right-0 h-full w-72 py-20 px-8 overflow-y-auto transition-transform duration-300"
          style={{
            backgroundColor: "oklch(0.18 0.035 55)",
            transform: open ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isSub = "number" in item;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left flex items-center gap-3 px-3 py-3 transition-all duration-200 ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    {isSub && (
                      <span className="font-mono-warm text-xs shrink-0"
                        style={{ color: "oklch(0.54 0.14 40)" }}>
                        {(item as any).number}
                      </span>
                    )}
                    <span className={`font-body text-sm ${isActive ? "font-medium" : "font-normal"}`}
                      style={{ color: isActive ? "oklch(0.94 0.022 75)" : "oklch(0.72 0.025 55)" }}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 pt-8 border-t" style={{ borderColor: "oklch(0.28 0.035 55)" }}>
            <a href={`mailto:${portfolioData.email}`}
              className="block font-mono-warm text-xs mb-2"
              style={{ color: "oklch(0.54 0.14 40)" }}>
              {portfolioData.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
