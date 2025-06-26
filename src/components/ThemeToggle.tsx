"use client";
import { useTheme } from "@/components/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full border border-gray-300 bg-white/90 dark:bg-[#041427]/90 dark:border-gray-700 shadow-md hover:shadow-lg hover:bg-gray-100 dark:hover:bg-[#0a1a1a] transition-all duration-300 text-black dark:text-white"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
