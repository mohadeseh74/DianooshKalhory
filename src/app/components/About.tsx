import Image from "next/image";

export default function About() {
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 mt-10 text-gray-800">
          About Me
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mb-0 md:mb-10">
          <Image
            data-aos="zoom-in"
            src="/dianoosh kalhory.jpg"
            alt="Dianoosh Kalhory"
            width={400}
            height={350}
            className="rounded-xl md:mr-8 shadow-lg"
          />
          <div className="mt-6 md:mt-0 max-w-3xl px-2">
            <h3 className="text-left text-2xl font-semibold mb-4 text-gray-800">
              Welcome to my portfolio!
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl text-justify">
              I am a biomedical engineer dedicated to advancing healthcare by
              bridging science, technology, and innovation. Over the past 10
              years, I have contributed to pioneering research focused on
              understanding and treating complex diseases of the lung, liver,
              heart, and skin. My work spans the fields of nanomedicine and
              biotechnology, where I strive to develop novel strategies that
              translate scientific discovery into meaningful therapies. Through
              this portfolio, I invite you to explore my journey, research, and
              contributions to the future of biomedical engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
