"use client";

import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { DarkModeProps } from "../types";
import { motion } from "motion/react";

const Contact = ({isDarkMode}: DarkModeProps) => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending....");
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    if(!accessKey) {
        setResult("Missing access key");
        return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      viewport={{once: true}}
      id="contact"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20 relative overflow-hidden"
    >
      <div className={`absolute inset-0 -z-10 flex justify-center ${isDarkMode ? "hidden" : "block"}`}>
        <Image
          src={assets.footer_bg}
          alt="Footer background"
          style={{
            width: "90%",
            height: "auto",
          }}
        />
      </div>
      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{once: true}}
        className="text-center mb-2 text-lg md:text-xl">
        Connect with me
      </motion.h4>
      <motion.div
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        viewport={{once: true}}
      >
        <h2 className="text-center text-3xl sm:text-4xl md:text-[52px]">Get in touch</h2>
        <hr className="w-[15%] h-1 bg-black rounded-full mx-auto mt-2" />
      </motion.div>
      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Got a project, idea, or question? Drop a message using the form below. I am always open to new opportunities and collaborations.
      </motion.p>

      <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        viewport={{once: true}}
        onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.1}}
            viewport={{once: true}}
            type="text"
            placeholder="Enter your name"
            required
            className={`p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "bg-[#2a004a]/60 border-white" : "bg-white border-gray-400"}`}
            name="name"
          />
          <motion.input
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            viewport={{once: true}}
            type="email"
            placeholder="Enter your email"
            required
            className={`p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "bg-[#2a004a]/60 border-white" : "bg-white border-gray-400"}`}
            name="email"
          />
        </div>
        <motion.textarea
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.3}}
          viewport={{once: true}}
          rows={6}
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${isDarkMode ? "bg-[#2a004a]/60 border-white" : "bg-white border-gray-400"}`}
          name="message"
        ></motion.textarea>
        <motion.button 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 border border-white text-white rounded-full mx-auto cursor-pointer duration-500 ${isDarkMode ? "bg-transparent hover:bg-[#2a004a]" :"bg-black/80 hover:bg-black"}`}
        >
            Submit now <Image src={assets.Right_Arrow_White} alt="arrow" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
