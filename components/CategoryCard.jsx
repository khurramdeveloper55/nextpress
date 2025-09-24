"use client";

import { MessageSquare } from "lucide-react";

export default function CategoryCard({ post, index }) {
  const getFirstParagraph = (html, wordLimit = 12) => {
    const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
    if (!match) return "";

    const text = match[1].replace(/<[^>]+>/g, "");
    const words = text.split(/\s+/).slice(0, wordLimit).join(" ");
    return words + (text.split(/\s+/).length > wordLimit ? "..." : "");
  };
  return (
    <div className="hover-image-3 border border-neutral-300 rounded-sm p-6 group transition-colors duration-500 hover:border-black">
      <div className="mt-2 mb-6 relative overflow-hidden rounded-xl w-full h-64 img-style">
        <img
          src="/img/category-item.jpg"
          alt="default"
          className="absolute inset-0 w-full h-full object-cover
                 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                 opacity-100 scale-100 blur-0
                 group-hover:opacity-0 group-hover:scale-105 group-hover:blur-md"
        />

        <img
          src="/img/category-item.jpg"
          alt="hover"
          className="absolute inset-0 w-full h-full object-cover
                 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                 opacity-0 scale-95
                 group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
        />
      </div>

      <a href="">
        <span className="p-2 border rounded-2xl text-xs">
          {post.category.name}
        </span>
      </a>

      <h2 className="font-bold my-3 group/heading leading-snug">
        <a
          href={`/posts/${post.slug}`}
          className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
        >
          {post.title}
        </a>
      </h2>

      <p className="text-neutral-500 mb-12">
        {getFirstParagraph(post.content, 12)}
      </p>

      <hr />

      <div className="flex items-center justify-between mt-6">
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
  );
}
