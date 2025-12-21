import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import PartneredBrands from "@/components/partnered-brands";
import GithubStats from "@/components/github-stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <PartneredBrands />
      <Projects />
      <Skills />
      <GithubStats />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
