"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CatCard({ category, setCategories }) {
  const router = useRouter();
  const [confirmAction, setConfirmAction] = useState(null);
  const handleEdit = () => {
    router.push(`/categories/${category.slug}/edit`);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/categories/${category.slug}`);
      setCategories((prev) => prev.filter((c) => c._id !== category._id));
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };
  const executeAction = () => {
    if (confirmAction === "delete") handleDelete();
    setConfirmAction(null);
  };
  return (
    <div
      className="border rounded-lg w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
    >
      {/* Left side */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 text-blue-600 font-bold border rounded-full 
                flex justify-center items-center text-lg sm:text-xl"
        >
          {category.name[0]}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h3 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <span className="text-sm text-gray-500">
            {category.description.split(" ").slice(0, 8).join(" ")}
            {category.description.split(" ").length > 8 && "..."}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col sm:items-end gap-2 text-left sm:text-right mt-3 sm:mt-0 w-full sm:w-auto">
        <div className="flex flex-row gap-3 items-center flex-nowrap">
          {/* Buttons on hover */}
          <div className="hidden group-hover:flex gap-3 shrink-0">
            <button
              className="text-sm text-blue-600 hover:underline cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="text-sm text-red-600 hover:underline cursor-pointer"
              onClick={() => setConfirmAction("delete")}
            >
              Delete
            </button>
          </div>

          {/* Always visible */}
          <span className="text-gray-700 font-medium whitespace-nowrap">
            {category.postCount} Posts
          </span>
        </div>

        <div className="text-sm text-gray-500 whitespace-nowrap">
          {new Date(category.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Delete dialog remains unchanged */}
      <Dialog
        open={!!confirmAction}
        onOpenChange={() => setConfirmAction(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Category?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Do you really want to delete the{" "}
              <strong>{category.name}</strong> category?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmAction(null)}>
              No
            </Button>
            <Button variant="destructive" onClick={executeAction}>
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
