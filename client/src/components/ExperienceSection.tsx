/*
 * DESIGN PHILOSOPHY: Warm Modernist Studio
 * Experience — Timeline overview anchoring the three internship chapters
 */

import { internships } from "@/lib/portfolioData";

interface ExperienceSectionProps {
  onNavigate: (id: string) => void;
}

export default function ExperienceSection({ onNavigate }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-16"
      style={{ backgroundColor: "oklch(0.18 0.035 55)" }}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
        <span className="font-mono-warm text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.54 0.14 40)" }}>
          Work Experience
        </span>
        <div className="flex-1 h-px opacity-20" style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
      </div>

      <div className="max-w-4xl">
        <h2 className="font-display font-bold text-4xl mb-4 leading-tight"
          style={{ color: "oklch(0.94 0.022 75)" }}>
          Three agencies.<br />
          <span className="italic" style={{ color: "oklch(0.68 0.12 40)" }}>
            Countless lessons.
          </span>
        </h2>
        <p className="font-body text-base leading-relaxed mb-16 max-w-xl"
          style={{ color: "oklch(0.62 0.025 55)" }}>
          Each internship shaped a different dimension of my marketing practice — from brand strategy and creative development to performance media and integrated campaigns.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "oklch(0.28 0.035 55)" }} />

          <div className="space-y-0">
            {internships.map((internship, i) => (
              <div key={internship.id} className="relative flex gap-10 group">
                {/* Timeline node */}
                <div className="relative z-10 shrink-0 w-12 flex justify-center pt-8">
                  <div
                    className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                      borderColor: internship.color === "terracotta"
                        ? "oklch(0.54 0.14 40)"
                        : internship.color === "sage"
                        ? "oklch(0.56 0.06 145)"
                        : "oklch(0.72 0.025 55)",
                      backgroundColor: "oklch(0.18 0.035 55)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-12 pt-6 border-b last:border-b-0"
                  style={{ borderColor: "oklch(0.28 0.035 55)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono-warm text-xs tracking-widest uppercase block mb-2"
                        style={{
                          color: internship.color === "terracotta"
                            ? "oklch(0.54 0.14 40)"
                            : internship.color === "sage"
                            ? "oklch(0.56 0.06 145)"
                            : "oklch(0.62 0.025 55)",
                        }}>
                        {internship.period}
                      </span>
                      <h3 className="font-display font-bold text-2xl mb-1"
                        style={{ color: "oklch(0.94 0.022 75)" }}>
                        {internship.agency}
                      </h3>
                      <p className="font-body text-sm"
                        style={{ color: "oklch(0.62 0.025 55)" }}>
                        {internship.role} · {internship.location}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(internship.id)}
                      className="shrink-0 flex items-center gap-2 px-4 py-2 font-body text-xs font-medium border transition-all duration-300 hover:gap-3 mt-1"
                      style={{
                        borderColor: "oklch(0.35 0.025 55)",
                        color: "oklch(0.72 0.025 55)",
                      }}
                    >
                      View Work
                      <span>→</span>
                    </button>
                  </div>

                  {/* Project count chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {internship.projects.map((p) => (
                      <span key={p.id}
                        className="px-2.5 py-1 font-mono-warm text-xs border"
                        style={{
                          borderColor: "oklch(0.28 0.035 55)",
                          color: "oklch(0.52 0.025 55)",
                        }}>
                        {p.category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
