// app/resume/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CoverLetterForm from "@/components/CoverLetterForm";

export default async function CoverLetterPage() {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white shadow-xl p-6 rounded-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">AI Cover Letter Generator</h1>
        <CoverLetterForm />
      </div>
    </main>
  );
}
