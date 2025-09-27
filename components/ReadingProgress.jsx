"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article");
      if (!article) return;

      const { top, height } = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // total scrollable area of article
      const total = height - windowHeight;
      const scrolled = Math.min(Math.max(-top, 0), total);

      setProgress((scrolled / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-4 sm:p-6 text-center flex items-center justify-center">
      <svg className="absolute top-0 left-0" width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <span className="text-xs sm:text-sm font-medium relative z-10">
        15 Mins Read
      </span>
    </div>
  );
}
