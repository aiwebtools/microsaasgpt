
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { generateOpenAIResponse } from "./chat/ChatBotService";
import type { Message } from "./chat/ChatMessages";
import { useToast } from "@/components/ui/use-toast";

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm the MicroSaaS GPT assistant. How can I help you today? You can ask me about our tool, features, or how to get started.",
      timestamp: new Date(),
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (input: string) => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Use the OpenAI integration with our knowledge base
      const allMessages = [...messages, userMessage];
      const response = await generateOpenAIResponse(allMessages);
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error generating AI response:", error);
      
      // Notify the user of the error
      toast({
        title: "Connection error",
        description: "We're having trouble connecting to our AI service. Please try again later.",
        variant: "default",
      });
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting to our knowledge base. Please try again later or contact our support team at <a href='mailto:Contact@ai-webtools.com' class='text-cyber-primary hover:underline'>Contact@ai-webtools.com</a>.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-[400px] h-[min(500px,calc(100vh-6rem))] flex flex-col glass rounded-2xl border border-cyber-primary/30 shadow-xl animate-fade-in">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F5D300] flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-green-pulse-glow hover:scale-105"
          aria-label="Open chat support"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
