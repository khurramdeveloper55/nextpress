"use client";

import { MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function FeaturedBlogs() {
  return (
    <section className="pt-12">
      <SectionHeading title="Featured" link="Discover more" />

      <div className="flex gap-6">
        <a
          href="#"
          className="block w-2/3 relative rounded-lg overflow-hidden group"
        >
          <img
            src="/img/category-item-24.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/15 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
            <div className="inline-block">
              <span className="p-2 border rounded-2xl bg-transparent text-xs">
                Travel
              </span>
            </div>
            <h2 className="text-[40px] font-bold mt-4 leading-snug">
              Post-modernist Apartment Design That Combines Bold Colors, Art,
              and Geometric Shapes
            </h2>
            <hr className="my-4 border-white/60" />

            <div className="flex items-center justify-between mt-2 mb-4">
              <div>
                <span className="text-sm">Sep 10, 2025 &nbsp;</span>
                <span className="text-sm font-bold">by Joe Russo</span>
              </div>
              <div className="text-white">
                <span className="flex gap-1 items-center">
                  0{" "}
                  <span>
                    <MessageSquare size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>

        <div className="w-1/3 hover-image-3 border border-neutral-300 rounded-sm px-5 py-6 group transition-colors duration-500 hover:border-black">
          <div className="mt-2 mb-6 relative overflow-hidden rounded-xl w-full h-64 img-style">
            <img
              src="/img/category-item-25.jpg"
              alt="default"
              className="absolute inset-0 w-full h-full object-cover
                 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                 opacity-100 scale-100 blur-0
                 group-hover:opacity-0 group-hover:scale-105 group-hover:blur-md"
            />

            <img
              src="/img/category-item-25.jpg"
              alt="hover"
              className="absolute inset-0 w-full h-full object-cover
                 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                 opacity-0 scale-95
                 group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
            />
          </div>

          <a href="/categories/fashion-styles">
            <span className="p-2 border rounded-2xl text-xs">
              Fashion & Styles
            </span>
          </a>

          <h2 className="font-bold my-6 group/heading leading-snug">
            <a
              href="/posts/2025-aututmn-launching-a-zara-partywear-album"
              className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
            >
              2025 Aututmn: Launching A Zara Partywear Album
            </a>
          </h2>

          <div className="flex items-center justify-between mt-6 mb-8">
            <div>
              <span className="text-sm">Sep 21, 2025 &nbsp;</span>
              <a
                href="#"
                className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
              >
                <span className="text-sm  font-bold">by Mark Mason</span>
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

          <hr />
          <div className="mt-8"></div>
          <a href="/categories/technology">
            <span className="p-2 border rounded-2xl text-xs">Technology</span>
          </a>

          <h2 className="font-bold my-6 group/heading leading-snug">
            <a
              href="/posts/ai-innovations-transforming-everyday-human-life"
              className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
            >
              AI Innovations Transforming Everyday Human Life
            </a>
          </h2>

          <div className="flex items-center justify-between mt-6">
            <div>
              <span className="text-sm">Sep 21, 2025 &nbsp;</span>
              <a
                href="#"
                className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
              >
                <span className="text-sm  font-bold">by Steve Harington</span>
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
      </div>
    </section>
  );
}
