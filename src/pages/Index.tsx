
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseAreas from "@/components/ExpertiseAreas";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "hekmat.help | Personalized Guidance for Life's Challenges";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <ExpertiseAreas />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
