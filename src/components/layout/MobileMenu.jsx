import { NavLink } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";
import { navLinks } from "../../routes/navLinks";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-primary-900/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[82%] max-w-xs bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="font-display font-bold text-primary-800">CSIT Portal</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2" aria-label="Mobile Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-5 py-3.5 text-sm font-medium border-l-4 transition-colors ${
                  isActive
                    ? "border-accent bg-primary-50 text-primary"
                    : "border-transparent text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-slate-100 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} KMCLU, Lucknow
        </div>
      </div>
    </div>
  );
}
