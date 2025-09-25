"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from "next/navigation";
import axios from "axios";
import useCategories from "@/hooks/useCategories";
import { MessageSquare } from "lucide-react";
import GlobalLoader from "@/components/GlobalLoader";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const { categories } = useCategories();

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${slug}`);
        setPost(res.data.post);
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article");
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const maxScroll = articleHeight - windowHeight;
      const scrolled = scrollY - articleTop;

      let ratio = scrolled / maxScroll;
      ratio = Math.min(Math.max(ratio, 0), 1);

      setProgress(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  if (!post) return <GlobalLoader />;

  return (
    <div className="m-2">
      <MainNavbar />
      <div className="max-w-5xl mx-auto mt-10 mb-12 px-4 sm:px-6">
        {/* Breadcrumb */}
        <ul className="flex flex-wrap gap-2 mb-6 text-sm sm:text-base">
          <li>
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li>
            <a href={`/categories/${post.category.slug}`}>
              {post.category.name}
            </a>
          </li>
          <li>/</li>
          <li className="truncate max-w-[150px] sm:max-w-none">{post.title}</li>
        </ul>

        {/* Category Tag */}
        <a href="">
          <span className="p-1.5 sm:p-2 border rounded-2xl text-xs sm:text-sm">
            {post.category.name}
          </span>
        </a>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl my-6 sm:my-8 leading-snug font-bold break-words">
          {post.title}
        </h1>

        <hr />

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3 sm:gap-0">
          <div>
            <span className="text-xs sm:text-sm">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            &nbsp;
            <a
              href="#"
              className="relative inline-block 
                   after:absolute after:left-0 after:bottom-0 
                   after:h-[1px] after:w-0 after:bg-black 
                   after:transition-all after:duration-500 
                   hover:after:w-full"
            >
              <span className="text-xs sm:text-sm font-bold">
                by {post.author.name}
              </span>
            </a>
          </div>

          <div className="text-neutral-500">
            <span className="flex gap-1 items-center text-xs sm:text-sm">
              0 <MessageSquare size={14} className="sm:w-4 sm:h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Post Begins */}

      <div className="flex flex-col lg:flex-row gap-6 justify-between mx-auto w-full px-4 sm:px-6">
        {/* Left Sidebar (Reading Progress + Social Links) */}
        <div className="lg:w-[15%] w-full hidden sm:flex lg:flex-col gap-6 items-center lg:items-end sticky lg:top-20 h-fit">
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-4 sm:p-6 text-center flex items-center justify-center">
            <svg className="absolute top-0 left-0" width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                style={{ transition: "stroke-dashoffset 0.25s linear" }}
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium relative z-10">
              15 Mins Read
            </span>
          </div>

          {/* Social Links (Left Sidebar) */}
          <ul className="flex lg:flex-col gap-4 sm:gap-6">
            <li>
              <a
                href="#"
                className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
              >
                <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#e9efff] text-[#1d59f3] rounded-full">
                  <FaFacebookF />
                </i>{" "}
                <span className="hidden lg:inline">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
              >
                <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#fff1f8] text-[#f13790] rounded-full">
                  <FaInstagram />
                </i>{" "}
                <span className="hidden lg:inline">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
              >
                <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#ffe9e9] text-[#ff1c1c] rounded-full">
                  <FaPinterest />
                </i>{" "}
                <span className="hidden lg:inline">Pinterest</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
              >
                <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#e4e4e4] text-[#000000] rounded-full">
                  <FaXTwitter />
                </i>{" "}
                <span className="hidden lg:inline">Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Main Article */}
        <div id="article" className="lg:w-[60%] w-full">
          <div className="border border-neutral-300 rounded-lg p-6 sm:p-12">
            <div
              className="post-content mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags?.length > 0 && (
              <>
                <h4 className="mb-4 text-sm sm:text-base">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-300 px-3 py-1 rounded-md text-xs sm:text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-[25%] w-full flex flex-col gap-6">
          {/* About Me */}
          <div className="border border-neutral-300 rounded-xl px-4 sm:px-6 py-8 sm:py-10 text-center flex flex-col gap-4">
            <h4 className="text-sm sm:text-base">A little bit about me</h4>
            <div className="flex justify-center items-center">
              <div className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden">
                <img
                  src="/img/avatar.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="mb-0 text-base sm:text-lg">{post.author.name}</h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              I'm {post.author.name}, a believer in the power of positivity.
              Join me as I share tips, tricks, and stories to help you live your
              best life.
            </p>
          </div>

          {/* Social Network */}
          <div className="border border-neutral-300 rounded-xl px-4 sm:px-6 py-8 sm:py-12 text-center flex flex-col gap-6">
            <h4 className="text-sm sm:text-base">Social Network</h4>
            <ul className="flex justify-center flex-wrap gap-6 sm:gap-8">
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
                >
                  <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#e9efff] text-[#1d59f3] rounded-full">
                    <FaFacebookF />
                  </i>{" "}
                  53K
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
                >
                  <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#fff1f8] text-[#f13790] rounded-full">
                    <FaInstagram />
                  </i>{" "}
                  51K
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
                >
                  <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#ffe9e9] text-[#ff1c1c] rounded-full">
                    <FaPinterest />
                  </i>{" "}
                  73K
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-2 items-center hover:-translate-y-1 transition-transform"
                >
                  <i className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 text-[18px] sm:text-[24px] bg-[#e4e4e4] text-[#000000] rounded-full">
                    <FaXTwitter />
                  </i>{" "}
                  114K
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="border border-neutral-300 rounded-xl px-4 sm:px-6 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
            <h4 className="text-sm sm:text-base">Categories</h4>
            <ul className="mt-4">
              {categories.length > 0
                ? categories.map((category) => (
                    <li
                      key={category.slug}
                      className="border-b border-neutral-200 py-2 sm:py-3"
                    >
                      <div className="flex items-center justify-between">
                        <a
                          href={`/categories/${category.slug}`}
                          className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
                        >
                          <span className="text-sm sm:text-[16px]">
                            {category.name}
                          </span>
                        </a>
                      </div>
                    </li>
                  ))
                : "No Category Found"}
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="border border-neutral-300 rounded-xl px-4 sm:px-6 py-8 sm:py-10 text-center flex flex-col gap-4">
            <h4 className="text-sm sm:text-base">Popular tags</h4>
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border border-gray-300 px-2 py-1 rounded-md text-xs sm:text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
