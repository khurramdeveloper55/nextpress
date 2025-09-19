"use client";

import Link from "next/link";

export default function Button({ title }) {
  return (
    <span className="py-4 px-12 text-lg rounded-full font-bold bg-black text-white">
      <Link href="/signup">{title}</Link>
    </span>
  );
}
