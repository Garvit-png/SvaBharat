import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [snapCoords, setSnapCoords] = useState<{ x: number; y: number } | null>(null);
  const [targetDiameter, setTargetDiameter] = useState(44);

  // Outer cursor springs for magnetic snap position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configuration for extremely smooth magnetic locking
  const springConfig = { damping: 28, stiffness: 220, mass: 0.45 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Inner tracking dot (follows mouse pointer instantly)
  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
      
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      innerX.set(e.clientX);
      innerY.set(e.clientY);

      // Lock position to the snapped coordinates, or track mouse
      if (snapCoords) {
        mouseX.set(snapCoords.x);
        mouseY.set(snapCoords.y);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Correctly resolve the HTMLElement of the interactive element (no boolean values)
      const element = (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('.cursor-pointer') ||
        target.closest('.cursor-target-expand') ||
        (target.classList.contains('cursor-pointer') ? target : null) ||
        (target.classList.contains('cursor-target-expand') ? target : null)
      ) as HTMLElement | null;
      
      if (element) {
        // Exclude media/video containers from cursor expansions
        const isMedia = 
          element.querySelector('video') || 
          element.querySelector('iframe') || 
          element.tagName === 'VIDEO' || 
          element.tagName === 'IFRAME' ||
          element.closest('.aspect-video');
          
        if (isMedia) {
          setHoveredElement(null);
          setSnapCoords(null);
          return;
        }

        setHoveredElement(element);
        const rect = element.getBoundingClientRect();
        
        // Calculate the diagonal of the bounding box to ensure the circle encloses the rectangle
        const diagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
        
        // Add 20px padding (10px on each side of the diagonal) so the corners do not touch the circle
        setTargetDiameter(diagonal + 20);
        
        // Lock snaps exactly to the center coordinates of the element
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        setSnapCoords({ x: targetX, y: targetY });
        
        // Set coordinates
        mouseX.set(targetX);
        mouseY.set(targetY);
      } else {
        setHoveredElement(null);
        setSnapCoords(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hoveredElement, snapCoords, mouseX, mouseY, innerX, innerY]);

  if (!isVisible) return null;

  const isHovered = !!hoveredElement;
  const isHeroText = hoveredElement?.classList.contains('cursor-target-expand');

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
          width: isHovered ? targetDiameter : 44,
          height: isHovered ? targetDiameter : 44,
          opacity: isHovered ? (isHeroText ? 0.045 : 0.12) : 0.9, // Dim specifically to 4.5% for hero text, 12% for buttons
        }}
        transition={{
          type: "spring",
          stiffness: isHovered ? 260 : 340, // 250-350ms feel for expand/shrink transitions
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
            rotateX: isHeroText ? 0 : 20,
            rotateY: isHeroText ? 0 : 15,
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
