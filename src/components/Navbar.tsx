import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FullName } from "../Constants.js";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center h-16 md:h-20">
        <a href="#" className="font-semibold text-lg md:text-xl text-primary">
          {FullName}
        </a>

        <div className="hidden md:flex space-x-10">
          <a
            href="#about"
            className="text-gray-800 hover:text-primary transition-custom"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-primary transition-custom"
          >
            Projects
          </a>
          <a
            href="#experience-education"
            className="text-gray-800 hover:text-primary transition-custom"
          >
            Career
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-primary transition-custom"
          >
            Contact
          </a>
        </div>

        <button className="md:hidden text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
