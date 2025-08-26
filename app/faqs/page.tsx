/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { faqs } from "@/constants";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Background Animated Layers (Consistent Theme) --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        {/* Animated Circuit Board Grid */}
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%22%2338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        {/* Flowing Data Stream */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        {/* Central AI Core Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* --- Hero Section: FAQs Title --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <HelpCircle className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            Find quick answers to common questions about AI Resume Pro, our
            services, and how we can help you accelerate your career.
          </p>
        </div>

        {/* --- FAQ Accordion Section --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-10 relative">
            Your Queries, Our Answers
            <span className="block w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="space-y-6">
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
            })}{" "}
          </div>
        </div>

        {/* --- Final Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            If you couldn't find what you were looking for, don't hesitate to
            reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <MessageSquare className="w-7 h-7 mr-3 text-blue-600 animate-pulse-fade" />
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper component for each Accordion FAQ Item
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
      className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300
                 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-600 dark:hover:border-purple-600
                 animate-fade-in-stagger"
      style={{ animationDelay: delay, animationFillMode: "backwards" }}
    >
      <button
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-100 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-3 drop-shadow-md">
          {icon} {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-blue-400 dark:text-purple-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-700 text-gray-300 leading-relaxed animate-accordion-open">
          {answer}
        </div>
      )}
    </div>
  );
};
