import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FullName } from "../Constants.js";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex flex-col items-start space-y-8 max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-accent rounded-full">
              <p className="text-sm font-medium text-primary">
                Psychology Portfolio
              </p>
            </div>

            <h1 className="heading-xl">
              <span className="text-gray-800">Hello, I'm </span>
              <span className="text-primary">{FullName.split(" ")[0]}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              A psychology researcher and practitioner focused on understanding
              human behavior and cognitive processes to improve mental health
              outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-secondary hover-lift">
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-primary hover-lift"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="w-full border-b border-gray-200 mt-16"></div>
          </div>

          <div className="order-first md:order-last">
            <img
              src="/profile-photo.jpeg"
              alt="Profile"
              className="object-cover rounded-full border-[5px] border-[#622ad9] max-h-[400px] min-h-[200px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#622ad9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
