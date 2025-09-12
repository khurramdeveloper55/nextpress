"use client";

import { SectionHeading } from "./SectionHeaing";

export function FeaturedBlogs() {
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
              <span className="p-2 border rounded-2xl bg-transparent">
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
              <div>
                <span className="text-lg">85</span>
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

          <a href="">
            <span className="p-2 border rounded-2xl">Travel</span>
          </a>

          <h2 className="font-bold my-6 group/heading leading-snug">
            <a
              href="#"
              className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
            >
              Seven Women on Choosing to Move to a Different Country
            </a>
          </h2>

          <div className="flex items-center justify-between mt-6 mb-8">
            <div>
              <span className="text-sm">Sep 10, 2025 &nbsp;</span>
              <a
                href="#"
                className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full"
              >
                <span className="text-sm  font-bold">by Joe Russo</span>
              </a>
            </div>
            <div className="text-neutral-500">
              <span className="text-lg">85</span>
            </div>
          </div>

          <hr />
          <div className="mt-8"></div>
          <a href="">
            <span className="p-2 border rounded-2xl">Relationships</span>
          </a>

          <h2 className="font-bold my-6 group/heading leading-snug">
            <a
              href="#"
              className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
            >
              10 Reader Comments on Friendship Zone Eps.21
            </a>
          </h2>

          <div className="flex items-center justify-between mt-6">
            <div>
              <span className="text-sm">Sep 10, 2025 &nbsp;</span>
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
              <span className="text-lg">16</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
