
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseAreas = () => {
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

  const areas = [
    {
      title: "Financial Decision Making",
      description: "Get advice on budgeting, investing, debt management, and major financial decisions.",
    },
    {
      title: "Mental Health & Wellbeing",
      description: "Navigate stress, anxiety, burnout, and find strategies for better mental health.",
    },
    {
      title: "Business & Career",
      description: "Get guidance on career transitions, business challenges, and professional growth.",
    },
    {
      title: "Relationships",
      description: "Work through relationship challenges, communication issues, and major life transitions.",
    },
    {
      title: "Self-Development",
      description: "Discover strategies for personal growth, habit formation, and achieving your goals.",
    },
    {
      title: "Life Transitions",
      description: "Navigate major life changes like moving, changing careers, or starting a family.",
    },
  ];

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 reveal">
            Areas of <span className="text-wisdom-600">Expertise</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto reveal">
            Our guides offer insight and support across a wide range of life's challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="border border-gray-200 reveal stagger-reveal transform transition-all duration-300 hover:border-wisdom-300 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="h-2 bg-gradient-to-r from-hekmat-400 to-wisdom-400 rounded-t-md absolute top-0 left-0 right-0"></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {area.title}
                </h3>
                <p className="text-gray-700">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
