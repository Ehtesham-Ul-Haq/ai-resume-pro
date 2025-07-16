/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  fullName: string;
  jobTitle: string;
  company: string;
  experience: string;
  skills: string;
};

export default function CoverLetterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/coverLetter/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.result) {
        setOutput(json.result);
        toast.success("✅ Cover letter generated!");
      } else {
        toast.error(json.error || "❌ Failed to generate cover letter.");
      }
    } catch (err) {
      toast.error("❌ An unexpected error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <input
        {...register("fullName", { required: true })}
        placeholder="Full Name"
        className="w-full border px-4 py-2 rounded"
      />
      {errors.fullName && <p className="text-red-500 text-sm">Name is required</p>}

      <input
        {...register("jobTitle", { required: true })}
        placeholder="Job Title (e.g. Frontend Developer)"
        className="w-full border px-4 py-2 rounded"
      />
      {errors.jobTitle && <p className="text-red-500 text-sm">Job title is required</p>}

      <input
        {...register("company", { required: true })}
        placeholder="Company Name"
        className="w-full border px-4 py-2 rounded"
      />
      {errors.company && <p className="text-red-500 text-sm">Company name is required</p>}

      <textarea
        {...register("experience", { required: true })}
        placeholder="Your Work Experience"
        rows={3}
        className="w-full border px-4 py-2 rounded"
      />
      {errors.experience && <p className="text-red-500 text-sm">Experience is required</p>}

      <input
        {...register("skills", { required: true })}
        placeholder="Skills (comma-separated)"
        className="w-full border px-4 py-2 rounded"
      />
      {errors.skills && <p className="text-red-500 text-sm">Skills are required</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? (
          <span className="flex justify-center items-center gap-2">
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Generating...
          </span>
        ) : (
          "Generate Cover Letter"
        )}
      </button>

      {output && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 mt-6 rounded whitespace-pre-line text-sm">
          <h3 className="font-semibold mb-2">Generated Cover Letter:</h3>
          {output}
        </div>
      )}
    </form>
  );
}
