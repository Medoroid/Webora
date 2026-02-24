'use client'
import React, { useState } from 'react'
import logo from '../../public/logo.png'
import language from '../../public/icons8-english-to-arabic-96.png'
import { HiMenuAlt1 } from "react-icons/hi";
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const links = ["Home","About","Services","Portfolio","Testimonials","Contact"]

  return (
<nav className="fixed top-0 w-full z-50 bg-[#020617]/80 border-b border-white/10">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    {/* Logo */}
    <a href="#" className="flex items-center gap-3 group">
      <Image src={logo} alt="Webora Logo" width={55} height={55}
        className="group-hover:scale-110 transition"/>
   
    </a>

    {/* Desktop Links */}
    <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
      {links.map((l,i)=>(
        <li key={i}>
          <a href={`#${l.toLowerCase()}`}
            className="relative hover:text-cyan-400 transition
            after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px]
            after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
            hover:after:w-full after:transition-all">
            {l}
          </a>
        </li>
      ))}
    </ul>

    {/* Right Buttons */}
    <div className="hidden md:flex items-center gap-4">

      {/* Dark Mode */}
      <button
        onClick={()=>setDark(!dark)}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
        {dark ?
          <MdLightMode className="text-2xl text-cyan-400"/> :
          <MdDarkMode className="text-2xl text-cyan-400"/>}
      </button>
      {/* lang Mode */}
      <button
        onClick={()=>setDark(!dark)}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
        <Image src={language} width={30} height={30} alt="lang"/>
      </button>

      {/* CTA */}
      <button className="px-6 py-2 rounded-xl
        bg-gradient-to-r from-cyan-400 to-blue-500
        text-black font-semibold shadow-[0_0_20px_#22D3EE]
        hover:scale-105 transition">
        Get a Quote →
      </button>

    </div>

    {/* Mobile Icons */}
    <div className="md:hidden flex items-center gap-3">

      <button
        onClick={()=>setDark(!dark)}
        className="p-2 rounded-lg bg-white/5">
        <MdLightMode className="text-2xl text-cyan-400"/>
      </button>

      <button onClick={()=>setIsMenuOpen(true)}>
        <HiMenuAlt1 className="text-3xl text-white"/>
      </button>

    </div>

  </div>

{/* ================= Mobile Menu ================= */}

<div
  className={`fixed inset-0 z-[99999999999999999999999999999] md:hidden bg-black/70 backdrop-blur-sm
  transition-all duration-300
  ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
  onClick={()=>setIsMenuOpen(false)}
>

  <div
    onClick={(e)=>e.stopPropagation()}
    className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px]
    bg-[#020617] border-l border-white/10 p-6
    transform transition-transform duration-500
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
  >

    {/* Header */}
    <div className="flex justify-between items-center mb-10">
      <Image src={logo} width={45} height={45} alt="logo"/>
      <IoClose
        onClick={()=>setIsMenuOpen(false)}
        className="text-3xl text-cyan-400 cursor-pointer hover:rotate-90 transition"/>
    </div>

    {/* Links */}
    <ul className="flex flex-col gap-6 text-lg text-white">
      {links.map((l,i)=>(
        <li key={i}>
          <a href="#"
            onClick={()=>setIsMenuOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-white/5 hover:text-cyan-400 transition">
            {l}
          </a>
        </li>
      ))}
    </ul>

    {/* Language */}
    <button className="mt-10 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition">
      <Image src={language} width={30} height={30} alt="lang"/>
      <span className="text-white">Language</span>
    </button>

    {/* CTA */}
    <button className="mt-6 w-full py-3 rounded-full
      bg-gradient-to-r from-cyan-400 to-blue-500
      text-black font-semibold shadow-[0_0_20px_#22D3EE]
      hover:scale-105 transition">
      Get a Quote →
    </button>

  </div>
</div>

</nav>
  )
}