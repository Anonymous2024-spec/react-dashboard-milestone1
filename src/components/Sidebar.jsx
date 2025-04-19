import { Settings, Home, List, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define your finance project routes
const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: List,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r w-64">
      <SidebarContent className="flex flex-col h-full">
        {/* Header with project name and icon */}
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center space-x-3">
            <div className="bg-black text-white p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <line x1="4" y1="10" x2="20" y2="10"></line>
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">FinSight</h2>
              <p className="text-sm text-amber-600">Finance App</p>
            </div>
          </div>
          <ChevronDown size={18} className="text-gray-500" />
        </div>

        {/* Label */}
        <div className="px-4 py-2 text-sm text-gray-500">Navigation</div>

        {/* Navigation */}
        <SidebarMenu className="flex-1">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  to={item.url}
                  className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="text-gray-700" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
