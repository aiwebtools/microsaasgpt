
import React from "react";
import {
  Lightbulb,
  Puzzle,
  Code,
  BarChart3,
  Settings,
  Database,
  Layers,
  RefreshCw,
  LineChart,
  PaintBucket
} from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-cyber-primary" />,
    title: "Idea Generation",
    description: "Get 10 tailored micro SaaS ideas based on your target audience and market needs.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-cyber-primary" />,
    title: "Complete Structure",
    description: "Receive a detailed blueprint including features, UI/UX guidelines, and component architecture.",
  },
  {
    icon: <Code className="w-6 h-6 text-cyber-primary" />,
    title: "Code-Ready Prompts",
    description: "Get AI-optimized prompts you can directly paste into code generators like Bolt or Lovable.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyber-primary" />,
    title: "Full Stack Guidance",
    description: "Comprehensive instructions for frontend, backend, database structure, and API requirements.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyber-primary" />,
    title: "Monetization Strategy",
    description: "Built-in suggestions for pricing models, conversion strategies, and revenue optimization.",
  },
  {
    icon: <PaintBucket className="w-6 h-6 text-cyber-primary" />,
    title: "Branding Elements",
    description: "Get recommendations for UI design, color schemes, and user experience patterns.",
  },
  {
    icon: <Layers className="w-6 h-6 text-cyber-primary" />,
    title: "Scalable Architecture",
    description: "Design patterns that support growth from MVP to full-featured SaaS product.",
  },
  {
    icon: <Settings className="w-6 h-6 text-cyber-primary" />,
    title: "Technical Integration",
    description: "Guidance on API connections, third-party services, and infrastructure requirements.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-cyber-primary" />,
    title: "Growth Planning",
    description: "Built-in strategies for user acquisition, retention, and product evolution.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-cyber-primary" />,
    title: "Iterative Refinement",
    description: "Continue improving your idea with AI-assisted feedback and optimization.",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-glow opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Ideas Into <span className="neon-text">Working Products</span></h2>
          <p className="text-cyber-muted-foreground">
            MicroSaaS GPT streamlines the entire development process, from concept to deployment-ready code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="cyber-card group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-cyber-muted flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-cyber-primary/20 group-hover:to-cyber-secondary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-cyber-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
