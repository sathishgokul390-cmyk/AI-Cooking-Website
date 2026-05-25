import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full px-2 py-1.5 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Sun icon — highlighted in light mode */}
      <span className={`p-1 rounded-full transition-all duration-300 ${!darkMode ? "bg-orange-500 text-white" : "text-slate-400"}`}>
        <Sun size={14} />
      </span>
      {/* Moon icon — highlighted in dark mode */}
      <span className={`p-1 rounded-full transition-all duration-300 ${darkMode ? "bg-slate-700 text-yellow-300" : "text-slate-400"}`}>
        <Moon size={14} />
      </span>
    </button>
  );
}
