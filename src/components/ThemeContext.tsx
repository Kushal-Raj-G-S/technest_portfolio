"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface ThemeContextType {
  theme: "dark";
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always dark theme
  const theme = "dark";

  useEffect(() => {
    // Apply dark theme classes to body
    document.body.classList.add("bg-[#041427]", "text-white");
    
    // Update HTML element for Tailwind dark mode
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
