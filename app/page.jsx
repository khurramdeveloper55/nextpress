"use client";

import BannerCarousel from "@/components/BannerCarousel";
import Cta from "@/components/Cta";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import LatestBlogs from "@/components/LatestBlogs";
import MainNavbar from "@/components/MainNavbar";
import NewsLetter from "@/components/NewsLetter";
import PopularBlogs from "@/components/PopularBlogs";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <GlobalLoader />;
  return (
    <div className="m-3">
      <MainNavbar />
      <BannerCarousel />
      <LatestBlogs />
      <Cta />
      <FeaturedBlogs />
      <PopularBlogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
