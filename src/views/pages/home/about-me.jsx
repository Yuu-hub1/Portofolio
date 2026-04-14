export default function AboutMe() {
    return (
      <section
        id="tentang-saya"
        className="w-full bg-white py-20 px-30 flex items-center gap-30 mt-26"
      >
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl text-gray-900 mb-6">
            TENTANG SAYA
          </h2>
          <p className="text-[#727272] mb-10 text-justify max-w-lg">
            Saya adalah Frontend Developer muda yang fokus pada pengembangan aplikasi web modern. 
            Dengan pengalaman magang di <span className="text-biru">
              <a href="https://www.hummatech.com">PT HUMMA TEKNOLOGI</a>
            </span> dan kepemilikan <span className="text-biru">Sertifikat Kompetensi</span> 
            saya terbiasa dengan alur kerja profesional.
          </p>
          <p className="text-[#727272] text-justify max-w-lg">
            Saat ini, saya aktif terlibat dalam projek Teaching Factory, di mana saya mengasah 
            kemampuan kolaborasi tim dan teknis untuk memenuhi standar industri.
          </p>
        </div>
        <img src="/laptop.png" alt="" className="w-92 h-92" />
      </section>
    );
  }