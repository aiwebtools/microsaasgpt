
import React from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <a 
        href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden font-medium px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-black border border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)] animate-pulse-glow hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] transition-all duration-300 flex items-center gap-1"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <Sparkles className="w-4 h-4 relative z-10" />
        <span className="relative z-10 font-bold">Prep Your App Idea WITH MICROSaaS GPT</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-300 transform translate-y-[2px] group-hover:translate-y-0 transition-transform duration-300"></span>
      </a>

      <DevelopDropdown />

      <NavLinks />
    </nav>
  );
};

const DevelopDropdown = () => {
  return (
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
  );
};

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default DesktopNav;
