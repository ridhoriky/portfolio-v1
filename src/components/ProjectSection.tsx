import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../constants/projects";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-semiLight text-gray py-24 px-[15%] dark:bg-lightGray dark:text-light"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="font-thin">My</span> Projects
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className={`${
                index % 2 ? "md:flex-row-reverse" : ""
              } flex flex-col md:flex-row items-center gap-6 border-2  border-lightGray rounded-lg p-6 shadow-md shadow-gray dark:border-semiLight dark:shadow-light dark:bg-gray`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg w-full"
                />
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lightGray mb-4 dark:text-light/80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray border-2 border-gray rounded-lg px-2 py-1 dark:border-lightGray  font-semibold dark:text-light "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 my-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray hover:text-blue font-semibold flex items-center dark:text-light dark:hover:text-blue"
                  >
                    Github Repo
                    <FaGithub className="ml-2" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray hover:text-blue font-semibold flex items-center dark:text-light dark:hover:text-blue"
                  >
                    View Project
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.1,
      duration: 0.8,
    },
  },
};

export default ProjectSection;
