import { Home, Book, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const DesktopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Book, label: "Journal", path: "/journal" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex flex-col space-y-6">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
              "hover:bg-gray-100",
              location.pathname === path
                ? "text-duo-500 bg-duo-50 font-semibold"
                : "text-gray-600"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};