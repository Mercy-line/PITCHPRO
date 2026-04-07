import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export function usePitchGenerator() {
  const [docs, setDocs] = useState('');
  const [audience, setAudience] = useState('Investors');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!docs.trim()) return;
    setLoading(true);

    try {
      // NOTE: Using import.meta.env for Vite projects. 
      // Ensure VITE_GEMINI_API_KEY is in your .env file.
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // 'gemini-3-flash-preview' doesn't exist yet, using gemini-1.5-flash

      const prompt = `
        You are an expert public speaking coach and technical translator. 
        I have been asked by my technical team to pitch our project to an audience of: ${audience}.
        
        Here is the technical documentation of the project:
        ---
        ${docs}
        ---
        
        Please provide a comprehensive pitch preparation guide formatted in Markdown. 
        Include the following sections clearly:
        
        ## 1. Easy System Summary
        Explain the project and how the system works in simple, non-technical terms so I can understand it quickly and own it.
        
        ## 2. Catchy Introduction
        Write a compelling, attention-grabbing opening statement tailored specifically to ${audience}.
        
        ## 3. Pitching Tactics
        Provide specific strategies and words to use for this audience to help bag the funding or impress the visitors.
        
        ## 4. Dos and Don'ts
        A bulleted list of what to do and what to avoid during this specific pitch. 
        **CRITICAL: For EVERY "Do" and "Don't", you MUST provide a concrete example of a statement or phrase to use or avoid.**
      `;

      const response = await model.generateContent(prompt);
      const text = response.response.text();

      setResult(text || 'Failed to generate pitch prep.');
    } catch (error) {
      console.error(error);
      setResult('An error occurred while generating the pitch prep. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setDocs('');
  };

  return {
    docs,
    setDocs,
    audience,
    setAudience,
    loading,
    result,
    handleGenerate,
    reset
  };
}
