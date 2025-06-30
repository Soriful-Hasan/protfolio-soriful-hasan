import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import ContactMe from "../Components/ContactMe/ContactMe";
import Projects from "../Components/Projects/Projects";
import { Element } from "react-scroll";
import Modal from "../Components/Projects/Modal";

const Home = () => {
  return (
    <Element id="home">
      <div className="">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects></Projects>
        <ContactMe />
      </div>
    </Element>
  );
};

export default Home;
