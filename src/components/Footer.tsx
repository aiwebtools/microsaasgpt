
import React from "react";
import { 
  ChevronDown, 
  ExternalLink, 
  Cpu, 
  Mail, 
  Phone, 
  Copyright, 
  Sparkles
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  return (
    <footer className="bg-cyber-muted/50 pt-16 border-t border-cyber-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Educational disclaimer */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyber-accent/10 border border-cyber-accent/30 px-4 py-2 rounded-full text-sm text-cyber-accent">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
            <span className="font-medium">For informational, educational, and research purposes only</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-cyber-primary to-cyber-secondary p-0.5">
                <div className="w-full h-full rounded-full bg-cyber-muted flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyber-primary" />
                </div>
              </div>
              <span className="text-lg font-semibold neon-text">MicroSaaS GPT</span>
            </div>
            <p className="text-cyber-muted-foreground mb-4">
              Your AI-powered micro SaaS idea generator and builder assistant, helping you turn innovative concepts into reality.
            </p>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyber-primary hover:underline gap-1"
            >
              <span>Visit AiWebTools.Ai</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Prep Your App Idea</span>
                </a>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-cyber-muted-foreground hover:text-cyber-primary transition-colors">
                    DEVELOP YOUR IDEA
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-cyber-muted border border-cyber-primary/20 backdrop-blur-lg">
                    <DropdownMenuItem className="focus:bg-cyber-primary/10 cursor-pointer">
                      <a 
                        href="https://lovable.dev/?via=aiwebtools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Use Lovable to Deploy
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-cyber-primary/10 cursor-pointer">
                      <a 
                        href="https://bolt.new/?via=aiwebtools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Use Bolt to Deploy
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-cyber-muted-foreground hover:text-cyber-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* More AI Tools button */}
        <div className="flex justify-end mb-8">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-cyber-secondary hover:bg-cyber-secondary/10 text-cyber-secondary transition-all hover:shadow-[0_0_15px_rgba(254,83,187,0.5)]"
          >
            <span>More AI Tools</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyber-primary/10 py-6 flex flex-col items-center justify-center text-center">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyber-muted-foreground hover:text-cyber-primary transition-colors"
          >
            <Copyright className="w-4 h-4" />
            <span>2025 AI WEB TOOLS LLC All rights reserved.</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
