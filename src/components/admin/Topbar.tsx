import { Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-500">Department of CS & IT</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="bg-blue-100 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-medium">
          Admin
        </span>
      </div>
    </header>
  );
}
