"use client";

import {
  Code,
  Cloud,
  Rocket,
  ShoppingCart,
  PenTool,
  Plug,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Code, title: "Web Applications", desc: "Scalable React & Next.js web apps with clean architecture." },
  { icon: Cloud, title: "SaaS Development", desc: "Cloud-based SaaS platforms tailored to your business." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting landing pages with modern UI/UX." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Fast, secure online stores with payment integration." },
  { icon: PenTool, title: "UI/UX Design", desc: "User-centered, beautiful and intuitive interfaces." },
  { icon: Plug, title: "API Integration", desc: "Seamless integrations with external services & APIs." },
];

export default function Services() {

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="services"
      className="relative bg-[#0F172A] text-white py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0EA5E930,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.h2 variants={item} className="text-4xl md:text-6xl font-extrabold text-center mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <motion.p variants={item} className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          We build modern, scalable and beautiful digital solutions using the
          latest technologies and best development practices.
        </motion.p>

        {/* Grid */}
        <motion.div variants={container} className="grid md:grid-cols-3 gap-10">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-[0_0_35px_#22D3EE40]"
              >

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 group-hover:scale-110 transition">
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_30px_#22D3EE] transition-all duration-300"
          >
            View All Services
            <span className="ml-2 inline-block group-hover:translate-x-1 transition">
              →
            </span>
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
}