
import React, { useEffect, useRef } from "react";

const HowItWorks = () => {
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

  const steps = [
    {
      number: "01",
      title: "Choose Your Area of Concern",
      description: "Select the category that best matches what you're going through.",
    },
    {
      number: "02",
      title: "Book Your Session",
      description: "Choose a 30 or 60-minute session at a time that works for you.",
    },
    {
      number: "03",
      title: "Connect with Your Guide",
      description: "Join your video call and get personalized guidance tailored to your situation.",
    },
    {
      number: "04",
      title: "Implement Your Plan",
      description: "Put your insights into action with the strategies discussed.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 reveal">
            How It <span className="text-hekmat-600">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto reveal">
            Getting the guidance you need is simple and straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative reveal stagger-reveal">
              <div className="mb-4 text-5xl font-bold text-hekmat-100">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-x-8">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-hekmat-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
