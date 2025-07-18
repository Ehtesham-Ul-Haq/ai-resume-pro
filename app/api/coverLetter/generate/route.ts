
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/db";
import { UserCoverLetter } from "@/models/userCoverLetter";
import { auth } from "@clerk/nextjs/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function tryGenerate(prompt: string, modelName: string) {
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent([prompt]);
  return result.response.text();
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      fullName,
      jobTitle,
      phoneNumber,
      emailAddress,
      company,
      address,
      experience,
    } = body;

    // Check for required fields
    if (!fullName || !jobTitle || !emailAddress || !phoneNumber || !company || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = `
      Write a professional cover letter for the following person applying for the role of ${jobTitle} at ${company}.
      - Full Name: ${fullName}
      - Experience: ${experience}
      - Email: ${emailAddress}
      - Phone: ${phoneNumber}
      - Address: ${address}

      The tone should be confident and enthusiastic, no more than 300 words.
    `;




    let generated: string;
    try {
      generated = await tryGenerate(prompt, "models/gemini-2.5-flash");
    } catch (e: any) {
      console.warn("[GEMINI_RETRY] Failed on fast model, retrying:", e.message);
      generated = await tryGenerate(prompt, "models/gemini-1.5-flash");
    }

    await connectDB();

    // Store everything in MongoDB
    await UserCoverLetter.create({
      userId,
      fullName,
      jobTitle,
      phoneNumber,
      emailAddress,
      company,
      address,
      experience,
      generated,
    });

    return NextResponse.json({ result: generated });
  } catch (error: any) {
    console.error("[GEMINI_ERROR]", error.message);
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
