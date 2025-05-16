import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FullName } from "../Constants.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "about", label: "About" },
    { id: "experience-education", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section logic
      const scrollY = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center h-16 md:h-20 px-4">
        <a
          href="#"
          className="font-semibold text-lg md:text-xl text-primary"
          onClick={() => setActiveSection("")}
        >
          {FullName}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "transition-custom",
                activeSection === section.id
                  ? "text-primary font-semibold"
                  : "text-gray-800 hover:text-primary"
              )}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={handleLinkClick}
              className={cn(
                "block transition-custom",
                activeSection === section.id
                  ? "text-primary font-semibold"
                  : "text-gray-800 hover:text-primary"
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
