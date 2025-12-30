import { assets, servicesData } from "@/assets/assets";
import Image from "next/image";
import { DarkModeProps } from "../types";
import { motion } from "motion/react";

const Services = ({isDarkMode}: DarkModeProps) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{once: true}}
    id="services" className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      viewport={{once: true}}
      className="text-center mb-2 text-lg md:text-xl">
        What I offer
      </motion.h4>
      <div>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        viewport={{once: true}}
        className="text-center text-3xl sm:text-4xl md:text-[52px]">
          My services
        </motion.h2>
        <hr className="w-[15%] h-1 bg-black rounded-full mx-auto mt-2" />
      </div>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      viewport={{once: true}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'm a Web Developer and UI/UX Designer who loves creating clean, modern, and user-friendly digital experiences.
      </motion.p>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}
      viewport={{once: true}}
      className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 my-10">
        {
            servicesData.map(({icon, iconDark, title, description, link}, index) => (
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index} className={`border px-8 py-12 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? "hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff] border-white" : "hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] border-gray-400"}`}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-12" />
                    <h3 className="text-lg my-4 font-medium">{title}</h3>
                    <p className={`text-sm leading-5 ${isDarkMode ? "text-white/80": "text-gray-600"}`}>{description}</p>
                    <a href={link} className="flex items-center gap-2 text-sm mt-5">
                        Read more <Image src={isDarkMode ? assets.rightArrowWhite : assets.rightArrow} alt="right arrow" className="w-4" />
                    </a>
                </motion.div>
            ))
        }
      </motion.div>
    </motion.div>
  );
};

export default Services;
