import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";

export default async function PublicResumePage({ params }: { params: { id: string } }) {
  await connectDB();
  const resume = await UserResume.findOne({ publicId: params.id });

  if (!resume) return <div className="p-10 text-center">Resume not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{resume.fullName}</h1>
      <p className="text-xl mb-4 text-gray-500">{resume.jobTitle}</p>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{resume.generated}</pre>
    </div>
  );
}
