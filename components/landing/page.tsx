"use client";
import React from 'react'
import Image from 'next/image'
import background from '../../public/63f18a6dfb.jpg'
import { motion } from "framer-motion";

export default function Landing() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.main 
      variants={container} 
      initial="hidden" 
      animate="show" 
      id='home' 
      className="relative min-h-screen text-white overflow-hidden"
    >

      {/* Background */}
      <Image
        src={background}
        alt="Background"
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Overlay */}
      <motion.div 
        variants={item}
        className="absolute inset-0 bg-black/50 -z-10"
      />

      {/* Content */}
      <div className="relative z-10">

        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            We Build <span className="bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] bg-clip-text text-transparent">
              Modern Websites
            </span> That Grow Your Business
          </motion.h1>

          <motion.p 
            variants={item}
            className="mt-6 text-gray-300 max-w-2xl"
          >
            Webora helps startups and businesses build powerful digital experiences 
            with modern technologies and creative design.
          </motion.p>

          <motion.div 
            variants={item}
            className="mt-8 flex gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] font-semibold"
            >
              Get Started
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-gray-400 hover:border-[#22D3EE] transition"
            >
              View Portfolio
            </motion.button>
          </motion.div>

        </section>
      </div>

    </motion.main>
  )
}