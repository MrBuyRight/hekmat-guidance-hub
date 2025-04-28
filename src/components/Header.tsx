import React, { useState, useEffect } from "react";
import { BookingForm } from "@/components/BookingForm";
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white bg-opacity-95 shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <a href="/" className="flex items-center">
              <span className={`text-2xl md:text-4xl font-bold tracking-wide font-['Tilt_Prism'] ${isScrolled ? "text-gray-900" : "text-white"}`}>
                hekmat
              </span>
            </a>
            <span className={`text-[10px] md:text-xs font-serif italic mt-0.5 tracking-wider text-center ${isScrolled ? "text-gray-600" : "text-zinc-50"}`}>- wisdom and guidance</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-50 hover:text-wisdom-200"}`}>
            Services
          </a>
          <a href="#areas" className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-50 hover:text-wisdom-200"}`}>
            Areas of Expertise
          </a>
          <a href="#how-it-works" className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-50 hover:text-wisdom-200"}`}>
            How It Works
          </a>
        </nav>

        <div className="hidden md:block">
          <BookingForm buttonText="Get Help" />
        </div>
        
        <div className="md:hidden">
          <BookingForm buttonText="Get Help" variant="outline" size="sm" className="!bg-wisdom-600 !text-white hover:!bg-wisdom-700 !px-3" />
        </div>
      </div>
    </header>;
};
export default Header;