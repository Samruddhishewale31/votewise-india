import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string" || query.trim() === "") {
      return NextResponse.json({ error: "Invalid query provided." }, { status: 400 });
    }

    if (query.length > 500) {
      return NextResponse.json({ error: "Query is too long. Please restrict to 500 characters." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback Mock Behavior if no API key is provided
    if (!apiKey) {
      console.warn("No GEMINI_API_KEY found. Returning mock fallback response.");
      return NextResponse.json({
        result: `[Mock AI Response]: This is a fallback response because the GEMINI_API_KEY was not found. 
        
You asked about "${query}". 

If this were live, the AI Assistant would evaluate your query strictly against Indian electoral law and process, maintaining a strictly non-partisan and educational tone as defined in the system prompt. Since the API is not connected, please refer to the Learning Hub for general information.`
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Strict system boundaries per security.md
    const promptContext = `
You are the VoteWise India Educational Assistant. 
Your ONLY purpose is to answer questions about the Indian election process, voter eligibility, booth rules, EVMs/VVPATs, and civic methodology. 
Strict Rules:
1. You must remain 100% neutral and non-partisan.
2. NEVER mention specific politicians, contemporary political parties, upcoming election predictions, or political ideologies.
3. If the user asks a political, argumentative, or off-topic question, immediately refuse and state: "I am an educational assistant focused strictly on the democratic process. I cannot discuss specific parties, candidates, or political opinions."
4. Provide simple, extremely clear, beginner-friendly answers. Use accessible language.
5. Remind the user that official legal guidance should always come from the Election Commission of India (ECI).

User Query: ${query.trim()}
`;

    const result = await model.generateContent(promptContext);
    const responseText = result.response.text();

    return NextResponse.json({ result: responseText });

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Generic safe fallback for internal errors
    return NextResponse.json({
      result: "I'm sorry, I am currently experiencing technical difficulties retrieving that information. Please try again later or refer to the official Election Commission of India website for accurate guidance."
    }, { status: 500 });
  }
}
