"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
  import { motion } from "framer-motion";
export default function Footer() {
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
    <motion.footer variants={container} initial='hidden' whileInView={'show'}  className="relative bg-[#020617] text-white pt-20 pb-10 px-6 overflow-hidden border-t border-white/10">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E915,transparent_70%)]"></div>
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Logo Watermark */}
      <Image
        src={logo}
        alt="Logo"
        className="absolute right-[-200px] bottom-0 opacity-10 blur-2xl w-[600px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <motion.div  variants={item} >
            <div className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Logo" width={40} height={40}/>
              <h3 className="text-2xl font-bold">Webora</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build modern websites, apps and branding solutions
              that help businesses grow and shine online.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={item} >
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
              <li className="hover:text-cyan-400 cursor-pointer">Portfolio</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>SEO Optimization</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 El Mahalla El Kubra, 31951</li>
              <li>📧 webora27@gmail.com</li>
              <li>📞 ‏+20 10 33944929‏
 </li>
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div variants={item} className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} Webora. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-cyan-400 cursor-pointer">Privacy</span>
            <span className="hover:text-cyan-400 cursor-pointer">Terms</span>
            <span className="hover:text-cyan-400 cursor-pointer">Support</span>
          </div>

        </motion.div>
      </div>
    </motion.footer>
  );
}