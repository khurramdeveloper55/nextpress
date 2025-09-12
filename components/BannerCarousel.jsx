"use client";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title:
      "Post-modernist Apartment Design That Combines Bold Colors, Art, and Geometric Shapes",
    subtitle: "Travel",
    desc: "Hi - I’m Chloe Jacobs - the creator of Polor. Welcome to my world! Have a good time when exploring",
    img: "/img/thumbs-1.jpg",
    thumb: "/img/thumbs-pagi-1.jpg",
  },
  {
    id: 2,
    title: "Minimalist Lifestyle with Neutral Tones and Calm Spaces",
    subtitle: "Lifestyle",
    desc: "Discover the secrets of balanced and peaceful living with me.",
    img: "/img/thumbs-2.jpg",
    thumb: "/img/thumbs-pagi-2.jpg",
  },
  {
    id: 3,
    title: "Technology Shaping the Future of Creative Industries",
    subtitle: "Technology",
    desc: "Join me as we explore groundbreaking innovations.",
    img: "/img/thumbs-3.jpg",
    thumb: "/img/thumbs-pagi-3.jpg",
  },
  {
    id: 4,
    title: "Love, Relationships, and the Art of Emotional Growth",
    subtitle: "Relationships",
    desc: "Let's dive into the world of meaningful connections.",
    img: "/img/thumbs-4.jpg",
    thumb: "/img/thumbs-pagi-4.jpg",
  },
  {
    id: 5,
    title: "Adventures Around the World That Inspire Your Soul",
    subtitle: "Travel",
    desc: "Follow me on exciting journeys across the globe.",
    img: "/img/thumbs-5.jpg",
    thumb: "/img/thumbs-pagi-5.jpg",
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full mx-auto pt-8 border-t-1 mt-6">
      <div className="relative overflow-hidden rounded-lg h-[550px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <Image
              src={slides[current].img}
              alt={slides[current].title}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

            {/* Content */}
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center z-10">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="p-2 border rounded-2xl bg-transparent inline-block"
              >
                {slides[current].subtitle}
              </motion.span>

              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="text-[32px] md:text-[40px] font-bold mt-4 leading-snug max-w-3xl"
              >
                {slides[current].title}
              </motion.h2>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="mt-3 max-w-2xl"
              >
                {slides[current].desc}
              </motion.p>

              <motion.button
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-xl mt-6 px-6 py-2  transition"
              >
                Discover More
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Circle Thumbnails */}
      <div className="flex justify-center gap-4 mt-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-28 h-28 rounded-full overflow-hidden border-8 outline-1 outline-neutral-500 transition ${
              index === current
                ? "border-transparent outline-black outline-2"
                : "border-transparent"
            }`}
          >
            <Image
              src={slide.thumb}
              alt={slide.title}
              width={140}
              height={140}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
