import { createContext, useContext, useEffect, useState } from "react";

// Create a Context
const DarkModeContext = createContext();

// Custom Hook to Access Dark Mode
export function useDarkMode() {
  return useContext(DarkModeContext);
}

// Dark Mode Provider Component
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Check Local Storage for Theme on Mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Dark Mode and Save to Local Storage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
