"use client";

import Button from "./Button";

export default function Banner() {
  return (
    <>
      <h1 className="text-8xl mb-8 mt-20">
        <b>Hey, we’re NextPress.</b> See our thoughts, stories and ideas.
      </h1>
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Your Email Address"
          className="rounded-full px-8 py-3 border-neutral-500 border-1 "
        />
        <Button title="Subscribe" />
        <p className="text-neutral-500">
          Get the email newsletter and unlock access to <br /> members-only
          content and updates
        </p>
      </div>
    </>
  );
}
