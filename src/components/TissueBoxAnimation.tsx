"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minus, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const TISSUE_COUNT = 1;

export const TissueBoxAnimation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const tissuesRef = useRef<HTMLDivElement[]>([]);
  const burstRef = useRef<() => void>();

  const scrollToContact = () => {
    if (typeof window === "undefined") return;
    const target = document.getElementById("contact");
    if (!target) return;
    const offset = 80;
    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    if (isCollapsed) return;

    const ctx = gsap.context(() => {
      const tissues = tissuesRef.current.filter(Boolean);
      if (!tissues.length) return;

      let isPlaying = false;

      const burstOnce = () => {
        if (isPlaying || !tissues.length) return;
        isPlaying = true;

        gsap.killTweensOf(tissues);
        gsap.set(tissues, {
          yPercent: 90,
          rotate: 0,
          opacity: 0,
        });

        const tl = gsap.timeline({
          onComplete: () => (isPlaying = false),
        });

        tissues.forEach((tissue, idx) => {
          tl.to(
            tissue,
            {
              yPercent: -10,
              rotate: -4,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
            },
            idx * 0.12
          ).to(
            tissue,
            {
              yPercent: -180,
              rotate: 22,
              opacity: 0,
              duration: 0.55,
              ease: "power2.in",
            },
            idx * 0.12 + 0.45
          );
        });
      };

      burstRef.current = burstOnce;
      burstOnce();

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: burstOnce,
      });

      if (boxRef.current) {
        gsap.to(boxRef.current, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, boxRef);

    return () => ctx.revert();
  }, [isCollapsed]);

  if (isCollapsed) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="sm"
          className="rounded-full bg-primary hover:bg-primary/80 text-white shadow-lg flex items-center gap-2 px-4"
          onClick={() => setIsCollapsed(false)}
        >
          <span className="text-xs font-semibold tracking-wide">
            Show tissue box
          </span>
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      ref={boxRef}
      className="fixed bottom-6 right-6 z-40 w-40 h-32 md:w-52 md:h-36 overflow-visible cursor-pointer"
      onClick={() => burstRef.current?.()}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -top-1 -right-1 z-50 h-6 w-6 bg-white/80"
        onClick={(e) => {
          e.stopPropagation();
          setIsCollapsed(true);
        }}
      >
        <Minus className="h-4 w-4 text-primary" />
      </Button>

      <div className="relative w-full h-full flex items-end justify-center">
        {/* TISSUES */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {Array.from({ length: TISSUE_COUNT }).map((_, index) => (
            <div
              key={index}
              ref={(el) => el && (tissuesRef.current[index] = el)}
              className="absolute bottom-[54%] w-[78%] h-16 md:h-20"
              style={{ transformOrigin: "bottom center" }}
            >
              {/* ✅ DOT GRID + FADE (like your screenshot) */}
              <div
                className="relative w-full h-full shadow-md"
                style={{
                  backgroundImage: [
                    // Fade mask (makes dots fade out toward edges)
                    "radial-gradient(120% 120% at 25% 20%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,1) 82%)",

                    // Dot grid (tiled)
                    "radial-gradient(circle, rgba(170,170,170,0.35) 1px, transparent 1.8px)",

                    // Base tissue shading
                    "linear-gradient(135deg, #ffffff 0%, #f4f4f4 45%, #ffffff 100%)",
                  ].join(", "),
                  backgroundSize: "100% 100%, 10px 10px, 100% 100%",
                  backgroundRepeat: "no-repeat, repeat, no-repeat",
                  backgroundPosition: "center, 0 0, center",
                  clipPath:
                    "polygon(0% 40%, 10% 28%, 22% 35%, 35% 22%, 48% 30%, 60% 18%, 75% 28%, 88% 20%, 100% 30%, 100% 100%, 0% 100%)",
                }}
              >
                {/* soft highlights */}
                <div className="absolute left-3 top-2 w-12 h-3 bg-white/70 blur-[2px] rounded-full" />
                <div className="absolute right-4 top-4 w-10 h-2 bg-white/60 blur-[2px] rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* BOX (unchanged) */}
        <div className="relative z-10 w-[92%] h-[52%]">
          <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-xl bg-[#0177D1] shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00A7DE] via-[#0177D1] to-[#00A7DE] opacity-90" />
            <div className="relative flex items-center h-full pl-3">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.12em] text-white uppercase">
                Dab N Klean
              </span>
            </div>
          </div>

          <div className="absolute inset-x-2 bottom-[58%] h-[26%] rounded-t-xl bg-[#00A7DE]" />
          <div className="absolute left-1/2 bottom-[58%] -translate-x-1/2 w-[70%] h-2 bg-[#0177D1] rounded-full" />

          <button
            type="button"
            className="mt-20 text-[10px] md:text-[15px] font-bold underline"
            style={{ color: "#282650" }}
            onClick={(e) => {
              e.stopPropagation();
              scrollToContact();
            }}
          >
            Send Your Enquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};
