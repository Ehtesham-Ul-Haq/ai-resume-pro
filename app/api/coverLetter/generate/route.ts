import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { fullName, jobTitle, company, experience, skills } = await req.json();

    if (!fullName || !jobTitle || !company || !experience || !skills) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = `
      Write a professional cover letter for the following person applying for the role of ${jobTitle} at ${company}.
      - Full Name: ${fullName}
      - Experience: ${experience}
      - Skills: ${skills}

      The tone should be confident and enthusiastic, no more than 300 words.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ result: text });
  } catch (error) {
    console.error("[COVER_LETTER_ERROR]", error);
    return NextResponse.json({ error: "Something went wrong generating the cover letter." }, { status: 500 });
  }
}
