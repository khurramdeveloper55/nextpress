"use client";

import { FaInstagram } from "react-icons/fa";
import Button from "./Button";

export default function NewsLetter() {
  return (
    <section className="flex gap-2 pt-16 pb-10 items-stretch">
      <div className="w-[40%]">
        <div className="border border-neutral-300 rounded-xl px-5 py-14 group transition-colors duration-500 hover:border-black">
          <p className="text-neutral-500">Newsletter</p>
          <h2 className="font-bold mt-4 mb-8">
            Subscribe our newsletter to get the latest posts delivered right to
            your email.
          </h2>
          <div className="flex gap-2 mb-6">
            <input
              placeholder="Enter Your Email"
              className="rounded-full px-8 py-3 border-neutral-500 border-1 "
            />
            <Button title="Subscribe" />
          </div>
          <input type="checkbox" />{" "}
          <span className="text-neutral-500 text-sm">
            By checking this box, you acknowledge that you have read and agreed
            to our Terms and Conditions also the Privacy Policy,
          </span>
        </div>
      </div>
      <div className="w-[60%] flex gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <a href="">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/img/newsletter-1.jpg"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                />
              </div>
            </a>
            <a href="">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/img/newsletter-2.jpg"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                />
              </div>
            </a>
          </div>
          <div className="border border-neutral-300 rounded-sm px-5 py-8 group transition-colors duration-500 hover:border-black flex flex-col justify-between h-full">
            <p>
              Wanna Contact me? <br /> Let's brainstorm our idea
            </p>
            <a href="">Contact Me</a>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 flex-col">
            <a href="">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/img/newsletter-3.jpg"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                />
              </div>
            </a>

            <a href="">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/img/newsletter-4.jpg"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                />
              </div>
            </a>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="border border-neutral-300 rounded-sm px-5 py-6 h-full justify-between flex flex-col group transition-colors duration-500 hover:border-black">
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
              <p>
                Follow My <br /> Instagram Channel
              </p>
              <a href="">@polor</a>
            </div>

            <a href="">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/img/newsletter-5.jpg"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
