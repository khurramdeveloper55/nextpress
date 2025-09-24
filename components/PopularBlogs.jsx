"use client";

import usePopularBlogs from "@/hooks/usePopularBlogs";
import PopBlogCard from "./PopBlogCard";
import SectionHeading from "./SectionHeading";

export default function PopularBlogs() {
  const { posts, loading, error } = usePopularBlogs();
  return (
    <section className="pt-12">
      <SectionHeading title="Most Popular" link="Discover more" />
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <PopBlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
