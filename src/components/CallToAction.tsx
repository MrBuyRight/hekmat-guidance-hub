
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const observerRef = useRef<null | IntersectionObserver>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
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
    <section className="py-20 bg-hekmat-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white reveal">
            Ready to Get the Guidance You Need?
          </h2>
          <p className="text-lg text-hekmat-100 mb-8 reveal">
            Book your session today and take the first step toward clarity and confidence in your decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
            <Button className="bg-wisdom-600 hover:bg-wisdom-700 text-white px-8 py-6 text-lg">
              Book a 30-Minute Session
            </Button>
            <Button className="bg-hekmat-600 hover:bg-hekmat-700 text-white px-8 py-6 text-lg">
              Book a 60-Minute Session
            </Button>
          </div>
          <p className="mt-6 text-sm text-hekmat-300 reveal">
            No commitment required. Cancel or reschedule up to 24 hours before your session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
