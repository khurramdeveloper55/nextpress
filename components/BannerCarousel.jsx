"use client";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Travel",
    desc: "A journey into breathtaking destinations, hidden gems, and cultural wonders. Discover tips, stories, and guides to inspire your next adventure across the globe.",
    img: "/img/thumbs-1.jpg",
    thumb: "/img/thumbs-pagi-1.jpg",
  },
  {
    id: 2,
    title: "Fashion & Styles",
    desc: "A curated collection of fashion inspiration, beauty tutorials, and lifestyle recommendations. Explore the world of fashion through our eyes, from runway trends to everyday style.",
    img: "/img/thumbs-2.jpg",
    thumb: "/img/thumbs-pagi-2.jpg",
  },
  {
    id: 3,
    title: "Technology",
    desc: "Your guide to the latest innovations, tools, and digital trends shaping the modern world. From gadgets to software, explore how technology transforms everyday life.",
    img: "/img/thumbs-3.jpg",
    thumb: "/img/thumbs-pagi-3.jpg",
  },
  {
    id: 4,
    title: "Relationships",
    desc: "Insights into love, family, and friendships with practical advice and heartfelt stories. Explore ways to nurture meaningful connections and strengthen the bonds that matter most.",
    img: "/img/thumbs-4.jpg",
    thumb: "/img/thumbs-pagi-4.jpg",
  },
  {
    id: 5,
    title: "Design",
    desc: "A showcase of creativity, innovation, and aesthetics across interiors, graphics, and lifestyle. Find ideas, trends, and tips to bring beauty and function into every space.",
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
