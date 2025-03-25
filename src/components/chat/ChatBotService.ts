
import { Message } from "./ChatMessages";
import { knowledgeBase } from "./KnowledgeBase";

// OpenAI API Key - in production, this would be stored securely
const OPENAI_API_KEY = "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";

// Default fallback message if API calls fail
const DEFAULT_FALLBACK_MESSAGE = "I apologize, but I'm having trouble connecting to our knowledge base at the moment. Please try again later or contact our support team at <a href='mailto:Contact@ai-webtools.com' class='text-cyber-primary hover:underline'>Contact@ai-webtools.com</a>.";

// Make a request to the OpenAI API with our knowledge base included
export const generateOpenAIResponse = async (messages: Message[]): Promise<string> => {
  try {
    // Format messages for OpenAI
    const formattedMessages = messages.map(message => ({
      role: message.role,
      content: message.content
    }));

    // Add a system message with our knowledge base to guide the AI
    formattedMessages.unshift({
      role: "system" as any, // Type assertion to avoid TypeScript error
      content: `You are a helpful customer support assistant for AI Web Tools LLC, specifically for the MicroSaaS GPT product. 
                Your responses should be based on the following knowledge base about our company, product, and services.
                
                KNOWLEDGE BASE:
                ${knowledgeBase}
                
                Keep responses short, concise, and to the point. Aim for 1-3 sentences when possible.
                Be direct and clear in your answers. Avoid lengthy explanations unless specifically asked for details.
                You can use HTML for formatting links as needed.
                When asked about AI Web Tools LLC, emphasize that we offer over 1,000 AI tools across various industries, and MicroSaaS GPT is just one of our many products.
                If asked about something not covered in this knowledge base, politely redirect to contact our support team.`
    });

    // API request
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: formattedMessages,
        temperature: 0.5, // Lower temperature for more focused, deterministic responses
        max_tokens: 150, // Reduced max tokens to encourage brevity
        presence_penalty: 0.6 // Add slight penalty for repetitive content
      })
    });

    if (!response.ok) {
      console.error('OpenAI API error:', await response.text());
      return DEFAULT_FALLBACK_MESSAGE;
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return DEFAULT_FALLBACK_MESSAGE;
  }
};

// This function is no longer used for pre-programmed responses
// but kept for backward compatibility - it now just returns the default message
export const generateResponse = (): string => {
  return DEFAULT_FALLBACK_MESSAGE;
};
