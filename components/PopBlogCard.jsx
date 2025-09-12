"use client";

export function PopBlogCard() {
  return (
    <div className="hover-image-3 border border-neutral-300 rounded-sm px-5 py-12 group transition-colors duration-500 hover:border-black">
      <a href="">
        <span className="p-2 border rounded-2xl">Fashion & Style</span>
      </a>

      <h2 className="font-bold mt-6 mb-16 group/heading leading-snug">
        <a
          href="#"
          className="relative inline bg-gradient-to-r from-black to-black 
               bg-[length:0%_1px] bg-no-repeat bg-left-bottom
               transition-[background-size] duration-700 
               group-hover/heading:bg-[length:100%_1px]"
        >
          Will You Try This Pretty (and Easy) Hair 2025 Trend?
        </a>
      </h2>

      <hr />

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
            <span className="text-sm font-bold">by Joe Russo</span>
          </a>
        </div>
        <div className="text-neutral-500">
          <span className="text-lg">85</span>
        </div>
      </div>
    </div>
  );
}
