
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "The guidance I received helped me make a decision I'd been struggling with for months. My guide asked the right questions and provided a fresh perspective.",
      name: "Sarah J.",
      role: "Career Transition",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      quote: "I was facing a difficult financial choice and wasn't sure which path to take. My session gave me clarity and a concrete plan that I could implement right away.",
      name: "Michael T.",
      role: "Financial Planning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      quote: "The relationship advice I received was practical, insightful, and non-judgmental. It transformed how I communicate with my partner.",
      name: "Emma L.",
      role: "Relationship Guidance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 reveal">
            Success <span className="text-wisdom-600">Stories</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto reveal">
            See how our guidance has helped people overcome challenges and make better decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 bg-white reveal stagger-reveal">
              <CardContent className="pt-6 pb-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-hekmat-300" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.667 24v-8H8v-5.333h6.667V24zm10.666 0v-8h-6.666v-5.333h6.666V24z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
