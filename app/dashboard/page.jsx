"use client";
import { AppSidebar } from "@/components/app-sidebar";
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
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
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
              <div className="relative">
                {/* Profile Section */}
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <img
                    src="/avatar.jpg" // Replace with dynamic avatar or placeholder
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-700">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-400">Admin</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <button className="w-full text-left block px-4 py-2 hover:bg-gray-100">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4  pt-4">
          {/* When No Post Is Created */}
          {/* <div className="w-full h-full flex items-center flex-col justify-center">
            <h3>No posts</h3>
            <p>Posts that you create will show up here</p>
          </div> */}

          {/* Posts List */}
          <div
            className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-gray-100 border rounded-md flex justify-center items-center text-xl font-semibold text-gray-700">
                A
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  Ai Will Change The World
                </h3>
                <span className="text-sm text-gray-500">Draft • 9 Sept</span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right flex flex-col items-end gap-2">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:flex gap-2">
                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-green-600 hover:underline">
                    Publish
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
                <span className="text-gray-700 font-medium">Name Profile</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-3">0 comments</span>
                <span>0 analytics</span>
              </div>
            </div>
          </div>

          <div
            className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-gray-100 border rounded-md flex justify-center items-center text-xl font-semibold text-gray-700">
                A
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  Ai Will Change The World
                </h3>
                <span className="text-sm text-gray-500">Draft • 9 Sept</span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right flex flex-col items-end gap-2">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:flex gap-2">
                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-green-600 hover:underline">
                    Publish
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
                <span className="text-gray-700 font-medium">Name Profile</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-3">0 comments</span>
                <span>0 analytics</span>
              </div>
            </div>
          </div>

          {/* Categories List */}
          <div
            className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div
                className="w-14 h-14 bg-blue-100 text-blue-600 font-bold border rounded-md 
                    flex justify-center items-center text-xl"
              >
                A
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  AI
                </h3>
                <span className="text-sm text-gray-500">
                  Information About AI
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-2 text-right">
              <div className="flex gap-3 items-center">
                {/* Action buttons (show on hover) */}
                <div className="hidden group-hover:flex gap-3">
                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
                <span className="text-gray-700 font-medium">5 Posts</span>
              </div>
              <div className="text-sm text-gray-500">9 Sep 2025</div>
            </div>
          </div>

          <div
            className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div
                className="w-14 h-14 bg-blue-100 text-blue-600 font-bold border rounded-md 
                    flex justify-center items-center text-xl"
              >
                A
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  AI
                </h3>
                <span className="text-sm text-gray-500">
                  Information About AI
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-2 text-right">
              <div className="flex gap-3 items-center">
                {/* Action buttons (show on hover) */}
                <div className="hidden group-hover:flex gap-3">
                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
                <span className="text-gray-700 font-medium">5 Posts</span>
              </div>
              <div className="text-sm text-gray-500">9 Sep 2025</div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
