import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MatchaSequence from "./MatchaSequence";

export default function Hero() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-anim-center",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 },
      )
        .fromTo(
          leftColRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          rightColRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start pt-24 pb-12 px-6">
        {/* Background Sequence - FULL BLEED */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <MatchaSequence scrollRef={containerRef} />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-anim-center text-[12vw] sm:text-[10vw] md:text-[9vw] font-display font-medium text-center leading-[0.85] tracking-tighter text-white mb-6 sm:mb-8 md:mb-0 relative z-10 text-balance pointer-events-none mt-8 sm:mt-12 md:mt-24 drop-shadow-lg px-4">
          Vedanta <br /> Nursery
        </h1>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full max-w-[1600px] mx-auto relative z-10 pointer-events-none px-4 sm:px-6">
          {/* LEFT COLUMN */}
          <div
            ref={leftColRef}
            className="md:col-span-3 flex flex-col justify-between items-start pt-6 sm:pt-12 md:pt-32 order-2 md:order-1 opacity-0 pointer-events-auto"
          >
            <div className="mb-8 sm:mb-12 w-full">
              <div className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl max-w-[300px]">
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 text-jet-black font-sans">
                  Botanic Starter Kits
                </h3>
                <p className="font-serif text-xs sm:text-sm font-medium text-jet-black leading-relaxed max-w-[200px] mb-4 sm:mb-6">
                  Start your green sanctuary with our curated plant essentials.
                </p>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-jet-black/10 shadow-sm shrink-0"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full border border-primary/10 shadow-sm shrink-0"></div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block writing-vertical-rl text-xs font-serif tracking-[0.3em] font-bold text-white h-48 border-l-2 border-white/50 pl-4 py-4 drop-shadow-md">
              希少植物 • 聖域
            </div>
          </div>

          {/* CENTER COLUMN - SPACER ONLY */}
          <div className="md:col-span-6 relative order-1 md:order-2">
            {/* Empty to allow background visibility */}
          </div>

          {/* RIGHT COLUMN */}
          <div
            ref={rightColRef}
            className="md:col-span-3 flex flex-col justify-between items-end text-right pt-6 sm:pt-12 md:pt-32 order-3 md:order-3 opacity-0 pointer-events-auto"
          >
            <div className="flex flex-col items-end w-full">
              <div className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl mb-6 sm:mb-8 max-w-[300px]">
                <div className="flex justify-end items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl font-display text-jet-black">
                    5yr
                  </span>
                  <div className="h-px w-10 sm:w-12 bg-jet-black"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-display mb-2 text-jet-black">
                  Exotic Specimen
                </h3>
                <p className="font-serif text-xs sm:text-sm font-medium text-jet-black leading-relaxed max-w-[200px] ml-auto">
                  Acclimated in-house. Vibrant, healthy, and rare.
                </p>
              </div>

              <button className="bg-white text-jet-black hover:bg-white/90 px-6 sm:px-8 py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-lg border border-white/50 tap-highlight-none active:scale-95">
                Add to Cart — $45
              </button>
            </div>

            <div className="hidden lg:block mt-20 sm:mt-24">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white rotate-180 drop-shadow-md">
                Est. 1994
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
