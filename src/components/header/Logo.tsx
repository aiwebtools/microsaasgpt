
import React from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
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
  );
};

export default Logo;
