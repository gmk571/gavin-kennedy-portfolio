/*
 * DESIGN PHILOSOPHY: Warm Modernist Studio
 * InternshipSection — Full-width chapter with large typographic header
 * Alternating light/sand backgrounds, project grid below metadata strip
 */

import { useRef, useEffect, useState } from "react";
import type { Internship } from "@/lib/portfolioData";
import ProjectCard from "./ProjectCard";

const DARK_BG = "https://private-us-east-1.manuscdn.com/sessionFile/BsAbwMfb024zlFQo58Whv7/sandbox/eWyT9EsKcGuy810DPwkf7T-img-2_1772055564000_na1fn_aW50ZXJuc2hpcC0xLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQnNBYndNZmIwMjR6bEZRbzU4V2h2Ny9zYW5kYm94L2VXeVQ5RXNLY0d1eTgxMERQd2tmN1QtaW1nLTJfMTc3MjA1NTU2NDAwMF9uYTFmbl9hVzUwWlhKdWMyaHBjQzB4TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iPzW5511q6EUAFfVLBtF06ZfJRHwJ4yksaN0iWWvb0-z0GNEyDEctEy5T7U~MH0wBVe5oc~exXoVxgKmNnO8xu12WSTRaBeUxpl0x-GlBq~-1JD9XfbTEfEQNs2FRm2CHOcG91gpuAHA8NZlAtiCLtfi3hePFvY0nNsQLz2W4RZXRPNmiSxMPmVpsqryzEOm79O7uey~ZDQ2AW3LSz8Gcwwu5g1jC73e2fcvyUQ6gdaqFmm-~sj3pm7b3258ooFs~X8J3vs401WgM0ntdZRpEeXOfCk4pyVxFZXlRaRjm2Ms0lJABDNtdJjwScZAxsxG-PQfeHfTE03~CuJLjRDuUw__";

interface InternshipSectionProps {
  internship: Internship;
  index: number;
}

export default function InternshipSection({ internship, index }: InternshipSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  const bgColor = isEven ? "oklch(0.97 0.012 75)" : "oklch(0.94 0.022 75)";

  const accentColorMap: Record<string, string> = {
    terracotta: "oklch(0.54 0.14 40)",
    sage: "oklch(0.56 0.06 145)",
    espresso: "oklch(0.35 0.025 55)",
  };
  const accentColor = accentColorMap[internship.color] || accentColorMap.terracotta;

  return (
    <section
      ref={sectionRef}
      id={internship.id}
      className="relative"
      style={{ backgroundColor: bgColor }}
    >
      {/* Chapter header — dark band with background image */}
      <div className="relative overflow-hidden py-16 px-16"
        style={{ backgroundColor: "oklch(0.18 0.035 55)" }}>
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img src={DARK_BG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.18 0.035 55) 40%, transparent 100%)"
          }} />

        <div className="relative z-10">
          {/* Number + section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-warm text-xs tracking-widest uppercase"
              style={{ color: accentColor }}>
              Internship {internship.number}
            </span>
            <div className="flex-1 h-px opacity-30" style={{ backgroundColor: accentColor }} />
          </div>

          {/* Agency name — large display */}
          <h2
            className="font-display font-black leading-none mb-4 transition-all duration-700"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "oklch(0.94 0.022 75)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {internship.agency}
          </h2>

          {/* Metadata strip */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="font-mono-warm text-xs tracking-wide uppercase"
                style={{ color: "oklch(0.62 0.025 55)" }}>
                Role
              </span>
              <span className="font-body text-sm font-medium"
                style={{ color: "oklch(0.88 0.028 75)" }}>
                {internship.role}
              </span>
            </div>
            <div className="w-px h-4 opacity-30" style={{ backgroundColor: "oklch(0.62 0.025 55)" }} />
            <div className="flex items-center gap-2">
              <span className="font-mono-warm text-xs tracking-wide uppercase"
                style={{ color: "oklch(0.62 0.025 55)" }}>
                Period
              </span>
              <span className="font-body text-sm font-medium"
                style={{ color: "oklch(0.88 0.028 75)" }}>
                {internship.period}
              </span>
            </div>
            <div className="w-px h-4 opacity-30" style={{ backgroundColor: "oklch(0.62 0.025 55)" }} />
            <div className="flex items-center gap-2">
              <span className="font-mono-warm text-xs tracking-wide uppercase"
                style={{ color: "oklch(0.62 0.025 55)" }}>
                Location
              </span>
              <span className="font-body text-sm font-medium"
                style={{ color: "oklch(0.88 0.028 75)" }}>
                {internship.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview + Projects */}
      <div className="px-16 py-16">
        {/* Overview */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8" style={{ backgroundColor: accentColor }} />
            <h3 className="font-mono-warm text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.62 0.025 55)" }}>
              Agency Overview
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed"
            style={{ color: "oklch(0.35 0.025 55)" }}>
            {internship.overview}
          </p>
        </div>

        {/* Projects header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="section-divider flex-1">
            <span className="font-mono-warm text-xs tracking-widest uppercase ml-3"
              style={{ color: "oklch(0.62 0.025 55)" }}>
              Projects ({internship.projects.length})
            </span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {internship.projects.map((project, i) => (
            <div
              key={project.id}
              className="transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <ProjectCard
                project={project}
                index={i}
                accentColor={internship.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
