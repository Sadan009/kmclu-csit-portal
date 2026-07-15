import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
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
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        {/* Top Bar */}

        <div className="hidden sm:block bg-primary-800 text-primary-100 text-xs">
          <div className="container-page flex items-center justify-between py-1.5">
            <span>Khwaja Moinuddin Chishti Language University, Lucknow</span>

            <span>An Official CS.IT Department Portal</span>
          </div>
        </div>

        {/* Main Header */}

        <div className="container-page flex items-center justify-between py-3">
          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <NavLink to="/" className="group flex items-center gap-3 shrink-0">
              <div
                className="
                  w-11 h-11 rounded-lg
                  bg-primary
                  flex items-center justify-center
                  shadow-card
                  transition-all duration-300
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                <GraduationCap size={24} className="text-white" />
              </div>

              <div className="leading-tight">
                <p className="font-display font-bold text-primary-800 text-sm sm:text-base transition-colors group-hover:text-primary">
                  KMCLU
                </p>

                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Dept. of Computer Science &amp; IT
                </p>
              </div>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link, index) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      relative block
                      px-3.5 py-2
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      cursor-pointer
                      ${
                        isActive
                          ? "bg-primary-50 text-primary"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute left-3 right-3 -bottom-[2px] h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
