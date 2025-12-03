"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return window.localStorage.getItem("darkMode") === "true";
    } catch {
      return false;
    }
  });

  // Ensure component only renders after mount
  useEffect(() => {
    // apply theme to document on mount
    document.documentElement.classList.toggle("dark", darkMode);
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      window.localStorage.setItem("darkMode", String(newValue));
      document.documentElement.classList.toggle("dark", newValue);
      return newValue;
    });
  };

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-pressed={darkMode}
      aria-label="Toggle dark mode"
      className="relative inline-flex items-center justify-center p-2 rounded-xl bg-(--bg-primary) hover:bg-(--accent-hover) transition-all duration-300 ring-1 ring-(--border) hover:ring-(--accent) shadow-sm hover:shadow-lg hover:scale-105"
    >
      <span
        className={`relative w-5 h-5 inline-block transition-transform duration-600 ease-in-out ${darkMode ? "rotate-180" : "rotate-0"}`}
        style={{ willChange: "transform" }}
      >
        <Sun
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300 ${darkMode ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300 ${darkMode ? "opacity-0 scale-90" : "opacity-100 scale-110"}`}
        />
      </span>
    </button>
  );
}
