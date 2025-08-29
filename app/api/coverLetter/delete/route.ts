import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { UserCoverLetter } from "@/models/userCoverLetter";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  await connectDB();
  await UserCoverLetter.findByIdAndDelete(id);

  return NextResponse.json({ status: 'success' });
}
