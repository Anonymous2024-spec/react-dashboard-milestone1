import { Settings, Home, List, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="p-4 border-b">
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
      </SidebarHeader>

      <SidebarContent className="flex-1">
        <div className="px-4 py-2 text-sm text-gray-500">Navigation</div>
        <SidebarMenu>
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

      <SidebarFooter>
        <Link
          to="/settings"
          className="flex items-center justify-between p-4 hover:bg-gray-100 text-gray-700"
        >
          <div className="flex items-center gap-2">
            <Settings size={18} />
            Settings
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
