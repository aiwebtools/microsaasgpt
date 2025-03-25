
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

  // Enhanced formatMessage function to make URLs, emails, and phone numbers clickable
  const formatMessage = (content: string) => {
    if (content.includes('<a href=')) {
      // If content already has HTML links, preserve them
      return { __html: content };
    }
    
    // Regex patterns for URLs, emails, and phone numbers
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const phonePattern = /(\(\d{3}\)\s*\d{3}-\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\(\d{3}\)\s*\d{3}\s*\d{4}|\d{10})/g;
    
    // Replace URLs with HTML links
    let formattedContent = content.replace(urlPattern, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-cyber-primary hover:underline">${url}</a>`;
    });
    
    // Replace emails with HTML links
    formattedContent = formattedContent.replace(emailPattern, (email) => {
      return `<a href="mailto:${email}" class="text-cyber-primary hover:underline">${email}</a>`;
    });
    
    // Replace phone numbers with HTML links
    formattedContent = formattedContent.replace(phonePattern, (phone) => {
      // Normalize phone number by removing non-digit characters
      const normalizedPhone = phone.replace(/\D/g, '');
      return `<a href="tel:${normalizedPhone}" class="text-cyber-primary hover:underline">${phone}</a>`;
    });
    
    return { __html: formattedContent };
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
