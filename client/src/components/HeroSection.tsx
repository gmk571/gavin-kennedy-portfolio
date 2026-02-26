/*
 * DESIGN PHILOSOPHY: Warm Modernist Studio
 * Hero — Full-width warm sand background with substantial geometric elements
 * Playfair Display at large scale, terracotta accent, DM Mono metadata
 */

import { useEffect, useRef } from "react";
import { portfolioData } from "@/lib/portfolioData";

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const text = el.textContent || "";
    el.textContent = "";
    el.style.opacity = "1";
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.97 0.012 75)" }}>
      
      {/* Geometric background elements */}
      {/* Large circle top right */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-8"
        style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
      
      {/* Medium circle bottom right with blur */}
      <div className="absolute right-1/3 -bottom-24 w-80 h-80 rounded-full opacity-6"
        style={{ backgroundColor: "oklch(0.54 0.14 40)", filter: "blur(40px)" }} />
      
      {/* Small circle left side */}
      <div className="absolute -left-16 top-1/2 w-64 h-64 rounded-full opacity-7"
        style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
      
      {/* Accent rectangle bottom left */}
      <div className="absolute -bottom-12 -left-20 w-48 h-96 opacity-5"
        style={{ backgroundColor: "oklch(0.54 0.14 40)", transform: "rotate(-15deg)" }} />

      {/* Content */}
      <div className="relative z-10 px-16 max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 fade-up fade-up-delay-1">
          <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
          <span className="font-mono-warm text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.54 0.14 40)" }}>
            Portfolio
          </span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display font-black leading-none mb-6"
          style={{
            fontSize: "clamp(3.5rem, 7vw, 6rem)",
            color: "oklch(0.18 0.035 55)",
            opacity: 0,
          }}
        >
          {portfolioData.name}
        </h1>

        {/* Tagline */}
        <p className="font-display italic text-2xl mb-8 fade-up fade-up-delay-3"
          style={{ color: "oklch(0.42 0.025 55)" }}>
          {portfolioData.tagline}
        </p>

        {/* Bio excerpt */}
        <p className="font-body text-base leading-relaxed max-w-lg mb-10 fade-up fade-up-delay-4"
          style={{ color: "oklch(0.35 0.025 55)" }}>
          {portfolioData.bio}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-6 fade-up fade-up-delay-5">
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-7 py-3.5 font-body font-medium text-sm transition-all duration-300 hover:gap-5"
            style={{
              backgroundColor: "oklch(0.54 0.14 40)",
              color: "oklch(0.97 0.012 75)",
            }}
          >
            View My Work
            <span>→</span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body text-sm font-medium terracotta-underline transition-colors duration-200"
            style={{ color: "oklch(0.35 0.025 55)" }}
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-16 flex items-center gap-3 fade-up fade-up-delay-5">
        <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "oklch(0.54 0.14 40)" }} />
        <span className="font-mono-warm text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.62 0.025 55)" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
