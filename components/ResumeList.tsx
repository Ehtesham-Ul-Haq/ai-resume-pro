/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import jsPDF from "jspdf";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

type Resume = {
  _id: string;
  fullName: string;
  jobTitle: string;
  createdAt: string;
  generated: string;
};

export default function ResumeList({ resumes }: { resumes: Resume[] }) {
  const resumeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [deletedIds, setDeletedIds] = useState<string[]>([]);

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
    toast.success("PDF downloaded!");
  };

  const deleteResume = async (id: string) => {
    try {
      const res = await fetch(`/api/delete?id=${id}`, { method: "POST" });
      if (res.ok) {
        toast.success("Resume deleted!");
        setDeletedIds((prev) => [...prev, id]); // trigger animation
      } else {
        toast.error("Failed to delete resume.");
      }
    } catch (err: any) {
      toast.error(err || "Error deleting resume.");
    }
  };

  return (
    <ul className="space-y-6">
      <AnimatePresence>
        {resumes.map((resume) =>
          !deletedIds.includes(resume._id) ? (
            <motion.li
              key={resume._id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: -30,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800"
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
                <button
                  onClick={() => deleteResume(resume._id)}
                  className="w-full md:w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition cursor-pointer"
                >
                  🗑 Delete
                </button>

                <button
                  onClick={() => downloadAsPDF(resume._id, resume.fullName)}
                  className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition cursor-pointer"
                >
                  ⬇️ Download PDF
                </button>
              </div>
            </motion.li>
          ) : null
        )}
      </AnimatePresence>
    </ul>
  );
}
