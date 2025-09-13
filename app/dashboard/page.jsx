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

export default function Page() {
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
                    <input
                      type="text"
                      placeholder="Search posts"
                      className="py-2 px-2 w-96 bg-neutral-100 rounded-md"
                    />
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div>
                <span class="inline-flex items-center justify-center w-12 h-12 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    class="w-10 h-10"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <span class="sr-only">Icon description</span>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* When No Post Is Created */}
          {/* <div className="w-full h-full flex items-center flex-col justify-center">
            <h3>No posts</h3>
            <p>Posts that you create will show up here</p>
          </div> */}

          {/* Posts List */}
          <div
            className="border rounded-sm w-full flex justify-between items-center p-3 
                hover:shadow-lg transition-shadow duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 border rounded-sm text-center flex justify-center items-center text-4xl">
                A
              </div>
              <div>
                <h3 className="font-medium">Ai Will Change The World</h3>
                <span className="text-sm text-gray-500">Draft • 9 Sept</span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:inline">
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                </div>

                <span className="text-gray-700 text-sm">Name Profile</span>
              </div>
              <div className=" text-gray-500">
                <span className="mr-2 text-sm">0 comments</span>
                <span className="text-sm">0 analytics</span>
              </div>
            </div>
          </div>

          <div
            className="border rounded-sm w-full flex justify-between items-center p-3 
                hover:shadow-lg transition-shadow duration-200 group "
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 border rounded-sm text-center flex justify-center items-center text-4xl">
                A
              </div>
              <div>
                <h3 className="font-medium">Ai Will Change The World</h3>
                <span className="text-sm text-gray-500">Draft • 9 Sept</span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:inline">
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                </div>

                <span className="text-gray-700">Name Profile</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">0 comments</span>
                <span>0 analytics</span>
              </div>
            </div>
          </div>

          {/* Categories List */}
          <div
            className="border rounded-sm w-full flex justify-between items-center p-3 
                hover:shadow-lg transition-shadow duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 border rounded-sm text-center flex justify-center items-center text-4xl">
                T
              </div>
              <div>
                <h3 className="font-medium">Technology</h3>
                <span className="text-sm text-gray-500">
                  Information About Technology
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:inline">
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                </div>

                <span className="text-gray-700">3 Posts</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">9 Sep 2025</span>
              </div>
            </div>
          </div>

          <div
            className="border rounded-sm w-full flex justify-between items-center p-3 
                hover:shadow-lg transition-shadow duration-200 group"
          >
            {/* Left side */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 border rounded-sm text-center flex justify-center items-center text-4xl">
                A
              </div>
              <div>
                <h3 className="font-medium">AI</h3>
                <span className="text-sm text-gray-500">
                  Information About AI
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <div className="flex gap-3 items-center">
                {/* Hidden by default, show on hover */}
                <div className="hidden group-hover:inline">
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                  <span className="cursor-pointer text-red-500">
                    Del &nbsp;
                  </span>
                </div>

                <span className="text-gray-700">5 Posts</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">9 Sep 2025</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
