// app/dashboard/[type]/view/[id]/page.tsx
import { notFound } from "next/navigation";

async function getDocument(type: string, id: string) {
  let apiUrl = "";

  if (type === "resume") {
    apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/resume/${id}`;
  } else if (type === "coverLetter") {
    apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/coverLetter/${id}`;
  } else {
    return null;
  }

  const res = await fetch(apiUrl, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function DocumentDetailPage({
  params,
}: {
  params: { type: string; id: string };
}) {
  const { type, id } = params;
  const document = await getDocument(type, id);

  if (!document) return notFound();
  console.log('document:', document);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {type === "resume" ? "Resume" : "Cover Letter"} Detail
      </h1>

      <div className="shadow rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">{document.coverLetter.fullName}</h2>
        <h3 className="text-xl font-semibold">{document.coverLetter.jobTitle}</h3>
        <p className="text-sm text-gray-500">
          Created: {new Date(document.coverLetter.createdAt).toLocaleDateString()}
        </p>

        <div className="border-t t border-gray-300 dark:border-gray-700 pt-4">
          <p className="whitespace-pre-wrap">{document.coverLetter.generated}</p>
        </div>
      </div>
    </div>
  );
}
