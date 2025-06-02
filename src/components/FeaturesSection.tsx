
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
    icon: <Lightbulb className="w-6 h-6 text-cyber-accent" />,
    title: "Idea Generation",
    description: "Get 10 tailored micro SaaS ideas based on your target audience and market needs.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-cyber-accent" />,
    title: "Complete Structure",
    description: "Receive a detailed blueprint including features, UI/UX guidelines, and component architecture.",
  },
  {
    icon: <Code className="w-6 h-6 text-cyber-accent" />,
    title: "Code-Ready Prompts",
    description: "Get AI-optimized prompts you can directly paste into code generators like Bolt or Lovable.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyber-accent" />,
    title: "Full Stack Guidance",
    description: "Comprehensive instructions for frontend, backend, database structure, and API requirements.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyber-accent" />,
    title: "Monetization Strategy",
    description: "Built-in suggestions for pricing models, conversion strategies, and revenue optimization.",
  },
  {
    icon: <PaintBucket className="w-6 h-6 text-cyber-accent" />,
    title: "Branding Elements",
    description: "Get recommendations for UI design, color schemes, and user experience patterns.",
  },
  {
    icon: <Layers className="w-6 h-6 text-cyber-accent" />,
    title: "Scalable Architecture",
    description: "Design patterns that support growth from MVP to full-featured SaaS product.",
  },
  {
    icon: <Settings className="w-6 h-6 text-cyber-accent" />,
    title: "Technical Integration",
    description: "Guidance on API connections, third-party services, and infrastructure requirements.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-cyber-accent" />,
    title: "Growth Planning",
    description: "Built-in strategies for user acquisition, retention, and product evolution.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-cyber-accent" />,
    title: "Iterative Refinement",
    description: "Continue improving your idea with AI-assisted feedback and optimization.",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="divine-section section-spacing relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 divine-grid bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full divine-glow opacity-30 animate-celestial-rotation"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-accent rounded-full animate-divine-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyber-primary rounded-full animate-ethereal-drift opacity-80"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyber-secondary rounded-full animate-divine-float opacity-70"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyber-accent rounded-full animate-ethereal-drift opacity-60"></div>
      
      <div className="content-max-width container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-cyber-accent/10 border border-cyber-accent/30 px-4 py-2 rounded-full text-sm mb-6 animate-divine-pulse">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
            <span className="divine-text font-semibold">Powerful Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Ideas Into <span className="divine-shimmer-text">Working Products</span>
          </h2>
          <p className="text-cyber-muted-foreground text-lg md:text-xl leading-relaxed">
            MicroSaaS GPT streamlines the entire development process, from concept to deployment-ready code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="divine-card group hover:-translate-y-2 transition-all duration-500 divine-glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-accent/20 via-cyber-accent/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 divine-border">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:divine-text transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-cyber-muted-foreground leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
