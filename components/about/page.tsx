"use client";

import { CheckCircle, Code, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
      className="relative bg-[#020617] text-white py-28 px-6 overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E925,transparent_70%)] animate-pulse"></div>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div variants={item}>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Webora
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl"
          >
            Webora is a modern web development company specializing in building
            scalable React and Next.js applications. We help startups and
            businesses launch fast, beautiful, and high-performance digital products.
          </motion.p>

          <motion.ul variants={item} className="space-y-4 mb-10">
            {[
              "Clean & scalable code architecture",
              "Modern UI/UX with high conversion",
              "Fast performance & SEO optimized"
            ].map((text, index) => (
              <motion.li
                key={index}
                variants={item}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckCircle className="text-cyan-400" size={20} />
                {text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_25px_#22D3EE] transition-all duration-300"
          >
            Learn More
            <span className="ml-2 group-hover:translate-x-1 inline-block transition">
              →
            </span>
          </motion.button>

        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-6"
        >
          <Stat icon={Code} number="50+" text="Projects Completed" />
          <Stat icon={Users} number="30+" text="Happy Clients" />
          <Stat icon={Rocket} number="3+" text="Years Experience" />
          <Stat icon={CheckCircle} number="100%" text="Client Satisfaction" />
        </motion.div>

      </div>
    </motion.section>
  );
}

function Stat({ icon: Icon, number, text }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-[0_0_30px_#22D3EE55]"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

      <Icon className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={40} />

      <h3 className="text-4xl font-extrabold mb-2">{number}</h3>
      <p className="text-gray-400 text-sm tracking-wide">{text}</p>
    </motion.div>
  );
}