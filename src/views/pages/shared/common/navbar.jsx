import React, { useState, useEffect } from "react";
import Button from "../../../components/button";
import { Icon } from "../../../components/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  const detectActiveMenu = () => {
    const { pathname, hash } = window.location;
    if (pathname === "/" && (hash === "" || hash === "#beranda")) {
      return "beranda";
    }
    if (pathname === "/" && (hash === "#tentang-saya" || hash === "#tentang")) {
      return "tentang-saya";
    }
    if (pathname.toLowerCase().includes("contact")) {
      return "kontak";
    }
    return "";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (window.location.pathname === "/") {
        const tentang = document.getElementById("tentang-saya");
        if (tentang) {
          const rect = tentang.getBoundingClientRect();
          const navbarHeight = 100;
          if (rect.top <= navbarHeight + 50 && rect.bottom > navbarHeight) {
            setActiveMenu("tentang-saya");
            return;
          }
        }
        if (window.scrollY < 150) {
          setActiveMenu("beranda");
        }
      }
    };

    setActiveMenu(detectActiveMenu());
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", () => setActiveMenu(detectActiveMenu()));
    window.addEventListener("popstate", () => setActiveMenu(detectActiveMenu()));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", () => setActiveMenu(detectActiveMenu()));
      window.removeEventListener("popstate", () => setActiveMenu(detectActiveMenu()));
    };
  }, []);

  const smoothScrollTo = (targetY, duration = 800) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      const newPosition = startY + distance * ease;

      window.scrollTo(0, newPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarHeight = -180;
      const offsetPosition = element.offsetTop - navbarHeight;

      setActiveMenu(sectionId);
      window.history.replaceState(null, "", `#${sectionId}`);
      smoothScrollTo(offsetPosition, 800);
      setMenuOpen(false);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const getMenuClass = (id) =>
    activeMenu === id
      ? "text-biru"
      : "text-black hover:text-biru transition-all duration-500";

  const getUnderlineClass = (id) =>
    activeMenu === id
      ? "block mx-auto transition-all duration-500 h-[2px] bg-biru my-[1px] max-w-full"
      : "block mx-auto transition-all duration-500 h-[2px] bg-biru my-[1px] max-w-0 group-hover:max-w-full";

  // Hamburger for mobile
  const Hamburger = ({ open, toggle }) => (
    <button
      className="sm:hidden flex flex-col justify-center items-center w-9 h-9 bg-gray-100 rounded-full outline-none border-none transition"
      aria-label="Toggle menu"
      onClick={toggle}
      type="button"
    >
      {open ? (
        // Icon for close, as requested
        <span className="flex items-center justify-center h-6 w-6">
          <Icon name="material-symbols:close-rounded" className="text-black" />
        </span>
      ) : (
        // Hamburger icon (same as before)
        <>
          <span className="block h-0.5 w-6 bg-black rounded transition-all duration-300"></span>
          <span className="block h-0.5 w-6 bg-black rounded my-1 transition-all duration-300"></span>
          <span className="block h-0.5 w-6 bg-black rounded transition-all duration-300"></span>
        </>
      )}
    </button>
  );

  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div
        className={`flex items-center justify-between w-full px-4 sm:px-8 md:px-12 lg:px-20 py-3 sm:py-5 bg-white border-b border-[#222021]/15 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center">
          <Button unstyled iconCircle icon="akar-icons:github-fill">
            Yusak
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <Hamburger open={menuOpen} toggle={() => setMenuOpen((prev) => !prev)} />
        {/* Navigation for desktop */}
        <div
          className="hidden sm:flex gap-4 md:gap-8 lg:gap-10 text-xs sm:text-sm ml-auto"
        >
          <button
            className={
              `${getMenuClass("beranda")} cursor-pointer group bg-transparent border-none outline-none`
            }
            onClick={() => {
              window.location.href = "/";
              setActiveMenu("beranda");
              setMenuOpen(false);
            }}
          >
            Beranda
            <span className={getUnderlineClass("beranda")}></span>
          </button>
          <button
            className={
              `${getMenuClass("tentang-saya")} cursor-pointer group bg-transparent border-none outline-none`
            }
            onClick={e => {
              e.preventDefault();
              scrollToSection("tentang-saya");
            }}
          >
            Tentang Saya
            <span className={getUnderlineClass("tentang-saya")}></span>
          </button>
          <button
            className={
              `${getMenuClass("kontak")} cursor-pointer group bg-transparent border-none outline-none`
            }
            onClick={() => {
              window.location.href = "/contact";
              setActiveMenu("kontak");
              setMenuOpen(false);
            }}
          >
            Kontak
            <span className={getUnderlineClass("kontak")}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b shadow-md animate-fadeIn z-40">
          <nav className="flex flex-col items-center gap-2 py-3 px-3">
            <button
              className={`${getMenuClass("beranda")} w-full text-left p-3 transition bg-transparent border-none outline-none`}
              onClick={() => {
                window.location.href = "/";
                setActiveMenu("beranda");
                setMenuOpen(false);
              }}
            >
              Beranda
            </button>
            <button
              className={`${getMenuClass("tentang-saya")} w-full text-left p-3 transition bg-transparent border-none outline-none`}
              onClick={e => {
                e.preventDefault();
                scrollToSection("tentang-saya");
              }}
            >
              Tentang Saya
            </button>
            <button
              className={`${getMenuClass("kontak")} w-full text-left p-3 transition bg-transparent border-none outline-none`}
              onClick={() => {
                window.location.href = "/contact";
                setActiveMenu("kontak");
                setMenuOpen(false);
              }}
            >
              Kontak
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;