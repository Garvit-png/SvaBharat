import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BackgroundPaths } from "./ui/background-paths";

export function Hero({ showAnimation }: { showAnimation: boolean }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showAnimation) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
      tl.fromTo(
        bottomRef.current?.children || [],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
      gsap.to(".chakra-svg", {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, [showAnimation]);

  return (
    <section className="relative w-full h-full min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex flex-col overflow-hidden text-neutral-900">
      
      {/* Subtle background paths */}
      <BackgroundPaths />

      {/* Very subtle chakra watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.06]"
        style={{
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] chakra-svg">
          <circle cx="100" cy="100" r="96" fill="none" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#78350f" strokeWidth="1" />
          <circle cx="100" cy="100" r="16" fill="none" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="8" fill="#78350f" />
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 100 100)`}>
              <line x1="100" y1="84" x2="100" y2="16" stroke="#78350f" strokeWidth="1" />
              <circle cx="100" cy="10" r="1.5" fill="#78350f" />
            </g>
          ))}
        </svg>
      </div>

      {/* Main Content — centered vertically & horizontally */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16 lg:px-24">
        <h1
          ref={titleRef}
          className="text-center text-[clamp(2.8rem,8vw,7rem)] font-light leading-[1.05] tracking-[-0.03em] max-w-5xl text-neutral-900"
          style={{ opacity: 0 }}
        >
          Reimagining Bharat.<br />
          From First Principles.
        </h1>
      </div>

      {/* Bottom Row — subtitle left, CTA right */}
      <div
        ref={bottomRef}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-6 md:px-16 lg:px-24 pb-8 md:pb-12"
      >
        <p className="max-w-xs text-sm md:text-base text-neutral-600 font-normal leading-relaxed" style={{ opacity: 0 }}>
          A movement to question assumptions and imagine new possibilities for Bharat.
        </p>

        <div className="flex flex-col sm:flex-row gap-3" style={{ opacity: 0 }}>
          <a
            href="/ideas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            Explore the Ideas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-sm font-medium hover:border-neutral-500 hover:text-neutral-900 transition-colors bg-white/40 backdrop-blur-sm"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
