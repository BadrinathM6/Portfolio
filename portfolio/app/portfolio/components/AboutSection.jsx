"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effects for image
  const imageY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);

  const skills = [
    "JavaScript (ES6+)",
    "Next.js",
    "Tailwind CSS",
    "React",
    "Django",
    "Bootstrap 5",
  ];

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const RevealText = ({ children, delay = 0, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        slideControls.start("visible");
      }
    }, [isInView]);

    return (
      <div ref={ref} className="relative overflow-hidden">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={className}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute top-0 left-0 w-full h-full bg-textcolor"
        >
          {/* {children} */}
        </motion.div>
      </div>
    );
  };

  return (
    <div
      className="relative min-h-screen bg-background p-8 md:ml-28"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <RevealText
          className="text-4xl md:text-5xl font-heading font-bold text-anothertextcolor mb-16"
          delay={0.2}
        >
          <div className="flex items-center gap-4">
            <motion.img
              src="/right arrow.svg"
              alt="Arrow Animation"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-8 h-8"
            />
            <h3 className="text-4xl md:text-4xl font-heading font-bold text-anothertextcolor">
              About Me
            </h3>
            <div className="h-px bg-lighttextcolor flex-1 max-w-[300px] hidden md:flex" />
          </div>
        </RevealText>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-3/5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <RevealText
              className="text-lighttextcolor font-sans text-lg leading-relaxed"
              delay={0.4}
            >
              I'm a <span className="text-textcolor">passionate developer</span>{" "}
              who believes in pushing boundaries until perfection is achieved .
              When I'm deeply invested in a project,{" "}
              <span className="text-textcolor">
                sleep becomes secondary to achieving the perfect solution
              </span>{" "}
              – it's not just about completing tasks, it's about{" "}
              <span className="text-textcolor">crafting excellence</span>.
            </RevealText>

            <RevealText
              className="text-lighttextcolor font-sans text-lg leading-relaxed"
              delay={0.4}
            >
              During my{" "}
              <span className="text-textcolor">
                internship at Teccity Labs Pvt Ltd
              </span>
              , I consistently demonstrated my ability to{" "}
              <span className="text-textcolor">
                bring innovative approaches to complex problems
              </span>
              . What sets me apart is my{" "}
              <span className="text-textcolor">
                commitment to thinking differently
              </span>
              . I don't just implement solutions; I reimagine them, making them
              more efficient and effective.
            </RevealText>

            <RevealText
              className="text-lighttextcolor font-sans text-lg leading-relaxed"
              delay={0.6}
            >
              I{" "}
              <span className="text-textcolor">
                thrive in dynamic environments
              </span>
              , making me particularly well-suited for startups where
              adaptability and innovation are crucial. My approach combines{" "}
              <span className="text-textcolor">
                meticulous attention to detail
              </span>{" "}
              with a broader strategic vision, allowing me to{" "}
              <span className="text-textcolor">
                deliver solutions that exceed expectations
              </span>
              .
            </RevealText>

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="pt-4"
            >
              <RevealText
                className="text-xl font-heading text-anothertextcolor mb-4"
                delay={0.7}
              >
                Technologies I work with
              </RevealText>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#00c2b8",
                      color: "#1e2025",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="px-4 py-2 bg-textcolor text-background rounded-full text-sm font-medium cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center mt-20"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Decorative background */}
              <motion.div
                className="absolute -top-10 -left-10 w-full h-full bg-background rounded-2xl border-textcolor border-2"
                whileHover={{ scale: 1.08, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />

              {/* Image */}
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden bg-yellow-400"
                whileHover={{ scale: 1.08, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/me.jpg"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
