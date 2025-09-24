"use client";

import { ChevronRight } from "lucide-react";

export default function SectionHeading({ title, link }) {
  return (
    <div className="font-semibold flex justify-between border-1 rounded-sm p-5 my-4">
      <h3>{title}</h3>
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 cursor-pointer hover:text-black transition">
        {link}
        <ChevronRight className="w-5 h-5" />
      </h3>
    </div>
  );
}
