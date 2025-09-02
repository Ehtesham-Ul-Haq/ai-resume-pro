import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  await connectDB();
  const resume = await UserResume.findById(id);

  if (!resume) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  return NextResponse.json({ status: "success", resume });
}
