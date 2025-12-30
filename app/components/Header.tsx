import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Ovo } from "next/font/google";
import { DarkModeProps } from "../types";
import { motion } from "motion/react"

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = ({isDarkMode}: DarkModeProps) => {
  return (
    <div id="home" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
        <motion.h2
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.5}}
          viewport={{once: true}}
          className={`flex gap-2 items-end text-2xl md:text-3xl ${ovo.className} antialiased`}
        >
          Hi! I am{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Milan Moktan
          </span>
          <Image src={assets.Hand_icon} alt="" className="w-6" />
        </motion.h2>

        <motion.h1 
          initial={{y: -30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.5}}
          viewport={{once: true}}
          className="text-3xl sm:text-4xl md:text-[56px]">
          A passionate Web Developer and UI/UX Designer crafting responsive, visual appealing, and intuitive interfaces.
        </motion.h1>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.7}}
          viewport={{once: true}}
          className={`max-w-2xl mx-auto text-lg sm:xl ${isDarkMode ? "text-white" : "text-gray-500"}`}>
            I'm a Web Developer and UI/UX Designer who loves creating clean, modern, and user-friendly digital experiences.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 1}}
              viewport={{once: true}}
              href="#contact" className={`px-10 py-3 border border-white rounded-full flex items-center gap-2 text-white  ${isDarkMode ? "bg-transparent hover:bg-[#2a004a]" : "bg-black/80 hover:bg-black"} duration-500 `}>
                Contact me <Image src={assets.Right_Arrow_White} alt="" className="w-4" />
            </motion.a>

            <motion.a
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 1.2}}
            viewport={{once: true}}
              href="/Resume.pdf" download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 ${isDarkMode ? "bg-white text-black": ""}`}>
                My Resume <Image src={assets.Download_Icon} alt="" className="w-4" />
            </motion.a>
        </div>

      </div>
  );
};

export default Header;
