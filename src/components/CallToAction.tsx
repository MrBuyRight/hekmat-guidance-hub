import React, { useEffect, useRef } from "react";
import { BookingForm } from "@/components/BookingForm";

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
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-hekmat-100 mb-8 reveal">
            Book your free 30-minute guidance call and start your journey towards clarity.
          </p>
          <div className="flex justify-center reveal">
            <BookingForm />
          </div>
          <p className="mt-6 text-sm text-hekmat-300 reveal">
            No commitment required. Cancel or reschedule anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
