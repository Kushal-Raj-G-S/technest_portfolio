"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* No background overlay - letting the body background color show through */}
        {/* Dark theme shapes */}
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-br from-gray-300/10 to-gray-500/10"
        style={{ 
          boxShadow: "inset 0 0 30px rgba(200,200,255,0.15), 0 0 30px rgba(150,150,255,0.1)"
        }}
        initial={{ y: "30%", x: "70%" }}
        animate={{
          y: ["30%", "35%", "28%", "33%"],
          x: ["70%", "68%", "72%", "69%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "easeInOut",
        }}
      />
        <motion.div
        className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-br from-gray-200/10 to-gray-300/10 dark:from-gray-300/10 dark:to-gray-500/10"
        style={{ 
          boxShadow: "inset 0 0 15px rgba(0,0,0,0.03), 0 0 20px rgba(0,0,0,0.02)" 
        }}
        initial={{ y: "70%", x: "20%" }}
        animate={{
          y: ["70%", "75%", "68%", "73%"],
          x: ["20%", "18%", "22%", "19%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 12,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle grid pattern like in the reference image */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px), 
                              linear-gradient(to bottom, gray 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Subtle horizontal lines */}
      <div className="absolute right-0 top-1/3 w-1/3 h-[300px] flex flex-col justify-around opacity-10">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-[1px] bg-white"></div>
        ))}
      </div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,_rgba(0,150,150,0.08)_0%,_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,_rgba(0,150,150,0.08)_0%,_transparent_60%)]"></div>
      
      {/* Very subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' /%3E%3C/svg%3E')",
          filter: "contrast(120%) brightness(100%)"
        }}>
      </div>
    </div>
  );
}
