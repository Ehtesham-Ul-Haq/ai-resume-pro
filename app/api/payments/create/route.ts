/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";
import Payment from "@/models/Payment";
import { connectDB } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { planname, amount, currency } = await req.json();

    const res = await axios.post(
      "https://api.nowpayments.io/v1/invoice",
      {
        price_amount: amount,
        price_currency: currency,
        order_id: `${userId}-${Date.now()}`,
        order_description: "AI Resume Builder Subscription",
        ipn_callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payments/webhook`,
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-cancelled`,
      },
      {
        headers: {
          "x-api-key": process.env.NOWPAYMENTS_API_KEY!,
          "Content-Type": "application/json",
        },
      }
    );

    // Save payment in DB
    await Payment.create({
      userId,
      plan: planname,
      invoiceId: res.data.id,
      status: "pending",
      amount,
      currency,
    });

    return NextResponse.json({ invoiceUrl: res.data.invoice_url });
  } catch (error: any) {
    console.error("Payment creation error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to create invoice" }, { status: 500 });
  }
}
