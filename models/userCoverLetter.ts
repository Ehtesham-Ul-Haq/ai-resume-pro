// models/userCoverLetter.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

const UserCoverLetterSchema = new Schema({
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
  company: {
    type: String,
    requirec: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  experience: {
    type: String, // Consider changing to [String] or a more detailed sub-schema if needed
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
export const UserCoverLetter =
  models.UserCoverLetter || model("UserCoverLetter", UserCoverLetterSchema);
