import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="border-b p-4 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Finance Dashboard
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900">Overview</span>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <main className="p-6">
              <Outlet />
              {children}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
