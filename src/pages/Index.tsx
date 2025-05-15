
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
