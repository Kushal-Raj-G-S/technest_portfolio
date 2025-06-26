"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function TechEvents() {
  // Skip rendering if no tech events are available
  if (!profile.techEvents || profile.techEvents.length === 0) {
    return null;
  }

  return (
    <section id="tech-events" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text">
          Tech Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.techEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-[#0A1C35] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-cyan-500/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{event.name}</h3>
              <p className="text-cyan-400 font-medium mb-2">{event.issuer}</p>
              <p className="text-gray-400">{event.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <SectionDivider />
    </section>
  );
}
