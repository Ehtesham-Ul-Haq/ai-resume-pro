'use client'; 

import React from 'react';
import { Shield, User, Database, Share2, Settings, Lock, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {

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
        {/* Abstract Security Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <Lock className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
            <Shield className="absolute w-48 h-48 text-green-400 dark:text-indigo-400 animate-float-pulse-alt" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* --- Hero Section: Privacy Policy Title --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <Shield className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
            Your Privacy, Our Priority
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            We&#39;re committed to protecting your personal information. This policy explains what data we collect, why, and how we keep it safe.
          </p>
          <p className="mt-4 text-sm text-gray-400 animate-fade-in-slow-delay">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* --- Policy Sections --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-10 relative">
            Our Commitment to You
            <span className="block w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="space-y-8">
            <PolicySection
              icon={<User className="w-6 h-6 text-blue-400" />}
              title="1. What Information Do We Collect?"
              content={
                <>
                  <p>We collect information to help you build awesome resumes. This generally includes:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**Account Data:** Your email, password (encrypted), and plan details when you sign up.</li>
                    <li>**Resume Content:** All the text you provide for your resume (e.g., name, experience, education, skills).</li>
                    <li>**Usage Data:** How you interact with our service, like features used, page visits, and time spent. This helps us improve.</li>
                    <li>**Technical Data:** Your IP address, browser type, device info – standard stuff for security and analytics.</li>
                  </ul>
                  <p className="mt-2">We *do not* collect sensitive financial data directly. Payments are handled by secure third-party processors.</p>
                </>
              }
              delay="0s"
            />
            <PolicySection
              icon={<Database className="w-6 h-6 text-purple-400" />}
              title="2. How Do We Use Your Information?"
              content={
                <>
                  <p>Your data powers AI Resume Pro, allowing us to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**Generate & Optimize Resumes:** The core service. Your resume content is processed by AI to create your personalized resume.</li>
                    <li>**Improve Our AI:** Anonymized and aggregated data helps us train our AI to be even better and more accurate for future users.</li>
                    <li>**Provide Customer Support:** If you contact us, we use your account info to help you efficiently.</li>
                    <li>**Personalize Your Experience:** To show you relevant templates or features.</li>
                    <li>**Process Payments:** For paid plans, securely handled by partners.</li>
                    <li>**Communicate with You:** About service updates, security alerts, or promotional offers (you can opt-out).</li>
                  </ul>
                </>
              }
              delay="0.2s"
            />
            <PolicySection
              icon={<Share2 className="w-6 h-6 text-green-400" />}
              title="3. Do We Share Your Information?"
              content={
                <>
                  <p>Your trust is paramount. We **do not sell your personal data** to third parties. We may share data in limited circumstances:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**Service Providers:** With partners who help us run the service (e.g., payment processors, hosting, analytics). They are bound by strict confidentiality.</li>
                    <li>**Legal Compliance:** If required by law, court order, or governmental request.</li>
                    <li>**Business Transfers:** In case of a merger, acquisition, or asset sale (your data remains protected).</li>
                    <li>**With Your Consent:** If you explicitly give us permission to share data for a specific purpose.</li>
                  </ul>
                  <p className="mt-2">Your resume content remains private and is only shared with others *by your direct action* (e.g., downloading and sending it yourself).</p>
                </>
              }
              delay="0.4s"
            />
            <PolicySection
              icon={<Settings className="w-6 h-6 text-yellow-400" />}
              title="4. Your Choices & Rights"
              content={
                <>
                  <p>You have control over your data:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**Access & Correction:** You can review and update your account and resume data anytime through your dashboard.</li>
                    <li>**Deletion:** You can request to delete your account and all associated data.</li>
                    <li>**Opt-Out:** You can unsubscribe from marketing emails.</li>
                    <li>**Cookies:** You can manage cookie preferences in your browser settings.</li>
                  </ul>
                  <p className="mt-2">Please contact us if you wish to exercise any of these rights.</p>
                </>
              }
              delay="0.6s"
            />
            <PolicySection
              icon={<Lock className="w-6 h-6 text-red-400" />}
              title="5. Data Security"
              content={
                <>
                  <p>We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                    <li>**Encryption:** Data is encrypted both in transit and at rest.</li>
                    <li>**Access Controls:** Strict limits on who can access your information.</li>
                    <li>**Regular Audits:** Ongoing security reviews and updates.</li>
                  </ul>
                  <p className="mt-2">While no system is 100% foolproof, we continuously strive to keep your data as safe as possible.</p>
                </>
              }
              delay="0.8s"
            />
            <PolicySection
              icon={<FileText className="w-6 h-6 text-indigo-400" />}
              title="6. Changes to This Policy"
              content={
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We&#39;ll notify you of any significant changes by posting the new policy on our website and updating the &#34;Last Updated&#34; date. We encourage you to review it periodically.
                </p>
              }
              delay="1s"
            />
          </div>
        </div>

        {/* --- Contact Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            If anything in this policy is unclear or you have specific concerns, please don&#39;t hesitate to reach out.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <Mail className="w-7 h-7 mr-3 text-blue-600 animate-pulse-fade" />
            Contact Our Privacy Team
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
