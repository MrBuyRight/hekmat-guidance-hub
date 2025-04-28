
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
      <SheetContent side="left" className="w-[300px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <a href="#services" className="text-lg font-medium hover:text-wisdom-600 transition-colors">
            Services
          </a>
          <a href="#areas" className="text-lg font-medium hover:text-wisdom-600 transition-colors">
            Areas of Expertise
          </a>
          <a href="#how-it-works" className="text-lg font-medium hover:text-wisdom-600 transition-colors">
            How It Works
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
