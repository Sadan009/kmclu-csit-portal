import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  LogOut,
  KeyRound,
  GraduationCap,
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
      name: "Change Password",
      icon: KeyRound,
      path: "/admin/change-password",
    },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("adminProgram");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#0F4C81] text-white flex flex-col shadow-xl">
      {/* Logo */}

      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <GraduationCap size={26} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">KMCLU CSIT</h1>

            <p className="text-blue-100 text-sm">Administrator</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 py-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mx-3 mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200

                ${
                  isActive
                    ? "bg-white text-[#0F4C81] font-semibold shadow-md"
                    : "text-blue-100 hover:bg-white/10"
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

      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full cursor-pointer flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
