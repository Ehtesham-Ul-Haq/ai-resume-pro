 
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";
import { UserCoverLetter } from "@/models/userCoverLetter";
import DocumentList from "@/components/documentList";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  await connectDB();

  const resumes = await UserResume.find({ userId }).sort({ createdAt: -1 });

  const coverLetters = await UserCoverLetter.find({ userId }).sort({
    createdAt: -1,
  });

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Your Resumes</h1>

        {resumes.length === 0 ? (
          <p className="text-gray-500">No resumes yet.</p>
        ) : (
          <DocumentList
            type="resume"
            documents={JSON.parse(JSON.stringify(resumes))}
          />
        )}
      </div>

      <div className="max-w-3xl mx-auto shadow-md rounded-2xl p-6 mt-6">
        <h1 className="text-2xl font-bold mb-4">Your Cover Letters</h1>

        {coverLetters.length === 0 ? (
          <p className="text-gray-500">No Cover Letter yet.</p>
        ) : (
          <DocumentList
            type="coverLetter"
            documents={JSON.parse(JSON.stringify(coverLetters))}
          />
        )}
      </div>
    </main>
  );
}
