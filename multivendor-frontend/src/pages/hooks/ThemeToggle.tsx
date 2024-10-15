import { useEffect, useState } from "react";

// icons
import { BsMoon, BsSun } from "react-icons/bs";
const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a dark mode preference stored in localStorage
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference) {
      setDarkMode(storedPreference === "dark");
      document.documentElement.classList.toggle(
        "dark",
        storedPreference === "dark"
      );
    } else {
      // Default to system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      className="fixed bottom-5 right-5  w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-150 transition-all
        bg-gray-950 dark:bg-white dark:text-black text-white"
      onClick={toggleDarkMode}
    >
      {darkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
