import React from 'react';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Capabilities from '../sections/Capabilities';
import About from '../sections/About';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <Capabilities />
      <About />
      <Contact />
    </>
  );
}
