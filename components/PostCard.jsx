"use client";

import axios from "axios";
import { ChartColumnBig, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostCard({ post, setPosts }) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/posts/${post.slug}/edit`);
  };

  const handlePublish = async () => {
    try {
      await axios.patch(`/api/posts/${post.slug}`, { status: "publish" });
      setPosts((prev) =>
        prev.map((p) => (p._id === post._id ? { ...p, status: "publish" } : p))
      );
    } catch (err) {
      console.error("Error publishing post:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post.slug}`);
      setPosts((prev) => prev.filter((p) => p._id !== post._id));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };
  return (
    <div
      className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
    >
      {/* Left side */}
      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-gray-100 border rounded-md flex justify-center items-center text-xl font-semibold text-gray-700">
          {post.title[0]}
        </div>
        <div>
          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <span className="text-sm text-gray-500">
            {post.status} •{" "}
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right flex flex-col items-end gap-2">
        <div className="flex gap-3 items-center">
          {/* Hidden by default, show on hover */}
          <div className="hidden group-hover:flex gap-2">
            <button
              className="text-sm text-blue-600 hover:underline cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </button>
            {post.status === "draft" && (
              <button
                className="text-sm text-green-600 hover:underline cursor-pointer"
                onClick={handlePublish}
              >
                Publish
              </button>
            )}
            <button
              className="text-sm text-red-600 hover:underline cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <span className="text-gray-700 font-medium flex gap-2 items-center">
            {post.author.name}{" "}
            <img
              src="/img/avatar.jpg" // Replace with dynamic avatar or placeholder
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
          </span>
        </div>
        <div className="text-sm text-gray-500 flex">
          <span className="mr-3 flex gap-1 items-center">
            0{" "}
            <span>
              <MessageSquare size={16} />
            </span>
          </span>
          <span className="flex gap-1 items-center">
            0{" "}
            <span>
              <ChartColumnBig size={16} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
