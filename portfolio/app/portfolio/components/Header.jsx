"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, x: -16 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md border border-gray-200/20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12 md:w-16 md:h-16"
          >
            <motion.path
              d="M47.907 60 63.8 32 47.907 4H16.093L.201 32l15.893 28h31.813zM17.257 6h29.485L61.5 32 46.743 58H17.257L2.5 32 17.257 6z"
              fill="#00c2b8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.text
              x="32"
              y="38"
              textAnchor="middle"
              fill="#00c2b8"
              fontSize="18"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              B
            </motion.text>
          </svg>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-end items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-anothertextcolor text-lg group font-mono"
                whileHover={{ scale: 1.1, color: "#00c2b8" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setIsMenuOpen(false); // Close mobile menu if open
                }}
              >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-anothertextcolor origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="bg-background text-textcolor px-4 py-2 rounded border-2 border-textcolor font-mono"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#00c2b8",
              color: "#1e2025",
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Resume
          </motion.button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center relative"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.span
            className="w-6 h-0.5 bg-textcolor absolute"
            variants={{
              closed: { rotate: 0, y: -6 },
              open: { rotate: 45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-textcolor absolute"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-textcolor absolute"
            variants={{
              closed: { rotate: 0, y: 6 },
              open: { rotate: -45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-gray-200/20 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-anothertextcolor text-lg hover:text-[#00c2b8] transition-colors"
                  custom={i}
                  variants={navItemVariants}
                  onClick={() => {
                    setIsMenuOpen(false); // Close mobile menu if open
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="bg-background text-textcolor text-lg px-4 py-2 rounded border-2 border-textcolor hover:bg-[#00c2b8] hover:text-[#1e2025] transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                custom={3}
                variants={navItemVariants}
              >
                Resume
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
