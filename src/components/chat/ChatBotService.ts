
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
      content: `You are a helpful customer support assistant for the MicroSaaS GPT product. 
                Your responses should be based on the following knowledge base about our company, product, and services.
                
                KNOWLEDGE BASE:
                ${knowledgeBase}
                
                Keep responses concise, helpful, and accurate based on this knowledge base. 
                You can use HTML for formatting links as needed.
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
        temperature: 0.7,
        max_tokens: 500
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
