import React from "react";
import { motion } from "framer-motion";
import { socialIcons } from "../constants/socialIcons";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-light dark:bg-gray text-gray dark:text-light px-[15%]"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
      >
        Hello, I'm <span className="text-blue">Ridho</span>.
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center mb-8 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        transition={subTitleVariants}
      >
        I'm a Frontend Developer based in Indonesia. I create beautiful and
        user-friendly websites with modern technologies.
      </motion.p>

      <motion.div
        className="flex items-center gap-4 mt-6 justify-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {socialIcons.map(({ id, label, icon: Icon, link }) => (
          <motion.a
            key={id}
            href={link}
            className="p-3 bg-semiLight hover:bg-blue rounded-md shadow-md"
            aria-label={label}
            whileHover="whileHover"
            whileTap="whileTap"
            initial="hidden"
            whileInView="visible"
            variants={iconVariants}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={32} className="text-gray dark:text-gray" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const subTitleVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  whileHover: {
    scale: 1.2,
    rotate: 10,
  },
  whileTap: {
    scale: 0.9,
  },
};

export default HeroSection;
