import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { ChevronRight,Moon,Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Layout({loading}) {
const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <SidebarProvider>
      <div className="flex h-screen relative">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0 w-full relative">
          {/* Header */}
        <header className="w-full border-b bg-white dark:bg-gray-900 z-10 relative">
        <div className="px-4 py-3 flex items-center gap-2 sm:gap-4">
          <SidebarTrigger className="sm:hidden" />
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
            <Link to="/" className="hover:text-gray-900 dark:hover:text-white font-medium">
              Finance Dashboard
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400 dark:text-gray-500" />
            <span className="text-gray-900 dark:text-white font-medium">Overview</span>
          </div>

          {/* Theme Toggle Button on the far right */}
          <div className="ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
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