import { NextResponse } from "next/server";
import { RealtimeAgent, tool } from "@openai/agents/realtime";
import { z } from "zod";
import { log } from "node:console";

// Define the supervisor tool
const supervisorAgent = tool({
  name: "supervisorAgent",
  description: "Passes a case to your supervisor for approval.",
  parameters: z.object({
    caseDetails: z.string(),
  }),
  execute: async ({ caseDetails }, details) => {
    const history = details.context.history;
    const response = await fetch("https://your-api/supervisor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caseDetails,
        history,
      }),
    });
    return response.text();
  },
});

// Create your returns agent
const returnsAgent = new RealtimeAgent({
  name: "Returns Agent",
  instructions:
    "You are a returns agent. You are responsible for handling return requests. Always check with your supervisor before making a decision.",
  tools: [supervisorAgent],
});

// Handle API requests
export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Run the agent with the user’s prompt
    const result = await returnsAgent.respond(prompt);
console.log(result,'==resilt');

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
