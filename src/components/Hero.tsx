import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          src="/background.mp4"
        />
        {/* Very subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Removed BackgroundPaths temporarily as requested */}

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-12 md:mt-20">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none"
        >
          Reimagining Bharat.<br/>From First Principles.
        </h1>
        
        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-light drop-shadow-sm"
        >
          SvaBharat is a movement to imagine and shape a Bharat rooted in selfhood, original thought, and collective possibility.
        </p>

        <div
          ref={ctaRef}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-2 md:px-8 md:py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors text-sm md:text-base shadow-lg hover:shadow-orange-500/50">
            Explore the Ideas
          </button>
          <button className="px-6 py-2 md:px-8 md:py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition-colors text-sm md:text-base">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
}
