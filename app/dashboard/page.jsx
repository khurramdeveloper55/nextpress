"use client";
import { AppSidebar } from "@/components/app-sidebar";
import Button from "@/components/Button";
import CatCard from "@/components/CatCard";
import PostCard from "@/components/PostCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserProfile from "@/components/UserProfile";
import useCategories from "@/hooks/useCategories";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const { categories, setCategories, loading, error } = useCategories();

  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "posts";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");

      setPosts(res.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center justify-between w-full">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <div className="relative w-96">
                      <input
                        type="text"
                        placeholder="Search posts..."
                        className="w-full py-2 pl-10 pr-4 bg-neutral-100 rounded-lg 
               text-sm placeholder-gray-500 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:bg-white transition"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                        />
                      </svg>
                    </div>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              {!user ? (
                <img
                  src="/img/avatar.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <UserProfile user={user} />
              )}
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4  pt-4">
          {/* When No Post Is Created */}

          {/* Posts List */}
          {tab === "posts" && (
            <>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <PostCard key={post._id} post={post} setPosts={setPosts} />
                ))
              ) : (
                <div className="w-full h-full flex items-center flex-col justify-center">
                  <h3>No posts</h3>
                  <p>Posts that you create will show up here</p>
                </div>
              )}
            </>
          )}

          {tab === "categories" && (
            <>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <CatCard
                    key={category._id}
                    category={category}
                    setCategories={setCategories}
                  />
                ))
              ) : (
                <div className="w-full h-full flex items-center flex-col justify-center">
                  <h3>No categories</h3>
                  <p>Categories that you create will show up here</p>
                </div>
              )}
            </>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
