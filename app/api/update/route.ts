import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";

export async function PUT(req: Request) {
  try {
    const { id, fullName, jobTitle, generated } = await req.json();
    await connectDB();

    const updated = await UserResume.findByIdAndUpdate(
      id,
      { fullName, jobTitle, generated },
      { new: true }
    );

    if (!updated) return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
