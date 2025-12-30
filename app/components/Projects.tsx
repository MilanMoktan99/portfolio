import { assets, projectData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { DarkModeProps } from "../types";
import { motion } from "motion/react";

const Projects = ({ isDarkMode }: DarkModeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg md:text-xl"
      >
        My portfolio
      </motion.h4>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl md:text-[52px]">
          My latest projects
        </h2>
        <hr className="w-[15%] h-1 bg-black rounded-full mx-auto mt-2" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        skills in web design, development, and digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectData.map((project) => {
          const shortDesc =
            project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description;

          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className={`border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 cursor-pointer ${
                isDarkMode
                  ? "hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff] border-white"
                  : "hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] border-gray-400"
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {shortDesc}
                  {project.description.length > 100 && (
                    <span className="text-blue-500 cursor-pointer ml-1">
                      Read more
                    </span>
                  )}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <button
                    className={`px-6 py-2 text-sm rounded-sm transition border ${
                      isDarkMode
                        ? "border-white hover:bg-black"
                        : "bg-black/80 hover:bg-black text-white"
                    }`}
                  >
                    <a
                      href={project.link}
                      target="blank"
                      className="flex gap-2 items-center"
                    >
                      Live Demo{" "}
                      <Image
                        src={assets.link}
                        alt="link-icon"
                        className="w-4"
                      />
                    </a>
                  </button>
                  <Link
                    href={`/projects/${project.id}`}
                    className={`px-6 py-2 text-sm border rounded-sm border-gray-800 text-center ${
                      isDarkMode
                        ? "bg-white text-black"
                        : "bg-white hover:bg-white/80 text-black"
                    }`}
                  >
                    Project Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Link href="/projects">
          <button
            className={`px-8 py-3 rounded-full bg-black/80 text-white border border-white transition-all duration-300 cursor-pointer flex gap-2 items-center ${
              isDarkMode ? "hover:bg-[#2a004a]" : "hover:bg-black"
            }`}
          >
            Show More{" "}
            <Image
              src={assets.Right_Arrow_White}
              alt="right arrow"
              className="w-4"
            />
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
