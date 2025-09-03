/* eslint-disable @next/next/no-img-element */
 
"use client";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50 py-12 px-3 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* --- Dynamic Background Layers --- */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-repeat bg-[size:400px_400px] bg-[url('data:image/svg+xml,%3Csvg...%3E')] animate-complex-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-data-flow-one"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-indigo-500/10 animate-data-flow-two"></div>
        <div className="absolute top-1/2 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-core"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-28">
        {/* --- Hero Section --- */}
        <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-4 sm:p-6 md:p-12 lg:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 animate-subtle-spin">
            <BrainCircuit className="w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 text-blue-500 dark:text-purple-500" />
          </div>

          <div className="relative z-10">
            <Rocket className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto text-blue-400 dark:text-purple-400 mb-6 animate-bounce-icon" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 animate-typewriter-effect">
              AI Resume Pro{" "}
              <span className="block text-xl sm:text-2xl md:text-5xl">
                Shaping Your Career Journey
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
              In today’s complex job market, AI Resume Pro is your smart career
              guide. We don’t just create resumes — we design personalized paths
              that use advanced AI to turn your story into a powerful advantage.
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed animate-fade-in-slow-delay">
              We began with one mission: to give every ambitious professional
              the data-driven edge to land their dream role.
            </p>
          </div>
        </div>

        {/* --- Our Quantum Leap --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-4 sm:p-6 md:p-12 lg:p-16 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay relative">
          <div className="md:order-1 order-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 sm:mb-6 relative">
              Our Quantum Leap
              <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 sm:mt-4"></span>
            </h2>
            <p>
              Founded by AI experts and HR strategists, AI Resume Pro was built
              on the belief that the traditional resume is outdated. We bridge
              the gap between human recruiters and Applicant Tracking Systems.
            </p>
            <p>
              Our AI transforms raw experience into compelling, optimized
              narratives — becoming the architect of your digital first
              impression.
            </p>
            <a
              href="/team"
              className="inline-flex items-center mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
              Meet Our Innovators <Users className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
          <div className="md:order-2 order-1 flex justify-center items-center relative">
            <img
              src="https://madgicaltechdom.com/wp-content/smush-webp/2024/04/How-AI-Helps-Filter-Resumes-According-to-Job-Descriptions.jpeg.webp"
              alt="AI Resume Pro Team"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg border border-gray-600 transform hover:scale-[1.02] transition-transform duration-300"
            />
            <Code className="absolute w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-gray-700 opacity-40 animate-spin-slow-reverse -z-10" />
          </div>
        </div>

        {/* --- Core Algorithms --- */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-4 sm:p-6 md:p-12 lg:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-2xl animate-fade-in-slide-up-delay-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 text-center mb-8 sm:mb-12 md:mb-16">
            Our Core Algorithms: Values in Action
            <span className="block w-20 sm:w-28 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto mt-3 sm:mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <ValueCard
              icon={<Lightbulb className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400" />}
              title="Perpetual Innovation"
              description="We evolve constantly, pushing AI frontiers to shape career success."
              delay="0s"
            />
            <ValueCard
              icon={<ShieldCheck className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400" />}
              title="Absolute Integrity"
              description="Fairness, transparency, and security — ethical empowerment for all."
              delay="0.15s"
            />
            <ValueCard
              icon={<Users className="w-10 sm:w-12 h-10 sm:h-12 text-green-400" />}
              title="Empower All"
              description="We level the playing field, making elite career tools accessible."
              delay="0.3s"
            />
          </div>
        </div>

        {/* --- Impact Matrix --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-gray-900 bg-opacity-70 backdrop-blur-lg p-4 sm:p-6 md:p-12 lg:p-16 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in-slide-up-delay-3 relative">
          <div className="md:order-1 order-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 sm:mb-6 relative">
              The Impact Matrix
              <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 sm:mt-4"></span>
            </h2>
            <p>
              We translate raw data into your competitive edge by cross-referencing
              with millions of profiles, trends, and employer preferences.
            </p>
            <p>
              This generates hyper-optimized resumes, reducing application time
              and boosting interview chances.
            </p>
            <a
              href="/success-stories"
              className="inline-flex items-center mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-purple-700 transition-colors shadow-md"
            >
              View Success Stories <Star className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
          <div className="md:order-2 order-1 flex justify-center items-center relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            <LineChart className="w-full h-full text-blue-400 dark:text-purple-400 absolute opacity-30 animate-chart-flow" />
            <span className="absolute w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-green-500 rounded-full flex items-center justify-center animate-data-node">
              <Zap className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
            </span>
            <Atom className="absolute top-1/4 left-1/4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-indigo-400 animate-float-pulse-alt" />
            <TrendingUp className="absolute bottom-1/4 right-1/4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-yellow-400 animate-float-pulse" />
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-blue-600 dark:border-purple-600 animate-fade-in-slide-up-delay-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
            Initiate Your Career Transformation.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 dark:text-purple-100 mb-6 sm:mb-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Leverage the precision of AI to forge a resume that truly reflects
            your potential and propels you forward.
          </p>
          <a
            href="/generate/resume"
            className="inline-flex items-center justify-center px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform bg-white text-blue-700 hover:bg-gray-100 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 relative overflow-hidden group border border-blue-500"
          >
            <Globe className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mr-2 sm:mr-3 text-blue-600 animate-spin-fast" />
            Access the AI Console Now
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Helper Component ---
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
    className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col items-center text-center relative overflow-hidden animate-fade-in-stagger"
    style={{ animationDelay: delay, animationFillMode: "backwards" }}
  >
    <span className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-xl animate-border-pulse-slow"></span>
    <div className="flex justify-center mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-prose">
      {description}
    </p>
  </div>
);
