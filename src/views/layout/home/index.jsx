import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/common/navbar";
import Footer from "../../pages/shared/common/footer";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-biru"></div>
        <span className="font-bold text-biru text-lg">Memuat...</span>
      </div>
    </div>
  );
}

function HomeLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative h-auto overflow-x-hidden z-10">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;