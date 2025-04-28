
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#areas", label: "Areas of Expertise" },
    { href: "#how-it-works", label: "How It Works" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-left text-xl font-serif">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col h-full bg-white">
          <div className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-wisdom-50 hover:text-wisdom-700 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
