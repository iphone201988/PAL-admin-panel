import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Home,
  GroupIcon,
  Brain,
  Users,
  LogOut,
  SmartphoneNfc,
  Settings
} from "lucide-react";

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const handleLinkClick = () => {
    if (onClose) onClose();
  };
  const navItems = [
    {
      title: "Dashboard",
      to: "/admin/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Users",
      to: "/admin/dashboard/users",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    // {
    //   title: "Ai Contacts",
    //   to: "/dashboard/AiContact",
    //   icon: <Brain className="mr-2 h-4 w-4" />,
    // },
    // {
    //   title: "Contacs",
    //   to: "/dashboard/Contact",
    //   icon: <SmartphoneNfc className="mr-2 h-4 w-4" />,
    // },
    {
      title: "Settings",
      to: "/admin/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex h-full flex-col justify-between py-6 bg-gradient-to-b from-gray-300 to-gray-500 text-gray-800">
      <div className="px-6">
        <div className="mb-8 flex items-center justify-center">
          <img src="../pal.jpg" alt="Logo" className="mb-8 h-12 w-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {navItems.map((item) => (
            <Link
              onClick={handleLinkClick}
              key={item.to}
              to={item.to}
              className={`flex items-center w-full px-6 py-3 rounded-lg transition-all duration-200 ${pathname === item.to
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
                  : "hover:bg-gray-400 hover:text-purple-700"
                }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-6">
        <Link
          onClick={() => handleLogout()}
          className="flex items-center w-full text-white px-6 py-3 rounded-lg border border-red-500 hover:bg-red-600 hover:border-red-600 transition-all duration-200 text-red-500 hover:text-white"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;