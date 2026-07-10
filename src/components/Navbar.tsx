import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full flex items-start justify-between pointer-events-none">
      
      {/* Left Side: Logo Cutout + Brand Text */}
      <div className="flex items-center pointer-events-auto">
        
        {/* Cutout Logo Container */}
        <div className="relative p-3 md:p-5 bg-white flex items-center justify-center z-50 rounded-br-2xl md:rounded-br-3xl shadow-sm">
          
          <div className="transform transition-transform hover:scale-105 cursor-pointer">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm" />
          </div>

          {/* Right Concave Curve (Top Edge) */}
          <svg className="absolute top-0 -right-4 md:-right-6 w-4 h-4 md:w-6 md:h-6 fill-white pointer-events-none drop-shadow-sm" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>

          {/* Bottom Concave Curve (Left Edge) */}
          <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-4 h-4 md:w-6 md:h-6 fill-white pointer-events-none drop-shadow-sm" viewBox="0 0 32 32">
            <path d="M0,0 H32 A32,32 0 0,0 0,32 Z" />
          </svg>

        </div>

        {/* Brand Text on beige background */}
        <span className="font-semibold text-sm sm:text-base md:text-lg tracking-tight text-neutral-900 ml-5 md:ml-8 hidden sm:block drop-shadow-sm">
          Sva-Bharat Movement
        </span>

      </div>



      {/* Navbar on the Right (No box, just spread out links) */}
      <nav className="pointer-events-auto flex items-center justify-end relative z-50 px-6 md:px-12 pt-5 md:pt-8">
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium tracking-wide text-black drop-shadow-sm">
          <a href="#" className="relative py-1 transition-colors hover:text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Home</a>
          <a href="#" className="relative py-1 transition-colors hover:text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">About</a>
          <a href="#" className="relative py-1 transition-colors hover:text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Events</a>
          <a href="#" className="relative py-1 transition-colors hover:text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Contact</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-800 hover:text-black transition-colors z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] right-6 mt-4 p-6 bg-white/80 backdrop-blur-xl border border-neutral-200/50 shadow-lg rounded-3xl md:hidden flex flex-col items-center gap-4 text-lg font-semibold z-40 pointer-events-auto min-w-[200px]"
          >
            <a href="#" className="w-full text-center py-2 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#" className="w-full text-center py-2 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#" className="w-full text-center py-2 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Events</a>
            <a href="#" className="w-full text-center py-2 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
