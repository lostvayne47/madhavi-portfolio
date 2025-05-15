import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-semibold text-lg text-primary">
              Psychology Portfolio
            </span>
            <p className="mt-2 text-sm text-gray-500">
              © {new Date().getFullYear()} Madhavi Menon. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-custom"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-custom"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-custom"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
