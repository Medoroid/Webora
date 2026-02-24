"use client";

import Image from "next/image";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function TestimonialsSlider() {

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, TechStart",
      image: "/clients/client1.jpg",
      text: "Webora built our platform with amazing speed and performance. Clean UI and powerful backend.",
      rating: 5
    },
    {
      name: "Sara Ali",
      role: "Marketing Manager",
      image: "/clients/client2.jpg",
      text: "Professional team, fast delivery and amazing communication. Highly recommended.",
      rating: 5
    },
    {
      name: "Mohamed Khaled",
      role: "Startup Founder",
      image: "/clients/client3.jpg",
      text: "They transformed our idea into scalable product. Design exceeded expectations.",
      rating: 5
    },
    {
      name: "Nour Adel",
      role: "Product Manager",
      image: "/clients/client4.jpg",
      text: "Outstanding UX and responsiveness. Working with Webora was smooth and professional.",
      rating: 5
    },
    {
      name: "Nour Adel",
      role: "Product Manager",
      image: "/clients/client4.jpg",
      text: "Outstanding UX and responsiveness. Working with Webora was smooth and professional.",
      rating: 5
    },
    {
      name: "Nour Adel",
      role: "Product Manager",
      image: "/clients/client4.jpg",
      text: "Outstanding UX and responsiveness. Working with Webora was smooth and professional.",
      rating: 5
    },
    {
      name: "Nour Adel",
      role: "Product Manager",
      image: "/clients/client4.jpg",
      text: "Outstanding UX and responsiveness. Working with Webora was smooth and professional.",
      rating: 5
    },
    {
      name: "Nour Adel",
      role: "Product Manager",
      image: "/clients/client4.jpg",
      text: "Outstanding UX and responsiveness. Working with Webora was smooth and professional.",
      rating: 5
    },
  ];

  return (
    <section className="relative bg-[#020617] text-white py-32 px-6 overflow-hidden">

      {/* Animated Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22D3EE25,transparent_70%)] animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            What Our
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-3">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real reviews from companies who trusted Webora to build their digital success.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.2}
          spaceBetween={40}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          // pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative h-full rounded-3xl p-8 transition duration-500
                  backdrop-blur-xl border
                  ${isActive
                    ? "bg-white/10 border-cyan-400 shadow-[0_0_40px_#22D3EE55]"
                    : "bg-white/5 border-white/10"
                  }`}
                >

                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 opacity-10 w-16 h-16" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    "{t.text}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-4 mt-auto">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={55}
                      height={55}
                      className="rounded-full object-cover border border-cyan-400/40"
                    />

                    <div>
                      <h4 className="font-semibold text-lg">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>

                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="prev-btn bg-white/10 hover:bg-white/20 p-4 rounded-full transition shadow-lg">
            <ArrowLeft size={20} />
          </button>
          <button className="next-btn bg-white/10 hover:bg-white/20 p-4 rounded-full transition shadow-lg">
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}