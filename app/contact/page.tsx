'use client'; // Essential for client-side interactivity and animations

import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, GitFork, Network, Globe, Send, Code } from 'lucide-react'; // Added Code to imports
import { companyEmail, companyPhone, whatsAppNumber, companyAddress, officeHours } from '@/constants';

export default function ContactPage() {
 
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
        {/* Abstract Network Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <Network className="w-96 h-96 text-blue-400 dark:text-purple-400 animate-spin-slow-reverse" />
            <GitFork className="absolute w-48 h-48 text-green-400 dark:text-indigo-400 animate-float-pulse-alt" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* --- Hero Section: Connect with AI Resume Pro --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up">
          <Send className="w-20 h-20 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
            Connect with AI Resume Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            Have questions, feedback, or need support? Our dedicated team is here to assist you. Reach out through our intelligent communication channels.
          </p>
        </div>

        {/* --- Direct Communication Channels --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay">
          <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-12 relative">
            Direct Channels
            <span className="block w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Email Option */}
            <ContactCard
              icon={<Mail className="w-12 h-12 text-blue-400" />}
              title="Email Support"
              description="Get detailed assistance and inquiries answered promptly."
              link={`mailto:${companyEmail}`}
              buttonText="Send an Email"
              delay="0s"
            />
            {/* WhatsApp Option */}
            <ContactCard
              icon={<MessageCircle className="w-12 h-12 text-green-400" />}
              title="WhatsApp Chat"
              description="For quick queries and real-time assistance."
              link={`https://wa.me/${whatsAppNumber}`}
              buttonText="Chat on WhatsApp"
              delay="0.2s"
            />
          </div>
        </div>

        {/* --- Other Contact Information --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 text-center mb-12 relative">
            Additional Information
            <span className="block w-28 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Phone Number */}
            <InfoCard
              icon={<Phone className="w-10 h-10 text-indigo-400" />}
              title="Phone Support"
              value={companyPhone}
              link={`tel:${companyPhone.replace(/\s|\(|\)|\-/g, '')}`} // Clean for tel link
              delay="0s"
            />
            {/* Address */}
            <InfoCard
              icon={<MapPin className="w-10 h-10 text-red-400" />}
              title="Our Location"
              value={companyAddress}
              delay="0.1s"
            />
            {/* Office Hours */}
            <InfoCard
              icon={<Clock className="w-10 h-10 text-yellow-400" />}
              title="Operating Hours"
              value={officeHours}
              delay="0.2s"
            />
            {/* Global Reach - Conceptual */}
            <InfoCard
              icon={<Globe className="w-10 h-10 text-cyan-400 animate-spin-slow" />}
              title="Global Network"
              value="Serving job seekers worldwide"
              delay="0.3s"
            />
          </div>
        </div>

        {/* --- Final Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready for AI-Powered Success?
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            If your query is about resume generation, launch our AI console now!
          </p>
          <a
            href="/generate/resume"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <Code className="w-7 h-7 mr-3 text-blue-600 animate-pulse-fade" />
            Launch AI Resume Console
          </a>
        </div>

      </div>

    </div>
  );
}

// Helper component for direct contact cards (Email/WhatsApp)
const ContactCard = ({ icon, title, description, link, buttonText, delay }: { icon: React.ReactNode, title: string, description: string, link: string, buttonText: string, delay: string }) => (
  <a
    href={link}
    target={link.startsWith('mailto:') ? "_self" : "_blank"} // Open WhatsApp in new tab, mailto in same
    rel={link.startsWith('mailto:') ? "" : "noopener noreferrer"}
    className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center
               transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500 dark:hover:border-purple-500
               relative overflow-hidden animate-fade-in-stagger"
    style={{ animationDelay: delay, animationFillMode: 'backwards' }}
  >
    <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-100 mb-2 drop-shadow-md">{title}</h3>
    <p className="text-gray-400 text-md mb-6">{description}</p>
    <span className="mt-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full
                     shadow-md group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
      {buttonText}
    </span>
  </a>
);

// Helper component for other information cards
const InfoCard = ({ icon, title, value, link, delay }: { icon: React.ReactNode, title: string, value: string, link?: string, delay: string }) => (
  <div
    className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center
               transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-green-500 dark:hover:border-indigo-500
               relative overflow-hidden animate-fade-in-stagger"
    style={{ animationDelay: delay, animationFillMode: 'backwards' }}
  >
    <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-2 drop-shadow-md">{title}</h3>
    {link ? (
      <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors text-md">
        {value}
      </a>
    ) : (
      <p className="text-gray-400 text-md">{value}</p>
    )}
  </div>
);
