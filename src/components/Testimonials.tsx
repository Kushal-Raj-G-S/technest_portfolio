"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  return (
    <motion.section
      className="w-full max-w-3xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
        Testimonials
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl p-6 shadow-xl border border-indigo-700/30 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-cyan-400">
              <Image src={t.image} alt={t.name} width={64} height={64} />
            </div>
            <blockquote className="text-indigo-100 italic mb-2">“{t.quote}”</blockquote>
            <div className="text-cyan-300 font-semibold">{t.name}</div>
            <div className="text-xs text-indigo-300">{t.title}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
