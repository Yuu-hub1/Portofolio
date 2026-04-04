import { layananList } from "../../../core/data/services";
import Card from "../../components/card";

export default function Services() {

    return (
        <section className="w-full bg-white py-20 px-30 flex items-center">
        <div className="flex flex-col w-full">
          <h2 className="font-semibold text-2xl text-gray-900 mb-10 text-center">
            LAYANAN
          </h2>
          <div className="flex flex-row flex-wrap justify-between gap-10 w-full">
            {layananList.map((layanan, idx) => (
              <Card
                key={idx}
                title={layanan.title}
                icon={layanan.icon}
                className="flex-1 min-w-[220px] max-w-[350px]"
              >
                {layanan.description}
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}