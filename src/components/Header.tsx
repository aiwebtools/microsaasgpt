
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cpu, 
  Sparkles 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-cyber-background/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-cyber-primary to-cyber-secondary p-0.5">
            <div className="w-full h-full rounded-full bg-cyber-background flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight neon-text">
              MicroSaaS GPT
            </span>
            <span className="text-xs text-cyber-muted-foreground">
              Presented by <span className="underline hover:text-cyber-primary transition-colors">AiWebTools.Ai</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-foreground hover:text-cyber-primary transition-colors font-medium flex items-center gap-1"
          >
            <Sparkles className="w-4 h-4" />
            Prep Your App Idea
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="group flex items-center gap-1 text-[#F5D300] hover:text-[#FFE175] font-bold transition-all duration-300 border border-[#F5D300]/30 px-3 py-1.5 rounded-full bg-[#F5D300]/10 hover:bg-[#F5D300]/20 hover:shadow-[0_0_15px_rgba(245,211,0,0.5)] animate-pulse-glow">
              DEVELOP YOUR IDEA
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-to-b from-[#FFD700]/90 to-[#B8860B]/90 backdrop-blur-lg border-2 border-[#FFD700] p-1 shadow-[0_0_20px_rgba(245,211,0,0.6)] animate-border-flow">
              <DropdownMenuItem className="my-1 hover:bg-white/20 focus:bg-white/20 text-black font-medium transition-all duration-200 rounded-md cursor-pointer px-4 py-2.5">
                <a 
                  href="https://lovable.dev/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2"
                >
                  <span className="bg-black/20 p-1 rounded-full">💎</span>
                  <span>Use Lovable to Deploy</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="my-1 hover:bg-white/20 focus:bg-white/20 text-black font-medium transition-all duration-200 rounded-md cursor-pointer px-4 py-2.5">
                <a 
                  href="https://bolt.new/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2"
                >
                  <span className="bg-black/20 p-1 rounded-full">⚡</span>
                  <span>Use Bolt to Deploy</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a 
            href="#faq"
            className="text-cyber-foreground hover:text-cyber-primary transition-colors font-medium"
          >
            FAQ
          </a>

          <a 
            href="#disclaimer"
            className="text-cyber-foreground hover:text-cyber-primary transition-colors font-medium"
          >
            Disclaimer
          </a>

          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-foreground hover:text-cyber-primary transition-colors font-medium"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 neon-border rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-cyber-primary" />
          ) : (
            <Menu className="w-5 h-5 text-cyber-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-background/95 backdrop-blur-lg border-t border-cyber-primary/20 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <a 
              href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
            >
              Prep Your App Idea
            </a>

            <div className="py-2">
              <div className="font-bold text-[#F5D300] mb-2 px-3 py-1.5 rounded-full bg-[#F5D300]/10 inline-block">DEVELOP YOUR IDEA</div>
              <div className="ml-4 flex flex-col gap-2 bg-gradient-to-b from-[#FFD700]/30 to-[#B8860B]/30 p-3 rounded-lg border border-[#F5D300]/50 shadow-[0_0_10px_rgba(245,211,0,0.3)]">
                <a 
                  href="https://lovable.dev/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5D300] hover:text-[#FFE175] transition-colors flex items-center gap-2 py-1.5"
                >
                  <span className="bg-black/20 p-1 rounded-full">💎</span>
                  <span>Use Lovable to Deploy</span>
                </a>
                <a 
                  href="https://bolt.new/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5D300] hover:text-[#FFE175] transition-colors flex items-center gap-2 py-1.5"
                >
                  <span className="bg-black/20 p-1 rounded-full">⚡</span>
                  <span>Use Bolt to Deploy</span>
                </a>
              </div>
            </div>

            <a 
              href="#faq"
              className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>

            <a 
              href="#disclaimer"
              className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>

            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
