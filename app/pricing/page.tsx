"use client";

import { useState } from "react";

// import Link from "next/link";

export default function PricingPage() {
      const [loading, setLoading] = useState(false);


  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        "2 Resume Generations",
        "Basic Templates",
        "Watermark Included",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: 9,
      features: [
        "20 Resume Generations",
        "PDF + DOCX Export",
        "Custom Themes",
        "No Watermark",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: 19,
      features: ["Unlimited Resumes", "Advanced AI Tuning", "Priority Support"],
      highlight: false,
    },
  ];

  const handleBuy = async (planname: string , amount: number) => {
    setLoading(true);
    const res = await fetch("/api/payments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planname, amount, currency: 'usd' }),
    });

    const data = await res.json();
    if (data.invoiceUrl) {
      window.location.href = data.invoiceUrl; // Redirect to NowPayments checkout
    } else {
      alert("Error creating payment");
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-4">
      <h1 className="text-4xl font-bold text-center">Choose Your Plan</h1>
      <h6 className="text-sm font-thin text-center mb-10">Buy with Crypto</h6>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all bg-white dark:bg-gray-800 flex flex-col justify-between ${
              plan.highlight ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">
                {plan.price === 0 ? "Free" : `$${plan.price}/mo`}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => handleBuy(plan.name, plan.price)}
        disabled={loading}
            >
              {plan.price === 0 ? "Get Started" : "Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
