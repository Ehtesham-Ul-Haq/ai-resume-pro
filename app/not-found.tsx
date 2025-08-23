"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function NotFound() {
  const [typedText, setTypedText] = useState("");
  const [isClient, setIsClient] = useState(false);
  const fullText = "Initiating re-routing sequence... Please wait.";

  useEffect(() => {
    setIsClient(true);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        // setTypedText((prev) => prev + fullText.charAt(i));
        setTypedText(fullText.slice(0, i + 1));

        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed can be changed later

    return () => clearInterval(typingInterval);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-50 p-6 font-mono relative overflow-hidden">
      {/* Background Circuit Grid & Scanlines */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Subtle glowing grid lines */}
        <div className="absolute inset-0 bg-[size:30px_30px] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] dark:bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] animate-pulse-grid"></div>
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.1)] to-transparent animate-scanline"></div>
      </div>

      {/* Main Content Console - Central, with deeper shadows and glitch effects */}
      <div
        className="relative z-10 text-center bg-gray-900 bg-opacity-80 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-blue-700 dark:border-purple-700 shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:shadow-[0_0_50px_rgba(168,85,247,0.3)]
                  transform transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]
                  motion-safe:animate-fade-in-scale"
      >
        {/* Error Icon */}
        <AlertTriangle className="w-28 h-28 mx-auto text-red-500 mb-6 animate-jiggle-icon" />

        {/* 404 Heading with more aggressive glitch effect */}
        <h1
          className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg
                       [text-shadow:_0_0_15px_rgba(59,130,246,0.7)] dark:[text-shadow:_0_0_15px_rgba(168,85,247,0.7)]
                       animate-glitch-text"
        >
          404
        </h1>

        {/* System Message */}
        <p className="mt-4 text-3xl md:text-4xl font-bold text-gray-100 animate-slide-in-bottom">
          SYSTEM ERROR: Route Not Found
        </p>

        {/* Typing Animation for secondary message */}
        <p className="mt-6 text-lg md:text-xl text-blue-300 dark:text-purple-300 max-w-lg mx-auto leading-relaxed h-8 overflow-hidden">
          {typedText}
          <span className="inline-block w-2 h-6 bg-blue-300 dark:bg-purple-300 animate-blink-caret ml-1"></span>
        </p>

        {/* Call to Action Button - Styled as a system command */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 inline-flex cursor-pointer items-center justify-center px-10 py-5 text-xl font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform
                     bg-blue-600 hover:bg-blue-700 text-white
                     dark:bg-purple-600 dark:hover:bg-purple-700
                     focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 animate-button-system-init"
        >
          <RefreshCw className="mr-3 h-6 w-6 animate-spin-fast" />
          REBOOT TO HOME
        </button>
      </div>
    </div>
  );
}
