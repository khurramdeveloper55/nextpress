"use client";

import useLatestBlogs from "@/hooks/useLatestBlogs";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

export default function LatestBlogs() {
  const { posts, loading, error } = useLatestBlogs();
  return (
    <section className="pt-12">
      <SectionHeading title="Latest Blogs" link="Discover more" />
      <div className="grid grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <BlogCard key={post._id} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
