/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

type coverLetters = {
  _id: string;
  fullName: string;
  jobTitle: string;
  createdAt: string;
  generated: string;
};

export default function CoverLettersList({ coverLetters }: { coverLetters: coverLetters[] }) {
  const coverLetterRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [exportingId, setExportingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<{
    fullName: string;
    jobTitle: string;
    generated: string;
  }>({
    fullName: "",
    jobTitle: "",
    generated: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEditingId(null);
        setEditedData({ fullName: "", jobTitle: "", generated: "" });
      }
    };

    if (editingId) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editingId]);

  const downloadAsPDF = (id: string, filename: string) => {
    setDownloadingId(id);

    try {
      const element = coverLetterRefs.current[id];
      if (!element) return;

      const text = element.innerText || "";
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.height;
      const margin = 10;
      const lineHeight = 7;
      const lines = doc.splitTextToSize(text, 180);

      let cursorY = margin;

      lines.forEach((line: string) => {
        if (cursorY + lineHeight > pageHeight - margin) {
          doc.addPage();
          cursorY = margin;
        }
        doc.text(line, margin, cursorY);
        cursorY += lineHeight;
      });

      doc.save(`${filename}_coverLetter.pdf`);
      toast.success("PDF downloaded!");
    } catch (err) {
      toast.error("Download failed!");
    } finally {
      setDownloadingId(null);
    }
  };

  const deleteCoverLetter = async (id: string) => {
    try {
      setDeletingId(id);
      const res = await fetch(`/api/delete?id=${id}`, { method: "POST" });
      if (res.ok) {
        toast.success("Cover Letter deleted!");
        setDeletedIds((prev) => [...prev, id]); // trigger animation
      } else {
        toast.error("Failed to delete Cover Letter.");
      }
    } catch (err: any) {
      toast.error(err || "Error deleting Cover Letter.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          ...editedData,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("Cover Letter updated successfully!");
      setEditingId(null);
      window.location.reload();
    } catch (err) {
      toast.error("Failed to update Cover Letter. Please try again.");
    }
  };

  const generateShareLink = async (id: string) => {
    const res = await fetch("/api/share", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    const { publicUrl } = await res.json();
    await navigator.clipboard.writeText(window.location.origin + publicUrl);
    toast.success("🔗 Share link copied to clipboard!");
  };
  const exportAsDocx = async (coverLetters: coverLetters) => {
    setExportingId(coverLetters._id);

    const content =
      editingId === coverLetters._id && editedData
        ? editedData.generated
        : coverLetters.generated;

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${coverLetters.fullName} — ${coverLetters.jobTitle}`,
                  bold: true,
                  size: 28,
                }),
              ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: content,
                  size: 24,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${coverLetters.fullName}_resume.docx`);
    setExportingId(null);
  };

  return (
    <ul className="space-y-6">
      <AnimatePresence>
        {coverLetters.map((coverLetter) =>
          !deletedIds.includes(coverLetter._id) ? (
            <motion.li
              key={coverLetter._id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: -30,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`border p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 transition-opacity ${
                editingId && editingId !== coverLetter._id
                  ? "opacity-30 pointer-events-none select-none"
                  : ""
              }`}
            >
              <div
                ref={(ref) => {
                  coverLetterRefs.current[coverLetter._id] = ref;
                }}
              >
                {editingId === coverLetter._id ? (
                  <div className="space-y-3 mb-3">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      value={editedData.fullName}
                      onChange={(e) =>
                        setEditedData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                    />
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      value={editedData.jobTitle}
                      onChange={(e) =>
                        setEditedData((prev) => ({
                          ...prev,
                          jobTitle: e.target.value,
                        }))
                      }
                    />
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      value={editedData.generated}
                      onChange={(e) =>
                        setEditedData((prev) => ({
                          ...prev,
                          generated: e.target.value,
                        }))
                      }
                    />
                    <div className="flex gap-3">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={handleSave}
                      >
                        💾 Save
                      </button>
                      <button
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => setEditingId(null)}
                      >
                        ✖ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold">
                      {coverLetter.fullName} — {coverLetter.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      Created: {new Date(coverLetter.createdAt).toLocaleString()}
                    </p>
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 bg-gray-50 rounded-lg p-3 overflow-x-auto">
                      {coverLetter.generated}
                    </pre>
                  </>
                )}
              </div>

              {editingId !== coverLetter._id && (
                <div className="flex flex-col md:flex-row gap-3 mt-4">
                  <button
                    onClick={() => deleteCoverLetter(coverLetter._id)}
                    disabled={deletingId === coverLetter._id}
                    className="w-full md:w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition cursor-pointer"
                  >
                    {deletingId === coverLetter._id ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Deleting...
                      </>
                    ) : (
                      "🗑 Delete"
                    )}
                  </button>

                  <button
                    onClick={() => downloadAsPDF(coverLetter._id, coverLetter.fullName)}
                    disabled={downloadingId === coverLetter._id}
                    className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition cursor-pointer flex justify-center items-center gap-2"
                  >
                    {downloadingId === coverLetter._id ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Downloading...
                      </>
                    ) : (
                      "⬇️ Download PDF"
                    )}
                  </button>
                  <button
                    onClick={() => exportAsDocx(coverLetter)}
                    disabled={exportingId === coverLetter._id}
                    className="w-full md:w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition cursor-pointer flex justify-center items-center gap-2"
                  >
                    {exportingId === coverLetter._id ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Exporting...
                      </>
                    ) : (
                      "📄 Export as DOCX"
                    )}
                  </button>
                  <button
                    onClick={() => generateShareLink(coverLetter._id)}
                    className="w-full md:w-1/2 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl transition cursor-pointer flex justify-center items-center gap-2"
                  >
                    🔗 Share
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(coverLetter._id);
                      setEditedData({
                        fullName: coverLetter.fullName,
                        jobTitle: coverLetter.jobTitle,
                        generated: coverLetter.generated,
                      });
                    }}
                    className="w-full md:w-1/2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-xl transition cursor-pointer flex justify-center items-center gap-2"
                  >
                    ✏️ Edit
                  </button>
                </div>
              )}
            </motion.li>
          ) : null
        )}
      </AnimatePresence>
    </ul>
  );
}
