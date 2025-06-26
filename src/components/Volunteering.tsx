"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Volunteering() {
  return (
    <motion.section
      className="w-full max-w-3xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
        Volunteering & Community
      </h3>
      <ul className="flex flex-col gap-6">
        {profile.volunteering?.map((v, i) => (
          <motion.li
            key={v.role + v.organization}
            className="bg-gray-800/80 rounded-lg p-5 shadow border-l-4 border-cyan-400/60"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <div className="font-semibold text-cyan-200 text-lg">
              {v.role}
            </div>
            <div className="text-indigo-400 font-medium mb-1">
              {v.organization}
            </div>
            <div className="text-sm text-indigo-300">{v.period}</div>
            <div className="text-gray-300 text-sm mt-1">{v.description}</div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
