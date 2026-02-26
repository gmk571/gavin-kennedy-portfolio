/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * ProjectCard — Warm paper texture, lift on hover, accent tag label
 * Expandable details with smooth animation + media gallery
 */

import { useState } from "react";
import type { Project } from "@/lib/portfolioData";

const PAPER_TEXTURE = "https://private-us-east-1.manuscdn.com/sessionFile/BsAbwMfb024zlFQo58Whv7/sandbox/eWyT9EsKcGuy810DPwkf7T-img-3_1772055555000_na1fn_cHJvamVjdC1jYXJkLXRleHR1cmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQnNBYndNZmIwMjR6bEZRbzU4V2h2Ny9zYW5kYm94L2VXeVQ5RXNLY0d1eTgxMERQd2tmN1QtaW1nLTNfMTc3MjA1NTU1NTAwMF9uYTFmbl9jSEp2YW1WamRDMWpZWEprTFhSbGVIUjFjbVUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BL1RRi--RiDkC8kh-MY22Y1MIDMDlyqu1w~m~2oD-JikwbdjfV9ZjVFk-Q~U1zcSZx5jX8l7qQ9ltuoYiulwEAmJnAtNzdNM4Y0u3lpzuUN1mEWn~o6AJvh8VS3~f1T1H2jn1V4LyCy58JtnDaE2xzyrQVFyu55gREonbXa094cIK8nGnu91iR~x5lGuWVnRIIJS-dheVR7ZBJBt0TvD7zYbn~LrX21HF0Fn5zm0mgievK8qXRizyNQ3NxQVUnmO36-MCMxqFDLt~UY-ddWAI~gISQoqJJLnEWwjApzXuYbiFSH3TqeDtzVrhOTjBilk0LIPxl2B5M0s0LGsUTfriQ__";

interface ProjectCardProps {
  project: Project;
  index: number;
  accentColor: string;
}

export default function ProjectCard({ project, index, accentColor }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const hasMedia = project.media && project.media.length > 0;
  const selectedMedia = hasMedia && project.media ? project.media[selectedMediaIndex] : null;

  return (
    <div
      className="project-card relative overflow-hidden border"
      style={{
        borderColor: "oklch(0.92 0.02 75)",
        backgroundColor: "oklch(0.97 0.01 75)",
      }}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img src={PAPER_TEXTURE} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="relative z-10">
        {/* Media gallery */}
        {hasMedia && (
          <div className="border-b" style={{ borderColor: "oklch(0.92 0.02 75)" }}>
            {/* Main media display */}
            <div className="bg-black/5 aspect-video w-full overflow-hidden">
              {selectedMedia?.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.alt || project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={selectedMedia?.url}
                  controls
                  className="w-full h-full object-cover bg-black"
                />
              )}
            </div>

            {/* Media thumbnails */}
            {project.media && project.media.length > 1 && (
              <div className="flex gap-2 p-3 bg-white/50 overflow-x-auto">
                {project.media.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMediaIndex(idx)}
                    className={`shrink-0 w-12 h-12 border-2 transition-all ${
                      idx === selectedMediaIndex ? "border-opacity-100" : "border-opacity-30 hover:border-opacity-60"
                    }`}
                    style={{
                      borderColor: accentColor === "burnt-orange"
                        ? "oklch(0.54 0.14 40)"
                        : accentColor === "dark-green"
                        ? "oklch(0.46 0.06 145)"
                        : "oklch(0.35 0.025 55)",
                    }}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.url}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                        ▶
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="p-7">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              {/* Category tag */}
              <span
                className="inline-block px-2.5 py-1 font-mono text-xs tracking-wide uppercase mb-3"
                style={{
                  backgroundColor: accentColor === "burnt-orange"
                    ? "oklch(0.54 0.14 40 / 0.1)"
                    : accentColor === "dark-green"
                    ? "oklch(0.56 0.06 145 / 0.1)"
                    : "oklch(0.18 0.035 55 / 0.08)",
                  color: accentColor === "burnt-orange"
                    ? "oklch(0.54 0.14 40)"
                    : accentColor === "dark-green"
                    ? "oklch(0.46 0.06 145)"
                    : "oklch(0.35 0.025 55)",
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h4 className="font-bold text-xl leading-snug"
                style={{ color: "oklch(0.18 0.035 55)" }}>
                {project.title}
              </h4>
            </div>

            {/* Index number */}
            <span className="font-mono text-3xl font-light shrink-0 leading-none mt-1"
              style={{ color: "oklch(0.86 0.022 75)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-5"
            style={{ color: "oklch(0.42 0.025 55)" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag}
                className="px-2 py-0.5 font-mono text-xs border"
                style={{
                  borderColor: "oklch(0.86 0.022 75)",
                  color: "oklch(0.55 0.025 55)",
                }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-medium transition-all duration-200 hover:gap-3"
            style={{ color: accentColor === "burnt-orange" ? "oklch(0.54 0.14 40)" : accentColor === "dark-green" ? "oklch(0.46 0.06 145)" : "oklch(0.35 0.025 55)" }}
          >
            <span>{expanded ? "Hide details" : "View details"}</span>
            <span className="transition-transform duration-300"
              style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
              →
            </span>
          </button>

          {/* Expandable details */}
          <div
            className="overflow-hidden transition-all duration-400 ease-in-out"
            style={{ maxHeight: expanded ? "500px" : "0px", opacity: expanded ? 1 : 0 }}
          >
            <div className="pt-5 mt-5 border-t" style={{ borderColor: "oklch(0.86 0.022 75)" }}>
              <h5 className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: "oklch(0.62 0.025 55)" }}>
                Key Contributions
              </h5>
              <ul className="space-y-2 mb-5">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: accentColor === "burnt-orange"
                          ? "oklch(0.54 0.14 40)"
                          : accentColor === "dark-green"
                          ? "oklch(0.56 0.06 145)"
                          : "oklch(0.35 0.025 55)",
                      }} />
                    <span className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.35 0.025 55)" }}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {project.outcome && (
                <div className="p-4 border-l-2"
                  style={{
                    borderColor: accentColor === "burnt-orange"
                      ? "oklch(0.54 0.14 40)"
                      : accentColor === "dark-green"
                      ? "oklch(0.56 0.06 145)"
                      : "oklch(0.35 0.025 55)",
                    backgroundColor: "oklch(0.94 0.022 75)",
                  }}>
                  <span className="font-mono text-xs tracking-widest uppercase block mb-1"
                    style={{ color: "oklch(0.62 0.025 55)" }}>
                    Outcome
                  </span>
                  <p className="text-sm leading-relaxed font-medium"
                    style={{ color: "oklch(0.25 0.025 55)" }}>
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
