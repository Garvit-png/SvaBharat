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

      // Animate Background Breathing
      gsap.to(".chakra-bg", {
        scale: 1.05,
        rotation: 2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, [showAnimation]);

  return (
    <section className="relative w-full h-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden text-black">
      <BackgroundPaths />

      {/* Detailed Abstract Chakra Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.08] chakra-bg"
        style={{ WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)', maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
      >
        <svg viewBox="0 0 200 200" className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[850px] lg:h-[850px]">
          
          {/* Outer Rims */}
          <circle cx="100" cy="100" r="96" fill="none" stroke="black" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="92" fill="none" stroke="black" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="1" />
          
          {/* Central Hub */}
          <circle cx="100" cy="100" r="16" fill="none" stroke="black" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="12" fill="none" stroke="black" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="8" fill="black" />

          {/* 24 Spokes & Outer Dots */}
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 100 100)`}>
              <line
                x1="100"
                y1="84"
                x2="100"
                y2="16"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="100" cy="10" r="1.5" fill="black" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-12 md:mt-20 gap-8 md:gap-10">
        
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none"
        >
          Reimagining Bharat.<br/>From First Principles.
        </h1>
        
        <p
          ref={subtitleRef}
          className="max-w-xl text-base sm:text-lg md:text-xl text-neutral-800 font-medium drop-shadow-sm leading-relaxed"
        >
          SvaBharat is a movement to imagine and shape a Bharat rooted in selfhood, original thought, and collective possibility.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5">
            Explore the Ideas
          </button>
          <button className="px-8 py-3 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-black font-semibold hover:bg-black/5 transition-all duration-300 text-sm md:text-base hover:-translate-y-0.5">
            Join the Movement
          </button>
        </div>

      </div>
    </section>
  );
}
