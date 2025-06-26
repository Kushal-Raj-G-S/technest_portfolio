"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <motion.section
      className="w-full max-w-3xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
        Timeline
      </h3>
      <ol className="relative ml-8">
        {profile.timeline?.map((item, i) => (
          <li key={item.year + item.event} className="mb-12 ml-0 flex items-center group">
            <div className="flex flex-col items-center mr-6">
              <div className="px-4 py-2 bg-cyan-900 text-cyan-200 font-extrabold rounded-xl shadow-lg border border-cyan-400/60 text-2xl tracking-widest group-hover:bg-cyan-400 group-hover:text-[#101e36] transition-all font-mono uppercase">
                {item.year}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <div className="bg-[#101e36] rounded-xl p-6 shadow border border-cyan-400/30 flex-1 neon-glow mt-0 group-hover:border-cyan-300 group-hover:shadow-cyan-400/40 transition-all">
                <div className="text-blue-200 text-lg font-semibold group-hover:text-white transition-colors font-sans">{item.event}</div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
