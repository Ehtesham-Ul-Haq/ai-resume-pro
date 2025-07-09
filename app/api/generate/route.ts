/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";
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
      linkedInProfileURL,
      portfolioURL,
      city,
      summary,
      workExperience,
      education,
      technicalSkills,
      softSkills,
      languages,
      projects,
    } = body;

    // Check for required fields
    if (!fullName || !jobTitle || !emailAddress || !phoneNumber || !workExperience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = `
Create a professional and clean resume using the following user information:

Full Name: ${fullName}
Job Title: ${jobTitle}
Email: ${emailAddress}
Phone: ${phoneNumber}
City: ${city || "N/A"}
LinkedIn: ${linkedInProfileURL || "N/A"}
Portfolio: ${portfolioURL || "N/A"}

Summary: ${summary || "N/A"}

Technical Skills: ${technicalSkills || "N/A"}
Soft Skills: ${softSkills || "N/A"}
Languages: ${languages || "N/A"}

Work Experience:
${workExperience}

Education:
${education || "N/A"}

Projects:
${projects || "N/A"}

Please format the output as a professional resume with clear sections (Summary, Work Experience, Education, Skills, Projects).but don't add anything extra from yourself, just make it as provided by these information.just enhance it with proper english words vocaulary.
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
    await UserResume.create({
      userId,
      fullName,
      jobTitle,
      phoneNumber,
      emailAddress,
      linkedInProfileURL,
      portfolioURL,
      city,
      summary,
      workExperience,
      education,
      skills: {
        technicalSkills,
        softSkills,
        languages,
      },
      projects: projects?.split(",") || [],
      generated,
    });

    return NextResponse.json({ result: generated });
  } catch (error: any) {
    console.error("[GEMINI_ERROR]", error.message);
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
