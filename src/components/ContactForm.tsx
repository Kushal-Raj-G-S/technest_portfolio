"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <motion.section
      id="contact"
      className="w-full max-w-5xl mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-[#07203a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-blue-500/10">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3 bg-[#062338] p-8">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-8 max-w-[300px] mx-auto">
              <Image
                src={profile.image}
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1">Let's Discuss Your Project</h2>
            <p className="text-gray-300 mb-8">
              Always available for freelancing if the right project comes along. 
              Feel free to contact me.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase text-teal-400 font-medium mb-2">WRITE AN E-MAIL</h3>
                <p className="text-white text-lg font-semibold">{profile.contact.email}</p>
              </div>
              
              {profile.contact.phone && (
                <div>
                  <h3 className="text-sm uppercase text-teal-400 font-medium mb-2">CALL ME</h3>
                  <p className="text-white text-lg font-semibold">{profile.contact.phone}</p>
                </div>
              )}
              
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c3153] hover:bg-[#0c4173] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c3153] hover:bg-[#0c4173] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c3153] hover:bg-[#0c4173] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3 p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-teal-400 mb-2 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Name *" 
                    className="w-full p-3 rounded bg-[#0c3153] border border-blue-500/20 focus:border-teal-400 text-white outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-400 mb-2 uppercase">Your Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Email *" 
                    className="w-full p-3 rounded bg-[#0c3153] border border-blue-500/20 focus:border-teal-400 text-white outline-none transition-colors" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-2 uppercase">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Subject *" 
                  className="w-full p-3 rounded bg-[#0c3153] border border-blue-500/20 focus:border-teal-400 text-white outline-none transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teal-400 mb-2 uppercase">Your Message</label>
                <textarea 
                  required
                  placeholder="Your message *" 
                  rows={5}
                  className="w-full p-3 rounded bg-[#0c3153] border border-blue-500/20 focus:border-teal-400 text-white outline-none transition-colors resize-none" 
                />
              </div>
              
              {isSubmitted && (
                <div className="p-3 bg-teal-900/30 border border-teal-500/30 text-teal-300 rounded">
                  Your message has been sent successfully!
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 disabled:bg-blue-900 text-white font-medium p-3 rounded uppercase transition-colors flex justify-center items-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Add this to your global CSS (e.g., globals.css):
// .neon-glow { box-shadow: 0 0 16px 2px #00eaff44, 0 0 32px 4px #1e40af22; }
