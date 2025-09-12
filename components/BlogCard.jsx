"use client";

export function BlogCard() {
  return (
    <div className="hover-image-3 border border-neutral-300 rounded-sm px-5 py-12 group transition-colors duration-500 hover:border-black">
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
          Food I Always Bring When Traveling With Kids
        </a>
      </h2>

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

      <p className="text-neutral-500 mb-10">
        When packing snacks for a trip, I’ve never quite managed to be the type
        of parent who brings along a...
      </p>

      <hr />

      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm">Sep 10, 2025</span>
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
    </div>
  );
}
