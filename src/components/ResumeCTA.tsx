"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function ResumeCTA() {
  return (
    <motion.section
      className="w-full max-w-3xl mb-12 flex justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <a
        href={profile.resume.url}
        download
        className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 text-lg"
      >
        <FaDownload />
        {profile.resume.label}
      </a>
    </motion.section>
  );
}
