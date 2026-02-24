"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion, Variants } from "framer-motion";
export default function PortfolioSection() {
  const projects = [
    { title: "E-Commerce Website", category: "Web Development", image: "/portfolio/project1.jpg" },
    { title: "Corporate Landing Page", category: "UI/UX Design", image: "/portfolio/project2.jpg" },
    { title: "Brand Identity", category: "Branding", image: "/portfolio/project3.jpg" },
    { title: "Dashboard System", category: "Web App", image: "/portfolio/project4.jpg" },
    { title: "Mobile App Design", category: "UI/UX", image: "/portfolio/project5.jpg" },
    { title: "Startup Website", category: "Web Development", image: "/portfolio/project6.jpg" },
  ];
const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section variants={container} initial='hidden' whileInView={'show'}  id="portfolio" className="relative bg-[#020617] text-white py-28 px-6 overflow-hidden">

      {/* Glow Background نفس About */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E925,transparent_70%)]"></div>
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Logo Watermark */}
      <Image
        src={logo}
        alt="Webora Logo"
        className="absolute right-[-200px] top-10 opacity-10 blur-2xl w-[700px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 variants={item} className="text-4xl md:text-6xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>

          <motion.p variants={item} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our latest projects crafted with modern design,
            fast performance and clean scalable code.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <motion.div
            variants={item}
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_35px_#22D3EE40]"
            >

              {/* Image */}
              <motion.div variants={item} className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_20px_#22D3EE]">
                    View Project →
                  </button>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div variants={item} className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </motion.div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div variants={item} className="text-center mt-16">
          <button className="group px-10 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_30px_#22D3EE] hover:scale-105 transition-all duration-300">
            View All Projects
            <span className="ml-2 inline-block group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}
