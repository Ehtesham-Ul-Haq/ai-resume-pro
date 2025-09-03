/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { faqs } from "@/constants";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-10 px-3 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Background Animated Layers --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg...')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* --- Hero Section --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <HelpCircle className="w-14 h-14 sm:w-20 sm:h-20 mx-auto text-blue-400 dark:text-purple-400 mb-4 sm:mb-6 animate-bounce-icon" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-3 sm:mb-4 animate-typewriter-effect">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            Find quick answers to common questions about AI Resume Pro, our
            services, and how we can help you accelerate your career.
          </p>
        </div>

        {/* --- FAQ Accordion --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 text-center mb-6 sm:mb-10 relative">
            Your Queries, Our Answers
            <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4"></span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  icon={<Icon className={faq.iconClass} />}
                  delay={`${0.1 * index}s`}
                />
              );
            })}
          </div>
        </div>

        {/* --- CTA Section --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 dark:text-purple-100 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            If you couldn't find what you were looking for, don't hesitate to
            reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 text-blue-600 animate-pulse-fade" />
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
}

// Accordion Item
const AccordionItem = ({
  question,
  answer,
  icon,
  delay,
}: {
  question: string;
  answer: string;
  icon: React.ReactNode;
  delay: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300
                 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-600 dark:hover:border-purple-600
                 animate-fade-in-stagger"
      style={{ animationDelay: delay, animationFillMode: "backwards" }}
    >
      <button
        className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-gray-100 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2 sm:gap-3 drop-shadow-md">
          {icon} {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-400 dark:text-purple-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700 text-gray-300 text-sm sm:text-base leading-relaxed animate-accordion-open">
          {answer}
        </div>
      )}
    </div>
  );
};
