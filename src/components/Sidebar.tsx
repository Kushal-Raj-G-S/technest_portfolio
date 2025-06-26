"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "@/data/profile";
import { useEffect, useState, useRef } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll and determine which section is in view
  useEffect(() => {
    const handleScroll = () => {
      // Debounce the scroll event
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      
      debounceTimerRef.current = setTimeout(() => {
        // Viewport dimensions
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const viewportMiddle = scrollY + (viewportHeight * 0.4);
        
        // Special case for the top of the page
        if (scrollY < 100) {
          setActiveSection("home");
          return;
        }
        
        // Get all section elements
        const sections = [
          { id: "home", element: document.body, top: 0 },
          { id: "skills", element: document.getElementById("skills") },
          { id: "tech-stack", element: document.getElementById("tech-stack") },
          { id: "achievements", element: document.getElementById("achievements") },
          { id: "projects", element: document.getElementById("projects") },
          { id: "experience", element: document.getElementById("experience") },
          { id: "education", element: document.getElementById("education") },
          { id: "timeline", element: document.getElementById("timeline") },
          { id: "faq", element: document.getElementById("faq") },
          { id: "contact", element: document.getElementById("contact") }
        ];
        
        // Calculate section positions
        for (let i = 1; i < sections.length; i++) {
          if (sections[i].element) {
            sections[i].top = sections[i].element.getBoundingClientRect().top + scrollY;
          } else {
            sections[i].top = Infinity;
          }
        }
        
        // Find the current section
        let newActiveSection = "home";
        for (let i = sections.length - 1; i >= 0; i--) {
          // Use a small threshold below the section top to fix the highlight lag
          const threshold = sections[i].top - 20;
          if (threshold <= viewportMiddle) {
            newActiveSection = sections[i].id;
            break;
          }
        }
          // Only update if changed to avoid unnecessary rerenders
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 50); // 50ms debounce
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check on mount
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [activeSection]);  
  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-60 bg-[#041427] border-r border-gray-800 z-50 flex flex-col"
    >{/* Logo */}
      <div className="py-8 px-8 border-b border-gray-800/80">        <Link href="/" className="flex items-center">
          <div 
            className="text-white font-bold text-3xl tracking-widest font-[Oswald,Arial,Poppins,sans-serif] relative hover:scale-105 transition-transform duration-300"
          >
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">KUSHAL</span>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400"></div>
          </div>
        </Link>
      </div>      {/* Navigation Links */}      <nav className="flex-1 px-8 relative">
        
        <ul className="mt-12 relative z-20 flex flex-col gap-0 space-y-0">          <li id="menu-home" className="h-10">
            <Link 
              href="/"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "home" 
                  ? "text-cyan-300 font-bold pl-2 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              HOME
            </Link>
          </li>          <li id="menu-skills" className="h-10">            <Link 
              href="#skills"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "skills" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              SKILLS
            </Link>
          </li>          <li id="menu-tech-stack" className="h-10">            <Link 
              href="#tech-stack"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "tech-stack" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              TECH STACK
            </Link>
          </li>          <li id="menu-achievements" className="h-10">            <Link 
              href="#achievements"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "achievements" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              ACHIEVEMENTS
            </Link>
          </li>          <li id="menu-projects" className="h-10">            <Link 
              href="#projects"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "projects" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              PROJECTS
            </Link>
          </li>          <li id="menu-experience" className="h-10">            <Link 
              href="#experience"              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "experience" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              EXPERIENCE
            </Link>
          </li><li id="menu-education" className="h-10">
            <Link              href="#education"              
              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "education" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              EDUCATION
            </Link>
          </li>          
          <li id="menu-timeline" className="h-10">            
            <Link              href="#timeline"              
              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "timeline" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              TIMELINE
            </Link>
          </li>          
          <li id="menu-faq" className="h-10">            
            <Link              href="#faq"              
              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "faq" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              FAQ
            </Link>
          </li>          
          <li id="menu-contact" className="h-10">            
            <Link              href="#contact"              
              className={`block h-10 flex items-center px-4 rounded-none text-base font-semibold ${                activeSection === "contact" 
                  ? "text-cyan-300 font-bold pl-4 text-glow-cyan" 
                  : "text-gray-300 hover:text-cyan-400"
              } transition-colors`}
            >
              CONTACT
            </Link>
          </li>
        </ul>      </nav>      {/* Social Icons and Copyright */}      
      <div className="mt-auto px-8 pb-8 pt-12">
        <div className="flex justify-end space-x-5 mb-6">
          <a 
            href="https://facebook.com" 
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
            aria-label="Facebook"
          >
            <FaFacebookF size={17} />
          </a>
          <a 
            href="https://instagram.com" 
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
            aria-label="Instagram"
          >
            <FaInstagram size={17} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kushal-raj-g-s/" 
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>
          <a 
            href="https://github.com/Kushal-Raj-G-S" 
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
        </div>
        <div className="text-xs text-gray-500 text-right">
          © 2025 Kushal Template<br />Created by Kushal Raj G S
        </div>
      </div>    </aside>
  );
}
