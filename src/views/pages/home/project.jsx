import { useState } from "react";
import { Icon } from "../../components/icon";
import { featuredProjects } from "../../../core/data/project";

export default function Project() {
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);

  const badgeClass =
    "bg-gray-100 text-gray-700 text-[11px] font-medium px-2 py-1 mr-2 mb-2 rounded shadow border inline-flex items-center";

  return (
    <div>
      <section className="w-full bg-[#f9fafb] py-24 px-2 md:px-16 flex flex-col items-center">
        <h2 className="font-semibold text-2xl text-gray-900 mb-6 text-center">
          PROYEK PILIHAN
        </h2>
        <div className="flex flex-col gap-16 max-w-6xl w-full">
          {featuredProjects.map((proj, idx) => {
            const isImageLeft = idx % 2 === 0;
            return (
              <div
                key={proj.title}
                className={
                  `relative flex flex-col md:flex-row items-stretch rounded-3xl shadow-xl bg-white overflow-hidden group transition-all` +
                  (isImageLeft ? " md:flex-row" : " md:flex-row-reverse")
                }
                style={{
                  minHeight: "340px",
                }}
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-biru text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg tracking-wide uppercase">
                    {proj.label}
                  </span>
                </div>
                <div
                  className="relative w-full md:w-1/2 h-60 md:h-auto flex items-center justify-center overflow-hidden"
                  onMouseEnter={() => setHoveredProjectIdx(idx)}
                  onMouseLeave={() => setHoveredProjectIdx(null)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover w-full h-full rounded-3xl md:rounded-none md:rounded-l-3xl shadow-2xl transition-transform duration-300 scale-100 group-hover:scale-120"
                    draggable={false}
                  />
                  {hoveredProjectIdx === idx && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 transition-all duration-200 z-10">
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-white text-biru font-semibold hover:bg-biru hover:text-white shadow active:scale-95 transition-all duration-150"
                      >
                        Segera Datang
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-black hover:text-white shadow active:scale-95 transition-all duration-150"
                      >
                        GitHub
                      </a>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-7 py-9 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-biru mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 mb-6 whitespace-pre-line">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.tech.map(({ name, icon }) => (
                      <span key={name} className={badgeClass}>
                        <Icon name={icon} className="w-4 h-4 mr-1 inline" /> {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}