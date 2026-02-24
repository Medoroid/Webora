"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion, Variants,easeOut } from "framer-motion";
export default function ContactSection() {


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
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };
      async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "4e9b5710-0a65-4ef9-955e-12ddff6cd875");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
      } 
  return (
    <motion.section  variants={container} 
      initial="hidden" 
      animate="show"  id="contact" className="relative bg-[#020617] text-white py-28 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E925,transparent_70%)]"></div>
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Logo Watermark */}
      <Image
        src={logo}
        alt="Logo"
        className="absolute left-[-200px] bottom-10 opacity-10 blur-2xl w-[700px] pointer-events-none"
      />

      <motion.div  variants={item} className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2   variants={item} className="text-4xl md:text-6xl font-extrabold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>

          <motion.p   variants={item} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea or need help with your business?
            Send us a message and we’ll get back to you soon.
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Info */}
          <div className="space-y-6">
            <motion.div   variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-400">El Mahalla El Kubra, 31951</p>
            </motion.div>

            <motion.div   variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-400">webora27@gmail.com</p>
            </motion.div>

            <motion.div   variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-400">‏+20 10 33944929‏
</p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}  variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6">

            <motion.input
              variants={item}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            />

            <motion.input
              variants={item}
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            />

            <motion.textarea
              variants={item}
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            ></motion.textarea>

            <motion.button
              variants={item}
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_25px_#22D3EE] hover:scale-105 transition"
            >
              Send Message →
            </motion.button>

          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
}