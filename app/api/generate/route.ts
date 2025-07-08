/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/generate/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { fullName, jobTitle, experience, skills } = await req.json();

    if (!fullName || !jobTitle || !experience || !skills) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const prompt = `
Create a professional resume with the following details:

Name: ${fullName}
Job Title: ${jobTitle}
Experience: ${experience}
Skills: ${skills}

Include sections: Summary, Skills, Experience, Education.
Make it clean and well-structured.
    `;

    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const result = await model.generateContent([prompt]);

    const text = result.response.text();
    // after you get `text` from Gemini:
await connectDB();
await UserResume.create({
  fullName,
  jobTitle,
  experience,
  skills,
  generated: text,
});

    return NextResponse.json({ result: text });
  } catch (error: any) {
    console.error("[GEMINI_ERROR]", error.message);
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
