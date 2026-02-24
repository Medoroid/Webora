"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {

  // ✅ Fix TypeScript Error
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative bg-[#020617] text-white pt-20 pb-10 px-6 overflow-hidden border-t border-white/10"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E915,transparent_70%)]"></div>

      {/* Logo Watermark */}
      <Image
        src={logo}
        alt="Webora Logo"
        className="absolute right-[-200px] bottom-0 opacity-10 blur-2xl w-[600px]"
        priority
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Webora Logo" width={40} height={40}/>
              <h3 className="text-2xl font-bold">Webora</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build modern websites, apps and branding solutions
              that help businesses grow online.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5 text-gray-400">
              <Facebook className="hover:text-cyan-400 cursor-pointer"/>
              <Instagram className="hover:text-cyan-400 cursor-pointer"/>
              <Linkedin className="hover:text-cyan-400 cursor-pointer"/>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
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
              <li>📍 El Mahalla El Kubra, Egypt</li>
              <li>📧 webora27@gmail.com</li>
              <li>📞 +20 10 33944929</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={item}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Webora. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cyan-400">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400">Terms</Link>
            <Link href="/support" className="hover:text-cyan-400">Support</Link>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
}