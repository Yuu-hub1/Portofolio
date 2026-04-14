import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button";
import AboutMe from "./about-me";
import Experience from "./experience";
import Project from "./project";
import TechStack from "./tech-stack";
import Services from "./services";


const words = ["SISWA", "FRONTEND", "DEVELOPER"];


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
            <a href="contact">KONTAK SAYA</a>
          </Button>
        </div>
        <AboutMe/>
        <Services/>
        <TechStack />
        <Project/>
        <Experience />
    </div>
  );
}

export default HomePage;