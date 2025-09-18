
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    let text = '';
    if (response.candidates && response.candidates.length > 0 && response.candidates[0].content && response.candidates[0].content.parts) {
        text = response.candidates[0].content.parts[0].text || '';
    }

    if (!text) {
        return NextResponse.json({ error: "Failed to generate a text response. The prompt may have been blocked." }, { status: 500 });
    }

    return NextResponse.json({
      text: text,
    });
    
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}