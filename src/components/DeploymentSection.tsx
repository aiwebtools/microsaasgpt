import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DeploymentSection = () => {
  return (
    <section id="deployment-options" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-muted to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cyber-muted px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
            <span>Build Your SaaS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deploy With These <span className="neon-text">Development Tools</span></h2>
          <p className="text-cyber-muted-foreground">
            Choose your preferred deployment platform to turn your MicroSaaS idea into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Lovable Card */}
          <div className="cyber-card overflow-hidden relative">
            <Card className="h-full bg-transparent border-cyber-primary/30 backdrop-blur-sm transition-all duration-300 hover:border-cyber-primary/80 hover:shadow-[0_0_20px_rgba(8,247,254,0.5)]">
              <div className="absolute top-4 right-4 flex items-center">
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Lovable</CardTitle>
                <CardDescription>AI-powered web app deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <video 
                    src="https://lovable.dev/videos/lovable-heart.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto rounded-lg object-cover shadow-xl border border-cyber-primary/30"
                  />
                </div>
                <ul className="space-y-2 text-cyber-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
                    <span>AI-powered development assistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
                    <span>Instant deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
                    <span>React + Tailwind + ShadCN UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
                    <span>Less bugs than competitors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary"></span>
                    <span>Supabase integration for backend</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://lovable.dev/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full h-12 bg-cyber-primary text-black hover:bg-cyber-primary/80 flex items-center gap-2 shadow-[0_0_10px_rgba(8,247,254,0.4)] rounded-md border border-cyber-primary/50">
                    Deploy with Lovable
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          
          {/* Bolt Card */}
          <div className="cyber-card overflow-hidden relative">
            <Card className="h-full bg-transparent border-cyber-accent/30 backdrop-blur-sm transition-all duration-300 hover:border-cyber-accent/80 hover:shadow-[0_0_20px_rgba(245,211,0,0.5)]">
              <div className="absolute top-4 right-4 flex items-center">
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="fill-[#F5D300] text-[#F5D300] w-5 h-5" />
                <Star className="text-[#F5D300] w-5 h-5" />
                <Star className="text-[#F5D300] w-5 h-5" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Bolt</CardTitle>
                <CardDescription>Fast web app deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src="https://ideogram.ai/assets/image/lossless/response/AgWMYQQSRvOrRu13fmkGhA" 
                    alt="Bolt Platform" 
                    className="w-full h-auto rounded-lg object-cover shadow-xl border border-cyber-accent/30"
                  />
                </div>
                <ul className="space-y-2 text-cyber-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
                    <span>Quick deployment process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
                    <span>Modern web technologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
                    <span>Simple integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
                    <span>GitHub hosting capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
                    <span>Supabase integration for backend</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://bolt.new/?rid=iewkqu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full h-12 bg-cyber-accent text-black hover:bg-cyber-accent/80 flex items-center gap-2 shadow-[0_0_10px_rgba(245,211,0,0.4)] rounded-md border border-cyber-accent/50">
                    Deploy with Bolt
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
