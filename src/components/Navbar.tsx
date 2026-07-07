import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full px-6 md:px-12 flex items-center justify-between pointer-events-none">
      
      {/* Logo on the Left */}
      <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center transform transition-transform hover:scale-105 z-50 pointer-events-auto">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-md scale-150" />
      </div>

      {/* Navbar on the Right (No box, just spread out links) */}
      <nav className="pointer-events-auto flex items-center justify-end relative z-50">
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-base font-medium tracking-wide text-black drop-shadow-sm">
          <a href="#" className="px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-orange-500 transition-all duration-300">Home</a>
          <a href="#" className="px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-orange-500 transition-all duration-300">About</a>
          <a href="#" className="px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-orange-500 transition-all duration-300">Events</a>
          <a href="#" className="px-4 py-1.5 rounded-full hover:bg-black/5 hover:text-orange-500 transition-all duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-800 hover:text-black transition-colors z-50">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
