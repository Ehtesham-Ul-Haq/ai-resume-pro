import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, required: true},
  invoiceId: { type: String, required: true },
  status: { type: String, default: "pending" }, // pending, finished, failed
  amount: Number,
  currency: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
