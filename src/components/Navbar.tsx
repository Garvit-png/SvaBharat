import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <div className="relative p-4 md:p-6 bg-white flex items-center justify-center z-50 rounded-br-[1.5rem] md:rounded-br-[2rem] border-r-2 border-b-2 border-white shadow-sm">
          <Link to="/" className="transform transition-transform hover:scale-105">
            <img src="/logo.png" alt="SvaBharat" className="w-16 h-16 md:w-20 md:h-20 object-contain mix-blend-multiply" />
          </Link>
          {/* Right concave */}
          <svg className="absolute top-0 -right-8 md:-right-10 w-8 h-8 md:w-10 md:h-10 fill-white pointer-events-none" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>
          {/* Bottom concave */}
          <svg className="absolute -bottom-8 md:-bottom-10 left-0 w-8 h-8 md:w-10 md:h-10 fill-white pointer-events-none" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>
        </div>

        {/* Brand name — minimal, elegant */}
        <span className="ml-5 md:ml-7 text-lg md:text-xl font-serif font-extrabold tracking-wider text-primary hidden sm:block">
          SvaBharat
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-10 px-10 pt-8 text-sm font-bold tracking-wider text-charcoal">
        {links.map((l) => {
          const isActive = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-all duration-300 pb-1 uppercase text-xs ${
                isActive 
                  ? "text-primary border-b-2 border-primary font-black" 
                  : "text-neutral-550 hover:text-primary hover:-translate-y-0.5"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Hamburger */}
      <div className="pointer-events-auto flex md:hidden px-5 pt-7 relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-charcoal hover:text-primary transition-colors"
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
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center pointer-events-auto border border-neutral-200/20"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((l, i) => {
                const isActive = location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={l.to}
                      className={`text-3xl font-serif font-extrabold transition-colors ${
                        isActive ? "text-primary underline decoration-2 underline-offset-8" : "text-charcoal hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
