import BannerCarousel from "@/components/BannerCarousel";
import Cta from "@/components/Cta";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import LatestBlogs from "@/components/LatestBlogs";
import MainNavbar from "@/components/MainNavbar";
import NewsLetter from "@/components/NewsLetter";
import PopularBlogs from "@/components/PopularBlogs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="m-3">
      <Suspense fallback={<GlobalLoader />}>
        <MainNavbar />
        <BannerCarousel />
        <LatestBlogs />
        <Cta />
        <FeaturedBlogs />
        <PopularBlogs />
        <NewsLetter />
        <Footer />
      </Suspense>
    </div>
  );
}
