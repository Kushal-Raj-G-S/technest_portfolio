"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function LanguagesAndInterests() {
  return (
    <motion.section
      className="w-full max-w-3xl mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
            Languages
          </h3>
          <ul className="flex flex-col gap-2">
            {profile.languages?.map((lang) => (
              <li key={lang} className="text-indigo-100 text-lg">
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
            Interests
          </h3>
          <ul className="flex flex-col gap-2">
            {profile.interests?.map((interest) => (
              <li key={interest} className="text-indigo-100 text-lg">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
