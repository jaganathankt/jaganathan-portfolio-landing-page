import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are an AI assistant for Jaganathan K T's portfolio website. 
Your goal is to help visitors learn about Jaganathan's professional experience and skills in a concise way.

Here is Jaganathan's Profile:
- **Current Role:** Data Analyst & Data Science Trainer at Bluekode Solutions (June 2025 - Present).
- **Experience:** 4+ years combined experience in data analytics, training, and real-time analysis.
- **Core Skills:** Python, SQL, Advanced Excel, Power BI, Tableau, Machine Learning, Statistics.
- **Key Projects:**
  1. Automated Interview Performance Report System (Python, Excel, Power BI).
  2. Kovai Palamuthir Nilayam Analysis (Team Lead - Price forecasting & Sales analysis).
  3. Zomato Sales Dashboard (SQL, Power BI).
  4. Movie Recommendation System (Python, Scikit-learn).
- **Education:** BE Computer Science (2022).
- **Contact:** jaganathankt542@gmail.com | LinkedIn: linkedin.com/in/jaganathankt

Rules:
1. Be polite, professional, and helpful.
2. Keep answers short (under 3 sentences).
3. Only answer questions about Jaganathan's career, skills, or projects.
4. If asked about unrelated topics, politely say "I can only answer questions about Jaganathan's professional profile."
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY, // Securely pulled from Vercel
    });

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307", // Fast and cost-effective
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    // Extract text content from the response
    const textContent = response.content
      .filter((block) => block.type === "text")
      .map((block) => (block as { text: string }).text)
      .join("");

    return NextResponse.json({ content: textContent });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Something went wrong on the server." },
      { status: 500 }
    );
  }
}
