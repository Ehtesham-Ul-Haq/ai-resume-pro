// app/cover-letter/page.tsx
import CoverLetterForm from "@/components/CoverLetterForm";

export default function CoverLetterPage() {
  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Cover Letter Generator</h1>
      <CoverLetterForm />
    </main>
  );
}
