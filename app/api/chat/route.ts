import OpenAI from "openai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are an AI assistant for Jaganathan K T's portfolio website. 
Your goal is to help visitors learn about Jaganathan's professional experience and skills.

Here is Jaganathan's Profile:
- **Current Role:** Data Analyst & Data Science Trainer at Bluekode Solutions.
- **Experience:** 4+ years combined experience in data analytics, training, and real-time analysis.
- **Core Skills:** Python, SQL, Advanced Excel, Power BI, Tableau, Machine Learning, Statistics.
- **Key Projects:** Automated Interview Report System, Kovai Palamuthir Nilayam Analysis, Zomato Sales Dashboard.
- **Education:** BE Computer Science (2022).
- **Contact:** jaganathankt542@gmail.com

Rules:
1. Be polite and professional.
2. Keep answers short (under 3 sentences).
3. Only answer questions about Jaganathan's professional profile.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    // 1. Get Answer from AI
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const botResponse = response.choices[0].message.content;

    // 2. Send Notification to Make.com (Fire and Forget)
    // We use Promise.resolve so it doesn't slow down the chatbot for the user
    Promise.resolve().then(() => {
      fetch(process.env.CHATBOT_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: messages[messages.length - 1]?.content, // The last user question
          answer: botResponse,
          timestamp: new Date().toISOString(),
        }),
      }).catch(err => console.error("Webhook failed", err));
    });

    // 3. Return Answer immediately
    return NextResponse.json({ content: botResponse });
  } catch (error: any) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
