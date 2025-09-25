"use client";

import CategoryCard from "@/components/CategoryCard";
import CatsBcrumb from "@/components/CatsBcrumb";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`/api/categories/${slug}`);
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Error fetching category posts", err);
      }
    };
    fetchCategory();
  }, [slug]);
  return (
    <div className="m-2">
      <MainNavbar />
      <CatsBcrumb posts={posts} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
        {posts.map((post, i) => (
          <CategoryCard post={post} index={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
