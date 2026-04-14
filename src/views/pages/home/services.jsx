import { layananList } from "../../../core/data/services";
import Card from "../../components/card";

export default function Services() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:py-16 sm:px-8 md:px-16 lg:px-32 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-7 text-center">
          LAYANAN
        </h2>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            w-full
            justify-items-center
          "
        >
          {layananList.map((layanan, idx) => (
            <Card
              key={idx}
              title={layanan.title}
              icon={layanan.icon}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              {layanan.description}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}