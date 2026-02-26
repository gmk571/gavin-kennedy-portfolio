/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Home — Main page assembling all sections with scroll-based active section tracking
 * Fixed left sidebar (desktop) + mobile top nav
 * Sections: Hero → About → Experience → Internship 1/2/3/4 → Photography → Contact
 */

import { useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import InternshipSection from "@/components/InternshipSection";
import PhotographyEditor from "@/components/PhotographyEditor";
import ContactSection from "@/components/ContactSection";
import { internships } from "@/lib/portfolioData";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  ...internships.map((i) => i.id),
  "photography",
  "contact",
];

// Placeholder photography data - will be populated with user's images
const photographyData: Array<{id: string; src: string; alt: string; title?: string}> = [
  // Placeholder items - replace with actual photos
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
      </div>

      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} onNavigate={navigateTo} />

      {/* Main content — offset for sidebar on desktop */}
      <main className="lg:ml-64">
        <HeroSection />
        <AboutSection />
        <ExperienceSection onNavigate={navigateTo} />
        {internships.map((internship, index) => (
          <InternshipSection
            key={internship.id}
            internship={internship}
            index={index}
          />
        ))}
        <PhotographyEditor />
        <ContactSection />

        {/* Footer */}
        <footer className="px-16 py-10 border-t"
          style={{
            borderColor: "oklch(0.92 0.02 75)",
            backgroundColor: "oklch(0.97 0.01 75)",
          }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs"
              style={{ color: "oklch(0.50 0.05 35)" }}>
              © 2026 Gavin Kennedy — Marketing Portfolio
            </span>
            <span className="font-mono text-xs"
              style={{ color: "oklch(0.60 0.08 35)" }}>
              Warm Earthy Minimalist Design
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
