import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { UserCoverLetter } from "@/models/userCoverLetter";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: Params) {
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
