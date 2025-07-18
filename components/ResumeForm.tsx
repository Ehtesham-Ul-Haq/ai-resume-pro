/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import OutputViewer from "./OutputViewer";
import toast from "react-hot-toast";

type FormData = {
  fullName: string;
  jobTitle: string;
  phoneNumber: string;
  emailAddress: string;
  linkedInProfileURL?: string;
  portfolioURL?: string;
  city?: string;
  summary?: string;
  workExperience: string;
  education?: string;
  technicalSkills?: string;
  softSkills?: string;
  languages?: string;
  projects?: string;
};

export default function ResumeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setOutput("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/resume/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.result) {
        setOutput(json.result);
        toast.success("Resume generated successfully!");
      } else {
        toast.error(json.error || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Error generating resume.");
      toast.error("Error generating resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-2">Basic Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm">Full name is required.</p>
      )}

      <input
        type="text"
        placeholder="Job Title (e.g., Frontend Developer)"
        {...register("jobTitle", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.jobTitle && (
        <p className="text-red-500 text-sm">Job title is required.</p>
      )}

      <input
        type="tel"
        placeholder="Phone Number"
        {...register("phoneNumber", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm">Phone number is required.</p>
      )}

      <input
        type="email"
        placeholder="Email Address"
        {...register("emailAddress", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
      />
      {errors.emailAddress && (
        <p className="text-red-500 text-sm">Email is required.</p>
      )}

      <input
        type="url"
        placeholder="LinkedIn Profile URL"
        {...register("linkedInProfileURL")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="url"
        placeholder="Portfolio URL"
        {...register("portfolioURL")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="text"
        placeholder="City"
        {...register("city")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <textarea
        placeholder="Professional Summary"
        {...register("summary")}
        className="w-full border px-4 py-2 rounded-lg"
        rows={3}
      />

      <h2 className="text-xl font-semibold mt-6">Experience & Education</h2>

      <textarea
        placeholder="Work Experience (1–2 short paragraphs)"
        {...register("workExperience", { required: true })}
        className="w-full border px-4 py-2 rounded-lg"
        rows={4}
      />
      {errors.workExperience && (
        <p className="text-red-500 text-sm">Experience is required.</p>
      )}

      <textarea
        placeholder="Education"
        {...register("education")}
        className="w-full border px-4 py-2 rounded-lg"
        rows={3}
      />

      <h2 className="text-xl font-semibold mt-6">Skills</h2>

      <input
        type="text"
        placeholder="Technical Skills (comma separated)"
        {...register("technicalSkills")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="text"
        placeholder="Soft Skills (comma separated)"
        {...register("softSkills")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="text"
        placeholder="Languages (comma separated)"
        {...register("languages")}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <textarea
        placeholder="Projects (comma separated or bullet points)"
        {...register("projects")}
        className="w-full border px-4 py-2 rounded-lg"
        rows={3}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 flex justify-center items-center gap-2"
      >
        {loading ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            Generating...
          </>
        ) : (
          "Generate Resume"
        )}
      </button>

      {errorMsg && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          ⚠️ {errorMsg}
        </div>
      )}

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-line">
          <h2 className="font-semibold text-lg mb-2">Generated Resume:</h2>
          <OutputViewer forwardoutput={output} />
        </div>
      )}
    </form>
  );
}
