
import { connectDB } from "@/lib/db";
import { UserCoverLetter } from "@/models/userCoverLetter";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  await connectDB();
  const { id } = await req.json();

  const publicId = nanoid(8);
  await UserCoverLetter.findByIdAndUpdate(id, { publicId });

  return NextResponse.json({ publicUrl: `/view/${publicId}` });
}
