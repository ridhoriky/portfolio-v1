import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
import { socialIcons } from "../constants/socialIcons";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="mx-auto px-[15%] py-12 text-gray dark:text-light dark:bg-gray"
    >
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
      >
        Contact <span className="font-thin">Me</span>
      </motion.h2>
      <div className="md:flex gap-12">
        <motion.div
          className="w-full md:w-2/5"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <p className="text-gray mb-4 text-2xl font-bold dark:text-light/90">
            Let's Talk for Something Great Together!
          </p>
          <p className="text-lightGray mb-4 dark:text-light/80">
            I'm always eager to connect with like-minded individuals and
            professionals. Whether it's a project collaboration, a career
            opportunity, or just a chat, feel free to reach out!
          </p>
        </motion.div>
        <div className="w-full md:w-3/5 mt-5 md:mt-0">
          {/* Follow Me Section */}
          <motion.div
            className="mb-8 flex justify-between items-center border-b pb-4 border-b-lightGray/50"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ id, icon: Icon, link }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue dark:text-light dark:hover:text-blue"
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email Me Section */}
          <motion.div
            className="mb-8 flex justify-between items-center border-b pb-4 border-b-lightGray/50"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <h2 className="text-lg font-semibold mb-2">Email Me</h2>
            <a
              href={`mailto:${import.meta.env.NEXT_PUBLIC_EMAIL}`}
              className="text-gray-600 hover:text-blue dark:text-light dark:hover:text-blue"
            >
              @ridhoriky
            </a>
          </motion.div>

          {/* Resume Section */}
          <motion.div
            className="flex justify-between items-center border-b pb-4 border-b-lightGray/50"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <h2 className="text-lg font-semibold mb-2">Resume</h2>
            <a
              href="/Riky Ridho - Resume.pdf"
              download
              className="flex items-center space-x-2 text-gray-600 hover:text-blue dark:text-light dark:hover:text-blue"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
