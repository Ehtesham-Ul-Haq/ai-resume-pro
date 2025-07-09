"use client";

import { useRef } from "react";
import jsPDF from "jspdf";

type Resume = {
  _id: string;
  fullName: string;
  jobTitle: string;
  createdAt: string;
  generated: string;
};

export default function ResumeList({ resumes }: { resumes: Resume[] }) {
  const resumeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

const downloadAsPDF = (id: string, filename: string) => {
  const element = resumeRefs.current[id];
  if (!element) return;

  const text = element.innerText || "";
  const doc = new jsPDF();

  const pageHeight = doc.internal.pageSize.height;
  const margin = 10;
  const lineHeight = 7;
  const lines = doc.splitTextToSize(text, 180); // 180 = page width - margins

  let cursorY = margin;

  lines.forEach((line: string) => {
    if (cursorY + lineHeight > pageHeight - margin) {
      doc.addPage();
      cursorY = margin;
    }

    doc.text(line, margin, cursorY);
    cursorY += lineHeight;
  });

  doc.save(`${filename}_resume.pdf`);
};

  return (
    <ul className="space-y-6">
      {resumes.map((resume) => (
        <li
          key={resume._id}
          className="border p-4 rounded-xl shadow-sm bg-white"
        >
          <div
            ref={(ref) => {
              resumeRefs.current[resume._id] = ref;
            }}
          >
            <h2 className="text-xl font-semibold">
              {resume.fullName} — {resume.jobTitle}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Created: {new Date(resume.createdAt).toLocaleString()}
            </p>
            <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-gray-50 rounded-lg p-3 overflow-x-auto">
              {resume.generated}
            </pre>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <form
              method="POST"
              action={`/api/delete?id=${resume._id}`}
              className="w-full md:w-1/2"
            >
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition cursor-pointer"
              >
                🗑 Delete
              </button>
            </form>

            <button
              onClick={() => downloadAsPDF(resume._id, resume.fullName)}
              className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition cursor-pointer"
            >
              ⬇️ Download PDF
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}