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

  if (!post) return <div>Loading...</div>;

  return (
    <div className="m-2">
      <MainNavbar />
      <div className="max-w-5xl mx-auto mt-20 mb-10">
        <ul className="flex gap-2 mb-8">
          <li>
            <a href="">Home</a>
          </li>
          <li>/</li>
          <li>Fashion & Style</li>
          <li>/</li>
          <li>{post.title}</li>
        </ul>
        <a href="">
          <span className="p-2 border rounded-2xl text-xs">
            {post.category.name}
          </span>
        </a>
        <h1 className="text-6xl my-8 leading-14 font-bold">{post.title}</h1>
        <hr />
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-sm">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>{" "}
            &nbsp;
            <a
              href="#"
              className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
            >
              <span className="text-sm  font-bold">by {post.author.name}</span>
            </a>
          </div>
          <div className="text-neutral-500">
            <span className="flex gap-1 items-center">
              0{" "}
              <span>
                <MessageSquare size={16} />
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Post Begins */}

      <div className="flex gap-6 justify-between mx-auto w-full">
        <div className="w-[15%] flex flex-col gap-8 items-end sticky top-20 h-fit">
          <div className="relative w-[120px] h-[120px] p-6 text-center flex items-center justify-center">
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
                transform="rotate(-90 60 60)" // 🔥 start from top
                style={{ transition: "stroke-dashoffset 0.25s linear" }}
              />
            </svg>
            <span className="text-sm font-medium relative z-10">
              15 Mins Read
            </span>
          </div>

          <ul className="flex  flex-col gap-6">
            <li>
              <a
                href="#"
                className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
              >
                <i
                  className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#e9efff] text-[#1d59f3]
                rounded-full
                
              "
                >
                  <FaFacebookF />
                </i>{" "}
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
              >
                <i
                  className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#fff1f8] text-[#f13790]
                rounded-full
              "
                >
                  <FaInstagram />
                </i>{" "}
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
              >
                <i
                  className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#ffe9e9] text-[#ff1c1c]
                rounded-full
              "
                >
                  <FaPinterest />
                </i>{" "}
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1 "
              >
                <i
                  className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#e4e4e4] text-[#000000]
                rounded-full
                
              "
                >
                  <FaXTwitter />
                </i>{" "}
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div id="article" className=" w-[60%]">
          <div className=" border border-neutral-300 rounded-lg p-12">
            <div
              className="post-content mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags?.length > 0 && (
              <>
                <h4 className="mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-300 px-3 py-1 rounded-md text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="  w-[25%] flex flex-col gap-4">
          <div className=" border border-neutral-300 rounded-xl px-6 py-10 text-center flex flex-col justify-center gap-4">
            <h4>A little bit about me</h4>
            <div className="flex justify-center items-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <img
                  src="/img/avatar.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="mb-0">{post.author.name}</h2>
            <p className="text-sm text-neutral-500">
              I'm {post.author.name}, a believer in the power of positivity.
              Join me as I share tips, tricks, and stories to help you live your
              best life.
            </p>
          </div>

          <div className=" border border-neutral-300 rounded-xl px-6 py-12 text-center flex flex-col justify-center gap-6">
            <h4>Social Network</h4>
            <ul className="flex justify-center  gap-8">
              <div className="flex flex-col  gap-6">
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
                  >
                    <i
                      className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#e9efff] text-[#1d59f3]
                rounded-full
                
              "
                    >
                      <FaFacebookF />
                    </i>{" "}
                    53K
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
                  >
                    <i
                      className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#fff1f8] text-[#f13790]
                rounded-full
              "
                    >
                      <FaInstagram />
                    </i>{" "}
                    51K
                  </a>
                </li>
              </div>
              <div className="flex flex-col gap-6">
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1"
                  >
                    <i
                      className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#ffe9e9] text-[#ff1c1c]
                rounded-full
              "
                    >
                      <FaPinterest />
                    </i>{" "}
                    73K
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-2 items-center transition-transform duration-300
                hover:-translate-y-1 "
                  >
                    <i
                      className="
                flex items-center justify-center
                w-11 h-11 text-[24px]
                bg-[#e4e4e4] text-[#000000]
                rounded-full
                
              "
                    >
                      <FaXTwitter />
                    </i>{" "}
                    114K
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className=" border border-neutral-300 rounded-xl px-6 pt-10 pb-8 text-center flex flex-col justify-center ">
            <h4>Categories</h4>
            <ul className="mt-4">
              {categories.length > 0
                ? categories.map((category) => (
                    <li className="border-b-1 border-neutral-200 py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm"></span> &nbsp;
                          <a
                            href={`/categories/${category.slug}`}
                            className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
                          >
                            <span className="text-[16px]">{category.name}</span>
                          </a>
                        </div>
                        <div className="text-neutral-500">
                          <span className="text-[16px]">32+</span>
                        </div>
                      </div>
                    </li>
                  ))
                : "No Category Found"}
            </ul>
          </div>

          <div className=" border border-neutral-300 rounded-xl px-6 py-10 text-center flex flex-col justify-center gap-4">
            <h4 className="mb-4">Popular tags</h4>
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag, i) => (
                  <span class="border border-gray-300 px-3 py-1 rounded-md text-sm">
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
