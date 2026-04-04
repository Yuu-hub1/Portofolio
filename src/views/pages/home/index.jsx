import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import { Icon } from "../../components/icon";
import AboutMe from "./about-me";

// Featured projects data
const featuredProjects = [
  {
    title: "Sistem Aset TEFA Sekolah",
    label: "Proyek Tefa",
    description:
      "Permasalahan: Pengelolaan inventaris seringkali tidak transparan dan rawan kehilangan data. Solusi: Aplikasi web pencatatan aset sekolah terintegrasi yang memudahkan tracking aset secara real-time.",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "devicon:tailwindcss" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "MongoDB", icon: "logos:mongodb" },
    ],
    image: "/projects/tefa-aset.png",
    demo: "https://aset-tefa-demo.example.com",
    github: "https://github.com/username/aset-tefa",
  },
  {
    title: "Absensi Magang Industri",
    label: "Hasil Magang",
    description:
      "Permasalahan: Absensi manual magang sering menyebabkan data kurang akurat. Solusi: Sistem absensi digital berbasis web, lengkap dengan dashboard dan notifikasi real time.",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Express", icon: "logos:express" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
    image: "/projects/magang-absensi.png",
    demo: "https://magang-absensi-demo.example.com",
    github: "https://github.com/username/magang-absensi",
  },
  {
    title: "Portal Informasi Siswa",
    label: "Proyek Pribadi",
    description:
      "Permasalahan: Informasi sekolah sering tidak terpusat. Solusi: Portal web yang mengintegrasikan info jadwal, pengumuman, absensi & nilai, dengan tampilan mobile friendly.",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "devicon:tailwindcss" },
      { name: "Firebase", icon: "logos:firebase" },
    ],
    image: "/projects/portal-siswa.png",
    demo: "https://portal-siswa-demo.example.com",
    github: "https://github.com/username/portal-siswa",
  },
];

const words = ["SISWA", "FRONTEND", "DEVELOPER"];

// Dummy data for services
const layananList = [
  {
    title: "Pengembangan Web",
    icon: "mdi:web",
    description:
      "Membangun aplikasi atau situs web yang modern, responsif, dan sesuai kebutuhan Anda.",
  },
  {
    title: "UI/UX Slicing",
    icon: "ic:baseline-design-services",
    description:
      "Memotong desain UI/UX dari file desain ke kode dengan presisi dan perhatian pada detail visual.",
  },
  {
    title: "API Fetch",
    icon: "mdi:database",
    description:
      "Menghubungkan, mengambil data, dan mengelola integrasi API agar aplikasi Anda tetap dinamis dan terupdate.",
  },
];

// Tech stack list for "Bento Grid"
const techStacks = [
  {
    name: "React",
    icon: "logos:react", // Iconify/Logos
    color: "#61DAFB",
    bg: "#ECFAFF", // Lighter for bg (optionally)
  },
  {
    name: "Tailwind",
    icon: "devicon:tailwindcss",
    color: "#06B6D4",
    bg: "#E6F7FA",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    color: "#F7DF1E",
    bg: "#FDF8E2",
  },
  {
    name: "Figma",
    icon: "logos:figma",
    color: "#0ACF83",
    bg: "#F4FFF7",
  },
  {
    name: "Vite",
    icon: "logos:vitejs",
    color: "#7649F6",
    bg: "#F4F0FF",
  },
  {
    name: "VS Code",
    icon: "vscode-icons:file-type-vscode",
    color: "#007ACC",
    bg: "#EAF6FF",
  },
  {
    name: "Github",
    icon: "logos:github-icon",
    color: "#F05032",
    bg: "#FFEBE5",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    color: "#3C873A",
    bg: "#F4FFF7",
  },
  {
    name: "HTML",
    icon: "logos:html-5",
    color: "#E44D26",
    bg: "#FFF3ED",
  },
  {
    name: "CSS",
    icon: "logos:css-3",
    color: "#2965f1",
    bg: "#ECF3FF",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
    color: "#FF6C37",
    bg: "#FFF4EE",
  },
  {
    name: "Npm",
    icon: "logos:npm-icon",
    color: "#CB3837",
    bg: "#FFF3F2",
  },
];

// Data: Experience & Education Timeline
const experienceTimeline = [
  {
    type: "experience",
    icon: "mdi:briefcase-outline",
    color: "bg-biru",
    title: "Frontend Developer Intern",
    institution: "PT HUMMA TEKNOLOGI",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Slicing 10+ landing page dari Figma ke React",
      "Integrasi API & optimasi kecepatan loading",
      "Kolaborasi dengan tim desain & backend",
    ],
  },
  {
    type: "experience",
    icon: "mdi:account-group-outline",
    color: "bg-blue-400",
    title: "Frontend Developer - Projek Teaching Factory",
    institution: "SMK Negeri 1 Ponggok",
    date: "Okt 2023 - Sekarang",
    points: [
      "Membangun aplikasi aset sekolah berbasis web",
      "Feature: UI dashboard aset, login, validasi data",
      "Mentor siswa lain & mengerjakan pengujian aplikasi",
    ],
  },
];

