
import React, { useState, useEffect } from "react";
import { BookingForm } from "@/components/BookingForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    // Force a rerender on mobile detection change
    console.log("Mobile detected:", isMobile);
  }, [isMobile]);

  const navItems = [
    { href: "#services", text: "Services" },
    { href: "#areas", text: "Areas of Expertise" },
    { href: "#how-it-works", text: "How It Works" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <a href="/" className="flex items-center">
              <span
                className={`text-xl md:text-4xl font-bold tracking-wide font-['Tilt_Prism'] ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                hekmat
              </span>
            </a>
            <span
              className={`text-[8px] md:text-xs font-serif italic mt-0.5 tracking-wider text-center ${
                isScrolled ? "text-gray-600" : "text-zinc-50"
              }`}
            >
              - wisdom and guidance
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-50 hover:text-wisdom-200"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <BookingForm buttonText="Get Help" />
        </div>

        {/* Mobile Navigation & CTA */}
        <div className="md:hidden flex items-center space-x-2">
          <BookingForm
            buttonText="Get Help"
            variant="outline"
            size="sm"
            className="!bg-wisdom-600 !text-white hover:!bg-wisdom-700 !px-3 !py-1.5 text-sm"
          />

          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`p-1.5 rounded-md ${
                  isScrolled
                    ? "bg-wisdom-600 text-white"
                    : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                <Menu size={18} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-3xl font-bold tracking-wide font-['Tilt_Prism'] text-gray-900">
                      hekmat
                    </span>
                    <span className="text-xs font-serif italic mt-0.5 tracking-wider text-center text-gray-600">
                      - wisdom and guidance
                    </span>
                  </div>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-6">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-lg font-medium text-gray-900 hover:text-wisdom-600"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t">
                  <BookingForm
                    buttonText="Book a Call Now"
                    className="w-full !bg-wisdom-600 !text-white hover:!bg-wisdom-700"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
