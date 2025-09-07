import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { UserCoverLetter } from "@/models/userCoverLetter";


export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  await connectDB();
  const coverLetter = await UserCoverLetter.findById(id);

  if (!coverLetter) {
    return NextResponse.json({ error: "cover letter not found" }, { status: 404 });
  }

  return NextResponse.json({ status: "success", coverLetter });
}
