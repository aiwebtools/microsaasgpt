
import React from "react";
import { 
  Users, 
  List, 
  CheckCircle, 
  FileText, 
  Code2, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    icon: <Users className="w-6 h-6 text-cyber-primary" />,
    title: "Identify Your Audience",
    description: "Tell MicroSaaS GPT about your target audience and their specific pain points.",
  },
  {
    icon: <List className="w-6 h-6 text-cyber-primary" />,
    title: "Browse Generated Ideas",
    description: "Review 10 tailored micro SaaS ideas specifically designed for your audience.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-cyber-primary" />,
    title: "Select Your Favorite",
    description: "Choose the idea that best resonates with your vision and market opportunity.",
  },
  {
    icon: <FileText className="w-6 h-6 text-cyber-primary" />,
    title: "Get Detailed Blueprint",
    description: "Receive a comprehensive structure including features, UI/UX, and technical specs.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyber-primary" />,
    title: "Copy Ready-Made Prompt",
    description: "Use the provided prompt with code generators like Bolt or Lovable.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyber-primary" />,
    title: "Launch Your Micro SaaS",
    description: "Deploy your newly created application and start acquiring customers.",
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-muted to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="neon-text">MicroSaaS GPT</span> Works</h2>
          <p className="text-cyber-muted-foreground">
            A streamlined process to take you from initial concept to deployment-ready code in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line between steps */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyber-primary to-transparent z-0 -translate-y-1/2"></div>
              )}
              
              <div className="cyber-card relative z-10 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-muted flex items-center justify-center shrink-0 shadow-lg border border-cyber-primary/30">
                    <div className="text-lg font-bold neon-text">{index + 1}</div>
                  </div>
                  <div className="pt-2">
                    <div className="mb-2">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  </div>
                </div>
                <p className="text-cyber-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
