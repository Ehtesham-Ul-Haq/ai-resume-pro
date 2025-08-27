'use client';

import React from 'react';
import { RefreshCcw, DollarSign, Clock, FileText, XCircle, Mail } from 'lucide-react';

export default function RefundPolicyPage() {
  const companyEmail = "support@airesumepro.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        {/* Animated Circuit Board Grid */}
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        {/* Flowing Data Stream */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        {/* Central AI Core Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        {/* Abstract Refund Icons */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <RefreshCcw className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
            <DollarSign className="absolute w-48 h-48 text-green-400 dark:text-indigo-400 animate-float-pulse-alt" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* --- Hero Section: Refund Policy Title --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <DollarSign className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
            Refund Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            This policy outlines the conditions under which you may be eligible for a refund.
          </p>
          <p className="mt-4 text-sm text-gray-400 animate-fade-in-slow-delay">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* --- Policy Sections --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-10 relative">
            Our Refund Guidelines
            <span className="block w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="space-y-8">
            <PolicySection
              icon={<Clock className="w-6 h-6 text-blue-400" />}
              title="1. 7-Day Refund Period"
              content={
                <p>
                  We offer a **7-day money-back guarantee** on all new subscription purchases. If you are not satisfied with our service for any reason, you can request a full refund within 7 days of your initial payment.
                </p>
              }
              delay="0s"
            />
            <PolicySection
              icon={<XCircle className="w-6 h-6 text-purple-400" />}
              title="2. Non-Refundable Situations"
              content={
                <>
                  <p>Refunds are not available in the following situations:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**After the 7-day period:** Once the 7-day refund window has passed, all payments are final.</li>
                    <li>**Subscription Renewals:** Refunds are not provided for recurring subscription renewals. You can cancel your subscription at any time to prevent future charges.</li>
                    <li>**Account Deletions:** Deleting your account does not automatically trigger a refund.</li>
                    <li>**Violation of Terms:** Refunds will not be issued for accounts that have been suspended or terminated due to a violation of our <a href="/tos" className="text-blue-400 hover:text-blue-200 underline">Terms of Service</a>.</li>
                  </ul>
                </>
              }
              delay="0.2s"
            />
            <PolicySection
              icon={<FileText className="w-6 h-6 text-green-400" />}
              title="3. How to Request a Refund"
              content={
                <>
                  <p>To request a refund within the 7-day period, please send an email to {companyEmail} with the following information:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>Your full name and email address associated with your account.</li>
                    <li>The date of your purchase.</li>
                    <li>A brief explanation of why you are requesting a refund.</li>
                  </ul>
                  <p className="mt-2">Our support team will process your request and, if approved, the refund will be issued to your original payment method. Please allow 5-10 business days for the refund to appear on your statement.</p>
                </>
              }
              delay="0.4s"
            />
          </div>
        </div>

        {/* --- Contact Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            If anything in this policy is unclear, please contact our support team for clarification.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <Mail className="w-7 h-7 mr-3 text-blue-600 animate-pulse-fade" />
            Contact Our Support Team
          </a>
        </div>

      </div>
    </div>
  );
}

// Helper component for each Policy Section
const PolicySection = ({ icon, title, content, delay }: { icon: React.ReactNode, title: string, content: React.ReactNode, delay: string }) => (
  <div
    className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300
                 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-600 dark:hover:border-purple-600
                 relative overflow-hidden group animate-fade-in-stagger"
    style={{ animationDelay: delay, animationFillMode: 'backwards' }}
  >
    <h3 className="flex items-center gap-3 text-xl font-bold text-gray-100 mb-4 pb-2 border-b border-gray-700 group-hover:border-blue-500 transition-colors drop-shadow-md">
      {icon} {title}
    </h3>
    <div className="text-gray-300 leading-relaxed text-md space-y-3">
      {content}
    </div>
    {/* Subtle corner highlight on hover */}
    <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-purple-500 rounded-tr-xl transition-colors duration-300"></span>
  </div>
);
