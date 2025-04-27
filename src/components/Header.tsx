
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-hekmat-800 font-serif">
              hekmat<span className="text-wisdom-600">.help</span>
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-hekmat-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#areas"
            className="text-sm font-medium text-gray-700 hover:text-hekmat-600 transition-colors"
          >
            Areas of Expertise
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-hekmat-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-hekmat-600 transition-colors"
          >
            Testimonials
          </a>
        </nav>

        <div>
          <Button className="bg-wisdom-600 hover:bg-wisdom-700 text-white">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
