import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../public/logo.png"; // Ensure correct path

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // Show navbar when scrolling up
      } else {
        setShowNavbar(false); // Hide navbar when scrolling down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center shadow-lg transition-all
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} rounded-b-lg`}
      initial={{ y: "-100%" }}
      animate={{ y: showNavbar ? "0%" : "-100%" }} // Navbar appears when scrolling up
      transition={{ duration: 0.3 }}
    >
      {/* Logo Section */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-12 h-12 rounded-full shadow-md border-2 border-gray-400 dark:border-gray-600 cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Dark Mode Toggle Button */}
      <motion.button
        onClick={toggleDarkMode}
        className="p-3 rounded-full shadow-md transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <FaMoon size={22} className="text-yellow-400" />
        ) : (
          <FaSun size={22} className="text-yellow-500" />
        )}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
