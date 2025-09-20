"use client";

import axios from "axios";
import { useState } from "react";

export default function CreateCategory() {
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = { name: catName, description: catDesc };

      await axios.post("http://localhost:3000/api/categories", newCategory, {
        withCredentials: true,
      });
      alert("Category created successfully ✅");

      // reset fields
      setCatName("");
      setCatDesc("");
    } catch (err) {
      console.error(
        "Error creating category:",
        err.response?.data || err.message
      );
      alert(
        "Error creating category ❌ " + (err.response?.data?.message || "")
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left side → Category Form */}
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ✨ Create New Category
        </h2>

        {/* Wrap everything in a form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category Info Card */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="e.g. Artificial Intelligence"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Description
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Short description about this category..."
                value={catDesc}
                onChange={(e) => setCatDesc(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:opacity-90 transition"
            >
              🚀 Create Category
            </button>
          </div>
        </form>
      </div>

      {/* Right side → Preview & Tips */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Live Preview</h3>

        {/* Preview Card */}
        <div className="border rounded-2xl shadow bg-gray-50 p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex justify-center items-center font-bold text-lg">
              {catName ? catName.substring(0, 2).toUpperCase() : "??"}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                {catName || "Category Name"}
              </h4>
              <p className="text-sm text-gray-500">
                {catDesc
                  ? catDesc.split(" ").slice(0, 8).join(" ") +
                    (catDesc.split(" ").length > 8 ? "..." : "")
                  : "Your description will appear here."}
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            Example: <span className="font-medium">12 posts linked</span>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white border rounded-xl shadow p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            💡 Pro Tip
          </h4>
          <p className="text-sm text-gray-500">
            Keep category names short and clear. Link posts to categories while
            creating posts for better organization.
          </p>
        </div>
      </div>
    </div>
  );
}
