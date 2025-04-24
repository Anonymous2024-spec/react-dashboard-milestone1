// components/Footer.jsx
import React from "react";

export function Footer() {
  return (
    <footer className="border-t w-full py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} FinSight. All rights reserved.
        </div>
        <div className="text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}