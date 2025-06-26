"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.nav 
      className="w-full fixed top-0 left-0 z-50 bg-[#041427]/90 backdrop-blur-sm"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-white font-bold text-2xl flex items-center">
            <div className="bg-[#0ea5e9] w-8 h-8 flex items-center justify-center mr-2 rounded">
              <span className="text-white">K</span>
            </div>
            KUSHAL
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-teal-400 font-medium transition-colors">HOME</Link>
          <Link href="#about" className="text-white hover:text-teal-400 font-medium transition-colors">ABOUT ME</Link>
          <Link href="#projects" className="text-white hover:text-teal-400 font-medium transition-colors">PROJECTS</Link>
          <Link href="#services" className="text-white hover:text-teal-400 font-medium transition-colors">SERVICES</Link>
          <Link href="#contact" className="text-white hover:text-teal-400 font-medium transition-colors">CONTACT</Link>
          <Link 
            href="#contact" 
            className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            LET&apos;S TALK
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#041427] py-4 px-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="#about" className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              ABOUT ME
            </Link>
            <Link href="#projects" className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              PROJECTS
            </Link>
            <Link href="#services" className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              SERVICES
            </Link>
            <Link href="#contact" className="text-white hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
            <Link
              href="#contact"
              className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 text-white px-4 py-2 rounded w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
