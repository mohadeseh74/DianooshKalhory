import About from "./components/About";
import Banner from "./components/Banner";
import ResearchInterests from "./components/ResearchInterests";
import Education from "./components/Education";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Publications from "./components/Publications";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <ResearchInterests />
      <Education />
      <ProfessionalSkills />
      <Publications />
      <Gallery />
    </div>
  );
}
