/*
 * DESIGN PHILOSOPHY: Warm Modernist Studio
 * Contact — Warm sand background, minimal form, terracotta CTA
 */

import { portfolioData } from "@/lib/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-16"
      style={{ backgroundColor: "oklch(0.94 0.022 75)" }}>
      <div className="max-w-3xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-divider flex-1">
            <span className="font-mono-warm text-xs tracking-widest uppercase ml-3"
              style={{ color: "oklch(0.54 0.14 40)" }}>
              Contact
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — text */}
          <div>
            <h2 className="font-display font-bold text-4xl leading-tight mb-6"
              style={{ color: "oklch(0.18 0.035 55)" }}>
              Let's build something worth talking about.
            </h2>
            <p className="font-body text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.42 0.025 55)" }}>
              Whether you're looking for a marketing collaborator, have a project in mind, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-4 group">
                <div className="w-10 h-10 border flex items-center justify-center transition-colors duration-200 group-hover:bg-current"
                  style={{ borderColor: "oklch(0.54 0.14 40)" }}>
                  <span className="font-mono-warm text-xs" style={{ color: "oklch(0.54 0.14 40)" }}>@</span>
                </div>
                <div>
                  <div className="font-mono-warm text-xs tracking-wide uppercase mb-0.5"
                    style={{ color: "oklch(0.62 0.025 55)" }}>
                    Email
                  </div>
                  <div className="font-body text-sm font-medium terracotta-underline"
                    style={{ color: "oklch(0.18 0.035 55)" }}>
                    {portfolioData.email}
                  </div>
                </div>
              </a>

              <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-10 h-10 border flex items-center justify-center transition-colors duration-200"
                  style={{ borderColor: "oklch(0.56 0.06 145)" }}>
                  <span className="font-mono-warm text-xs" style={{ color: "oklch(0.46 0.06 145)" }}>in</span>
                </div>
                <div>
                  <div className="font-mono-warm text-xs tracking-wide uppercase mb-0.5"
                    style={{ color: "oklch(0.62 0.025 55)" }}>
                    LinkedIn
                  </div>
                  <div className="font-body text-sm font-medium terracotta-underline"
                    style={{ color: "oklch(0.18 0.035 55)" }}>
                    {portfolioData.linkedin} ↗
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — quick contact note */}
          <div className="flex flex-col justify-center">
            <div className="p-8 border"
              style={{
                borderColor: "oklch(0.86 0.022 75)",
                backgroundColor: "oklch(0.97 0.012 75)",
              }}>
              <h3 className="font-display font-bold text-xl mb-4"
                style={{ color: "oklch(0.18 0.035 55)" }}>
                Open to opportunities
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "oklch(0.42 0.025 55)" }}>
                I'm currently exploring full-time roles in brand strategy, campaign management, and digital marketing. I'm especially drawn to agencies and in-house teams that value creative thinking backed by data.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Brand Strategy", "Campaign Management", "Digital Marketing", "Content Strategy"].map((tag) => (
                  <span key={tag}
                    className="px-3 py-1 font-mono-warm text-xs border"
                    style={{
                      borderColor: "oklch(0.54 0.14 40)",
                      color: "oklch(0.54 0.14 40)",
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
