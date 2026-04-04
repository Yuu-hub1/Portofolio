import { useState } from "react";
import { Icon } from "../../components/icon";
import { techStacks } from "../../../core/data/techStack";

export default function TechStack() {
  const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div>
                    {/* Bento Grid: Tech Stack Section */}
        <section className="w-full bg-white py-20 px-30 flex flex-col items-center">
          <h2 className="font-semibold text-2xl text-gray-900 mb-6 text-center">
            Keahlian Teknologi
          </h2>
          <p className="text-[#727272] max-w-2xl mb-10 text-center">
            Saya bekerja dengan ekosistem teknologi terbaru untuk memastikan performa web yang optimal.
          </p>
          {/* Start: Tech Stack Glassmorphism Cards */}
          <div className="flex flex-wrap justify-center gap-20 w-full ">
            {techStacks.map((tech, idx) => (
              <div
                key={tech.name}
                className="w-32 h-32 flex flex-col items-center justify-center  transition-all duration-200 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer relative"
                style={{
                  border: `1.5px solid ${tech.color}80`, // faded color border
                  background: `linear-gradient(135deg, rgba(255,255,255,0.22) 60%, ${tech.bg} 100%)`,
                  backdropFilter: "blur(16px)", // Glassmorphism blur
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
                  className="w-12 h-12 mb-2 z-10"
                  style={{
                    color: tech.name !== "JavaScript" ? tech.color : undefined,
                    filter:
                      tech.name === "JavaScript"
                        ? "drop-shadow(0px 1px 2px #eedc82)"
                        : undefined,
                  }}
                />
                <span className="font-medium text-xs text-gray-700 text-center z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          {/* End: Tech Stack Glassmorphism Cards */}
        </section>
        </div>
    )
}