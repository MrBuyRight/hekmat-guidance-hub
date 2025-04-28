import React, { useEffect, useRef } from "react";
import { BookingForm } from "@/components/BookingForm";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  const observerRef = useRef<null | IntersectionObserver>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
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
  return <section className="relative pt-20 md:pt-28 pb-16 md:pb-32 min-h-screen md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2000&h=800')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={elementsRef}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight reveal drop-shadow-lg">
              Get Guidance for all of Life's{" "}
              <span className="text-wisdom-100">Decisions</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-50 mb-6 md:mb-8 leading-relaxed reveal drop-shadow max-w-xl">Book a 30-minute phone call for personalized guidance. No matter what you're facing or pursuing, we're here to help.</p>
            
            <div className={`flex ${isMobile ? 'flex-col w-full' : 'flex-row'} gap-4 reveal`}>
              <BookingForm buttonText="Book a Call" className={`${isMobile ? 'w-full' : 'w-auto'} text-white bg-wisdom-700 hover:bg-wisdom-600 sm:text-lg`} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;