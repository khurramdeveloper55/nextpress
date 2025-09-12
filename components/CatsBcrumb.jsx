"use client";

export default function CatsBcrumb() {
  return (
    <div className="rounded-xl bg-neutral-100 mt-6">
      <div className="max-w-3xl mx-auto text-center py-20">
        <ul className="flex justify-center gap-2 mb-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>/</li>
          <li>Fashion & Style</li>
        </ul>
        <h1 className="font-bold mb-6">Fashion & Styles</h1>
        <p className="text-center">
          A curated collection of fashion inspiration, beauty tutorials, and
          lifestyle recommendations. Explore the world of fashion through our
          eyes, from runway trends to everyday style.
        </p>
      </div>
    </div>
  );
}
