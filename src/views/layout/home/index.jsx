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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek semua gambar sudah dimuat
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      });
      
      return Promise.all(imagePromises);
    };

    // Simulasi loading data (ganti dengan fetch data sebenarnya)
    const loadData = async () => {
      try {
        // Tambahkan fetch data Anda di sini
        // Contoh: await fetchYourData();
        await new Promise(resolve => setTimeout(resolve, 500));
        setDataLoaded(true);
      } catch (error) {
        console.error('Error loading data:', error);
        setDataLoaded(true);
      }
    };

    // Tunggu semua konten siap
    const initializeLoading = async () => {
      // Tunggu data selesai dimuat
      await loadData();
      
      // Tunggu gambar selesai dimuat
      await checkImagesLoaded();
      setImagesLoaded(true);
    };

    initializeLoading();
  }, []);

  useEffect(() => {
    // Loading selesai jika data dan gambar sudah siap
    if (dataLoaded && imagesLoaded) {
      // Delay tambahan untuk memastikan semua komponen ter-render
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, [dataLoaded, imagesLoaded]);

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