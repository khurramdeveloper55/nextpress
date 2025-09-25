"use client";

import usePopularBlogs from "@/hooks/usePopularBlogs";
import PopBlogCard from "./PopBlogCard";
import SectionHeading from "./SectionHeading";
import BlogSkeleton from "./BlogSkeleton";

export default function PopularBlogs() {
  const { posts, loading, error } = usePopularBlogs();

  return (
    <section className="pt-12">
      <SectionHeading title="Most Popular" link="Discover more" />
      {loading ? (
        <BlogSkeleton count={3} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PopBlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
