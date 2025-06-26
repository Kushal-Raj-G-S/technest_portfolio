"use client";
import { profile } from "@/data/profile";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import Publications from "@/components/Publications";
import Volunteering from "@/components/Volunteering";
import LanguagesAndInterests from "@/components/LanguagesAndInterests";
import ResumeCTA from "@/components/ResumeCTA";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import AnimatedBackground from "@/components/AnimatedBackground";
import Sidebar from "@/components/Sidebar";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full flex bg-[#041427] text-white font-sans relative overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 px-4 sm:px-12 pt-12 bg-[#041427] text-white flex flex-col items-center">
        <AnimatedBackground />
        
        <motion.header
          className="mt-10 mb-8 text-center flex flex-col items-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <motion.div
            className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-900/40"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          >
            <Image
              src={profile.image}
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
          <motion.div 
            className="mb-2"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <span className="uppercase text-teal-400 dark:text-teal-400 text-yellow-500 tracking-wider text-sm font-medium block mb-2">
              {profile.name}
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight dark:text-white text-gray-900">
              HAY! I'M KUSHAL
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 dark:text-[#0ea5e9] text-yellow-500">
              I'M A DEVELOPER
            </h2>
          </motion.div>
          
          <motion.p
            className="max-w-xl mx-auto text-lg dark:text-gray-300 text-gray-700 mt-4 font-light"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            {profile.about}
          </motion.p>
        </motion.header>
        
        <SectionDivider />
        <motion.section
          id="skills"
          className="w-full max-w-3xl mb-12 mx-auto"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <div className="flex flex-col items-center mb-6">
            <span className="uppercase text-teal-400 tracking-wider text-sm font-medium mb-1">Professional</span>
            <h3 className="text-2xl font-bold text-cyan-400">
              Skills
            </h3>
          </div>
          <ul className="flex flex-wrap gap-3">
            {profile.skills.map((skill, i) => (
              <motion.li
                key={skill}
                className="bg-[#0c3153] px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-[#0c4173] transition-colors duration-200 border border-teal-500/20 text-teal-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <TechStack />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Publications />
        <SectionDivider />
        <Volunteering />
        <SectionDivider />
        <LanguagesAndInterests />
        <SectionDivider />
        <motion.section
          id="projects"
          className="w-full max-w-4xl mb-16 mx-auto"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <div className="flex flex-col items-center mb-6">
            <span className="uppercase text-teal-400 tracking-wider text-sm font-medium mb-2">My Work</span>
            <h3 className="text-3xl font-bold text-cyan-400">
              Recent Projects
            </h3>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <AnimatePresence>
              {profile.projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  className="bg-[#07203a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  whileHover={{
                    boxShadow: "0 8px 32px 0 rgba(0,200,200,0.2)",
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 relative overflow-hidden">
                    {/* Project preview image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-teal-300/30">{project.name.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-teal-300 transition-colors duration-200">
                      {project.name}
                    </h4>
                    <p className="text-gray-300 mb-4 min-h-[48px]">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-teal-400/70">Web App Development</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 hover:bg-teal-500/30 transition-colors text-white"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
        <motion.section
          id="experience"
          className="w-full max-w-3xl mb-12 mx-auto"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.35 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
            Experience
          </h3>
          <ul className="flex flex-col gap-6">
            {profile.experience?.map((exp, i) => (
              <motion.li
                key={exp.role + exp.company}
                className="bg-gray-800/80 rounded-lg p-5 shadow border-l-4 border-indigo-400/60"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                  <span className="font-semibold text-indigo-200 text-lg">
                    {exp.role}
                  </span>
                  <span className="text-sm text-indigo-300">{exp.period}</span>
                </div>
                <div className="text-indigo-400 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-gray-300 text-sm">
                  {exp.description}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          id="education"
          className="w-full max-w-3xl mb-12 mx-auto"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
            Education
          </h3>
          <ul className="flex flex-col gap-6">
            {profile.education?.map((edu, i) => (
              <motion.li
                key={edu.degree + edu.institution}
                className="bg-gray-800/80 rounded-lg p-5 shadow border-l-4 border-indigo-400/60"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <div className="font-semibold text-indigo-200 text-lg">
                  {edu.degree}
                </div>
                <div className="text-indigo-400 font-medium mb-1">
                  {edu.institution}
                </div>
                {edu.location && (
                  <div className="text-indigo-300/80 text-sm mb-1">
                    {edu.location}
                  </div>
                )}
                <div className="text-sm text-indigo-300">{edu.year}</div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          id="tech-events"
          className="w-full max-w-3xl mb-12"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.45 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent tracking-wide border-b border-indigo-700 pb-2 drop-shadow-[0_1px_8px_rgba(139,92,246,0.15)]">
            Tech Events
          </h3>
          <ul className="flex flex-col gap-6">
            {profile.techEvents?.map((event, i) => (
              <motion.li
                key={event.name + event.issuer}
                className="bg-gray-800/80 rounded-lg p-5 shadow border-l-4 border-indigo-400/60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <div className="font-semibold text-indigo-200 text-lg">
                  {event.name}
                </div>
                <div className="text-indigo-400 font-medium mb-1">
                  {event.issuer}
                </div>
                <div className="text-sm text-indigo-300">{event.year}</div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <ResumeCTA />
        <SectionDivider />
        <div id="timeline">
          <Timeline />
        </div>
        <SectionDivider />
        <div id="faq">
          <FAQ />
        </div>
        <SectionDivider />
        <div id="contact">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </div>
  );
}
