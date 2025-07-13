// models/userResume.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

const UserResumeSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  linkedInProfileURL: {
    type: String,
    required: false,
  },
  portfolioURL: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },
  workExperience: {
    type: String, // Consider changing to [String] or a more detailed sub-schema if needed
    required: false,
  },
  education: {
    type: String, // Same note as workExperience
    required: false,
  },
  skills: {
    technicalSkills: {
      type: String,
      required: false,
    },
    softSkills: {
      type: String,
      required: false,
    },
    languages: {
      type: String,
      required: false,
    },
  },
  projects: {
    type: [String], // Or define an array of objects for more structured data
    required: false,
  },
  generated: {
    type: String, // Stores AI-enhanced generated content
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  publicId: {
    type: String,
    unique: true,
    sparse: true, // so only shared resumes require uniqueness
  },
});

// Exporting the model
export const UserResume =
  models.UserResume || model("UserResume", UserResumeSchema);
