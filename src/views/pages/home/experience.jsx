import { educationTimeline, experienceTimeline } from "../../../core/data/experience";
import { Icon } from "../../components/icon";

export default function Experience() {

  const TimelineItem = ({
    icon,
    color,
    title,
    institution,
    date,
    points,
    last,
  }) => (
    <div className="flex w-full relative group">
      {/* Vertical Line */}
      <div className="flex flex-col items-center min-w-[40px]">
        <span
          className={`rounded-full flex items-center justify-center w-8 h-8 text-white border-4 border-white shadow ${color}`}
        >
          <Icon name={icon} className="w-5 h-5" />
        </span>
        {!last && (
          <span className="block w-[3px] h-full grow bg-gray-300 mx-auto mt-0.5 mb-0.5" />
        )}
      </div>
      {/* Timeline Card/Content */}
      <div className="ml-3 flex-1 pb-10">
        <div className="bg-white rounded-xl shadow-md p-5 mb-2 border border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base md:text-lg text-biru">
              {title}
            </h3>
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
              {date}
            </span>
          </div>
          <div className="text-sm text-gray-700 font-medium mb-1">
            {institution}
          </div>
          <ul className="list-disc list-inside text-[14px] text-gray-700 mt-2 space-y-1">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Section 4: Pengalaman & Pendidikan (Professional Timeline) */}
      <section className="w-full bg-slate-50 py-24 px-4 md:px-32 flex flex-col items-center">
        <h2 className="font-semibold text-2xl md:text-3xl text-gray-900 mb-2 text-center">
          Pengalaman & Pendidikan
        </h2>
        <div className="mb-1 text-center text-gray-600 max-w-2xl text-base md:text-lg">
          Perjalanan profesional & pendidikan saya dalam bentuk timeline.
        </div>

        {/* Timeline Wrapper */}
        <div className="w-full flex flex-col max-w-2xl mt-12">
          {/* Pengalaman Kerja */}
          <div>
            <h3 className="font-medium text-lg text-biru mb-4 uppercase tracking-wide flex items-center gap-2">
              <Icon name="mdi:briefcase-outline" className="w-5 h-5" /> Pengalaman Kerja / Magang
            </h3>
            {experienceTimeline.map((exp, idx) => (
              <TimelineItem key={idx} {...exp} last={idx === experienceTimeline.length - 1} />
            ))}
          </div>
          {/* Pendidikan & Sertifikat */}
          <div className="mt-14">
            <h3 className="font-medium text-lg text-purple-600 mb-4 uppercase tracking-wide flex items-center gap-2">
              <Icon name="mdi:school-outline" className="w-5 h-5" /> Pendidikan & Sertifikat
            </h3>
            {educationTimeline.map((edu, idx) => (
              <TimelineItem key={idx} {...edu} last={idx === educationTimeline.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}