import Image from "next/image";

export default function ProfessionalSkills() {
  return (
    <section className="container p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-gray-800">
          Professional skills
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-start">
          <div
            data-aos="flip-right"
            data-aos-duration="500"
            className="w-full p-6 flex flex-col justify-center items-center"
          >
            <Image
              src="/engineering.png"
              alt="Engineering"
              width={150}
              height={150}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 mb-4">
              Engineering
            </h3>
            <ul
              role="list"
              className="list-disc list-inside marker:text-sky-400 text-left"
            >
              <li className="text-md text-gray-500">Microfluidics</li>
              <li className="text-md text-gray-500">Microfabrication</li>
              <li className="text-md text-gray-500">3D (bio)printing</li>
              <li className="text-md text-gray-500">
                Hydrogel and lipid-based nanoparticle synthesis and
                characterization
              </li>
            </ul>
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            className="w-full p-6 flex flex-col justify-center items-center"
          >
            <Image
              src="/culture.png"
              alt="Cell culture"
              width={150}
              height={150}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 mb-4">
              Cell culture
            </h3>
            <ul
              role="list"
              className="list-disc list-inside marker:text-sky-400 text-left"
            >
              <li className="text-md text-gray-500">2D cell culture</li>
              <li className="text-md text-gray-500">
                3D cell culture (homo and heterotypic)
              </li>
              <li className="text-md text-gray-500">Spheroid-on-a-chip</li>
            </ul>
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="w-full p-6 flex flex-col justify-center items-center"
          >
            <Image
              src="/fluorescence.png"
              alt="Fluorescence imaging"
              width={150}
              height={150}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 mb-4">
              Fluorescence imaging
            </h3>
            <ul
              role="list"
              className="list-disc list-inside marker:text-sky-400 text-left"
            >
              <li className="text-md text-gray-500">Laser scanning confocal</li>
              <li className="text-md text-gray-500">Multiphoton</li>
              <li className="text-md text-gray-500">Flow cytometry</li>
            </ul>
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="w-full p-6 flex flex-col justify-center items-center"
          >
            <Image
              src="/software.png"
              alt="Software and coding"
              width={150}
              height={150}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 mb-4">
              Software and coding
            </h3>
            <ul
              role="list"
              className="list-disc list-inside marker:text-sky-400 text-left"
            >
              <li className="text-md text-gray-500">SOLIDWORKS/ FUSION 360</li>
              <li className="text-md text-gray-500">COMSOL</li>
              <li className="text-md text-gray-500">PYTHON</li>
              <li className="text-md text-gray-500">R</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
