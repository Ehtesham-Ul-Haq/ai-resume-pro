/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  User,
  Code,
  CheckCircle2,
  AlertCircle,
  TerminalSquare,
} from "lucide-react";
import OutputViewer from "./OutputViewer";

type FormData = {
  fullName: string;
  jobTitle: string;
  phoneNumber: string;
  emailAddress: string;
  company: string;
  address: string;
  experience?: string;
};

export default function CoverLetterForm() {
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
      const res = await fetch("/api/coverLetter/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.result) {
        setOutput(json.result);
        toast.success("Cover Letter generated successfully!");
      } else {
        toast.error(json.error || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Error generating Cover Letter.");
      toast.error("Error generating Cover Letter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[size:30px_30px] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] dark:bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] animate-pulse-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.1)] to-transparent animate-scanline"></div>
        {/* Glowing particles effect */}
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white opacity-0 animate-particle-float rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              boxShadow: "0 0 5px rgba(255,255,255,0.7)",
            }}
          ></span>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full  bg-gray-900 bg-opacity-70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg border border-blue-700 dark:border-purple-700
                   relative z-10 transform transition-all duration-500 animate-fade-in-up-custom
                   hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-8 pb-4 relative drop-shadow-lg">
          <TerminalSquare className="inline-block w-10 h-10 mr-3 align-middle animate-pulse-fade-slow" />
          AI Cover Letter Console
          <span className="block w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-2 animate-extend-width"></span>
        </h2>

        {/* Section: Basic Information */}
        <SectionContainer
          title="Basic Information"
          icon={<User className="w-6 h-6 text-blue-400" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              type="text"
              placeholder="Full Name"
              label="Full Name"
              {...register("fullName", { required: true })}
              error={errors.fullName}
              errorMessage="Full name is required."
            />
            <InputField
              type="text"
              placeholder="Job Title (e.g., Data Scientist)"
              label="Target Job Title"
              {...register("jobTitle", { required: true })}
              error={errors.jobTitle}
              errorMessage="Job title is required."
            />
            <InputField
              type="tel"
              placeholder="Phone Number"
              label="Contact Phone"
              {...register("phoneNumber", { required: true })}
              error={errors.phoneNumber}
              errorMessage="Phone number is required."
            />
            <InputField
              type="email"
              placeholder="Email Address"
              label="Email Address"
              {...register("emailAddress", { required: true })}
              error={errors.emailAddress}
              errorMessage="Email is required."
            />
            <InputField
              type="text"
              placeholder="Company Name(e.g., Meta AI)"
              label="Company Name"
              {...register("company", { required: true })}
              error={errors.company}
              errorMessage="Company name is required."
            />

            <InputField
              type="text"
              placeholder="Address"
              label="Address"
              {...register("address", { required: true })}
              error={errors.address}
              errorMessage="Address is required."
            />
            <TextareaField
              placeholder="Work Experience"
              label="Work Experience"
              {...register("experience")}
              rows={5}
              className="mt-6"
            />
          </div>
        </SectionContainer>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl text-xl font-bold transition-all duration-300 transform
                     bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg
                     hover:from-blue-600 hover:to-purple-600 hover:scale-[1.005] hover:shadow-2xl hover:brightness-120
                     focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-purple-500
                     flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed
                     relative overflow-hidden group border border-blue-600 dark:border-purple-600"
        >
          {loading ? (
            <>
              <span className="animate-spin inline-block w-7 h-7 border-4 border-white border-t-transparent rounded-full" />
              Processing Data...
            </>
          ) : (
            <>
              <Code className="w-7 h-7 animate-pulse-fade-slow" />
              EXECUTE AI COVER LETTER GENERATION
            </>
          )}
          {/* Subtle light effect on hover */}
          {!loading && (
            <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-xl"></span>
          )}
        </button>

        {/* Error Message */}
        {errorMsg && (
          <div className="mt-6 p-4 bg-red-900 border border-red-700 text-red-300 rounded-lg flex items-center gap-3 font-medium shadow-lg animate-fade-in">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <span>ERROR: {errorMsg}. Data Integrity Compromised.</span>
          </div>
        )}

        {/* Output Viewer */}
        {output && (
          <div className="mt-8 p-6 bg-gray-900 rounded-lg shadow-inner border border-green-700 whitespace-pre-line animate-fade-in">
            <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              GENERATION COMPLETE: Output Log
            </h3>
            <OutputViewer forwardoutput={output} />
          </div>
        )}
      </form>
    </div>
  );
}

// Helper component for Input Fields with Label, using React.forwardRef
const InputField = forwardRef(
  (
    { type, placeholder, label, error, errorMessage, className, ...rest }: any,
    ref: any
  ) => (
    <div className={`w-full ${className || ""}`}>
      <label className="block text-gray-300 text-sm font-semibold mb-1">
        {label} {error && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest} // <-- add this line to spread register's handlers
        className={`w-full px-5 py-3 border border-gray-700 rounded-lg
                    bg-gray-800 text-gray-50
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500
                    transition-all duration-200 placeholder-gray-500 shadow-sm
                    ${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 ml-2">{errorMessage}</p>
      )}
    </div>
  )
);

InputField.displayName = "InputField"; // Add display name for debugging

// Helper component for Textarea Fields with Label, using React.forwardRef
const TextareaField = forwardRef(
  (
    { placeholder, label, error, errorMessage, rows, className, ...rest }: any,
    ref: any
  ) => (
    <div className={`w-full ${className || ""}`}>
      <label className="block text-gray-300 text-sm font-semibold mb-1">
        {label} {error && <span className="text-red-400">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        ref={ref}
        rows={rows}
        {...rest} // <-- same fix here
        className={`w-full px-5 py-3 border border-gray-700 rounded-lg
                    bg-gray-800 text-gray-50
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-500 dark:focus:border-purple-500
                    transition-all duration-200 placeholder-gray-500 shadow-sm
                    ${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 ml-2">{errorMessage}</p>
      )}
    </div>
  )
);

TextareaField.displayName = "TextareaField"; // Add display name for debugging

// Helper component for Section Containers
const SectionContainer = ({ title, icon, children }: any) => (
  <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-inner border border-gray-700 relative">
    {/* Decorative corner effects */}
    <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600 rounded-tl-lg"></span>
    <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-600 rounded-tr-lg"></span>
    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-600 rounded-bl-lg"></span>
    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 rounded-br-lg"></span>

    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 flex items-center gap-3 pb-3 relative">
      {icon} {title}
      <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-purple-500 animate-slide-in-divider"></span>
    </h3>
    {children}
  </div>
);
