"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion, Variants, easeOut } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      '4e9b5710-0a65-4ef9-955e-12ddff6cd875'
    );

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result: { success: boolean } = await response.json();

      if (result.success) {
        form.reset();
        setSuccess(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }

    setLoading(false);
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="contact"
      className="relative bg-[#020617] text-white py-28 px-6 overflow-hidden"
    >
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

      <motion.div variants={item} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project idea? Send us a message and we’ll reply soon.
          </motion.p>
        </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

  {/* Info */}
  <div className="space-y-6">
    <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
      <p className="text-gray-400">El Mahalla El Kubra, 31951</p>
    </motion.div>

    <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
      <p className="text-gray-400">webora27@gmail.com</p>
    </motion.div>

    <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
      <p className="text-gray-400">+20 10 33944929</p>
    </motion.div>
  </div>

  {/* Form */}
  <motion.form
    onSubmit={handleSubmit}
    variants={item}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6"
  >
    <motion.input
      variants={item}
      type="text"
      name="name"
      required
      placeholder="Your Name"
      className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
    />

    <motion.input
      variants={item}
      type="email"
      name="email"
      required
      placeholder="Your Email"
      className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
    />

    <motion.textarea
      variants={item}
      name="message"
      rows={5}
      required
      placeholder="Your Message"
      className="w-full p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
    />

    <motion.button
      variants={item}
      type="submit"
      disabled={loading}
      className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_25px_#22D3EE] transition disabled:opacity-50"
    >
      {loading ? "Sending..." : "Send Message →"}
    </motion.button>

    {success && (
      <p className="text-green-400 text-sm text-center">
        ✅ Message sent successfully!
      </p>
    )}
  </motion.form>

</div>
          
      </motion.div>
    </motion.section>
  );
}