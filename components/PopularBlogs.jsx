"use client";

import { PopBlogCard } from "./PopBlogCard";
import { SectionHeading } from "./SectionHeaing";

export function PopularBlogs() {
  return (
    <section className="pt-12">
      <SectionHeading title="Most Popular" link="Discover more" />
      <div className="grid grid-cols-3 gap-6">
        <PopBlogCard />

        <PopBlogCard />

        <PopBlogCard />

        <PopBlogCard />

        <PopBlogCard />

        <PopBlogCard />
      </div>
    </section>
  );
}
