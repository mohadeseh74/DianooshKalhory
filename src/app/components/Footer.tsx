import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-background-dark text-center py-6 mt-10 border-t border-gray-300">
      <div className="flex justify-center gap-6 text-xl text-gray-400 mb-4">
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
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Dianoosh kalhory. All rights reserved.
      </p>
      <a className="text-gray-400" href="http://www.freepik.com">
        Designed by Freepik
      </a>
    </footer>
  );
}
