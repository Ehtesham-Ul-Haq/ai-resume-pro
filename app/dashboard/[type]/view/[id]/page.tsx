/* eslint-disable @typescript-eslint/no-explicit-any */
      'use client'; // This component will be rendered on the client to handle interactive elements and state.
// app/dashboard/[type]/view/[id]/page.tsx
import React, { useState, useEffect } from 'react'; // Importing React and hooks
// Removed: import { notFound } from "next/navigation"; // This import caused the error in non-Next.js environments
import {
  User, Mail, Phone, Home, Briefcase, FileText, Clock, Loader2, AlertTriangle, ArrowLeftCircle, Edit
} from 'lucide-react'; // Lucide icons for a sleek, modern look



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
  params: Promise<{ type: string; id: string }>; // params is a Promise
}) {
  // ✅ unwrap with React.use
  const { type, id } = React.use(params);

  const [document, setDocument] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const fetchedDocument = await getDocument(type, id);
        if (!fetchedDocument) {
          setError("Document not found. Please check the URL or try a different document ID (e.g., 'resume-123' or 'coverletter-456').");
        } else {
          setDocument(fetchedDocument);
        }
      } catch (err) {
        console.error("Failed to fetch document:", err);
        setError("Failed to load document data due to an internal error.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [type, id]); // Re-run effect if type or id changes

  // Display loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-400">
        <Loader2 className="animate-spin w-16 h-16 text-blue-500 mb-4" />
        <p className="text-xl">Loading {type === "resume" ? "Resume" : "Cover Letter"}...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-red-400 p-8 text-center">
        <AlertTriangle className="w-16 h-16 mb-4" />
        <p className="text-xl mb-4">{error}</p>
        {/* Simple back button for Canvas context */}
        <button onClick={() => window.history.back()} className="px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">Go Back</button>
      </div>
    );
  }

  // Dynamically pick resume or coverLetter
  const data = document.resume || document.coverLetter;

  // Additional check if data is still not found after fetching
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-red-400 p-8 text-center">
        <AlertTriangle className="w-16 h-16 mb-4" />
        <p className="text-xl mb-4">Document data is missing or corrupted after loading.</p>
        <button onClick={() => window.history.back()} className="px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">Go Back</button>
      </div>
    );
  }

  // Determine the display title
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
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl border border-blue-700 shadow-2xl">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-200 transition-colors duration-300 transform hover:scale-[1.05] mb-4 sm:mb-0"
          >
            <ArrowLeftCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Back to Dashboard</span>
          </button>
          <h1 className="text-3xl md:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {displayTitle} Preview
          </h1>
          {/* Placeholder for future edit button, for alignment. */}
          <div className="w-auto sm:w-48 text-right">
             <button
                // onClick={() => handleEdit(data.id)} // Example: Implement a handler to navigate to an edit page
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-md
                           hover:bg-purple-700 transition-colors cursor-pointer duration-200 transform hover:scale-105"
             >
                <Edit className="w-4 h-4" /> Edit {displayTitle}
             </button>
          </div>
        </div>

        {/* Main Document Content Area - Divided into Sidebar and Main Content */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar - Contact Information & Metadata */}
          <div className="bg-gray-800 p-6 rounded-2xl space-y-6 border border-gray-700 shadow-lg animate-fade-in-stagger" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <div className="text-center pb-4 border-b border-gray-700">
              {/* User icon for personal details */}
              <User className="w-16 h-16 mx-auto mb-3 text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-100">{data.fullName}</h2>
              <p className="text-blue-300 font-medium">{data.jobTitle}</p>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              {/* Heading for contact details with an icon */}
              <h3 className="text-md font-semibold text-gray-200 flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-green-400" /> Contact & Role Details
              </h3>
              {/* Conditional rendering for contact info with Lucide icons */}
              {data.phoneNumber && <p className="flex items-center gap-3"><strong><Phone className="w-5 h-5 text-purple-400" /></strong> {data.phoneNumber}</p>}
              {data.emailAddress && <p className="flex items-center gap-3"><strong><Mail className="w-5 h-5 text-orange-400" /></strong> {data.emailAddress}</p>}
              {data.address && <p className="flex items-center gap-3"><strong><Home className="w-5 h-5 text-blue-400" /></strong> {data.address}</p>}
              {data.company && <p className="flex items-center gap-3"><strong><Briefcase className="w-5 h-5 text-teal-400" /></strong> {data.company}</p>}
            </div>
            {/* Creation timestamp with a clock icon */}
            <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
              <Clock className="inline-block w-3 h-3 mr-1 text-gray-600" />
              Generated: {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : "N/A"}
            </p>
          </div>

          {/* Right Side - Experience and Generated Content */}
          <div className="md:col-span-2 p-6 space-y-8 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg animate-fade-in-stagger" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
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
                  <FileText className="w-6 h-6 text-green-400" /> {type === "resume" ? "Summary" : "Cover Letter Content"}
                </h3>
                {/* 'whitespace-pre-wrap' ensures original line breaks are preserved */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {data.generated}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}










