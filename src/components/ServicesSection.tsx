
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, Calendar } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: <MessageSquare className="h-10 w-10 text-wisdom-600" />,
      title: "1:1 Guidance Sessions",
      description: "Personalized video calls with experienced guides who provide tailored advice for your specific situation.",
    },
    {
      icon: <Clock className="h-10 w-10 text-hekmat-600" />,
      title: "Flexible Session Lengths",
      description: "Choose between 30 or 60-minute sessions depending on your needs and the complexity of your situation.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-wisdom-600" />,
      title: "Easy Scheduling",
      description: "Book sessions at times that work for you, with availability across multiple time zones.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 reveal">
            Our <span className="text-hekmat-600">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto reveal">
            We provide personalized guidance sessions to help you navigate life's challenges and make confident decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 reveal stagger-reveal transform transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="mb-5 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
