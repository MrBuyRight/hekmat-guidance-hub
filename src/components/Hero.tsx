
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const observerRef = useRef<null | IntersectionObserver>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = elementsRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-20 md:pb-32 md:pt-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6" ref={elementsRef}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight reveal">
              Personalized Guidance for Life's{" "}
              <span className="text-wisdom-600">Important Decisions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed reveal">
              Navigate challenges and find clarity through 1:1 advice sessions with experienced guides. No matter what you're facing, we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button className="bg-hekmat-600 hover:bg-hekmat-700 text-white px-8 py-6 text-lg">
                Book Your Session
              </Button>
              <Button variant="outline" className="border-hekmat-600 text-hekmat-600 hover:bg-hekmat-50 px-8 py-6 text-lg">
                Learn How It Works
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-2 reveal">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">200+</span> helped this month
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-wisdom-200 rounded-full opacity-70 z-0"></div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-hekmat-200 rounded-full opacity-70 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Person getting guidance"
                className="rounded-lg shadow-xl z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
