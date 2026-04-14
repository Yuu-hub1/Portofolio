export default function AboutMe() {
  return (
    <section
      id="tentang-saya"
      className="
        w-full bg-white
        flex flex-col-reverse items-center justify-center
        gap-10
        px-4 py-12
        sm:flex-row sm:items-center sm:justify-between sm:gap-16 sm:px-8 sm:py-20
        md:gap-20 md:px-16
        lg:gap-32 lg:px-32 lg:py-20
        mt-10
        "
    >
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-4 sm:mb-6">
          TENTANG SAYA
        </h2>
        <p className="text-[#727272] mb-7 sm:mb-10 text-justify max-w-md sm:max-w-lg">
          Saya adalah Frontend Developer muda yang fokus pada pengembangan aplikasi web modern. 
          Dengan pengalaman magang di <span className="text-biru">
            <a href="https://www.hummatech.com">PT HUMMA TEKNOLOGI</a>
          </span> dan kepemilikan <span className="text-biru">Sertifikat Kompetensi</span> 
          saya terbiasa dengan alur kerja profesional.
        </p>
        <p className="text-[#727272] text-justify max-w-md sm:max-w-lg">
          Saat ini, saya aktif terlibat dalam projek Teaching Factory, di mana saya mengasah 
          kemampuan kolaborasi tim dan teknis untuk memenuhi standar industri.
        </p>
      </div>
      <img
        src="/laptop.png"
        alt=""
        className="
          w-48 h-48
          sm:w-80 sm:h-80
          md:w-92 md:h-92
          object-contain
          mb-8 sm:mb-0
          "
      />
    </section>
  );
}