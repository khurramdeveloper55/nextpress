"use client";

import { MessageSquare } from "lucide-react";

export default function PopBlogCard({ post }) {
  return (
    <div className="hover-image-3 border border-neutral-300 rounded-sm px-5 py-8 sm:py-12 group transition-colors duration-500">
      <a href={`/categories/${post.category.slug}`}>
        <span className="p-2 border rounded-2xl text-xs">
          {post.category.name}
        </span>
      </a>

      <h2 className="font-bold mt-6 mb-8 sm:mb-16 group/heading leading-snug">
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

      <hr />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-2 sm:gap-0">
        <div>
          <span className="text-sm">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            &nbsp;
          </span>
          <a
            href="#"
            className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
          >
            <span className="text-sm font-bold">by {post.author.name}</span>
          </a>
        </div>
        <div className="text-neutral-500 mt-2 sm:mt-0">
          <span className="flex gap-1 items-center">
            0 <MessageSquare size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
