"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete, transitionStyle = "default" }) => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Different transition styles you can choose from
  const transitionStyles = {
    default: {
      duration: 0.8,
      ease: "easeInOut"
    },
    smooth: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96] // Custom bezier curve
    },
    bounce: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55]
    },
    elastic: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1]
    },
    gentle: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1]
    }
  };

  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ...transitionStyles[transitionStyle],
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        ...transitionStyles[transitionStyle],
        duration: transitionStyles[transitionStyle].duration * 0.75,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: transitionStyles[transitionStyle]
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: transitionStyles[transitionStyle]
    }
  };

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-background z-50 px-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={() => {
            if (!loading) {
              document.body.style.overflow = "visible";
              setTimeout(() => setShowContent(false), 500);
            }
          }}
        >
          {/* Logo Animation */}
          <motion.div
            className="mb-4 sm:mb-6 md:mb-8"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            >
              <motion.path
                d="M47.907 60 63.8 32 47.907 4H16.093L.201 32l15.893 28h31.813z"
                fill="none"
                stroke="#00c2b8"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transitionStyles[transitionStyle]}
              />
              <motion.text
                x="32"
                y="38"
                textAnchor="middle"
                fill="#00c2b8"
                fontSize="24"
                fontWeight="bold"
                fontFamily="monospace"
                className="text-lg sm:text-lg md:text-2xl"
                variants={itemVariants}
              >
                B
              </motion.text>
            </svg>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="overflow-hidden text-center px-4"
            variants={itemVariants}
          >
            <motion.div className="text-lg sm:text-xl md:text-2xl font-mono ">
              <motion.span variants={itemVariants} className="text-anothertextcolor">
                Hi there!{" "}
              </motion.span>
              <motion.span variants={itemVariants} className="block sm:inline text-anothertextcolor">
                Scroll down to explore my journey in tech.
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            className="w-32 sm:w-40 md:w-48 h-1 bg-gray-700 rounded-full mt-4 sm:mt-6 md:mt-8 overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="h-full bg-[#00c2b8]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                ...transitionStyles[transitionStyle],
                duration: transitionStyles[transitionStyle].duration * 2
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;