import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const cn = (...args: any[]) => twMerge(clsx(args));

export interface AnimatedDockProps {
  className?: string;
  items: DockItemData[];
}

export interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  target?: string;
  label?: string;
}

export const AnimatedDock = ({ className, items }: AnimatedDockProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={cn(
        "mx-auto flex h-[60px] items-center gap-3 rounded-full bg-white/80 border border-neutral-200 shadow-md px-4 backdrop-blur-md",
        className
      )}
    >
      {items.map((item, index) => (
        <DockItem 
          key={index} 
          item={item}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </motion.div>
  );
};

interface DockItemProps {
  item: DockItemData;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const DockItem = ({ item, isHovered, onMouseEnter, onMouseLeave }: DockItemProps) => {
  return (
    <Link to={item.link} target={item.target} className="block">
      <motion.div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        initial={false}
        animate={{ width: isHovered ? "auto" : 44 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="h-[44px] rounded-full bg-primary text-white flex items-center justify-start shadow-sm border border-white/20 hover:bg-primary/90 cursor-pointer overflow-hidden"
      >
        <div className="flex items-center h-full px-2.5">
          <div className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
            {item.Icon}
          </div>
          
          <AnimatePresence>
            {isHovered && item.label && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap font-bold text-[15px] tracking-wide pl-2 pr-2"
              >
                {item.label}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Link>
  );
};
