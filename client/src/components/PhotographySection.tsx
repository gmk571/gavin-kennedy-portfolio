/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Photography — Abstract collage layout organized by location
 * Red dashed border, numbered images, black spacing between photos
 */

import { photographyData } from "@/lib/photographyData";
import { useState } from "react";

export default function PhotographySection() {
  const [activeLocation, setActiveLocation] = useState("peru");
  const activePhotos = photographyData.find((loc) => loc.id === activeLocation)?.photos || [];

  const getGridClass = (span?: string) => {
    switch (span) {
      case "small":
        return "col-span-1 row-span-1";
      case "medium":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
      case "large":
        return "col-span-2 row-span-3 md:col-span-3 md:row-span-2";
      case "wide":
        return "col-span-3 row-span-1 md:col-span-4 md:row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section id="photography" className="py-20 px-16 relative"
      style={{ backgroundColor: "oklch(0.97 0.01 75)" }}>

      <div className="max-w-7xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.54 0.14 40)" }}>
            Photography
          </span>
        </div>

        {/* Location tabs */}
        <div className="flex gap-8 mb-16">
          {photographyData.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className="pb-3 text-sm font-medium transition-all duration-300 border-b-2 uppercase"
              style={{
                borderColor: activeLocation === location.id ? "oklch(0.54 0.14 40)" : "transparent",
                color: activeLocation === location.id ? "oklch(0.18 0.035 55)" : "oklch(0.62 0.025 55)",
              }}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Abstract collage grid with red dashed border */}
        <div className="p-4 rounded-sm"
          style={{
            border: "2px dashed oklch(0.54 0.14 40)",
            backgroundColor: "#000",
          }}>
          <div className="grid grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[200px]">
            {activePhotos.map((photo) => (
              <div
                key={photo.id}
                className={`relative overflow-hidden group cursor-pointer transition-all duration-300 hover:opacity-90 ${getGridClass(
                  photo.gridSpan
                )}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Red number label in top-left corner */}
                <div
                  className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center text-white text-xs font-bold rounded-sm"
                  style={{ backgroundColor: "oklch(0.54 0.14 40)" }}
                >
                  {photo.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location info */}
        <div className="mt-8">
          <p className="text-sm" style={{ color: "oklch(0.62 0.025 55)" }}>
            {photographyData.find((loc) => loc.id === activeLocation)?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
