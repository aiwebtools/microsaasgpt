
import React from "react";
import { Bot, X } from "lucide-react";

type ChatHeaderProps = {
  onClose: () => void;
};

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b border-cyber-primary/20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-cyber-muted flex items-center justify-center">
          <Bot className="w-5 h-5 text-cyber-primary" />
        </div>
        <div>
          <h3 className="font-semibold">MicroSaaS Support</h3>
          <p className="text-xs text-cyber-muted-foreground">AI Web Tools Assistant</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cyber-muted/50 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ChatHeader;
