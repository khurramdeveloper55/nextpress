"use client";

export default function SectionHeading({ title, link }) {
  return (
    <div className="font-semibold flex justify-between border-1 rounded-sm p-5 my-4">
      <h3>{title}</h3>
      <h3>{link}</h3>
    </div>
  );
}
