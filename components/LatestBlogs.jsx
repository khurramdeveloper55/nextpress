import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";
import BlogSkeleton from "./BlogSkeleton";
import { headers } from "next/headers";
import axios from "axios";

export default async function LatestBlogs() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await axios.get(
    `${protocol}://${host}/api/posts/public?limit=8`,
    {
      cache: "no-store",
    }
  );

  const posts = res.data.posts;

  return (
    <section className="pt-12">
      <SectionHeading title="Latest Blogs" link="Discover more" />
      {posts.length === 0 ? (
        <BlogSkeleton count={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
