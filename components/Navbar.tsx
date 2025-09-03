/* eslint-disable @next/next/no-img-element */

"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import ClientAuthButtons from "./ClientAuthButtons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gray-950 dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="w-full md:w-11/12 mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-1">
            <img src="/img/logo.png" alt="logo" width={28} height={28} />
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              AI Resume Pro
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-4/6">
          <ul className="flex justify-evenly space-x-6">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <Link
                  href={link}
                  className="nav-link relative transition-colors hover:text-blue-500 after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <ClientAuthButtons />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-inner absolute top-16 left-0 w-full z-40"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map(({ link, name }) => (
                <motion.li
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link}
                    className="text-lg font-medium transition-colors hover:text-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
              <div className="pt-4">
                <ClientAuthButtons />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
