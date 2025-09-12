"use client";

import CategoryCard from "@/components/CategoryCard";
import CatsBcrumb from "@/components/CatsBcrumb";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";

export default function Page() {
  return (
    <div className="m-2">
      <MainNavbar />
      <CatsBcrumb />
      <div className="grid grid-cols-3 py-12 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <Footer />
    </div>
  );
}
