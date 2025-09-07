/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import Payment from "@/models/Payment";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { payment_status, order_id, invoice_id } = body;

    const payment = await Payment.findOne({ invoiceId: invoice_id });
    if (!payment) return NextResponse.json({ message: "Payment not found" }, { status: 404 });

    payment.status = payment_status;
    await payment.save();

    if (payment_status === "finished") {
      // TODO: Activate subscription for user
      console.log(`✅ Subscription activated for ${payment.userId}`);
    }

    return NextResponse.json({ message: "Webhook processed" });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
