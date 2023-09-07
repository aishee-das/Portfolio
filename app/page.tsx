import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
//in the header.tsx I have moved the "experience" before "projects".
export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Experience />
    <SectionDivider />
    <Projects />
    <SectionDivider />
    <Skills />
    <SectionDivider />
    <Contact />
  </main>;
  
}
