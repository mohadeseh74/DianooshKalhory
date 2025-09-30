import Image from "next/image";
export default function About() {
  return (
    <div className="container px-4 py-8 min-h-[70vh]">
      <h2 className="text-3xl font-bold text-center mb-6">
        Biography
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-2"></div>
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full mx-auto justify-center items-center">
        <Image
          data-aos="zoom-in"
          src="/dianoosh kalhory.jpg"
          className="rounded-xl"
          width={350}
          height={300}
          alt="Dianoosh Kalhory"
        />
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mb-4 text-lg text-justify text-gray-700 px-2"
        >
          Dianoosh is a third-year PhD candidate at the University of Toronto,
          co-supervised by Prof. Eugenia Kumacheva and Prof. Gilbert Walker. His
          doctoral research focuses on developing high-throughput lung-on-a-chip
          platforms to screen LNP-encapsulated RNA-based drugs and to
          investigate pathological pathways triggered by particulates under
          physiologically relevant breathing motions. He earned his M.Sc. in
          Biomedical Engineering from Amirkabir University of Technology (Tehran
          Polytechnic), where he worked with Prof. Mehran Solati-Hashjin. During
          his master’s and bachelor’s studies, Dianoosh explored innovative
          strategies for cell encapsulation and bioprinting to advance therapies
          for liver diseases and skin wound healing. His contributions included
          the design of novel hydrogel composites, development of
          cell-encapsulation methods, and creation of 3D (bio)printing
          approaches.
        </p>
      </div>
    </div>
  );
}
