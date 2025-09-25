"use client";

import Tiptap from "@/components/TipTap";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CreatePost({ slug }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  // const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [resetKey, setResetKey] = useState("");
  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data.categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (slug) {
      setIsEditing(true);
      axios.get(`/api/posts/${slug}`).then((res) => {
        const post = res.data.post;
        setTitle(post.title);
        setTags(post.tags.join(", "));
        setContent(post.content);
        setCategory(post.category?._id || "");
        setStatus(post.status);
      });
    }
  }, [slug]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, type: "", message: "" });

    try {
      const newPost = {
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
        status,
        content,
        category,
      };

      if (isEditing) {
        await axios.patch(`/api/posts/${slug}`, newPost, {
          withCredentials: true,
        });
        setAlert({
          show: true,
          type: "success",
          message: "✅ Post updated successfully",
        });
        router.push("/dashboard");
      } else {
        // create new post
        await axios.post("/api/posts", newPost, { withCredentials: true });
        setAlert({
          show: true,
          type: "success",
          message: "✅ Post created successfully",
        });
        setTitle("");
        setTags("");
        setStatus("draft");
        setContent("");
        setCategory("");
        setResetKey((prev) => prev + 1);
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(
        "❌ Error submitting post:",
        err.response?.data || err.message
      );
      setAlert({
        show: true,
        type: "error",
        message: "❌ Error submitting post",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container mx-auto px-6 py-8" onSubmit={handlePostSubmit}>
      {alert.show && (
        <Alert
          className={`mb-4 ${
            alert.type === "success"
              ? "border-green-500 text-green-700"
              : "border-red-500 text-red-700"
          }`}
        >
          <AlertTitle>
            {alert.type === "success" ? "Success" : "Error"}
          </AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}
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
              className={`mt-4 w-full cursor-pointer text-white py-2 rounded-lg transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
              type="submit"
              disabled={loading}
            >
              {loading
                ? isEditing
                  ? "⏳ Updating..."
                  : "⏳ Saving..."
                : isEditing
                ? "🚀 Update"
                : "🚀 Save"}
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
