import { assets, infoList, tools } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { DarkModeProps } from "../types";
import { motion } from "motion/react";

const About = ({isDarkMode}: DarkModeProps) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      id="about" className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{once: true}}
        className="text-center mb-2 text-lg md:text-xl">
        Introduction
      </motion.h4>
      <motion.div
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        viewport={{once: true}}>
        <h2 className="text-center text-3xl sm:text-4xl md:text-[52px]">
          About me
        </h2>
        <hr className="w-[15%] h-1 bg-black rounded-full mx-auto mt-2" />
      </motion.div>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="w-68 sm:w-84 rounded-3xl max-w-none aspect-square">
          <Image
            src={assets.Portfolio_image}
            alt="Portfolio image"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          viewport={{once: true}}
          className="flex-1">
          <div className="mb-10">

            <p className={`max-w-2xl ${isDarkMode ? "text-white/80" : "text-gray-500"}`}>
              I'm a <span className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Web-developer</span> and <span className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>UI/UX designer</span> focused on creating clean, modern, minimalist, and user-freindly websites. I enjoy building responsive interfaces and transforming ideas into engaging digital products.
            </p>
            <p className={`max-w-2xl ${isDarkMode ? "text-white/80" : "text-gray-500"}`}>
              I love minimalist design and optimizing visual patterns to create professional, clear, and intuitive user experiences.
            </p>
          </div>

          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            viewport={{once: true}}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li
              whileHover={{scale: 1.05}}
              className={`border-[.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? "border-white hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff]" : "border-gray-400 hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"}`}
              key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt='icon' className="w-7 mt-3" />
                <h3 className="font-semibold my-3">{title}</h3>
                <p className={`text-sm ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1.3}}
          viewport={{once: true}}
          className="my-5">
            Tools I use
          </motion.h4>
          
          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 1.5, duration: 0.6}}
          viewport={{once: true}}
          className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool, index) => (
              <motion.li 
              whileHover={{scale: 1.1}}
              key={index} className="flex items-center justify-center border aspect-square w-12 sm:w-14 border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-">
                <Image src={tool} alt="tools" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default About;
