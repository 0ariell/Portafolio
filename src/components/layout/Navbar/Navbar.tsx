import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Persistir el tema en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <motion.nav
      className="fixed w-full z-50 backdrop-blur-lg border-b dark:border-emerald-900/30 border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r dark:from-emerald-400 dark:to-emerald-600 from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          <Link to="/">
            {"<MiPortafolio />"}
          </Link>
        </motion.div>

        {/* Menú */}
        <ul className="flex space-x-8 items-center">
          {[
            { label: "Contact", to: "/contact" },
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" }
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={item.to}
                className="relative px-3 py-1 text-sm group transition-all duration-300"
              >
                <span className="dark:text-gray-300 text-gray-600 group-hover:dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] dark:bg-emerald-400 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          ))}

          {/* Botón de Tema */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-2 rounded-lg dark:bg-gradient-to-br dark:from-emerald-900/30 dark:to-emerald-800/20 bg-gradient-to-br from-gray-100/30 to-gray-200/20 border dark:border-emerald-900/50 border-gray-300 hover:dark:border-emerald-400/30 hover:border-emerald-600/30 shadow-lg dark:shadow-emerald-900/10 shadow-gray-400/10 hover:dark:shadow-emerald-400/10 hover:shadow-emerald-600/10 transition-all"
          >
            <span className="bg-gradient-to-r dark:from-emerald-400 dark:to-emerald-300 from-emerald-600 to-emerald-700 bg-clip-text text-transparent text-sm">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </motion.button>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
