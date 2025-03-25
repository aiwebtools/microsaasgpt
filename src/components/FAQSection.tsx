
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly is MicroSaaS GPT?",
    answer: "MicroSaaS GPT is an AI-powered tool that helps entrepreneurs and developers generate custom micro SaaS ideas based on their target audience. It provides detailed blueprints, feature lists, and code-ready prompts that can be directly used with AI code generators to rapidly build functional applications."
  },
  {
    question: "How does the idea generation process work?",
    answer: "After you specify your target audience, MicroSaaS GPT analyzes market needs and opportunities to generate 10 tailored micro SaaS ideas. Each idea is evaluated for uniqueness, practicality, and profit potential. You can then select your preferred concept for further development."
  },
  {
    question: "What's included in the detailed blueprint?",
    answer: "The blueprint includes a comprehensive structure with key features, UI/UX guidelines, technical architecture, database schemas, API requirements, monetization strategies, and user flow diagrams. It's designed to provide everything needed to build a complete, market-ready application."
  },
  {
    question: "Can I use the generated prompts with any AI code builder?",
    answer: "Yes! The prompts are optimized for tools like Lovable and Bolt, but they're designed to work with most AI code generators. Each prompt includes all necessary specifications and requirements to build a functional application regardless of the platform you choose."
  },
  {
    question: "Do I need technical knowledge to use MicroSaaS GPT?",
    answer: "No technical expertise is required. MicroSaaS GPT is designed for both technical and non-technical users. The prompts and instructions are detailed enough that anyone can follow them to create a working application through AI code generators."
  },
  {
    question: "How long does it take to go from idea to working application?",
    answer: "The entire process—from specifying your audience to receiving your detailed blueprint and code-ready prompt—takes minutes. The actual build time in an AI code generator typically takes under an hour, allowing you to go from concept to working prototype in a single day."
  },
  {
    question: "Can I customize the generated ideas to fit my specific vision?",
    answer: "Absolutely! MicroSaaS GPT supports iterative refinement. You can request modifications, combine elements from different ideas, or add your own unique features. The AI will help you refine the concept until it perfectly matches your vision."
  },
  {
    question: "Are the generated ideas unique to me?",
    answer: "While the ideas are generated based on your specific requirements and target audience, MicroSaaS GPT may suggest similar concepts to different users targeting the same market. However, the implementation details, features, and positioning can always be customized to create a unique offering."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="neon-text">Questions</span></h2>
          <p className="text-cyber-muted-foreground">
            Everything you need to know about MicroSaaS GPT and how it can help you build your next successful project.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 overflow-hidden border border-cyber-primary/20 rounded-lg transition-all duration-300 ${
                openIndex === index ? 'bg-cyber-muted/50' : 'bg-cyber-muted/20'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyber-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyber-primary" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'py-4 max-h-96 opacity-100' : 'max-h-0 opacity-0 py-0'
                }`}
              >
                <p className="text-cyber-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
