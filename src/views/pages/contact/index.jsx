import Button from "../../components/button";
import { Icon } from "../../components/icon";
import InputField from "../../components/inputField";

const sosmedLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com/Yusakcristianbs",
        icon: "mdi:facebook",
        color: "hover:bg-[#1877F2] hover:text-white",
        ring: "focus:ring-[#1877F2]",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/filicum_",
        icon: "mdi:instagram",
        color: "hover:bg-gradient-to-tr hover:from-rose-400 hover:to-purple-500 hover:text-white",
        ring: "focus:ring-pink-400",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/yuu-sak-b0116a367/",
        icon: "mdi:linkedin",
        color: "hover:bg-[#0077b5] hover:text-white",
        ring: "focus:ring-[#0077b5]",
    },
    {
        name: "GitHub",
        href: "https://github.com/Yuu-hub1",
        icon: "mdi:github",
        color: "hover:bg-[#24292f] hover:text-white",
        ring: "focus:ring-[#24292f]",
    },
];

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <div className="w-full bg-biru h-46 flex flex-col justify-center p-5">
                <h1 className="text-white font-bold text-4xl text-center">KONTAK</h1>
                <div className="flex text-white gap-2 mt-5 text-center justify-center">
                    <Icon name="mdi:home" />
                    <span className="text-sm">Beranda / Kontak</span>
                </div>
            </div>
            <div className="flex w-full mx-20 my-16 gap-20">
                <div className="text-left p-10 bg-biru/15">
                    <h1 className="font-semibold text-xl">KONTAK SAYA</h1>
                    <p className="text-sm text-center text-[#727272] my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, dicta.</p>
                    <form className="flex flex-col gap-5">
                        <InputField placeholder="Nama Anda"/>
                        <InputField placeholder="Email"/>
                        <InputField placeholder="Kepada"/>
                        <InputField placeholder="Pesan Anda" type="textarea"/>
                        <Button unstyled className="bg-biru w-fit px-4 py-2 text-white">Kirim Pesan</Button>
                    </form>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-semibold text-xl">Informasi Kontak</h1>
                    <p className="text-sm text-center text-[#727272] my-6">
                        Probolinggo, Jawa Timur, Indonesia
                    </p>
                    <h1 className="font-semibold text-xl mb-4">Media Sosial</h1>
                    <div className="flex gap-4 mt-2 justify-center">
                        {sosmedLinks.map((soc, i) => (
                            <a
                                key={soc.name}
                                href={soc.href}
                                title={soc.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    `rounded-full transition-all duration-200 p-3 bg-white shadow-lg border border-[#EFEFEF] text-biru hover:scale-110 active:scale-95 
                                    focus:outline-none focus:ring-2 ${soc.color} ${soc.ring}`
                                }
                                style={{ boxShadow: "0 2px 10px rgba(39,94,254,0.08)" }}
                            >
                                <Icon name={soc.icon} className="w-7 h-7" />
                            </a>
                        ))}
                    </div>
                    <p className="text-xs mt-3 text-center text-[#aaa]">Ayo terhubung di sosial media saya!</p>
                </div>
            </div>
        </div>
    )
}