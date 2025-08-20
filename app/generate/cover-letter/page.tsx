// app/resume/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CoverLetterForm from "@/components/CoverLetterForm";

export default async function CoverLetterPage() {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <main className="min-h-screen p-6 bg-gray-950">
      <CoverLetterForm />
    </main>
  );
}
