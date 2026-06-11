import { sosmedLinks } from "../../../core/data/contact";
import Button from "../../components/button";
import { Icon } from "../../components/icon";
import InputField from "../../components/inputField";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mvzvwyvw");
  
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div 
        className={`w-full bg-biru min-h-[150px] flex flex-col justify-center p-5 sm:p-10 transition-all duration-700 ease-out ${
          isAnimate ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 
          className={`text-white font-bold text-3xl sm:text-4xl text-center transition-all duration-700 delay-100 transform ${
            isAnimate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          KONTAK
        </h1>
        <div 
          className={`flex text-white gap-2 mt-4 sm:mt-5 text-center justify-center items-center transition-all duration-700 delay-200 transform ${
            isAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Icon name="mdi:home" />
          <span className="text-sm">Beranda / Kontak</span>
        </div>
      </div>
      <div
        className="
          w-full
          flex flex-col-reverse lg:flex-row
          gap-8 sm:gap-10 md:gap-16 lg:gap-20
          mx-auto
          px-4 sm:px-8 md:px-16 lg:px-32
          py-8 sm:py-12 md:py-16
          max-w-6xl
        "
      >
        <div
          className={`
            w-full lg:w-2/3
            text-left
            bg-biru/15
            p-4 sm:p-8 md:p-10
            rounded
            flex flex-col justify-center
            shadow-sm
            transition-all duration-700 delay-300 ease-out transform
            ${isAnimate ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-8 translate-y-4"}
          `}
        >
          <h1 className="font-semibold text-lg sm:text-xl">KONTAK SAYA</h1>
          <p className="text-sm sm:text-base text-center text-[#727272] my-4 sm:my-6">
            Silakan kirim pesan, pertanyaan, kritik, atau saran melalui form berikut.
          </p>
          
          {state.succeeded && (
            <div className="mb-6 animate-fade-in">
              <div className="p-4 bg-green-100 border border-green-300 rounded flex flex-col items-center shadow">
                <h2 className="text-green-700 text-lg font-semibold mb-1 text-center">
                  Terima kasih!
                </h2>
                <p className="text-green-700 text-center text-sm">
                  Pesan Anda sudah diterima. Saya akan segera menghubungi Anda kembali.
                </p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div>
              <InputField id="name" name="name" placeholder="Nama Anda" required />
              <ValidationError prefix="Nama" field="name" errors={state.errors} />
            </div>
            <div>
              <InputField id="email" name="email" placeholder="Email" type="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <InputField
                id="message"
                name="message"
                placeholder="Pesan Anda"
                type="textarea"
                required
              />
              <ValidationError prefix="Pesan" field="message" errors={state.errors} />
            </div>
            <Button
              unstyled
              type="submit"
              disabled={state.submitting}
              className={`bg-biru w-fit px-4 py-2 text-white transition-all duration-200 active:scale-95 ${
                state.submitting ? " opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {state.submitting ? "Mengirim..." : "Kirim Pesan"}
            </Button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
        <div 
          className={`w-full lg:w-1/3 flex flex-col justify-center items-center transition-all duration-700 delay-400 ease-out transform ${
            isAnimate ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-8 translate-y-4"
          }`}
        >
          <div className="w-full flex flex-col items-center">
            <h1 className="font-semibold text-lg sm:text-xl">Informasi Kontak</h1>
            <p className="text-sm sm:text-base text-center text-[#727272] my-4 sm:my-6">
              Probolinggo, Jawa Timur, Indonesia
            </p>
            <h1 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
              Media Sosial
            </h1>
            <div className="flex gap-3 sm:gap-4 mt-2 justify-center flex-wrap">
              {sosmedLinks.map((soc, idx) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  title={soc.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    `rounded-full transition-all duration-300 p-3 bg-white shadow-lg border border-[#EFEFEF] text-biru hover:scale-110 active:scale-95 
                    focus:outline-none focus:ring-2 ${soc.color} ${soc.ring} transform`
                  }
                  style={{ 
                    boxShadow: "0 2px 10px rgba(39,94,254,0.08)",
                    transitionDelay: isAnimate ? `${500 + (idx * 70)}ms` : "0ms",
                    opacity: isAnimate ? 1 : 0,
                    transform: isAnimate ? "scale(1)" : "scale(0.5)",
                  }}
                >
                  <Icon name={soc.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              ))}
            </div>
            <p className="text-xs mt-4 sm:mt-5 text-center text-[#aaa]">
              Ayo terhubung di sosial media saya!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
