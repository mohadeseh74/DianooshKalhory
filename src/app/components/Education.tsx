import Link from "next/link";
import Image from "next/image";

export default function Education() {
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-gray-800">
          Education
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <div
            data-aos="zoom-in"
            className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 text-left flex flex-col md:flex-row items-center gap-5"
          >
            <Link href="https://www.utoronto.ca/" target="_blank" className="">
              <Image
                src="/utoronto.png"
                alt="University of Toronto"
                width={120}
                height={100}
                className="rounded-full"
              />
            </Link>

            <div className="">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                PhD, Biomedical Engineering, Institute of Biomedical
                Engineering, University of Toronto
              </h3>
              <p className="text-md text-gray-400 mb-3">
                Biomedical Engineering courses: GPA: 4/4 | 2023 - 2027
              </p>
              <p className="text-lg text-gray-400 mb-6">
                <span className="font-semibold text-primary">Thesis: </span>
                In Vitro Model for Screening RNA/Drug Delivery by Lipid
                Nanoparticles for Treatment of Lung Diseases
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 text-left flex flex-col md:flex-row items-center gap-5 mt-10"
          >
            <Link href="https://aut.ac.ir/en" target="_blank" className="">
              <Image
                src="/UAmirkabir.png"
                alt="Amirkabir University of Technology"
                width={200}
                height={100}
                className="rounded-full w-[150px] md:w-[200px] h-auto"
              />
            </Link>

            <div className="">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                MSc, Biomedical Engineering, Faculty of Biomedical Engineering,
                Amirkabir University of Technology
              </h3>
              <p className="text-md text-gray-400 mb-3">
                Biomaterials and Tissue Engineering courses: GPA: 4/4 | 2019 -
                2021
              </p>
              <p className="text-lg text-gray-400 mb-6">
                <span className="font-semibold text-primary">Thesis: </span>
                Three-Dimensional Bioprinting of
                Alginate-Gelatin-Carboxymethylcellulose Bioink for Burn Wound
                Treatment: Effect of the Bioink’s Mechanical Properties on
                Fibroblast Viability
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 text-left flex flex-col md:flex-row items-center gap-5 mt-10"
          >
            <Link href="https://aut.ac.ir/en" target="_blank" className="">
              <Image
                src="/UAmirkabir.png"
                alt="Amirkabir University of Technology"
                width={150}
                height={100}
                className="rounded-full"
              />
            </Link>

            <div className="">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                BSc, Biomedical Engineering, Faculty of Biomedical Engineering,
                Amirkabir University of Technology
              </h3>
              <p className="text-md text-gray-400 mb-3">
                {" "}
                Biomaterials courses: GPA: 3.3/4 (GPA of the last two years:
                3.8/4) | 2014 - 2019
              </p>
              <p className="text-lg text-gray-400 mb-6">
                <span className="font-semibold text-primary">Thesis: </span>
                Chitosan-Coated-Alginate Encapsulation of HepG2 Cells for
                Enhanced Cellular Functions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
