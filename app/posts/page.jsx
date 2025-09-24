"use client";

import Tiptap from "@/components/TipTap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  // const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [resetKey, setResetKey] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data.categories);
    };
    fetchCategories();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = {
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
        status,
        content,
        category,
      };

      const res = await axios.post("/api/posts", newPost, {
        withCredentials: true,
      });

      console.log("✅ Post created:", res.data);
      alert("Post created successfully");

      setTitle("");
      setTags("");
      setStatus("draft");
      setContent("");
      setCategory("");
      setResetKey((prev) => prev + 1);
      // setImage(null); // only if you enable images
    } catch (err) {
      console.error(
        "❌ Error creating post:",
        err.response?.data || err.message
      );
      alert("Error creating post");
    }
  };

  return (
    <form className="container mx-auto px-6 py-8" onSubmit={handlePostSubmit}>
      {/* Title */}
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-lg outline-none border-b border-gray-300 pb-2 mb-6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
        <div>
          <Tiptap key={resetKey} value={content} onChange={setContent} />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Post Settings */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Post Settings</h4>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">-- Select status --</option>
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </select>

            <button
              className="mt-4 w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              type="submit"
            >
              Save
            </button>
          </div>

          {/* Categories */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Categories</h4>
            <select
              className="w-full border rounded-lg px-3 py-2"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">-- Select a category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Tags</h4>
            <input
              type="text"
              value={tags}
              placeholder="Add tags..."
              onChange={(e) => setTags(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Featured Image */}
          {/* <div className="border p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Featured Image</h4>
            <input
              type="file"
              className="w-full text-sm"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div> */}
        </aside>
      </div>
    </form>
  );
}
