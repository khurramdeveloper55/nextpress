import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
export default function Home({ children }) {
  return (
    <div>
      <header className="flex justify-between px-4 py-2">
        <div>
          <h1>Left Side</h1>
        </div>
        <div>
          <h1>Center</h1>
        </div>
        <div>
          <h1>Right Side</h1>
        </div>
      </header>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
