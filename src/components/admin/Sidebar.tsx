import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      name: "Documents",
      icon: FileText,
      path: "/admin/documents",
    },
    {
      name: "Add Document",
      icon: PlusCircle,
      path: "/admin/add-document",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("adminProgram");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#0f5a9b] text-white flex flex-col">
      {/* Logo */}

      <div className="p-6 border-b border-white/20">
        <h1 className="text-xl font-bold">KMCLU CSIT</h1>

        <p className="text-sm text-blue-200">Admin Panel</p>
      </div>

      {/* Menu */}

      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 transition

                ${
                  isActive
                    ? "bg-white text-[#0F4C81] font-semibold"
                    : "hover:bg-blue-700"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="cursor-pointer flex items-center gap-3 px-6 py-4 hover:bg-red-600 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}
