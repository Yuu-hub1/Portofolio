import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/common/navbar";
import Footer from "../../pages/shared/common/footer";

function LoadingScreen({ isFadingOut }) {
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-biru"></div>
        <span className="font-bold text-biru text-lg tracking-wider animate-pulse">Memuat halaman...</span>
      </div>
    </div>
  );
}

function HomeLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const imagesToLoad = ["/white.jpg"]; 
    let loadedCount = 0;

    const handlePageLoaded = () => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 500);
    };

    const checkAllResources = () => {
      if (document.readyState === "complete" && loadedCount === imagesToLoad.length) {
        handlePageLoaded();
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        checkAllResources();
      };
      img.onerror = () => {
        loadedCount++;
        checkAllResources();
      };
    });
    if (document.readyState === "complete") {
      checkAllResources();
    } else {
      window.addEventListener("load", checkAllResources);
      return () => window.removeEventListener("load", checkAllResources);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
      
      <div className="relative h-auto overflow-x-hidden z-10">
        <Navbar />
        <div className="pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
