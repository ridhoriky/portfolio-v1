import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/profile.png";

const AboutSection: React.FC = () => {
  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section
      id="about"
      className="flex justify-center items-center bg-semiLight dark:bg-lightGray py-24 px-[15%] "
    >
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="relative w-72 h-72 bg-gray-50 rounded-t-3xl shadow-gray shadow-md dark:shadow-light  dark:bg-gray flex items-center justify-center overflow-hidden">
            <img
              src={aboutImage}
              alt="About Me"
              className="w-full h-full rounded-t-3xl absolute object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-gray shadow-xl rounded-t-3xl pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 dark:text-light"
          variants={textVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <h2 className="text-4xl font-bold text-gray dark:text-light">
            About <span className="font-thin">Me</span>
          </h2>
          <p className="text-lightGray mt-4 leading-relaxed text-justify dark:text-semiLight">
            I am a passionate web developer with a strong focus on creating
            exceptional user interfaces and seamless user experiences. My
            journey in web development began in 2019, and since then, I have
            been dedicated to crafting high-quality, visually appealing, and
            performant websites.
          </p>
          <p className="text-lightGray mt-4 leading-relaxed text-justify dark:text-semiLight">
            Over the years, I have gained extensive experience in modern
            frontend technologies, including React.js, TypeScript, Ant Design
            and TailwindCSS. I am highly proficient in translating complex
            designs into responsive, accessible, and interactive web pages,
            ensuring pixel-perfect precision and attention to detail.
          </p>
          <p className="text-lightGray mt-4 leading-relaxed text-justify dark:text-semiLight">
            My passion for frontend development drives me to stay updated with
            the latest trends and best practices in the field. I take pride in
            solving complex challenges, optimizing web performance, and
            delivering solutions that enhance user satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
