import { useState } from "react";
import { Icon } from "../../components/icon";
import { techStacks } from "../../../core/data/techStack";

export default function TechStack() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div>
      <section className="w-full bg-white py-10 px-4 sm:py-16 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-6 text-center">
          KEAHLIAN TEKNOLOGI
        </h2>
        <p className="text-[#727272] max-w-2xl mb-10 text-center text-sm sm:text-base">
          Saya bekerja dengan ekosistem teknologi terbaru untuk memastikan performa web yang optimal.
        </p>
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6
            sm:gap-10
            lg:gap-14
            w-full
            max-w-5xl
            justify-items-center
          "
        >
          {techStacks.map((tech, idx) => (
            <div
              key={tech.name}
              className="
                w-24 h-24
                sm:w-28 sm:h-28
                md:w-32 md:h-32
                flex flex-col items-center justify-center
                transition-all duration-200
                grayscale hover:grayscale-0 hover:scale-105
                cursor-pointer
                relative
                "
              style={{
                border: `1.5px solid ${tech.color}80`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.22) 60%, ${tech.bg} 100%)`,
                backdropFilter: "blur(16px)", 
                WebkitBackdropFilter: "blur(16px)",
                boxShadow:
                  hoverIndex === idx
                    ? `0 8px 32px 0 ${tech.color}55`
                    : "0 4px 8px 0 rgba(30, 41, 59, 0.03)",
                zIndex: hoverIndex === idx ? 2 : 1,
                overflow: "hidden",
              }}
              title={tech.name}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="absolute inset-0 z-0 pointer-events-none" />
              <Icon
                name={tech.icon}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-2 z-10"
                style={{
                  color: tech.name !== "JavaScript" ? tech.color : undefined,
                  filter:
                    tech.name === "JavaScript"
                      ? "drop-shadow(0px 1px 2px #eedc82)"
                      : undefined,
                }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700 text-center z-10">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}