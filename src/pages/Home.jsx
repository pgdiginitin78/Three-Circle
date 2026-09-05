import TransitionZone from "../components/TransitionZone";
import About from "../sections/About";
import Capabilities from "../sections/Capabilities";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedProjects />
      <Projects />
      <TransitionZone />
      <Capabilities />
      <About />
    </>
  );
}
