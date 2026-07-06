import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BackgroundPaths } from "./ui/background-paths";

export function Hero({ showAnimation }: { showAnimation: boolean }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showAnimation) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 }); // small delay after reveal sweep

      // Animate Title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.7, ease: "power3.out" }
      );

      // Animate Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, filter: "blur(5px)", y: 15 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Animate CTA
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, [showAnimation]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50 text-black">
      <BackgroundPaths />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-20">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none"
          style={{ opacity: showAnimation ? 0 : 1 }} // Hide initially if animating
        >
          SvaBharat
        </h1>
        
        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-600 font-light"
          style={{ opacity: showAnimation ? 0 : 1 }}
        >
          A vision of progress, elegance, and unyielding potential. 
          Experience the premium revolution.
        </p>

        <div
          ref={ctaRef}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
          style={{ opacity: showAnimation ? 0 : 1 }}
        >
          <button className="px-6 py-2 md:px-8 md:py-3 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-colors text-sm md:text-base">
            Get Started
          </button>
          <button className="px-6 py-2 md:px-8 md:py-3 rounded-full border border-neutral-300 bg-white/50 backdrop-blur-sm text-black font-semibold hover:bg-neutral-100 transition-colors text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
