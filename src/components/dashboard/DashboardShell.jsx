import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Menu } from "lucide-react";

export function DashboardShell({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between p-4 bg-gray-900 text-white lg:hidden">
        <h2 className="text-xl font-semibold">PAL</h2>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-1">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-900 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </aside>
        {isSidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          />
        )}

        <main className="flex-1 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}