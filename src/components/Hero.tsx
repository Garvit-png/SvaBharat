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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
      tl.fromTo(
        bottomRef.current?.children || [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" },
        "-=0.3"
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
          <circle cx="100" cy="100" r="96" fill="none" stroke="#10233D" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#10233D" strokeWidth="1" />
          <circle cx="100" cy="100" r="16" fill="none" stroke="#10233D" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="8" fill="#10233D" />
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 100 100)`}>
              <line x1="100" y1="84" x2="100" y2="16" stroke="#10233D" strokeWidth="1" />
              <circle cx="100" cy="10" r="1.5" fill="#10233D" />
            </g>
          ))}
        </svg>
      </div>

      {/* Main Content — centered vertically & horizontally */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-14 lg:px-20">
        <h1
          ref={titleRef}
          className="text-center text-[clamp(2.4rem,6.5vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.025em] max-w-4xl text-neutral-900"
          style={{ opacity: 0 }}
        >
          Reimagining Bharat.<br />
          From First Principles.
        </h1>
      </div>

      {/* Bottom Row — subtitle left, CTA right (Centered on mobile) */}
      <div
        ref={bottomRef}
        className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-5 px-6 md:px-14 lg:px-20 pb-7 md:pb-10 text-center sm:text-left"
      >
        <p className="max-w-xs text-sm text-neutral-600 leading-relaxed" style={{ opacity: 0 }}>
          A movement to question assumptions and imagine new possibilities for Bharat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto" style={{ opacity: 0 }}>
          <a
            href="/ideas"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C9591C] text-white text-sm font-medium hover:bg-[#a84a16] transition-colors w-full sm:w-auto"
          >
            Explore the Ideas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#10233D] bg-white text-[#10233D] text-sm font-medium hover:bg-neutral-100 transition-colors w-full sm:w-auto"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}