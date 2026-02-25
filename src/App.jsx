import { useState } from "react";
import Navbar from "./components/navbar";
import MissionsSection from "./components/Missions";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen text-black dark:text-white bg-gradient-to-b from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl rounded-full" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            ISRO Space Missions
            <span className="block text-indigo-600 dark:text-indigo-400 mt-2">
              Explorer
            </span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-lg">
            Discover India’s space journey through missions, spacecrafts,
            and scientific exploration using real public data.
          </p>

          <a
            href="#missions"
            className="mt-10 inline-block px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition font-medium"
          >
            Explore Missions ↓
          </a>
        </section>

        {/* Missions */}
        <MissionsSection />

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-500 border-t border-black/10 dark:border-white/10">
          <p>
            Data sourced from public ISRO mission datasets
          </p>
        </footer>
      </div>
    </div>
  );
}