/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import htmlToPdfmake from "html-to-pdfmake";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import {
  User,
  Mail,
  Phone,
  Home,
  Briefcase,
  FileText,
  Clock,
  Loader2,
  AlertTriangle,
  ArrowLeftCircle,
  Download,
  Share2,
  Trash2,
  Edit3,
  FileType,
} from "lucide-react";

import ActionButton from "@/components/ActionButton"; // ✅ Import button
import toast from "react-hot-toast";

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

export default function DocumentDetailPage({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  // ✅ unwrap with React.use
  const { type, id } = React.use(params);
  const router = useRouter();

  const [docData, setDocData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Loading states for actions
  const [downloadingPDF, setDownloadingPDF] = useState(false);
  const [downloadingWord, setDownloadingWord] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [sharing, setSharing] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const fetchedDocument = await getDocument(type, id);
        if (!fetchedDocument) {
          setError("Document not found.");
        } else {
          setDocData(fetchedDocument);
        }
      } catch (err) {
        console.error("Failed to fetch document:", err);
        setError("Failed to load document data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // Dynamically import fonts only in client-side
    import("pdfmake/build/vfs_fonts").then((pdfFonts: any) => {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    });
  }, [type, id]);

  // ✅ download as PDF
  const handleDownloadPDF = () => {
    setDownloadingPDF(true);
    const resumeElement = document.getElementById("document-content");
    if (!resumeElement) return;

    const html = resumeElement.innerHTML;

    // convert HTML to pdfmake format
    const pdfContent = htmlToPdfmake(html);

    const docDefinition = {
      content: pdfContent,
      defaultStyle: {
        fontSize: 12,
      },
    };

    pdfMake.createPdf(docDefinition).download("document.pdf");
    setDownloadingPDF(false);
  };

  // ✅ Download as Word
  const handleDownloadWord = async () => {
    setDownloadingWord(true);

    console.log("data::::", data);
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.fullName} — ${data.jobTitle}`,
                  bold: true,
                  size: 28,
                }),
              ],
            }),

            new Paragraph({ text: "" }),

            new Paragraph({
              children: [
                new TextRun({
                  text: data.company || "",
                  bold: true,
                  size: 24,
                }),
              ],
            }),

            new Paragraph({ text: "" }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.emailAddress}`,
                  size: 22,
                }),
              ],
            }),

            new Paragraph({ text: "" }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.phoneNumber}`,
                  size: 22,
                }),
              ],
            }),

            new Paragraph({ text: "" }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.generated}`,
                  size: 18,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "document.docx");

    setDownloadingWord(false);
  };

  // ✅ Delete document
  const handleDelete = async () => {
    setDeleting(true);
    try {
      const apiUrl =
        type === "resume" ? `/api/resume/delete` : `/api/coverLetter/delete`;

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        alert("Deleted successfully!");
        router.push("/dashboard");
      } else {
        alert("Failed to delete");
      }
    } finally {
      setDeleting(false);
    }
  };

  // ✅ Share link
  const handleShare = async (id: string) => {
    setSharing(true);
    try {
      const apiUrl =
        type === "resume" ? `/api/resume/share` : `/api/coverLetter/share`;

      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const { publicUrl } = await res.json();
      await navigator.clipboard.writeText(window.location.origin + publicUrl);
      toast.success("🔗 Share link copied to clipboard!");
    } catch {
      toast.error("Error! Try again later");
    } finally {
      setSharing(false);
    }
  };

  // ✅ Update (navigate)
  const handleUpdate = () => {
    router.push(`/dashboard/${type}/edit/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-16 h-16 text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const data = docData.resume || docData.coverLetter;
  const displayTitle = type === "resume" ? "Resume" : "Cover Letter";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers (Consistent Theme) --- */}
      {/* These provide the futuristic, animated background effects */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        {/* Large icon in the background to hint at the page content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <FileText className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 animate-fade-in-slide-up">
        {/* Header Section: Back Button and Document Title */}
        <div className="flex flex-col sm:flex-row items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl border border-blue-700 shadow-2xl">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 w-1/3 cursor-pointer text-blue-400 hover:text-blue-200 transition-colors duration-300 transform hover:scale-[1.05] mb-4 sm:mb-0"
          >
            <ArrowLeftCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Back to Dashboard</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {displayTitle} Preview
          </h1>
        </div>

        {/* Main Document Content Area - Divided into Sidebar and Main Content */}
        <div
          ref={contentRef}
          id="document-content"
          className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-blue-700 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Left Sidebar - Contact Information & Metadata */}
          <div
            className="bg-gray-800 p-6 rounded-2xl space-y-6 border border-gray-700 shadow-lg animate-fade-in-stagger"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            <div className="text-center pb-4 border-b border-gray-700">
              {/* User icon for personal details */}
              <User className="w-16 h-16 mx-auto mb-3 text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-100">
                {data.fullName}
              </h2>
              <p className="text-blue-300 font-medium">{data.jobTitle}</p>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              {/* Heading for contact details with an icon */}
              <h3 className="text-md font-semibold text-gray-200 flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-green-400" /> Contact & Role
                Details
              </h3>
              {/* Conditional rendering for contact info with Lucide icons */}
              {data.phoneNumber && (
                <p className="flex items-center gap-3">
                  <strong>
                    <Phone className="w-5 h-5 text-purple-400" />
                  </strong>{" "}
                  {data.phoneNumber}
                </p>
              )}
              {data.emailAddress && (
                <p className="flex items-center gap-3">
                  <strong>
                    <Mail className="w-5 h-5 text-orange-400" />
                  </strong>{" "}
                  {data.emailAddress}
                </p>
              )}
              {data.address && (
                <p className="flex items-center gap-3">
                  <strong>
                    <Home className="w-5 h-5 text-blue-400" />
                  </strong>{" "}
                  {data.address}
                </p>
              )}
              {data.company && (
                <p className="flex items-center gap-3">
                  <strong>
                    <Briefcase className="w-5 h-5 text-teal-400" />
                  </strong>{" "}
                  {data.company}
                </p>
              )}
            </div>
            {/* Creation timestamp with a clock icon */}
            <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
              <Clock className="inline-block w-3 h-3 mr-1 text-gray-600" />
              Generated:{" "}
              {data.createdAt
                ? new Date(data.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          {/* Right Side - Experience and Generated Content */}
          <div
            className="md:col-span-2 p-6 space-y-8 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg animate-fade-in-stagger"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            {/* Experience Section */}
            {data.experience && (
              <section className="pb-6 border-b border-gray-700">
                <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2 mb-4">
                  <Briefcase className="w-6 h-6 text-yellow-400" /> Experience
                </h3>
                {/* Tailwind Typography 'prose' classes for readable content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                  <p>{data.experience}</p>
                </div>
              </section>
            )}

            {/* Generated Body (Resume Summary or Cover Letter Content) Section */}
            {data.generated && (
              <section>
                <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-green-400" />{" "}
                  {type === "resume" ? "Summary" : "Cover Letter Content"}
                </h3>
                {/* 'whitespace-pre-wrap' ensures original line breaks are preserved */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {data.generated}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* ✅ Action Buttons */}
        <div className="flex gap-4 justify-center flex-col sm:flex-row items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl border border-blue-700 shadow-2xl">
          <ActionButton
            onClick={handleDownloadPDF}
            loading={downloadingPDF}
            icon={<Download />}
            className="bg-pink-600 hover:bg-pink-700"
          >
            Download PDF
          </ActionButton>

          <ActionButton
            onClick={handleDownloadWord}
            loading={downloadingWord}
            icon={<FileType />}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Download Word
          </ActionButton>

          <ActionButton
            onClick={() => handleShare(data._id)}
            loading={sharing}
            icon={<Share2 />}
            className="bg-green-600 hover:bg-green-700"
          >
            Share Link
          </ActionButton>

          <ActionButton
            onClick={handleUpdate}
            icon={<Edit3 />}
            className="bg-yellow-600 hover:bg-yellow-700 text-black"
          >
            Update
          </ActionButton>

          <ActionButton
            onClick={handleDelete}
            loading={deleting}
            icon={<Trash2 />}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
