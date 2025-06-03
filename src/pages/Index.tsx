
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import ChatBot from "@/components/ChatBot";
import ConsentPopup from "@/components/ConsentPopup";
import DeploymentSection from "@/components/DeploymentSection";
import SEOEnhancements from "@/components/SEOEnhancements";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Web Tools - MicroSaaS GPT",
      "description": "Generate profitable micro SaaS ideas with AI-powered development assistance",
      "url": window.location.href,
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "MicroSaaS GPT",
        "applicationCategory": "DeveloperApplication"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-background text-cyber-foreground flex flex-col">
      <SEOEnhancements />
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DeploymentSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      <ChatBot />
      <ConsentPopup />
      <Footer />
    </div>
  );
};

export default Index;
