// components/ResumeForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import OutputViewer from "./OutputViewer";

type FormData = {
  fullName: string;
  jobTitle: string;
  experience: string;
  skills: string;
};

export default function ResumeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    setOutput(json.result);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.fullName && <p className="text-red-500 text-sm">Name is required</p>}

      <input
        type="text"
        placeholder="Job Title (e.g. Frontend Developer)"
        {...register("jobTitle", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.jobTitle && <p className="text-red-500 text-sm">Job title is required</p>}

      <textarea
        placeholder="Work Experience (1–2 short paragraphs)"
        {...register("experience", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
        rows={4}
      />
      {errors.experience && <p className="text-red-500 text-sm">Experience is required</p>}

      <input
        type="text"
        placeholder="Skills (comma separated)"
        {...register("skills", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.skills && <p className="text-red-500 text-sm">Skills are required</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        {loading ? "Generating..." : "Generate Resume"}
      </button>

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-line">
          <h2 className="font-semibold text-lg mb-2">Generated Resume:</h2>
          <OutputViewer forwardoutput={output} />
        </div>
      )}
    </form>
  );
}
