"use client";
import useCategories from "@/hooks/useCategories";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { categories, loading, error } = useCategories();
  return (
    <>
      {" "}
      <div className="flex  py-12">
        <div className="w-1/2">
          <h2 className="font-bold mb-4">hello.chloe@gmail.com</h2>
          <h2 className="text-neutral-500 mb-6">
            Welcome to ultimate source for fresh perspectives! Explore curated
            content to enlighten, entertain and engage global readers.
          </h2>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="inline-block">
                <i
                  className="
      flex items-center justify-center
      w-11 h-11 text-[24px]
      bg-[#e9efff] text-[#1d59f3]
      rounded-full
      transition-transform duration-300
      hover:-translate-y-1
    "
                >
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i
                  className="
      flex items-center justify-center
      w-11 h-11 text-[24px]
      bg-[#fff1f8] text-[#f13790]
      rounded-full
      transition-transform duration-300
      hover:-translate-y-1
    "
                >
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i
                  className="
      flex items-center justify-center
      w-11 h-11 text-[24px]
      bg-[#ffe9e9] text-[#ff1c1c]
      rounded-full
      transition-transform duration-300
      hover:-translate-y-1
    "
                >
                  <FaPinterest />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="inline-block">
                <i
                  className="
      flex items-center justify-center
      w-11 h-11 text-[24px]
      bg-[#e4e4e4] text-[#000000]
      rounded-full
      transition-transform duration-300
      hover:-translate-y-1
    "
                >
                  <FaXTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex justify-around">
          <div>
            <h3 className="font-bold">Categories</h3>
            <br />
            <ul className="text-neutral-500 leading-8">
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
          <div>
            <h3 className="font-bold">Demos</h3>
            <br />
            <ul className="text-neutral-500 leading-8">
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
          <div>
            <h3 className="font-bold">Page</h3>
            <br />
            <ul className="text-neutral-500 leading-8">
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
      <div className=" pb-10">
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">NextPress</h1>
            <p className="text-sm text-gray-500">
              © 2025 NextPress Blogs. All Rights Reserved
            </p>
          </div>

          {/* Middle Section */}
          <ul className="flex gap-8 text-sm font-medium text-gray-600">
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

          {/* Right Section */}
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
