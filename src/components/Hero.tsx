
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-24">
      <div className="container-custom">
        <div className="flex flex-col items-start space-y-8 max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-accent rounded-full">
            <p className="text-sm font-medium text-primary">Psychology Portfolio</p>
          </div>
          
          <h1 className="heading-xl">
            <span className="text-gray-800">Hello, I'm </span>
            <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            A psychology researcher and practitioner focused on understanding human behavior 
            and cognitive processes to improve mental health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-primary hover:bg-secondary hover-lift">
              View Projects
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:text-primary hover-lift">
              Contact Me
            </Button>
          </div>
          
          <div className="w-full border-b border-gray-200 mt-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
