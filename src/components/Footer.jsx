import React from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <a href="/" className="flex items-center space-x-1 transition-transform hover:scale-105">
              <span className="text-blue-500 font-bold text-2xl">/</span>
              <span className="font-bold text-xl tracking-wide">NEXORA</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-0 text-center sm:text-left">
            <a
              href="#"
              className="text-white font-medium text-base hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-medium text-base hover:text-blue-500 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white font-medium text-base hover:text-blue-500 transition-colors duration-200"
            >
              Works
            </a>
            <a
              href="#"
              className="text-white font-medium text-base hover:text-blue-500 transition-colors duration-200"
            >
              Support
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-400 text-sm">
              © Copyright 2021, All Rights Reserved
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-blue-500 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;