/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import toast from "react-hot-toast"; // Assuming react-hot-toast is set up
import { CheckCircle, Crown, Star, Sparkles, Loader2, DollarSign } from 'lucide-react'; // Lucide icons for features and loading
import { plans } from "@/constants";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

 

  const handleBuy = async (planname: string, amount: number) => {
    setLoading(true);
    try {
      const res = await fetch("/api/payments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planname, amount, currency: 'usd' }),
      });

      const data = await res.json();
      if (data.invoiceUrl) {
        window.location.href = data.invoiceUrl; // Redirect to NowPayments checkout
      } else {
        toast.error(data.error || "Error creating payment. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Network error. Could not connect to payment service.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animated Grid & Particles */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[size:30px_30px] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] dark:bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] animate-pulse-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.1)] to-transparent animate-scanline"></div>
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
              boxShadow: '0 0 5px rgba(255,255,255,0.7)',
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg animate-fade-in-down-slow">
            <DollarSign className="inline-block w-12 h-12 mr-4 align-middle text-blue-300 dark:text-purple-300 animate-bounce-subtle" />
            Unlock Your Potential: Choose Your AI Plan
          </h1>
          <p className="mt-4 text-xl text-gray-300 animate-fade-in-up-slow">
            Select the perfect plan to revolutionize your resume and career journey.
          </p>
          <p className="text-md font-thin text-blue-300 dark:text-purple-300 mt-2 animate-fade-in-up-slow-delay">
            Secure your subscription with seamless crypto payments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900 bg-opacity-80 backdrop-blur-md p-8 rounded-3xl shadow-xl border
                flex flex-col justify-between transition-all duration-300 ease-in-out
                ${
                  plan.highlight
                    ? "border-blue-500 dark:border-purple-500 transform scale-105 shadow-[0_0_60px_rgba(59,130,246,0.4)] dark:shadow-[0_0_60px_rgba(168,85,247,0.4)] animate-pulse-border"
                    : "border-gray-700 hover:border-blue-600 dark:hover:border-purple-600 hover:scale-[1.02] hover:shadow-2xl"
                }
                `}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full rotate-12 shadow-md uppercase tracking-wide animate-pop-in">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 animate-slide-in-top-small">
                  {plan.name}
                </h2>
                <p className="text-base text-gray-400 mb-6 animate-fade-in-up-small">{plan.description}</p>
                <p className="text-6xl font-extrabold text-white mb-6 animate-scale-in">
                  {plan.price === 0 ? (
                    "Free"
                  ) : (
                    <>
                      ${plan.price}
                      <span className="text-lg font-normal text-gray-400">/month</span>
                    </>
                  )}
                </p>
                <ul className="mb-8 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 animate-fade-in-up-stagger" style={{ animationDelay: `${0.1 * i}s` }}>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-auto w-full py-4 rounded-xl text-xl font-bold transition-all duration-300 transform
                  ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.01] shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800"
                      : "bg-gray-700 hover:bg-blue-600 dark:hover:bg-purple-600 hover:scale-[1.01] shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
                  }
                  text-white flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group border border-transparent
                  ${plan.name === 'Free' ? 'border-blue-500 dark:border-purple-500' : ''}
                `}
                onClick={() => handleBuy(plan.name, plan.price)}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-6 h-6" />
                    Processing...
                  </>
                ) : (
                  <>
                    {plan.name === 'Free' && <Sparkles className="w-6 h-6 animate-pulse-fade-slow" />}
                    {plan.name === 'Pro' && <Crown className="w-6 h-6 animate-pulse-fade-slow" />}
                    {plan.name === 'Premium' && <Star className="w-6 h-6 animate-pulse-fade-slow" />}
                    {plan.buttonText}
                  </>
                )}
                {!loading && (
                  <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-xl"></span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
