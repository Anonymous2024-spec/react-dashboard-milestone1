import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex gap-6 font-bold">
      <Link
        to="/"
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
      >
        Dashboard
      </Link>
      <Link
        to="/transactions"
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
      >
        Transactions
      </Link>
      <Link
        to="/settings"
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
      >
        Settings
      </Link>
    </nav>
  );
}
