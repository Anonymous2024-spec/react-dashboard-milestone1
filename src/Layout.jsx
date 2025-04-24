import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { ChevronRight } from "lucide-react";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen relative">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0 w-full relative">
          {/* Header */}
          <header className="w-full border-b bg-white z-10 relative">
            <div className="px-4 py-3 flex items-center gap-2 sm:gap-4">
              <SidebarTrigger className="sm:hidden" />
              <div className="flex items-center text-sm text-gray-500">
                <Link to="/" className="hover:text-gray-900 font-medium">
                  Finance Dashboard
                </Link>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                <span className="text-gray-900 font-medium">Overview</span>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto w-full relative">
            <div className="h-full p-6">
              <Outlet />
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full border-t bg-white z-10 relative">
            <div className="px-4 py-3 text-sm text-gray-500">
              © 2024 FinSight. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}