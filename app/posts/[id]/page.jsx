"use client";

import Tiptap from "@/components/TipTap";

export default function CreatePost() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-full text-lg outline-none border-b border-gray-300 pb-2 mb-6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
        <div>
          <Tiptap />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Post Settings */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Post Settings</h4>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>Draft</option>
              <option>Publish</option>
            </select>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Save
            </button>
          </div>

          {/* Categories */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Categories</h4>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>Technology</option>
              <option>Design</option>
              <option>Business</option>
            </select>
          </div>

          {/* Tags */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Tags</h4>
            <input
              type="text"
              placeholder="Add tags..."
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Featured Image */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Featured Image</h4>
            <input type="file" className="w-full text-sm" />
          </div>
        </aside>
      </div>
    </div>
  );
}
