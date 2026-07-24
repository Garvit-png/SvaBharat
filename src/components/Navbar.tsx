import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/about", label: "About" },
    { to: "/ideas", label: "Ideas" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full flex items-start justify-between pointer-events-none">

      {/* Logo Cutout */}
      <div className="flex items-center pointer-events-auto">
        <div className="relative p-3 md:p-5 bg-white flex items-center justify-center z-50 rounded-br-2xl md:rounded-br-3xl"
          style={{ boxShadow: "2px 2px 0px 0px black" }}
        >
          <Link to="/" className="transform transition-transform hover:scale-105">
            <img src="/logo.png" alt="SvaBharat" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </Link>
          {/* Right concave */}
          <svg className="absolute top-0 -right-6 w-6 h-6 pointer-events-none" viewBox="0 0 24 24">
            <path d="M0,0 H24 A24,24 0 0,0 0,24 Z" fill="white" />
          </svg>
          {/* Bottom concave */}
          <svg className="absolute -bottom-6 left-0 w-6 h-6 pointer-events-none" viewBox="0 0 24 24">
            <path d="M0,0 H24 A24,24 0 0,0 0,24 Z" fill="white" />
          </svg>
        </div>

        {/* Brand name — minimal, small */}
        <span className="ml-5 md:ml-7 text-base md:text-lg font-semibold tracking-tight text-neutral-800 hidden sm:block">
          SvaBharat
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-10 px-10 pt-6 text-sm font-semibold text-neutral-900">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-neutral-900 transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="pointer-events-auto flex md:hidden px-5 pt-5 relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#Fdf6e3] flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Close Button inside Overlay (optional, since the hamburger icon changes to X, but the icon is z-50 so it's above the overlay!) */}
            <div className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={l.to}
                    className="text-3xl font-light text-neutral-800 hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
