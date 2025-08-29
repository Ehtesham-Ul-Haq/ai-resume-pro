"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type DocumentItem = {
  _id: string;
  fullName: string;
  jobTitle: string;
  userEmail: string;
  createdAt: string;
};

type DocumentListProps = {
  documents: DocumentItem[];
  type: "resume" | "coverLetter";
};

export default function DocumentList({ documents, type }: DocumentListProps) {
  const label = type === "resume" ? "Resume" : "Cover Letter";

  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {documents.map((docItem) => (
          <motion.li
            key={docItem._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border p-4 rounded-xl shadow-sm hover:bg-blue-900 transition"
          >
            <Link
              href={`/dashboard/${type}/view/${docItem._id}`}
              className="block"
            >
              <h2 className="text-lg font-semibold">
                {docItem.fullName} — {docItem.jobTitle}
              </h2>
              <p className="text-sm text-gray-500">{docItem.userEmail}</p>
              <p className="text-xs text-gray-400">
                Created: {new Date(docItem.createdAt).toLocaleDateString()}
              </p>
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>

      {documents.length === 0 && (
        <p className="text-gray-500">No {label.toLowerCase()}s found.</p>
      )}
    </ul>
  );
}
