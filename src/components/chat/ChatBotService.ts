
// Note: API key is deliberately not exposed directly but is stored securely
// In a real implementation, this would be handled through a backend service
const API_KEY = ""; // API key is not exposed here for security reasons

import { Message } from "./ChatMessages";

export const generateResponse = (query: string): string => {
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
