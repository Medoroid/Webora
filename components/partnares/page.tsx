"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function PartnersSection() {
  const partners = [
    { name: "Google", image: "/partners/google.png" },
    { name: "Microsoft", image: "/partners/microsoft.png" },
    { name: "Amazon", image: "/partners/amazon.png" },
    { name: "Meta", image: "/partners/meta.png" },
    { name: "Netflix", image: "/partners/netflix.png" },
    { name: "Spotify", image: "/partners/spotify.png" },
  ];
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section  variants={container} 
      initial="hidden" 
      animate="show"   className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">

      {/* نفس Glow بتاع Portfolio */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0EA5E925,transparent_70%)]"></div>
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Logo Watermark */}
      <Image
        src={logo}
        alt="Webora Logo"
        className="absolute left-[-200px] bottom-0 opacity-10 blur-2xl w-[600px] pointer-events-none"
      />

      <motion.div  variants={item} className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.div className="text-center mb-14">
          <motion.h2 variants={item} className="text-4xl md:text-6xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partners
            </span>
          </motion.h2>

          <motion.p  variants={item} className="text-gray-400 max-w-2xl mx-auto">
            Trusted by companies and startups around the world.
          </motion.p>
        </motion.div>

        {/* Slider */}
 <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  loop={true}
  speed={5000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,   // يخليه مايوقفش
    pauseOnMouseEnter: true,       // يقف بس لما hover
  }}
  slidesPerView={2}
  breakpoints={{
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>
          {partners.map((partner, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center justify-center h-32 transition hover:shadow-[0_0_25px_#22D3EE40]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </motion.div>
    </motion.section>
  );
}