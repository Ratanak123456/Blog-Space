"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      window.localStorage.setItem("darkMode", String(darkMode));
    } catch {}
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((v) => !v);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-pressed={darkMode}
      aria-label="Toggle dark mode"
      className="
        relative inline-flex items-center justify-center
        p-2 rounded-xl
        bg-(--bg-primary)
        hover:bg-(--accent-hover)
        transition-all duration-300
        ring-1 ring-(--border)
        hover:ring-(--accent)
        shadow-sm hover:shadow-lg
        hover:scale-105
      "
    >
      {/* Animated wrapper — rotates as a single element */}
      <span
        className={`relative w-5 h-5 inline-block transition-transform duration-600 ease-in-out
          ${darkMode ? "rotate-180" : "rotate-0"}`}
        style={{ willChange: "transform" }}
      >
        {/* Sun (visible in darkMode) */}
        <Sun
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300
            ${darkMode ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
        />

        {/* Moon (visible in lightMode) */}
        <Moon
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300
            ${darkMode ? "opacity-0 scale-90" : "opacity-100 scale-110"}`}
        />
      </span>
    </button>
  );
}
