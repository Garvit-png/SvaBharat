import { motion } from "framer-motion";

export function FooterPaths() {
  const paths = Array.from({ length: 20 }, (_, i) => {
    const step = i * 2.8;
    const startY = 90 + step * 0.8;
    const startX = -10 + step * 0.2;
    const cp1x = 30 + step * 1.2;
    const cp1y = 60 - step * 0.3;
    const cp2x = 70 - step * 0.5;
    const cp2y = 100 + step * 1.0;
    const endX = 110;
    const endY = 40 + step * 1.2;
    return `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
      <svg
        className="absolute w-full h-full opacity-90 overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.g
          animate={{ x: [-0.6, 0.6] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {paths.map((path, i) => (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke={i % 2 === 0 ? "#F97316" : "#4ade80"}
              strokeWidth={0.52 + (i % 2) * 0.08}
              strokeOpacity={0.55 + (i % 4) * 0.05}
              strokeLinecap="round"
              initial={{ pathLength: 0.2, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.6,
                  ease: "easeOut",
                }
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
