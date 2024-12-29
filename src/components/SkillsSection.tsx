import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiFigma,
  SiJira,
  SiPostman,
  SiTypescript,
  SiVsco,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
];
const tools: Skill[] = [
  { name: "Postman", icon: <SiPostman size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
  { name: "VS Code", icon: <SiVsco size={40} /> },
  { name: "Jira", icon: <SiJira size={40} /> },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-light pt-20 min-h-screen py-12 px-[15%] dark:bg-gray"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray mb-8 dark:text-semiLight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-thin">My</span> Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:mx-[10%]"
          initial="hidden"
          whileInView={"visible"}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </motion.div>
        <motion.h2
          className="text-3xl font-semibold text-center text-gray mt-12 mb-8 dark:text-semiLight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Tools
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:mx-[10%]"
          initial="hidden"
          whileInView={"visible"}
          variants={containerVariants}
        >
          {tools.map((tool, index) => (
            <SkillCard key={index} name={tool.name} icon={tool.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<Skill> = ({ name, icon }) => {
  return (
    <motion.div className="flex flex-col items-center" variants={itemVariants}>
      <div className="bg-gray p-4 rounded-full text-light dark:bg-light dark:text-gray">
        {icon}
      </div>
      <p className="mt-2 text-lightGray dark:text-semiLight">{name}</p>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default SkillsSection;
