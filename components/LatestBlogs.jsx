"use client";

import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeaing";

export default function LatestBlogs() {
  return (
    <section className="pt-12">
      <SectionHeading title="Latest Blogs" link="Discover more" />
      <div className="grid grid-cols-4 gap-6">
        <BlogCard />

        <BlogCard />

        <BlogCard />

        <BlogCard />

        <BlogCard />

        <BlogCard />
      </div>
    </section>
  );
}
