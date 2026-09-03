import React from "react";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import TransitionZone from "../components/TransitionZone";
import Capabilities from "../sections/Capabilities";
import About from "../sections/About";
import Contact from "../sections/Contact";
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
      <Contact />
    </>
  );
}
