"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

export default function CreateCategory({ slug }) {
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ type: "", message: "" });
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      setIsEditing(true);
      axios
        .get(`/api/categories/${slug}`)
        .then((res) => {
          const category = res.data.category;
          setCatName(category?.name ?? "");
          setCatDesc(category?.description ?? "");
        })
        .catch((err) => {
          console.error("❌ Error fetching category:", err);
          setAlert({ type: "error", message: "Failed to fetch category" });
        });
    }
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: "", message: "" });
    try {
      const newCategory = { name: catName, description: catDesc };

      if (isEditing) {
        await axios.patch(`/api/categories/${slug}`, newCategory, {
          withCredentials: true,
        });
        setAlert({
          type: "success",
          message: "✅ Category updated successfully",
        });
        router.push("/dashboard");
      } else {
        await axios.post("/api/categories", newCategory, {
          withCredentials: true,
        });
        setAlert({
          type: "success",
          message: "✅ Category created successfully",
        });

        setCatName("");
        setCatDesc("");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Error creating/updating category:", err);
      setAlert({
        type: "error",
        message:
          "❌ " + (err.response?.data?.message || "Something went wrong"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left side → Category Form */}
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {isEditing ? "✨ Update Category" : "✨ Create New Category"}
        </h2>
        {alert.message && (
          <Alert
            variant={alert.type === "error" ? "destructive" : "default"}
            className="mb-6"
          >
            {alert.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            <AlertTitle>
              {alert.type === "success" ? "Success" : "Error"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
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
                value={catName || ""}
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
                value={catDesc || ""}
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
              disabled={loading}
              className={`px-6 py-3 cursor-pointer rounded-lg font-semibold shadow transition
          ${
            loading
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
          }
        `}
            >
              {loading
                ? isEditing
                  ? "⏳ Updating..."
                  : "⏳ Creating..."
                : isEditing
                ? "🚀 Update Category"
                : "🚀 Create Category"}
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
