/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"; // Essential for client-side interactivity and animations

import React from "react";
import {
  Lightbulb,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Users,
  Star,
  BrainCircuit,
  LineChart,
  Code,
  Atom,
  Zap,
  Globe,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        {/* Animated Circuit Board Grid - More intricate */}
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpath%20id%3D%22gridPath%22%20d%3D%22M200%200L400%20100L400%20300L200%20400L0%20300L0%20100Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20stroke-width%3D%220.5%22%3E%3Cuse%20xlink%3D%22%23gridPath%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C0)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(0%2C200)%22%20stroke%3D%22%252338Bdf8%22%20opacity%3D%220.08%22%2F%3E%3Cuse%20xlink%3D%22%23gridPath%22%20transform%3D%22translate(200%2C200)%22%20stroke%3D%22%25238b5cf6%22%20opacity%3D%220.08%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-complex-grid"></div>
        {/* Flowing Data Stream - Abstract lines for dynamic movement */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        {/* Central AI Core Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-28">
        {" "}
        {/* Increased spacing for dramatic effect */}
        {/* --- Hero Section: The Genesis of AI Resume Pro --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up relative overflow-hidden">
          {/* Abstract AI Brain/Network Visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 animate-subtle-spin">
            <BrainCircuit className="w-48 h-48 text-blue-500 dark:text-purple-500" />
            <span className="absolute w-24 h-24 border-2 border-blue-400 rounded-full animate-ping-slow"></span>
          </div>

          <div className="relative z-10">
            <Rocket className="w-24 h-24 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
          
AI Resume Pro: Shaping Your Career Journey            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
             In today’s complex job market, AI Resume Pro is your smart career guide. We don’t just create resumes — we design personalized paths that use advanced AI to turn your story into a powerful professional advantage.
            </p>
            <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-slow-delay">
             We began with one mission: to give every ambitious professional the data-driven edge to land their dream role
            </p>
          </div>
        </div>
        {/* --- Section: Our Quantum Leap - Who We Are with Image --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-16 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-float-pulse-alt"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tl from-green-500 to-indigo-500 rounded-full opacity-20 blur-xl animate-float-pulse"></div>

          <div className="md:order-1 order-2 text-lg text-gray-300 leading-relaxed space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 relative">
              Our Quantum Leap
              <span className="block w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-4"></span>
            </h2>
            <p>
              Founded by a team of pioneering AI experts and seasoned HR strategists, AI Resume Pro was built on a simple belief: the traditional resume is outdated. We recognized the complex balance between human recruiters and strict Applicant Tracking Systems—and set out to bridge the gap.
            </p>
            <p>
              Our answer was to design an AI that doesn’t just process data, but truly understands potential—transforming raw experience into compelling, optimized narratives. We are the architects of your digital first impression.
            </p>
            <a
              href="/team"
              className="inline-flex items-center mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
              Meet Our Innovators <Users className="ml-3 w-5 h-5" />
            </a>
          </div>
          <div className="md:order-2 order-1 flex justify-center items-center relative">
            <img
              src="https://madgicaltechdom.com/wp-content/smush-webp/2024/04/How-AI-Helps-Filter-Resumes-According-to-Job-Descriptions.jpeg.webp"
              alt="AI Resume Pro Founding Team"
              className="rounded-xl shadow-lg border border-gray-600 transform hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://madgicaltechdom.com/wp-content/smush-webp/2024/04/How-AI-Helps-Filter-Resumes-According-to-Job-Descriptions.jpeg.webp";
              }}
            />
            <Code className="absolute w-24 h-24 text-gray-700 opacity-40 animate-spin-slow-reverse -z-10" />
          </div>
        </div>
        {/* --- Section: Our Core Algorithms - Values --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up-delay-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 text-center mb-16 relative">
            Our Core Algorithms: Values in Action
            <span className="block w-28 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard
              icon={<Lightbulb className="w-12 h-12 text-blue-400" />}
              title="Perpetual Innovation"
              description="We are ceaselessly evolving, pushing the computational frontiers of AI to predict and shape career success."
              delay="0s"
            />
            <ValueCard
              icon={<ShieldCheck className="w-12 h-12 text-purple-400" />}
              title="Absolute Integrity"
              description="Our algorithms prioritize fairness, transparency, and data security, ensuring ethical empowerment for every user."
              delay="0.15s"
            />
            <ValueCard
              icon={<Users className="w-12 h-12 text-green-400" />}
              title="Empower All"
              description="Crafting accessible, powerful tools that level the playing field, making elite career guidance available to all."
              delay="0.3s"
            />
          </div>
        </div>
        {/* --- Section: The Impact Matrix - How We Make a Difference with Data Visualization --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 md:p-16 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay-3 relative">
          <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse-core-light"></div>

          <div className="md:order-1 order-2 text-lg text-gray-300 leading-relaxed space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 relative">
              The Impact Matrix
              <span className="block w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-4"></span>
            </h2>
            <p>
              We translate raw data into your career's competitive edge. Our AI
              doesn't just analyze your input; it dynamically cross-references
              it with millions of successful profiles, job market trends, and
              employer preferences.
            </p>
            <p>
              This process generates a hyper-optimized resume that speaks
              directly to the needs of modern hiring. The result? A significant
              reduction in time spent applying and a dramatic increase in
              interview invitations.
            </p>
            <a
              href="/success-stories"
              className="inline-flex items-center mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors shadow-md"
            >
              View Success Stories <Star className="ml-3 w-5 h-5" />
            </a>
          </div>
          <div className="md:order-2 order-1 flex justify-center items-center relative min-h-[300px]">
            {/* Abstract Data Visualization */}
            <LineChart className="w-full h-full text-blue-400 dark:text-purple-400 absolute opacity-30 animate-chart-flow" />
            <span className="absolute w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-data-node">
              <Zap className="w-12 h-12 text-white" />
            </span>
            <Atom className="absolute top-1/4 left-1/4 w-16 h-16 text-indigo-400 animate-float-pulse-alt" />
            <TrendingUp className="absolute bottom-1/4 right-1/4 w-16 h-16 text-yellow-400 animate-float-pulse" />
          </div>
        </div>
        {/* --- Call to Action --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Initiate Your Career Transformation.
          </h2>
          <p className="text-xl text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto">
            Leverage the precision of AI to forge a resume that truly reflects
            your potential and propels you forward.
          </p>
          <a
            href="/generate/resume"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform
                       bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800
                       relative overflow-hidden group border border-blue-500"
          >
            <Globe className="w-7 h-7 mr-3 text-blue-600 animate-spin-fast" />
            Access the AI Console Now
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper component for Value Cards with staggered animation
const ValueCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) => (
  <div
    className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl
               flex flex-col items-center justify-start relative overflow-hidden animate-fade-in-stagger"
    style={{ animationDelay: delay, animationFillMode: "backwards" }}
  >
    {/* Decorative corner glow */}
    <span className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-xl animate-border-pulse-slow"></span>

    <div className="flex justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-100 mb-3 drop-shadow-md">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed text-center text-md max-w-prose">
      {description}
    </p>
  </div>
);
