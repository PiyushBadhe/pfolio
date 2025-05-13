import { useEffect, useState, ReactNode } from "react";
import { ThemeContext, Theme } from "../context/ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference or respect OS preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;

      if (savedTheme) {
        return savedTheme;
      }

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }

    return "light"; // Default to light mode if window is not available
  });

  useEffect(() => {
    // Update the document class based on theme
    const htmlElement = document.documentElement;

    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
