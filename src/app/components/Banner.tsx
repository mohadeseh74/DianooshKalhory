import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Banner() {
  return (
    <section className="@container mx-auto p-5 overflow-hidden rounded-lg">
      <div
        data-aos="fade-up"
        className="bg-[url('/lab.jpg')] bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-center overflow-hidden rounded-lg"
      >
        <div className="bg-primary/50 backdrop-blur-xs p-10 rounded-lg w-full h-full flex flex-col justify-end items-left text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Dianoosh kalhory
          </h1>
          <h5 className="text-xl text-gray-100 mb-8">
            PhD candidate at the University of Toronto
          </h5>
          <div className="flex gap-6 text-2xl text-gray-100">
            <a
              href="https://www.linkedin.com/in/dianoosh-kalhory-654bb6115/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://scholar.google.com/citations?user=aQkkOR4AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <SiGooglescholar />
            </a>
            <a
              href="https://x.com/DianooshKalhory"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="mailto:dianoosh.kalhory@mail.utoronto.ca"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
