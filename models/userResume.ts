/* eslint-disable @typescript-eslint/no-unused-vars */
// models/userResume.ts
import mongoose, { Schema, models, model } from "mongoose";

const UserResumeSchema = new Schema({
  fullName: String,
  jobTitle: String,
  experience: String,
  skills: String,
  generated: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserResume =
  models.UserResume || model("UserResume", UserResumeSchema);
