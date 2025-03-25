
import React, { useState } from "react";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
};

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onSendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-cyber-primary/20">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-cyber-muted border border-cyber-primary/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyber-primary transition-colors"
        />
        <button 
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            input.trim() && !isLoading 
              ? "bg-cyber-primary text-black" 
              : "bg-cyber-muted/50 text-cyber-muted-foreground"
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      <div className="mt-3 text-xs text-center text-cyber-muted-foreground">
        <p>
          Powered by AI Web Tools LLC
        </p>
      </div>
    </form>
  );
};

export default ChatInput;
