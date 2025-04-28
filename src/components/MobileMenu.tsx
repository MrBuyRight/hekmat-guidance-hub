
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <nav className="flex flex-col h-full bg-white pt-16">
          <div className="flex flex-col space-y-1">
            <a 
              href="#services" 
              className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-wisdom-50 hover:text-wisdom-700 transition-colors"
            >
              Services
            </a>
            <a 
              href="#areas" 
              className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-wisdom-50 hover:text-wisdom-700 transition-colors"
            >
              Areas of Expertise
            </a>
            <a 
              href="#how-it-works" 
              className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-wisdom-50 hover:text-wisdom-700 transition-colors"
            >
              How It Works
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
