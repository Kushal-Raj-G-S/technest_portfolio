"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";
// Use a default icon that definitely exists
import { SiJavascript } from 'react-icons/si';

export default function TechStack() {  return (    <motion.section
      id="tech-stack"
      className="w-full max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {profile.techStack.map((tech) => {
          const Icon = Icons[tech.icon] || SiJavascript;
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 bg-gray-800/80 rounded-lg px-4 py-3 shadow border border-indigo-700/30 hover:scale-110 transition-transform duration-200"
            >
              <Icon className="text-4xl text-cyan-300 drop-shadow" />
              <span className="text-sm text-indigo-100 font-medium mt-1">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
