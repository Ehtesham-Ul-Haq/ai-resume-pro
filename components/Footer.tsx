/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { footerLinks, quickLinks, socialLinks } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-800 shadow-lg relative overflow-hidden">
      {/* Subtle background grid for theme consistency */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[size:20px_20px] bg-[radial-gradient(#38bdf8_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#8b5cf6_0.5px,transparent_0.5px)]"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Section 1: Brand / Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="/"
            className="flex items-center gap-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-80 transition-opacity"
          >
            AI Resume Pro
          </a>
          <p className="mt-4 text-sm max-w-xs md:max-w-none">
            Crafting your future, one AI-powered resume at a time. Elevate your
            career with intelligent tools.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-blue-600 dark:border-purple-600 pb-1">
            Quick Links
          </h3>
          <nav className="space-y-2">
            {quickLinks.map(({ name, link }) => (
              <a
                href={link}
                key={name}
                className="block text-gray-400 hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 3: Legal & Support */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-blue-600 dark:border-purple-600 pb-1">
            Legal & Support
          </h3>
          <nav className="space-y-2">
            {footerLinks.map(({ name, link }) => (
              <a
                href={link}
                key={name}
                className="block text-gray-400 hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 4: Connect with Us (Social Media) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-blue-600 dark:border-purple-600 pb-1">
            Connect with Us
          </h3>
          <div className="flex space-x-4 mt-2">
            {socialLinks
              .filter(({ show }) => show) // only render if show is true
              .map(({ name, icon: Icon, url, ariaLabel, target, rel }) => (
                <a
                  key={name}
                  href={url}
                  target={target}
                  rel={rel}
                  aria-label={ariaLabel}
                  className={`text-gray-400 transition-colors hover:text-blue-600`}
                >
                  <Icon className="w-7 h-7" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="relative z-10 container mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} AI Resume Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
