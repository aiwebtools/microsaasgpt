
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { generateResponse, generateOpenAIResponse } from "./chat/ChatBotService";
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
      // Try to use the OpenAI integration
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
      
      // Fallback to pre-programmed responses
      const fallbackResponse = generateResponse(userMessage.content);
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallbackResponse,
          timestamp: new Date(),
        },
      ]);
      
      // Notify the user of the fallback
      toast({
        title: "Using fallback responses",
        description: "We couldn't connect to our AI service. Using pre-programmed responses instead.",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] flex flex-col glass rounded-2xl border border-cyber-primary/30 shadow-xl animate-fade-in">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
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