const educationTimeline = [
  {
    type: "education",
    icon: "mdi:school-outline",
    color: "bg-amber-500",
    title: "SMK Negeri 1 Ponggok",
    institution: "Teknik Komputer & Jaringan",
    date: "2021 - 2024",
    points: [
      "Juara 1 Lomba LKS Web Development 2023 Kab. Blitar",
      "Praktek Kerja Lapangan (magang) di PT HUMMA TEKNOLOGI",
      "Aktif di pengembangan Teaching Factory",
    ],
  },
  {
    type: "certificate",
    icon: "mdi:certificate-outline",
    color: "bg-purple-500",
    title: "Sertifikat Kompetensi",
    institution: "Kompetensi Frontend Developer",
    date: "2023",
    points: [
      "Certified by BNSP (Badan Nasional Sertifikasi Profesi)",
    ],
  },
];

function HomePage() {
  // Di komponen HomePage, tambahkan ini
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = -180;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 300);
    }
  }, []);

  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState("idle");
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    let timer;
    if (animState === "idle") {
      timer = setTimeout(() => {
        setAnimState("exiting");
        setNextIndex((index + 1) % words.length);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [animState, index]);

  useEffect(() => {
    let timer;
    if (animState === "exiting") {
      timer = setTimeout(() => {
        setIndex(nextIndex);
        setAnimState("entering");
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [animState, nextIndex]);

  useEffect(() => {
    let timer;
    if (animState === "entering") {
      timer = setTimeout(() => {
        setAnimState("idle");
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [animState]);

  // Tambahan: state untuk hoverIndex pada grid tech stack
  const [hoverIndex, setHoverIndex] = useState(null);

  // State for featured card hover (for overlay button)
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);

  // Badge style helper
  const badgeClass =
    "bg-gray-100 text-gray-700 text-[11px] font-medium px-2 py-1 mr-2 mb-2 rounded shadow border inline-flex items-center";

  // Timeline Item Component
  const TimelineItem = ({
    icon,
    color,
    title,
    institution,
    date,
    points,
    last,
  }) => (
    <div className="flex w-full relative group">
      {/* Vertical Line */}
      <div className="flex flex-col items-center min-w-[40px]">
        <span
          className={`rounded-full flex items-center justify-center w-8 h-8 text-white border-4 border-white shadow ${color}`}
        >
          <Icon name={icon} className="w-5 h-5" />
        </span>
        {!last && (
          <span className="block w-[3px] h-full grow bg-gray-300 mx-auto mt-0.5 mb-0.5"></span>
        )}
      </div>
      {/* Timeline Card/Content */}
      <div className="ml-3 flex-1 pb-10">
        <div className="bg-white rounded-xl shadow-md p-5 mb-2 border border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base md:text-lg text-biru">
              {title}
            </h3>
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
              {date}
            </span>
          </div>
          <div className="text-sm text-gray-700 font-medium mb-1">
            {institution}
          </div>
          <ul className="list-disc list-inside text-[14px] text-gray-700 mt-2 space-y-1">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Di HomePage, tambahkan div wrapper dengan padding-top untuk mengakomodasi navbar fixed
  return (
    <div className="relative w-full min-h-screen">
      {/* Tambahkan div ini untuk mengakomodasi navbar fixed */}
        {/* Background gambar full screen di paling belakang */}
        <div
          className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/white.jpg')` }}
          aria-hidden="true"
        />

        {/* Isi halaman home */}
        <div className="mt-32 px-4 flex flex-col w-full justify-center items-center relative z-0">
          <h1 className="font-semibold text-2xl md:text-4xl text-center px-4">
            HI, NAMA SAYA YUSAK & SAYA ADALAH
          </h1>

          <div className="word-carousel mt-2 w-full">
            <div className="word-carousel__inner">
              {/* Exit animation word */}
              {animState === "exiting" && (
                <div
                  key={`exit-${index}`}
                  className="word-carousel__word word-carousel__word--exit"
                >
                  {words[index]}
                </div>
              )}

              {/* Enter/Current word */}
              {(animState === "entering" || animState === "idle") && (
                <div
                  key={`current-${index}`}
                  className={`word-carousel__word ${
                    animState === "entering" ? "word-carousel__word--enter" : ""
                  }`}
                >
                  {words[index]}
                </div>
              )}
            </div>
          </div>

          {/* Optional: Tambahkan indicator */}
          <div className="flex gap-2 mt-3">
            {words.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setNextIndex(idx);
                  setAnimState("exiting");
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === index ? "bg-biru w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to word ${idx + 1}`}
              />
            ))}
          </div>
          <div className="text-abu-tua max-w-4xl text-xl text-center mt-10">
            FRONTEND DEVELOPER BERSERTIFIKAT KOMPETENSI. TERBIASA MENGUBAH DESAIN KOMPLEKS MENJADI APLIKASI REACT YANG RESPONSIF DAN INTERAKTIF.
          </div>
          <Button unstyled className="bg-[#222021]/80 text-white/90 py-3 px-6 mt-10">
            TENTANG SAYA
          </Button>
        </div>
        <AboutMe/>
        <section className="w-full bg-white py-20 px-30 flex items-center">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-2xl text-gray-900 mb-10 text-center">
              LAYANAN
            </h2>
            <div className="flex flex-row flex-wrap justify-between gap-10 w-full">
              {layananList.map((layanan, idx) => (
                <Card
                  key={idx}
                  title={layanan.title}
                  icon={layanan.icon}
                  className="flex-1 min-w-[220px] max-w-[350px]"
                >
                  {layanan.description}
                </Card>
              ))}
            </div>
          </div>
        </section>
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
        {/* Section 3: Featured Projects */}
        <section className="w-full bg-[#f9fafb] py-24 px-2 md:px-16 flex flex-col items-center">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-900 mb-12 text-center">
            Proyek Pilihan
          </h2>
          <div className="flex flex-col gap-16 max-w-6xl w-full">
            {featuredProjects.map((proj, idx) => {
              const isImageLeft = idx % 2 === 0;
              return (
                <div
                  key={proj.title}
                  className={
                    `relative flex flex-col md:flex-row items-stretch rounded-3xl shadow-xl bg-white overflow-hidden group transition-all` +
                    (isImageLeft
                      ? " md:flex-row"
                      : " md:flex-row-reverse")
                  }
                  style={{
                    minHeight: "340px",
                  }}
                >
                  {/* Label */}
                  <div
                    className={`absolute top-4 left-4 z-20`}
                  >
                    <span className={`bg-biru text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg tracking-wide uppercase`}>
                      {proj.label}
                    </span>
                  </div>
                  {/* IMAGE */}
                  <div
                    className={
                      `relative w-full md:w-1/2 h-60 md:h-auto flex items-center justify-center overflow-hidden`
                    }
                    onMouseEnter={() => setHoveredProjectIdx(idx)}
                    onMouseLeave={() => setHoveredProjectIdx(null)}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-cover w-full h-full rounded-3xl md:rounded-none md:rounded-l-3xl shadow-2xl transition-transform duration-300 scale-100 group-hover:scale-105"
                      draggable={false}
                    />
                    {(hoveredProjectIdx === idx) && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 transition-all duration-200 z-10">
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 rounded-full bg-white text-biru font-semibold hover:bg-biru hover:text-white shadow active:scale-95 transition-all duration-150"
                        >
                          Lihat Demo
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
                  {/* TEXT */}
                  <div className={`w-full md:w-1/2 px-7 py-9 flex flex-col justify-center`}>
                    <h3 className="text-xl md:text-2xl font-bold text-biru mb-3">{proj.title}</h3>
                    <p className="text-gray-600 mb-6 whitespace-pre-line">{proj.description}</p>
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

        {/* Section 4: Pengalaman & Pendidikan (Professional Timeline) */}
        <section className="w-full bg-slate-50 py-24 px-4 md:px-32 flex flex-col items-center">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-900 mb-2 text-center">
            Pengalaman & Pendidikan
          </h2>
          <div className="mb-1 text-center text-gray-600 max-w-2xl text-base md:text-lg">
            Perjalanan profesional & pendidikan saya dalam bentuk timeline. Klik/hover pada setiap card untuk detail.
          </div>

          {/* Timeline Wrapper */}
          <div className="w-full flex flex-col max-w-2xl mt-12">
            {/* Pengalaman Kerja */}
            <div>
              <h3 className="font-medium text-lg text-biru mb-4 uppercase tracking-wide flex items-center gap-2">
                <Icon name="mdi:briefcase-outline" className="w-5 h-5" /> Pengalaman Kerja
              </h3>
              {experienceTimeline.map((exp, idx) => (
                <TimelineItem key={idx} {...exp} last={idx === experienceTimeline.length - 1} />
              ))}
            </div>
            {/* Pendidikan & Sertifikat */}
            <div className="mt-14">
              <h3 className="font-medium text-lg text-purple-600 mb-4 uppercase tracking-wide flex items-center gap-2">
                <Icon name="mdi:school-outline" className="w-5 h-5" /> Pendidikan & Sertifikat
              </h3>
              {educationTimeline.map((edu, idx) => (
                <TimelineItem key={idx} {...edu} last={idx === educationTimeline.length - 1} />
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}

export default HomePage;