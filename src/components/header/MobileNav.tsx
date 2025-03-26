
import React from "react";
import { Sparkles } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-cyber-background/95 backdrop-blur-lg border-t border-cyber-primary/20 animate-fade-in">
      <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
        <a 
          href="https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden py-2 px-4 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-black shadow-[0_0_10px_rgba(74,222,128,0.5)] flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-bold">Prep Your App Idea WITH MICROSaaS GPT</span>
        </a>

        <DevelopSection />
        <MobileLinks onClose={onClose} />
      </div>
    </div>
  );
};

const DevelopSection = () => {
  return (
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
          href="https://bolt.new/?rid=iewkqu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5D300] hover:text-[#FFE175] transition-colors flex items-center gap-2 py-1.5"
        >
          <span className="bg-black/20 p-1 rounded-full">⚡</span>
          <span>Use Bolt to Deploy</span>
        </a>
      </div>
    </div>
  );
};

const MobileLinks = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <a 
        href="#faq"
        className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
        onClick={onClose}
      >
        FAQ
      </a>

      <a 
        href="#disclaimer"
        className="py-2 text-cyber-foreground hover:text-cyber-primary transition-colors"
        onClick={onClose}
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
    </>
  );
};

export default MobileNav;
