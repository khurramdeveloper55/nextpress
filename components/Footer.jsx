"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useCategoriesContext } from "./CategoriesProvider";

export default function Footer() {
  const categories = useCategoriesContext();
  return (
    <>
      <div className="flex flex-col md:flex-row py-12 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="font-bold mb-2 text-center md:text-left">
            hello.chloe@gmail.com
          </h2>
          <h2 className="text-neutral-500 text-center md:text-left">
            Welcome to ultimate source for fresh perspectives! Explore curated
            content to enlighten, entertain and engage global readers.
          </h2>

          <ul className="flex justify-center md:justify-start gap-4 md:gap-6 flex-wrap">
            <li>
              <a href="#" className="inline-block">
                <i className="flex items-center justify-center w-11 h-11 text-[24px] bg-[#e9efff] text-[#1d59f3] rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i className="flex items-center justify-center w-11 h-11 text-[24px] bg-[#fff1f8] text-[#f13790] rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i className="flex items-center justify-center w-11 h-11 text-[24px] bg-[#ffe9e9] text-[#ff1c1c] rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <FaPinterest />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i className="flex items-center justify-center w-11 h-11 text-[24px] bg-[#e4e4e4] text-[#000000] rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <FaXTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around gap-6 flex-wrap">
          {/* Categories */}
          <div className="flex-1 min-w-[140px]">
            <h3 className="font-bold text-center md:text-left">Categories</h3>
            <ul className="text-neutral-500 leading-8 text-center md:text-left mt-2">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li key={category._id}>
                    <a
                      href={`/categories/${category.slug}`}
                      className="relative inline-block 
                     after:absolute after:left-0 after:bottom-0 
                     after:h-[1px] after:w-0 after:bg-black 
                     after:transition-all after:duration-500 
                     hover:after:w-full hover:text-black"
                    >
                      {category.name}
                    </a>
                  </li>
                ))
              ) : (
                <span>No Categories Found</span>
              )}
            </ul>
          </div>

          {/* Demos */}
          <div className="flex-1 min-w-[140px]">
            <h3 className="font-bold text-center md:text-left">Demos</h3>
            <ul className="text-neutral-500 leading-8 text-center md:text-left mt-2">
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  Classic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  Modern
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  Creative
                </a>
              </li>
            </ul>
          </div>

          {/* Page */}
          <div className="flex-1 min-w-[140px]">
            <h3 className="font-bold text-center md:text-left">Page</h3>
            <ul className="text-neutral-500 leading-8 text-center md:text-left mt-2">
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block 
                 after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-black 
                 after:transition-all after:duration-500 
                 hover:after:w-full hover:text-black"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-12" />

      {/* Bottom Section */}
      <div className="pb-10">
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">NextPress</h1>
            <p className="text-sm text-gray-500">
              © 2025 NextPress Blogs. All Rights Reserved
            </p>
          </div>

          {/* Middle */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-black transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Archives
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Terms of Use
              </a>
            </li>
          </ul>

          {/* Right */}
          <div>
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-semibold cursor-pointer text-black hover:underline"
            >
              ↑ Back To Top
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
