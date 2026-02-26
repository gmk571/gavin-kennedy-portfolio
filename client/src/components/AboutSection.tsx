/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * About — Simplified layout, skills as tagged chips, minimal text
 */

import { portfolioData } from "@/lib/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-16 relative"
      style={{ backgroundColor: "oklch(0.94 0.022 75)" }}>

      <div className="max-w-4xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="section-divider flex-1">
            <span className="font-mono text-xs tracking-widest uppercase ml-3"
              style={{ color: "oklch(0.54 0.14 40)" }}>
              About
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Bio column */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-3xl leading-tight mb-4"
              style={{ color: "oklch(0.18 0.035 55)" }}>
              Strategic communicator and advertising professional.
            </h2>
            <p className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.35 0.025 55)" }}>
              {portfolioData.bio}
            </p>

            {/* Contact links */}
            <div className="flex items-center gap-6 mt-8">
              <a href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                style={{ color: "oklch(0.54 0.14 40)" }}>
                <span>Get in touch</span>
                <span>→</span>
              </a>
              <span className="w-px h-4" style={{ backgroundColor: "oklch(0.72 0.025 55)" }} />
              <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium"
                style={{ color: "oklch(0.35 0.025 55)" }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Skills column */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.54 0.14 40)" }}>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium border transition-colors duration-200 hover:border-current"
                  style={{
                    borderColor: "oklch(0.72 0.025 55)",
                    color: "oklch(0.35 0.025 55)",
                    backgroundColor: "oklch(0.97 0.012 75)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
