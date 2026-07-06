import { motion } from "framer-motion";

export function BackgroundPaths({ title }: { title?: string }) {
  const paths = Array.from({ length: 60 }, (_, i) => {
    const startY = 80 + i * 0.5;
    const startX = -10 + i * 0.2;
    const cp1x = 30 + i * 1.5;
    const cp1y = 40 - i * 0.2;
    const cp2x = 70 - i * 0.5;
    const cp2y = 80 + i * 0.8;
    const endX = 110;
    const endY = 20 + i * 1;
    return `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute w-full h-full opacity-80"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
