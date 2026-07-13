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
        <div className="relative p-3 md:p-5 bg-white flex items-center justify-center z-50 rounded-br-2xl md:rounded-br-3xl">
          <Link to="/" className="transform transition-transform hover:scale-105">
            <img src="/logo.png" alt="SvaBharat" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </Link>
          {/* Right concave */}
          <svg className="absolute top-0 -right-4 md:-right-5 w-4 h-4 md:w-5 md:h-5 fill-white pointer-events-none" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>
          {/* Bottom concave */}
          <svg className="absolute -bottom-4 md:-bottom-5 left-0 w-4 h-4 md:w-5 md:h-5 fill-white pointer-events-none" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>
        </div>

        {/* Brand name — minimal, small */}
        <span className="ml-5 md:ml-7 text-base md:text-lg font-semibold tracking-tight text-neutral-800 hidden sm:block">
          SvaBharat
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-10 px-10 pt-6 text-sm font-normal text-neutral-700">
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
      <div className="pointer-events-auto flex md:hidden px-5 pt-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-[4rem] right-4 w-48 bg-white/90 backdrop-blur-xl border border-neutral-200/60 rounded-2xl shadow-lg py-3 flex flex-col pointer-events-auto"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-5 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
