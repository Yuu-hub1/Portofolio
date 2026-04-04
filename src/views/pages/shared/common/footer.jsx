import { Icon } from '@iconify/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-biru2 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Bagian 1: Brand/Nama */}
          <div>
            <h2 className="text-2xl font-bold font-sans tracking-tighter mb-4">
              YUSAK<span className="text-biru">.DEV</span>
            </h2>
            <p className="text-white font-sans leading-relaxed">
              Frontend Developer yang berfokus pada pembuatan antarmuka web yang modern dan responsif.
            </p>
          </div>

          {/* Bagian 2: Navigasi Cepat */}
          <div className="md:ml-20">
            <h3 className="text-lg font-bold mb-6 font-sans">Navigasi</h3>
            <ul className="space-y-4 text-white font-sans">
              <li><a href="/" className="hover:text-biru transition">Beranda</a></li>
              <li><a href="/#about" className="hover:text-biru transition">Tentang</a></li>
              <li><a href="/contact" className="hover:text-biru transition">Kontak</a></li>
            </ul>
          </div>

          {/* Bagian 3: Media Sosial */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-sans">Terhubung Dengan Saya</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Yuu-hub1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition text-biru">
                <Icon icon="mdi:github" width="24" />
              </a>
              <a href="https://linkedin.com/in/yuu-sak-b0116a367/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition text-biru">
                <Icon icon="mdi:linkedin" width="24" />
              </a>
              <a href="https://instagram.com/filicum_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 transition text-biru">
                <Icon icon="mdi:instagram" width="24" />
              </a>
            </div>
          </div>

        </div>

        {/* Baris Paling Bawah */}
        <div className="text-center text-white text-sm font-sans">
          <p>© {currentYear} Yusak Christian Budisusilo. Dibuat menggunakan React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}