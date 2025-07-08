/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  await connectDB();

  const resumes = await UserResume.find({}).sort({ createdAt: -1 });

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Your Generated Resumes</h1>

        {resumes.length === 0 ? (
          <p className="text-gray-500">No resumes generated yet.</p>
        ) : (
          <ul className="space-y-4">
            {resumes.map((resume: any) => (
              <li key={resume._id} className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold">{resume.fullName} — {resume.jobTitle}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(resume.createdAt).toLocaleString()}
                </p>
                <pre className="whitespace-pre-wrap text-sm text-gray-700">
                  {resume.generated.slice(0, 500)}...
                </pre>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
