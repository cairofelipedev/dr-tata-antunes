"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; // Import the MoonIcon

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Toggle between "dark" and "light" themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="inline-flex items-center" onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {theme === "dark" ? (
        <MoonIcon className="w-4 h-4 mr-2" /> // Moon icon for dark theme
      ) : (
        <SunIcon className="w-4 h-4 mr-2" /> // Sun icon for light theme
      )}
    </div>
  );
};

export default ThemeSwitch;
