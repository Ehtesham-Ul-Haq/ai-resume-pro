'use client'; // Essential for client-side interactivity and animations

import React from 'react';
import { FileText, User, Lock, DollarSign, PenTool, Gavel, Mail, Link2 } from 'lucide-react';
import { companyName } from '@/constants';

export default function TermsOfServicePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers (Consistent Theme) --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        {/* Animated Circuit Board Grid */}
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        {/* Flowing Data Stream */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        {/* Central AI Core Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
        {/* Abstract Gavel & Scales */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <Gavel className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow" />
            <Link2 className="absolute w-48 h-48 text-green-400 dark:text-indigo-400 animate-float-pulse-alt" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* --- Hero Section: Terms of Service Title --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <FileText className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            This agreement governs your use of the {companyName} service. By using our platform, you agree to these terms.
          </p>
          <p className="mt-4 text-sm text-gray-400 animate-fade-in-slow-delay">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* --- Policy Sections --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-10 relative">
            Our Agreement
            <span className="block w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="space-y-8">
            <PolicySection
              icon={<FileText className="w-6 h-6 text-blue-400" />}
              title="1. Acceptance of Terms"
              content={
                <p>
                  By accessing or using {companyName}, you agree to be bound by these Terms. If you don&#39;t agree with any part of them, you may not use our service. We may update these terms occasionally, and your continued use means you accept any changes.
                </p>
              }
              delay="0s"
            />
            <PolicySection
              icon={<User className="w-6 h-6 text-purple-400" />}
              title="2. Your Account"
              content={
                <>
                  <p>You must be at least 18 years old to use our service. You are responsible for keeping your account information and password secure. Don&#39;t share your login details. Any activity on your account is your responsibility.</p>
                </>
              }
              delay="0.2s"
            />
            <PolicySection
              icon={<PenTool className="w-6 h-6 text-green-400" />}
              title="3. User Content"
              content={
                <>
                  <p>You own the resume content you create. By providing it, you give us a license to use, store, and process it solely for the purpose of generating your resume and improving our AI. We will not sell or misuse your content. You are responsible for ensuring your content is accurate and does not violate any laws or third-party rights.</p>
                </>
              }
              delay="0.4s"
            />
            <PolicySection
              icon={<Gavel className="w-6 h-6 text-yellow-400" />}
              title="4. Intellectual Property"
              content={
                <>
                  <p>The {companyName} platform, its design, logos, and all software are owned by us. You are granted a limited, non-exclusive right to use the service for your personal, non-commercial use. You may not copy, modify, or distribute any part of our service without our permission.</p>
                </>
              }
              delay="0.6s"
            />
            <PolicySection
              icon={<DollarSign className="w-6 h-6 text-red-400" />}
              title="5. Paid Services & Refunds"
              content={
                <>
                  <p>Certain features require a subscription. Prices and payment terms are listed on our pricing page. Subscriptions are billed on a recurring basis. We reserve the right to change our pricing. All payments are final, and we do not offer refunds, except as required by law.</p>
                </>
              }
              delay="0.8s"
            />
            <PolicySection
              icon={<Lock className="w-6 h-6 text-indigo-400" />}
              title="6. Disclaimers & Liability"
              content={
                <>
                  <p>{companyName} is provided &#34;as is,&#34; without any warranties. We don&#39;t guarantee that the service will always be available or error-free. We are not liable for any damages that may arise from your use of the service. Your use of our platform is at your own risk.</p>
                </>
              }
              delay="1s"
            />
          </div>
        </div>

        {/* --- Contact Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            If you need to better understand this agreement, please don&#39;t hesitate to reach out.
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
