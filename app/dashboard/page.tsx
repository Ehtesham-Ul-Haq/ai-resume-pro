/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";
import ResumeList from "@/components/ResumeList";
import { UserCoverLetter } from "@/models/userCoverLetter";
import CoverLettersList from "@/components/CoverLettersList";

export default async function DashboardPage({ searchParams }: any) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  await connectDB();

  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 10;
  const skip = (page - 1) * limit;

  const total = await UserResume.countDocuments({ userId });
  const resumes = await UserResume.find({ userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(total / limit);

    const coverLetters = await UserCoverLetter.find({ userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Your Resumes</h1>

        {resumes.length === 0 ? (
          <p className="text-gray-500">No resumes yet.</p>
        ) : (
          <>
            <ResumeList resumes={JSON.parse(JSON.stringify(resumes))} />

            <div className="mt-6 flex justify-between text-sm text-gray-600">
              <a
                href={`?page=${page - 1}`}
                className={page <= 1 ? "opacity-50 pointer-events-none" : ""}
              >
                ← Previous
              </a>
              <span>Page {page} of {totalPages}</span>
              <a
                href={`?page=${page + 1}`}
                className={page >= totalPages ? "opacity-50 pointer-events-none" : ""}
              >
                Next →
              </a>
            </div>
          </>
        )}
      </div>


      
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cover Letters</h1>

        {coverLetters.length === 0 ? (
          <p className="text-gray-500">No Cover Letter yet.</p>
        ) : (
          <>
            <CoverLettersList coverLetters={JSON.parse(JSON.stringify(coverLetters))} />

            <div className="mt-6 flex justify-between text-sm text-gray-600">
              <a
                href={`?page=${page - 1}`}
                className={page <= 1 ? "opacity-50 pointer-events-none" : ""}
              >
                ← Previous
              </a>
              <span>Page {page} of {totalPages}</span>
              <a
                href={`?page=${page + 1}`}
                className={page >= totalPages ? "opacity-50 pointer-events-none" : ""}
              >
                Next →
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
