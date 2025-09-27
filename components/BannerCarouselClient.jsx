"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BannerCarouselClient({ slides }) {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="relative overflow-hidden rounded-lg h-[550px] mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].img}
              alt={slides[current].title}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
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

      {/* Thumbnails */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 rounded-full overflow-hidden border-8 outline-1 outline-neutral-500 transition ${
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
    </>
  );
}
