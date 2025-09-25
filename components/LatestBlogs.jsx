"use client";

import useLatestBlogs from "@/hooks/useLatestBlogs";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";
import BlogSkeleton from "./BlogSkeleton";

export default function LatestBlogs() {
  const { posts, loading, error } = useLatestBlogs();

  return (
    <section className="pt-12">
      <SectionHeading title="Latest Blogs" link="Discover more" />
      {loading ? (
        <BlogSkeleton count={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
