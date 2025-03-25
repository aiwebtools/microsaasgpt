
import React, { useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";

export type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessage = (content: string) => {
    return { __html: content };
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-primary/30 scrollbar-track-transparent">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user" 
                  ? "bg-cyber-primary text-black" 
                  : "bg-cyber-muted border border-cyber-primary/20"
              }`}
            >
              {message.role === "assistant" ? (
                <div dangerouslySetInnerHTML={formatMessage(message.content)} />
              ) : (
                <p>{message.content}</p>
              )}
              <div 
                className={`text-xs mt-1 ${
                  message.role === "user" ? "text-black/70" : "text-cyber-muted-foreground"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-cyber-muted border border-cyber-primary/20">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-cyber-primary animate-spin" />
                <span className="text-cyber-muted-foreground">Typing...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
