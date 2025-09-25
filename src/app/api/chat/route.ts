import { NextResponse } from "next/server";
import { Agent, run } from "@openai/agents";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const agent = new Agent({
      name: "Assistant",
      instructions: "You are a helpful assistant.",
      model: "gpt-4.1-mini",
    });

    const result = await run(agent, prompt);

    if (!result?.finalOutput) {
      return NextResponse.json(
        { error: "Failed to generate a response." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      text: result.finalOutput,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
