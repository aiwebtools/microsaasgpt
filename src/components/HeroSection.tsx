
import React, { useEffect, useRef } from "react";
import { Cpu, Sparkles, Zap, Rocket, LayoutGrid, ExternalLink, Code } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current) return;
      const {
        left,
        top,
        width,
        height
      } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      ref.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    };

    const handleMouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current) return;
      ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    const firstElement = imageRef.current;
    const secondElement = secondImageRef.current;
    
    if (firstElement) {
      firstElement.addEventListener('mousemove', (e) => handleMouseMove(e, imageRef), false);
      firstElement.addEventListener('mouseleave', () => handleMouseLeave(imageRef), false);
    }
    
    if (secondElement) {
      secondElement.addEventListener('mousemove', (e) => handleMouseMove(e, secondImageRef), false);
      secondElement.addEventListener('mouseleave', () => handleMouseLeave(secondImageRef), false);
    }

    return () => {
      if (firstElement) {
        firstElement.removeEventListener('mousemove', (e) => handleMouseMove(e, imageRef), false);
        firstElement.removeEventListener('mouseleave', () => handleMouseLeave(imageRef), false);
      }
      
      if (secondElement) {
        secondElement.removeEventListener('mousemove', (e) => handleMouseMove(e, secondImageRef), false);
        secondElement.removeEventListener('mouseleave', () => handleMouseLeave(secondImageRef), false);
      }
    };
  }, []);

  return <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
      <div className="absolute left-0 top-0 w-full h-full bg-neon-glow opacity-30"></div>
      <div className="absolute -left-20 top-20 w-64 h-64 rounded-full bg-cyber-primary/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-cyber-secondary/20 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyber-primary" />
              <span>AI-Powered SaaS Ideation & Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="shimmer-text">Generate & Build</span> 
              <br />Your Next Micro SaaS 
              <br />in <span className="neon-text">Minutes</span>
            </h1>
            
            <p className="text-lg text-cyber-muted-foreground mb-8 max-w-xl">MicroSaaS GPT helps you ideate, structure, and build your next profitable Micro SaaS application with step-by-step guidance, from concept to deployment.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt" target="_blank" rel="noopener noreferrer" className="cyber-button flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Start Generating Ideas</span>
              </a>
              
              <a href="#how-it-works" className="cyber-button-alt flex items-center justify-center gap-2">
                <LayoutGrid className="w-5 h-5" />
                <span>How It Works</span>
              </a>

              <a href="#deployment-options" className="cyber-button-secondary flex items-center justify-center gap-2">
                <Code className="w-5 h-5" />
                <span>Deploy Your Master SaaS Prompt</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="glass p-4 rounded-lg border-t border-l border-white/10 border-b border-r border-black/20">
                <div className="text-cyber-primary font-bold mb-1">10+</div>
                <div className="text-sm text-cyber-muted-foreground">Custom ideas per session</div>
              </div>
              <div className="glass p-4 rounded-lg border-t border-l border-white/10 border-b border-r border-black/20">
                <div className="text-cyber-primary font-bold mb-1">100%</div>
                <div className="text-sm text-cyber-muted-foreground">Ready-to-build prompts</div>
              </div>
              <div className="glass p-4 rounded-lg border-t border-l border-white/10 border-b border-r border-black/20">
                <div className="text-cyber-primary font-bold mb-1">24/7</div>
                <div className="text-sm text-cyber-muted-foreground">AI assistance</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* First image with hover effect */}
            <div ref={imageRef} className="relative transition-all duration-200 ease-out">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-20 blur-xl animate-pulse-glow"></div>
              <a href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt" target="_blank" rel="noopener noreferrer" className="block relative">
                <div className="relative p-1 rounded-lg animate-border-flow">
                  <img src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-tree-of-knowledge-_l7epj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" alt="Tree of Knowledge" className="w-full h-auto rounded-lg object-cover shadow-xl" loading="lazy" />
                  <div className="absolute bottom-4 right-4">
                    <span className="flex items-center gap-1 text-xs bg-cyber-primary/90 text-black py-1.5 px-3 rounded-md hover:bg-cyber-primary transition-colors">
                      <span>Try Now</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
              <div className="absolute -top-4 -right-4 z-10 w-16 h-16 rounded-full bg-cyber-muted flex items-center justify-center border-4 border-cyber-background animate-float">
                <Cpu className="w-6 h-6 text-cyber-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 z-10 w-16 h-16 rounded-full bg-cyber-muted flex items-center justify-center border-4 border-cyber-background animate-float" style={{
              animationDelay: '1s'
            }}>
                <Rocket className="w-6 h-6 text-cyber-secondary" />
              </div>
            </div>

            {/* Second image with same styling */}
            <div ref={secondImageRef} className="relative transition-all duration-200 ease-out">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-secondary to-cyber-primary opacity-20 blur-xl animate-pulse-glow"></div>
              <a href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt" target="_blank" rel="noopener noreferrer" className="block relative">
                <div className="relative p-1 rounded-lg animate-border-flow">
                  <img src="https://ideogram.ai/assets/image/lossless/response/AgWMYQQSRvOrRu13fmkGhA" alt="AI SaaS Concept" className="w-full h-auto rounded-lg object-cover shadow-xl" loading="lazy" />
                  <div className="absolute bottom-4 right-4">
                    <span className="flex items-center gap-1 text-xs bg-cyber-primary/90 text-black py-1.5 px-3 rounded-md hover:bg-cyber-primary transition-colors">
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
