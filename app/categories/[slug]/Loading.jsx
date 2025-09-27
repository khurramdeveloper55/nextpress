import GlobalLoader from "@/components/GlobalLoader";
import BlogSkeleton from "@/components/BlogSkeleton";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";

export default function Loading() {
  return (
    <div className="m-2">
      <MainNavbar />
      <GlobalLoader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
