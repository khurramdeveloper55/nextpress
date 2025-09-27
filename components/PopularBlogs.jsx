import PopBlogCard from "./PopBlogCard";
import SectionHeading from "./SectionHeading";
import BlogSkeleton from "./BlogSkeleton";
import { headers } from "next/headers";
import axios from "axios";

export default async function PopularBlogs() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await axios.get(
    `${protocol}://${host}/api/posts/public?limit=20`,
    {
      cache: "no-store",
    }
  );

  const shuffled = res.data.posts;
  const posts = shuffled.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <section className="pt-12">
      <SectionHeading title="Most Popular" link="Discover more" />
      {posts.length === 0 ? (
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
