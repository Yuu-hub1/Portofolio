import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import AboutMe from "./about-me";
import Experience from "./experience";
import Project from "./project";
import TechStack from "./tech-stack";
import Services from "./services";

const words = ["SISWA", "FRONTEND", "DEVELOPER"];

// --- 1. KOMPONEN WORD CAROUSEL (DIPISAH AGAR ISOLASI RE-RENDER & ANTI LEMOT) ---
function IsolatedWordCarousel() {
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

  return (
    <div className="w-full flex flex-col items-center">
      <div className="word-carousel mt-2 w-full">
        <div className="word-carousel__inner">
          {animState === "exiting" && (
            <div key={`exit-${index}`} className="word-carousel__word word-carousel__word--exit">
              {words[index]}
            </div>
          )}
          {(animState === "entering" || animState === "idle") && (
            <div key={`current-${index}`} className={`word-carousel__word ${animState === "entering" ? "word-carousel__word--enter" : ""}`}>
              {words[index]}
            </div>
          )}
        </div>
      </div>

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
    </div>
  );
}

// --- 2. KOMPONEN WRAPPER ANIMASI SCROLL (DIPERBAIKI STRUKTUR GPU-NYA) ---
function ScrollAnimate({ children, className = "", id }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01 } // Diperkecil ke 0.01 agar tidak menunda eksekusi
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} id={id} className={`w-full ${className}`}>
      {/* DIUBAH: Menghapus utility 'transform' lama, diganti 'translate-y-[0px]' agar akselerasi GPU konstan */}
      <div
        className={`w-full transition-all duration-500 ease-out will-change-[transform,opacity] ${
          isVisible ? "opacity-100 translate-y-[0px]" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// --- 3. KOMPONEN UTAMA HOMEPAGE (SEKARANG MENJADI SANGAT RINGAN) ---
function HomePage() {
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

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/white.jpg')` }}
        aria-hidden="true"
      />

      {/* --- BAGIAN HERO --- */}
      <div className="mt-32 px-4 flex flex-col w-full justify-center items-center relative z-0">
        <h1 
          className={`font-semibold text-2xl md:text-4xl text-center px-4 transition-all duration-500 ease-out ${
            heroVisible ? "opacity-100 translate-y-[0px]" : "opacity-0 translate-y-4"
          }`}
        >
          HI, NAMA SAYA YUSAK & SAYA ADALAH
        </h1>

        {/* MEMANGGIL CAROUSEL YANG SUDAH TERISOLASI */}
        <IsolatedWordCarousel />

        <div 
          className={`text-abu-tua max-w-4xl text-xl text-center mt-10 transition-all duration-500 delay-200 ease-out ${
            heroVisible ? "opacity-100 translate-y-[0px]" : "opacity-0 translate-y-4"
          }`}
        >
          FRONTEND DEVELOPER BERSERTIFIKAT KOMPETENSI. TERBIASA MENGUBAH DESAIN KOMPLEKS MENJADI APLIKASI REACT YANG RESPONSIF DAN INTERAKTIF.
        </div>

        <div
          className={`transition-all duration-500 delay-300 ease-out ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Button unstyled className="bg-[#222021]/80 text-white/90 py-3 px-6 mt-10">
            <a href="contact">KONTAK SAYA</a>
          </Button>
        </div>
      </div>

      {/* --- BAGIAN KONTEN --- */}
      <ScrollAnimate id="tentang-saya" className="mt-20">
        <AboutMe />
      </ScrollAnimate>

      <ScrollAnimate id="layanan">
        <Services />
      </ScrollAnimate>

      <ScrollAnimate id="keahlian">
        <TechStack />
      </ScrollAnimate>

      <ScrollAnimate id="proyek">
        <Project />
      </ScrollAnimate>

      <ScrollAnimate id="pengalaman">
        <Experience />
      </ScrollAnimate>
    </div>
  );
}

export default HomePage;
