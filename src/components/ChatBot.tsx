
import React, { useState, useRef, useEffect } from "react";
import { 
  Send,
  Bot,
  X,
  MessageCircle,
  ExternalLink,
  Mail,
  Phone,
  Loader2
} from "lucide-react";

// OpenAI API key is deliberately not exposed in the frontend
// This would normally be handled securely in a backend service
const API_KEY = ""; // The actual key is not exposed here for security reasons

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm the MicroSaaS GPT assistant. How can I help you today? You can ask me about our tool, features, or how to get started.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with pre-programmed knowledge
    // In a real implementation, this would call the OpenAI API
    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Pre-programmed responses based on common questions
    if (lowerQuery.includes("what is") && lowerQuery.includes("microsaas gpt")) {
      return "MicroSaaS GPT is an AI-powered tool that helps entrepreneurs and developers generate custom micro SaaS ideas based on their target audience. It provides detailed blueprints, feature lists, and code-ready prompts that can be used with AI code generators to rapidly build functional applications.";
    }
    
    if (lowerQuery.includes("how") && lowerQuery.includes("work")) {
      return "MicroSaaS GPT works in a simple process: 1) You identify your target audience, 2) The AI generates 10 tailored ideas, 3) You select your favorite, 4) You receive a detailed blueprint and code-ready prompt, 5) You use this prompt with tools like Bolt or Lovable to generate your application, and 6) You launch your micro SaaS!";
    }
    
    if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("subscription")) {
      return "For pricing information, please visit our website at <a href='https://www.aiwebtools.ai' target='_blank' rel='noopener noreferrer' class='text-cyber-primary hover:underline'>www.aiwebtools.ai</a> or contact our sales team at <a href='mailto:Contact@ai-webtools.com' class='text-cyber-primary hover:underline'>Contact@ai-webtools.com</a>.";
    }
    
    if (lowerQuery.includes("contact") || lowerQuery.includes("support") || lowerQuery.includes("help")) {
      return "You can reach our support team by email at <a href='mailto:Contact@ai-webtools.com' class='text-cyber-primary hover:underline'>Contact@ai-webtools.com</a> or by phone at <a href='tel:+14758008096' class='text-cyber-primary hover:underline'>(475) 800-8096</a>. We're here to help!";
    }
    
    if (lowerQuery.includes("technical") || lowerQuery.includes("developer") || lowerQuery.includes("code")) {
      return "MicroSaaS GPT generates detailed technical specifications and code-ready prompts that can be used with AI code generators. No technical expertise is required to use our tool, but developers will appreciate the architectural guidance and technical details provided.";
    }
    
    if (lowerQuery.includes("idea") || lowerQuery.includes("generate") || lowerQuery.includes("suggestion")) {
      return "MicroSaaS GPT generates 10 tailored micro SaaS ideas based on your specified target audience. Each idea includes consideration for market viability, user needs, technical feasibility, and monetization potential. To start generating ideas, visit <a href='https://chatgpt.com/g/g-67b145035abc8191be5579cab8812d4e-microsaas-gpt' target='_blank' rel='noopener noreferrer' class='text-cyber-primary hover:underline'>MicroSaaS GPT</a>.";
    }
    
    if (lowerQuery.includes("bolt") || lowerQuery.includes("lovable") || lowerQuery.includes("deploy")) {
      return "MicroSaaS GPT integrates seamlessly with code generators like Bolt and Lovable. After selecting an idea, you'll receive a detailed prompt that you can copy-paste into these tools to generate a functional application. Visit <a href='https://bolt.new/?via=aiwebtools' target='_blank' rel='noopener noreferrer' class='text-cyber-primary hover:underline'>Bolt</a> or <a href='https://lovable.dev/?via=aiwebtools' target='_blank' rel='noopener noreferrer' class='text-cyber-primary hover:underline'>Lovable</a> to start building.";
    }
    
    if (lowerQuery.includes("company") || lowerQuery.includes("about") || lowerQuery.includes("who are you")) {
      return "We are AI Web Tools LLC, a company dedicated to creating innovative AI-powered tools that help entrepreneurs and developers build better software faster. Learn more about us at <a href='https://www.aiwebtools.ai' target='_blank' rel='noopener noreferrer' class='text-cyber-primary hover:underline'>www.aiwebtools.ai</a>.";
    }
    
    // Default response
    return "Thank you for your question. For specific information about MicroSaaS GPT, you can explore our website or contact our support team at <a href='mailto:Contact@ai-webtools.com' class='text-cyber-primary hover:underline'>Contact@ai-webtools.com</a>. How else can I assist you today?";
  };

  const formatMessage = (content: string) => {
    return { __html: content };
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] flex flex-col glass rounded-2xl border border-cyber-primary/30 shadow-xl animate-fade-in">
          {/* Chat header */}
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
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cyber-muted/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Chat messages */}
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
          
          {/* Chat input */}
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
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-cyber-primary flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-pulse-glow"
        >
          <MessageCircle className="w-7 h-7 text-black" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
