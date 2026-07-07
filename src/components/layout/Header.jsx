import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { navLinks } from "../../routes/navLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Top bar */}
        <div className="hidden sm:block bg-primary-800 text-primary-100 text-xs">
          <div className="container-page flex items-center justify-between py-1.5">
            <span>Khwaja Moinuddin Chishti Language University, Lucknow</span>
            <span>An Official CS.IT Department Portal</span>
          </div>
        </div>

        {/* Main header */}
        <div className="container-page flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center shadow-card">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-primary-800 text-sm sm:text-base">
                KMCLU
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Dept. of Computer Science &amp; IT
              </p>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
