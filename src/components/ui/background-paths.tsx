import { motion } from "framer-motion";

export function BackgroundPaths() {
  const paths = Array.from({ length: 60 }, (_, i) => {
    const startY = 90 + i * 0.8;
    const startX = -10 + i * 0.2;
    const cp1x = 30 + i * 1.2;
    const cp1y = 60 - i * 0.3;
    const cp2x = 70 - i * 0.5;
    const cp2y = 100 + i * 1;
    const endX = 110;
    const endY = 40 + i * 1.2;
    return `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute w-full h-full opacity-90"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="edge-mask" cx="50%" cy="50%" r="60%">
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fade-mask">
            <rect width="100" height="100" fill="url(#edge-mask)" />
          </mask>
        </defs>

        <motion.g
          mask="url(#fade-mask)"
          animate={{ x: [-1, 1], y: [-1, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {paths.map((path, i) => (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke={i % 2 === 0 ? "#F97316" : "#4ade80"}
              strokeWidth={0.25 + (i % 3) * 0.15}
              strokeOpacity={0.6 + (i % 4) * 0.1}
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
        </motion.g>
      </svg>
    </div>
  );
}
