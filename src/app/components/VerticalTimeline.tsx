import Image from "next/image";

// Simple alternating vertical timeline with Tailwind
export default function VerticalTimeline() {
  const items = [
    {
      title:
        "PhD, Biomedical Engineering, Institute of Biomedical Engineering, University of Toronto ",
      subtitle: "Biomedical Engineering courses: GPA: 4/4 ",
      time: "2023 - 2027",
      thesis:
        "In Vitro Model for Screening RNA/Drug Delivery by Lipid Nanoparticles for Treatment of Lung Diseases",
      logo: "/utoronto.png",
    },
    {
      title:
        "MSc, Biomedical Engineering, Faculty of Biomedical Engineering, Amirkabir University of Technology",
      subtitle: "Biomaterials and Tissue Engineering courses: GPA: 4/4",
      time: "2019 - 2021",
      thesis:
        "Three-Dimensional Bioprinting of Alginate-Gelatin-Carboxymethylcellulose Bioink for Burn Wound Treatment: Effect of the Bioink’s Mechanical Properties on Fibroblast Viability",
      logo: "/UAmirkabir.png",
    },
    {
      title:
        "BSc, Biomedical Engineering, Faculty of Biomedical Engineering, Amirkabir University of Technology",
      subtitle:
        "Biomaterials courses: GPA: 3.3/4 (GPA of the last two years: 3.8/4) ",
      time: "2014 - 2019",
      thesis:
        "Chitosan-Coated-Alginate Encapsulation of HepG2 Cells for Enhanced Cellular Functions",
      logo: "/UAmirkabir.png",
    },
  ];

  return (
    <div className="relative mx-auto w-full">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 dark:bg-gray-700" />

      <div className="space-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex items-start">
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div />
              <Image
                src={item.logo}
                alt="University of Toronto"
                width={50}
                height={50}
                className="rounded-full border-2 shadow-lg bg-white"
              />
            </div>

            {/* Content */}
            <div
              className={`w-1/2 p-10 bg-white rounded-lg shadow-lg mt-2 ${
                idx % 2 === 0 ? " text-left" : " text-left ml-auto"
              }`}
            >
              <h3 className="text-lg font-semibold text-primary dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-3">
                {item.time} | {item.subtitle}
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-400">
                <span className="font-semibold text-primary">Thesis: </span>
                {item.thesis}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
