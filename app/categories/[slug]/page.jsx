"use client";

import BlogSkeleton from "@/components/BlogSkeleton";
import CategoryCard from "@/components/CategoryCard";
import CatsBcrumb from "@/components/CatsBcrumb";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import MainNavbar from "@/components/MainNavbar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/categories/${slug}`);
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Error fetching category posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [slug]);
  return (
    <div className="m-2">
      <MainNavbar />
      {loading && posts.length === 0 ? (
        <GlobalLoader />
      ) : (
        <CatsBcrumb posts={posts} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
          : posts.map((post, i) => (
              <CategoryCard key={post._id || i} post={post} index={i} />
            ))}
      </div>
      <Footer />
    </div>
  );
}
