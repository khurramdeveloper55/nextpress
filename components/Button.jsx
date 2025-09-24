"use client";

import Link from "next/link";

export default function Button({ title }) {
  return (
    <Link href="">
      <span className="py-4 px-12 text-lg rounded-full font-bold bg-black text-white">
        {title}
      </span>
    </Link>
  );
}
