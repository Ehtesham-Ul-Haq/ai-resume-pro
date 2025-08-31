import { connectDB } from "@/lib/db";
import { UserResume } from "@/models/userResume";
import {
  FileText,
  User,
  Mail,
  Phone,
  Home,
  Briefcase,
  Clock,
} from "lucide-react";

export default async function PublicResumePage({
  params,
}: {
  params: { id: string };
}) {
  await connectDB();
  const resume = await UserResume.findOne({ publicId: params.id });

  if (!resume) return <div className="p-10 text-center">Resume not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Background layers (same theme as other file) --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <FileText className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 animate-fade-in-slide-up">
        {/* Header */}
        <div className="flex flex-col items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl border border-blue-700 shadow-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Public Resume
          </h1>
          <p className="text-gray-400 mt-2">
            Preview of {resume.fullName}&#39;s resume
          </p>
        </div>

        {/* Main Resume Content */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-blue-700 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="bg-gray-800 p-6 rounded-2xl space-y-6 border border-gray-700 shadow-lg">
            <div className="text-center pb-4 border-b border-gray-700">
              <User className="w-16 h-16 mx-auto mb-3 text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-100">
                {resume.fullName}
              </h2>
              <p className="text-blue-300 font-medium">{resume.jobTitle}</p>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              {resume.phoneNumber && (
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />{" "}
                  {resume.phoneNumber}
                </p>
              )}
              {resume.emailAddress && (
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400" />{" "}
                  {resume.emailAddress}
                </p>
              )}
              {resume.address && (
                <p className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-blue-400" /> {resume.address}
                </p>
              )}
              {resume.company && (
                <p className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-teal-400" />{" "}
                  {resume.company}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
              <Clock className="inline-block w-3 h-3 mr-1 text-gray-600" />
              Generated:{" "}
              {resume.createdAt
                ? new Date(resume.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 p-6 space-y-8 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg">
            <section>
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-green-400" /> Summary
              </h3>
              <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                {resume.generated}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
