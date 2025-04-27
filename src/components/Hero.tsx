import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

const Hero = () => {
  const observerRef = useRef<null | IntersectionObserver>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
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

  return <section className="pt-28 pb-20 md:pb-32 md:pt-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6" ref={elementsRef}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight reveal">
              Get Guidance for Life's{" "}
              <span className="text-wisdom-600">Important Decisions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed reveal">Book a 30-minute phone call for personalized guidance. No matter what you're facing, we're here to help.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button className="bg-wisdom-600 hover:bg-wisdom-700 text-white px-8 py-6 text-lg" onClick={() => window.location.href = '#how-it-works'}>
                <CalendarClock className="w-5 h-5 mr-2" />
                Book Your Call
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-wisdom-200 rounded-full opacity-70 z-0"></div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-hekmat-200 rounded-full opacity-70 z-0"></div>
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200" alt="Mountain summit representing guidance and clarity" className="rounded-lg shadow-xl z-10 relative" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
