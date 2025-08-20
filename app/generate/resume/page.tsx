// app/resume/page.tsx
import { auth } from "@clerk/nextjs/server";
import ResumeForm from "@/components/ResumeForm";
import { redirect } from "next/navigation";

export default async function ResumePage() {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <main className="min-h-screen p-6 bg-gray-950">
        <ResumeForm />
    </main>
  );
}
