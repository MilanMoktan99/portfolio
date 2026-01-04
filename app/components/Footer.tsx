import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { DarkModeProps } from '../types'

const Footer = ({isDarkMode}: DarkModeProps) => {
  return (
    <footer className='mt-20 py-6 mx-[10%] border-t border-gray-400'>
        <div className='flex flex-col items-center text-center md:flex-row md:justify-between md:items-start px-[10%] gap-8'>
          <div className='flex flex-col md:items-start'>
            <h1 className='text-4xl font-medium'>Milan<span className='text-red-400 font-extrabold'>.</span></h1>
            <a href="mailto:milanmok816@gmail.com" className="flex gap-2 mt-4 items-center">
              <Image src={isDarkMode ? assets.email_dark : assets.email} alt='mail-icon' className='w-6' />milanmok816@gmail.com
            </a>
            <ul className='flex gap-6 mt-4 justify-center'>
              <li><a target='blank' href="https://www.instagram.com/mm_milan00/"><Image src={assets.instagram} alt='social-icon' className='w-6' /></a></li>
              <li><a target='blank' href="https://github.com/MilanMoktan99"><Image src={isDarkMode ? assets.github_white : assets.github} alt='social-icon' className='w-6' /></a></li>
              <li><a target='blank' href="https://www.linkedin.com/in/milan-moktan/"><Image src={isDarkMode ? assets.linkedIn_White : assets.linkedIn} alt='social-icon' className='w-6' /></a></li>
            </ul>
            <a href="#home" className={`mt-6 md:flex items-center gap-2 text-white px-8 py-2 text-sm rounded-lg hidden duration-500 ${isDarkMode ? "border border-white bg-transparent hover:bg-[#2a004a]": "bg-black/80 hover:bg-black"}`}>
              Go to top <Image src={assets.Top_Arrow_white} alt='back to top' className='w-6 -rotate-90' />
            </a>
          </div>
          <div>
            <h1 className={`text-2xl font-medium ${isDarkMode ? "text-white/80": "text-gray-600"}`}>Navigation</h1>
            <ul className='flex flex-col items-center md:items-start'>
              <li><a className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`} href="#home">Home</a></li>
              <li><a className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`} href="#about">About me</a></li>
              <li><a className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`} href="#services">Services</a></li>
              <li><a className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`} href="#projects">Projects</a></li>
              <li><a className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`} href="#contact">Contact me</a></li>
            </ul>
          </div>
          <div>
            <h1 className={`text-2xl font-medium ${isDarkMode ? "text-white/80": "text-gray-600"}`}>Other pages</h1>
            <ul className='flex flex-col items-center md:items-start'>
              <li className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`}>Achievements</li>
              <li className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`}>Blog</li>
              <li className={`${isDarkMode ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`}>Gallery</li>
            </ul>
          </div>

        </div>
        <p className='border-t border-gray-400 text-center mt-6 py-3'>Ⓒ 2025 Milan Moktan, All rights reserved.</p>
    </footer>
  )
}

export default Footer