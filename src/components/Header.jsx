import React from "react";
import { Bell, Settings, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b w-full px-4 py-3 flex items-center justify-between">
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">FinSight</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={18} />
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-full">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}