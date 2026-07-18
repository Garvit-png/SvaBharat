import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { to: "/about", label: "About" },
    { to: "/ideas", label: "Ideas" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ── STATIC HEADER NAVBAR (Visible at scroll-top) ── */}
      <div className="absolute top-0 left-0 right-0 z-40 w-full flex items-start justify-between pointer-events-none">
        
        {/* Logo Cutout (Blends into white page border) */}
        <div className="flex items-center pointer-events-auto">
          <div className="relative p-3 md:p-5 bg-white flex items-center justify-center z-50 rounded-br-2xl md:rounded-br-3xl shadow-sm">
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

          {/* Brand name — Peacock Teal */}
          <span className="ml-5 md:ml-7 text-base md:text-lg font-semibold tracking-tight text-[#0F6466] hidden sm:block">
            SvaBharat
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-10 px-10 pt-6 text-sm font-semibold text-neutral-700">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-[#C1502E] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="pointer-events-auto flex md:hidden px-5 pt-5 relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-700 hover:text-[#C1502E] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── FLOATING NAVBAR (Triggered on Scroll) ── */}
      <AnimatePresence>
        {isScrolled && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl flex items-center justify-between pointer-events-none">
            
            {/* Floating Logo Pill */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto bg-white/90 backdrop-blur-md pl-3 pr-4 py-1.5 rounded-full shadow-lg border border-neutral-100 flex items-center gap-2.5"
            >
              <Link to="/" className="transform transition-transform hover:scale-105 flex items-center">
                <img src="/logo.png" alt="SvaBharat" className="w-8 h-8 object-contain" />
              </Link>
              <span className="text-xs font-semibold tracking-tight text-[#0F6466]">
                SvaBharat
              </span>
            </motion.div>

            {/* Floating Links Pill */}
            <motion.nav
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
              className="pointer-events-auto bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-neutral-100 hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-700"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="hover:text-[#C1502E] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>

            {/* Floating Mobile Hamburger Pill */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-neutral-100 flex md:hidden items-center justify-center"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-700 hover:text-[#C1502E] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF3E8] flex flex-col items-center justify-center pointer-events-auto"
          >
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
                    className="text-3xl font-light text-[#26261F]/90 hover:text-[#C1502E] transition-colors"
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
    </>
  );
}
