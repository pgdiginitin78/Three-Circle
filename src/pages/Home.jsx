import SEO from "../components/SEO";
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
      <SEO
        title="3 Ciircles | Infrastructure, Engineering & Heavy Construction"
        description="3 Ciircles is a premier engineering, infrastructure, mining, excavation, and industrial construction contracting company delivering landmark infrastructure projects with precision."
        keywords="3 Ciircles, infrastructure contractor, civil engineering, industrial construction, heavy excavation, mining contracting, plant and machinery, India, UAE"
        canonical="/"
      />
      <Hero />
      <Capabilities />
      <About />
      <Services />
      <Intro />
      <FeaturedProjects />
      <Projects />
    </>
  );
}
