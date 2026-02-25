import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <span className="text-base font-semibold tracking-tight text-black dark:text-white">
          ISRO Explorer
        </span>

        {/* Links + actions */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="#home"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#missions"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Missions
          </a>

          {/* Theme toggle */}
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
}