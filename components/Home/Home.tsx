import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import ToolboxSection from "./Tools/ToolboxSection";
import GithubActivitySection from "./GithubActivity/GithubActivitySection";
import Project from "./Projects/Project";
import PartnerReview from "./PartnersReview/PartnerReview";
import LinkedinSection from "./LinkedIn/LinkedinSection";
import ContactSection from "./Contact/ContactSection";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="toolbox">
        <ToolboxSection />
      </section>
      <section id="github">
        <GithubActivitySection />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="reviews">
        <PartnerReview />
      </section>
      <section id="linkedin">
        <LinkedinSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};
