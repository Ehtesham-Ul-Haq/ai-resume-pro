// /app/api/resume/share/route.ts
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  await connectDB();
  const { id } = await req.json();

  const publicId = nanoid(8);
  await UserResume.findByIdAndUpdate(id, { publicId });

  return NextResponse.json({ publicUrl: `/view/${publicId}` });
}
