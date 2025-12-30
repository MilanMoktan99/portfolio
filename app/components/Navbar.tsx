"use client";

import Image from "next/image";
import { assets } from "@/assets/assets.js";
import { useEffect, useRef, useState } from "react";
import { DarkModeNavbarProps } from "../types";

const Navbar = ({isDarkMode, setIsDarkMode}: DarkModeNavbarProps) => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${isDarkMode ? "hidden" : "block"}`}>
        <Image
          src={assets.HeaderBackground}
          alt="Background Header image"
          className="w-full"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ease-in-out 
          ${
            scroll ? isDarkMode ? "bg-[#11001F] border-b border-white/20 py-2" : "py-2 bg-white/20 backdrop-blur-lg shadow-sm" : "py-4"
          }`}
      >
        <div className="flex gap-4 items-center md:gap-8">
          <h1 className="text-4xl font-medium">
            <a href="#home">
              Milan<span className="text-red-400 font-extrabold">.</span>
            </a>
          </h1>
          <ul className='flex md:hidden lg:flex gap-4 mt-4 items-center pb-3'>
            <li><a target="blank" href="https://www.instagram.com/mm_milan00/"><Image src={assets.instagram} alt='social-icon' className='w-6' /></a></li>
            <li><a target="blank" href="https://github.com/MilanMoktan99"><Image src={isDarkMode ? assets.github_white : assets.github} alt='social-icon' className='w-6' /></a></li>
            <li><a target="blank" href="https://x.com/MilanMoktan816"><Image src={isDarkMode ? assets.X_white : assets.X} alt='social-icon' className='w-6' /></a></li>
          </ul>
        </div>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex gap-4 lg:gap-8 rounded-full px-12 py-3 ${
            scroll ? "" : isDarkMode ? "bg-transparent border border-white/50" : "bg-white/50 shadow-sm backdrop-blur-md"
          }`}
        >
          {["Home", "About me", "Services", "Projects", "Contact me"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.split(" ")[0].toLowerCase()}`}
                  className="hover:text-gray-400 duration-300 hover:font-medium"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.Sun_Icon : assets.Moon_Icon}
              alt="moon-icon"
              className="w-6 cursor-pointer"
              title="light/dark mode"
            />
          </button>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 border border-gray-500 px-10 py-2.5 ml-4 rounded-full"
          >
            Contact <Image src={isDarkMode ? assets.Arrow_white : assets.Arrow} alt="" className="w-3" />
          </a>

          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.Menu_white : assets.Menu_black}
              alt="menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>
      </nav>

      {/*  Mobile menu */}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-24 px-10 fixed top-0 right-0
        shadow-sm h-screen z-50 w-64
        transition-transform duration-500
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        ${isDarkMode ? "bg-[#2a004a] text-white" : "bg-rose-50 text-black"}`}
      >
        <li className="absolute left-6 top-6" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.Close_white : assets.Close_black}
            alt="close icon"
            className="w-6 cursor-pointer"
          />
        </li>

        <li>
          <a href="#home" className="text-lg" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-lg" onClick={closeMenu}>
            About me
          </a>
        </li>
        <li>
          <a href="#services" className="text-lg" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="text-lg" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lg" onClick={closeMenu}>
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
