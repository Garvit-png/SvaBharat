import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Outer cursor springs for magnetic snap position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configuration for smooth tracking
  const springConfig = { damping: 28, stiffness: 220, mass: 0.45 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
      
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 3D Rotating Ashok Chakra Cursor (Outer Halo Container) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          perspective: "800px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: 44,
          height: 44,
          opacity: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 24,
          mass: 0.6,
        }}
        className="absolute rounded-full flex items-center justify-center"
      >
        {/* Rotating 3D Ashok Chakra */}
        <motion.div
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: 20,
            rotateY: 15,
            rotateZ: 360,
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 200, damping: 20 },
            rotateY: { type: "spring", stiffness: 200, damping: 20 },
            rotateZ: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,128,0.25)] filter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#000080" strokeWidth="5.5" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#000080" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#000080" strokeWidth="3" />
            <circle cx="50" cy="50" r="5" fill="#000080" />
            <g stroke="#000080" strokeWidth="2.2" strokeLinecap="round">
              <line x1="50" y1="50" x2="50" y2="9" />
              <line x1="50" y1="50" x2="60.6" y2="10.4" />
              <line x1="50" y1="50" x2="70.5" y2="14.5" />
              <line x1="50" y1="50" x2="79" y2="21" />
              <line x1="50" y1="50" x2="85.5" y2="29.5" />
              <line x1="50" y1="50" x2="89.6" y2="39.4" />
              <line x1="50" y1="50" x2="91" y2="50" />
              <line x1="50" y1="50" x2="89.6" y2="60.6" />
              <line x1="50" y1="50" x2="85.5" y2="70.5" />
              <line x1="50" y1="50" x2="79" y2="79" />
              <line x1="50" y1="50" x2="70.5" y2="85.5" />
              <line x1="50" y1="50" x2="60.6" y2="89.6" />
              <line x1="50" y1="50" x2="50" y2="91" />
              <line x1="50" y1="50" x2="39.4" y2="89.6" />
              <line x1="50" y1="50" x2="29.5" y2="85.5" />
              <line x1="50" y1="50" x2="21" y2="79" />
              <line x1="50" y1="50" x2="14.5" y2="70.5" />
              <line x1="50" y1="50" x2="10.4" y2="60.6" />
              <line x1="50" y1="50" x2="9" y2="50" />
              <line x1="50" y1="50" x2="10.4" y2="39.4" />
              <line x1="50" y1="50" x2="14.5" y2="29.5" />
              <line x1="50" y1="50" x2="21" y2="21" />
              <line x1="50" y1="50" x2="29.5" y2="14.5" />
              <line x1="50" y1="50" x2="39.4" y2="10.4" />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
