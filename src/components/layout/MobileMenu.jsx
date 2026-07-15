import { NavLink } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../routes/navLinks";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-hidden={!isOpen}
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}

          <motion.div
            className="absolute inset-0 bg-primary-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panel */}

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="absolute top-0 right-0 h-full w-[82%] max-w-xs bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}

            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <GraduationCap size={18} className="text-white" />
                </div>

                <span className="font-display font-bold text-primary-800">
                  CSIT Portal
                </span>
              </motion.div>

              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation */}

            <nav
              className="flex-1 overflow-y-auto py-2"
              aria-label="Mobile Primary"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05 + 0.15,
                    duration: 0.25,
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-5 py-3.5 text-sm font-medium border-l-4 transition-all duration-300 ${
                        isActive
                          ? "border-accent bg-primary-50 text-primary"
                          : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-primary hover:translate-x-1"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="px-5 py-4 border-t border-slate-100 text-xs text-slate-400"
            >
              © {new Date().getFullYear()} KMCLU, Lucknow
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
