import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/about", label: "About" },
    { to: "/ideas", label: "Ideas" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4">

          {/* Left — Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white ring-2 ring-white/80 shadow-lg transition-all duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="SvaBharat"
                className="w-10 h-10 object-contain mix-blend-multiply"
              />
            </div>
            <span className="font-serif font-extrabold tracking-wider text-primary text-base hidden sm:block">
              SvaBharat
            </span>
          </Link>

          {/* Right — Nav links / hamburger */}
          <div className="flex items-center">
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden p-2 text-charcoal hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>

            {/* Desktop nav — frosted pill always */}
            <nav className="hidden md:flex items-center gap-7 bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-2.5 ring-1 ring-white/70 shadow-sm">
              {links.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`uppercase text-xs font-black tracking-widest transition-all duration-200 pb-0.5 ${
                      isActive
                        ? "text-primary border-b-2 border-primary"
                        : "text-charcoal hover:text-primary hover:-translate-y-0.5"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center pointer-events-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-charcoal hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {links.map((l, i) => {
                const isActive = location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className={`text-3xl font-serif font-extrabold transition-colors ${
                        isActive
                          ? "text-primary underline decoration-2 underline-offset-8"
                          : "text-charcoal hover:text-primary"
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
    </>
  );
}
