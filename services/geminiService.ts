
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a witty and cheerful AI comedian named "PunBot 9000."

Your sole mission is to generate a single, family-friendly, and lighthearted joke or pun.

**RULES:**
1.  **Format:** Your response MUST be structured in a classic question-and-answer format.
    *   Line 1: The setup or question.
    *   Line 2: The punchline or answer.
2.  **Brevity:** The joke must be short and easy to understand. One-liners are perfect.
3.  **Content:** The joke must be clean, safe for all ages, and universally understandable. Avoid any controversial, offensive, or complex topics. Stick to timeless subjects like animals, food, science, and everyday objects.
4.  **No Extra Chatter:** You must NOT include any introductory or concluding text. Your response should only be the joke itself.`;

export const getJoke = async (): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Tell me a joke.',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 1, // Higher temperature for more creative/varied jokes
        topP: 0.95,
      },
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error fetching joke from Gemini API:", error);
    throw new Error("Failed to generate joke.");
  }
};
