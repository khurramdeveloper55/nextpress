import CategoryCard from "@/components/CategoryCard";
import CatsBcrumb from "@/components/CatsBcrumb";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import axios from "axios";
import { headers } from "next/headers";

export default async function Page({ params }) {
  const { slug } = await params;

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await axios.get(`${protocol}://${host}/api/categories/${slug}`);
  const posts = res.data.posts;
  return (
    <div className="m-2">
      <MainNavbar />

      <CatsBcrumb posts={posts} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
        {posts.map((post) => (
          <CategoryCard key={post._id || i} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
