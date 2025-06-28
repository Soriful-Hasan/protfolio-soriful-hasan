import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import ContactMe from "../Components/ContactMe/ContactMe";
import Projects from "../Components/Projects/Projects";

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <AboutMe /> */}

      <Skills />
      <Projects></Projects>
      <ContactMe />
    </div>
  );
};

export default Home;
